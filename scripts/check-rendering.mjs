import assert from "node:assert/strict";
import { chromium } from "playwright";

// Run against `npm run preview` after a production build to exercise hydration.
// Pass a dev-server URL to check client rendering as well.
const baseUrl = process.argv[2] || "http://127.0.0.1:4173";
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
});

async function checkPage(page, route) {
  await page.waitForFunction((expectedRoute) => {
    const heading = document.querySelector("main h1");
    if (!heading || location.pathname !== expectedRoute) return false;
    const expectedText = expectedRoute === "/" ? "Hi, I'm" : "Get Offbeat";
    if (!heading.textContent.includes(expectedText)) return false;
    // isVisible() alone allows opacity: 0, which would miss a black screen.
    for (let element = heading; element; element = element.parentElement) {
      const style = getComputedStyle(element);
      if (Number(style.opacity) < 0.99 || style.display === "none" || style.visibility === "hidden") {
        return false;
      }
    }
    return heading.getBoundingClientRect().height > 0;
  }, route);
  assert.equal(await page.locator("nav").count(), 1);
  assert.equal(await page.locator("footer").count(), route === "/download" ? 0 : 1);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  if (route === "/download") {
    assert.equal(await page.locator("nav").getAttribute("aria-label"), "OFFBEAT");
    assert.equal(await page.locator(".download-brand").getAttribute("href"), "/download");
    assert.equal(await page.locator(".download-navbar-cta").getAttribute("href"), await page.locator(".download-ios a").getAttribute("href"));
    assert.equal(await page.locator("nav a[href='/'], nav a[href='/projects'], nav a[href*='Resume']").count(), 0);
    assert.equal(await page.locator(".download-android button").isDisabled(), true);
    assert.equal(await page.locator(".download-android a").count(), 0);
    await page.locator(".download-preview img").evaluate(image => image.decode());
    assert.equal(await page.locator(".download-qr").isVisible(), page.viewportSize().width >= 640);
  }
}

try {
  for (const width of [375, 430, 768, 1024, 1440]) {
    // Check both server hydration on desktop and touch-device rendering.
    for (const hasTouch of [false, true]) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, hasTouch });
      // Exercise browsers (and scroll polyfills) that return a Promise.
      // Returning this value from useEffect crashes during StrictMode cleanup.
      await page.addInitScript(() => {
        const scrollTo = window.scrollTo.bind(window);
        window.scrollTo = (...args) => {
          scrollTo(...args);
          return Promise.resolve();
        };
      });
      const errors = [];
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => {
        if (message.type() === "error") errors.push(message.text());
      });

      for (const route of ["/", "/download"]) {
        const response = await page.goto(new URL(route, baseUrl).href, { waitUntil: "domcontentloaded" });
        assert.equal(response.status(), 200);
        await checkPage(page, route);
        const brand = route === "/download" ? ".download-brand" : "nav a[href='/']";
        await page.locator(brand).first().click();
        await checkPage(page, route);
        await page.reload({ waitUntil: "domcontentloaded" });
        await checkPage(page, route);
      }
      // The OFFBEAT navbar intentionally has no link into the portfolio.
      // Check browser history between the two independent page shells.
      await page.goto(new URL("/", baseUrl).href, { waitUntil: "domcontentloaded" });
      await checkPage(page, "/");
      await page.goto(new URL("/download", baseUrl).href, { waitUntil: "domcontentloaded" });
      await checkPage(page, "/download");
      await page.goBack({ waitUntil: "domcontentloaded" });
      await checkPage(page, "/");
      await page.goForward({ waitUntil: "domcontentloaded" });
      await checkPage(page, "/download");
      assert.deepEqual(errors, [], `${width}px, ${hasTouch ? "touch" : "mouse"}: browser errors`);
      console.log(`PASS ${baseUrl}: ${width}px, ${hasTouch ? "touch" : "mouse"}, home + OFFBEAT navigation + footer isolation + reload + browser history`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}
