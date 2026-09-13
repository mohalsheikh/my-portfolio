import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { chromium } from "playwright";

// Run against `npm run preview` after a production build to exercise hydration.
// Pass a dev-server URL to check client rendering as well.
const baseUrl = process.argv[2] || "http://127.0.0.1:4173";
const { OFFBEAT_APP_STORE_URL } = JSON.parse(readFileSync(new URL("../src/config/offbeat.json", import.meta.url), "utf8"));
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
  assert.equal(await page.locator("footer").count(), 1);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  if (route === "/download") {
    assert.equal(await page.locator("nav").getAttribute("aria-label"), "OFFBEAT");
    assert.equal(await page.locator("nav .download-brand").getAttribute("href"), "/download");
    assert.equal(await page.locator("nav [aria-current='page']").textContent(), "Download");
    assert.equal(await page.locator(".download-store-button").getAttribute("href"), OFFBEAT_APP_STORE_URL);
    assert.equal(await page.locator("nav a[href='/'], nav a[href='/projects'], nav a[href*='Resume']").count(), 0);
    assert.match(await page.locator(".download-android").textContent(), /Coming Soon/);
    assert.equal(await page.locator(".download-android a, .download-android button").count(), 0);
    assert.equal(await page.locator(".download-feature").count(), 3);
    assert.equal(await page.locator(".download-footer").count(), 1);
    assert.doesNotMatch(await page.locator("footer").textContent(), /Mohammed|ALSHEIKH|Résumé/);
    for (const image of await page.locator(".download-preview img, .download-feature-image img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate(element => element.decode());
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForFunction(() => window.scrollY === 0);
    assert.equal(await page.locator(".download-preview img").evaluate(image => image.naturalWidth), 1086);
    assert.equal(await page.locator(".download-qr").isVisible(), page.viewportSize().width >= 640);
    const button = await page.locator(".download-store-button").boundingBox();
    assert.ok(button.height >= 48);
    if (page.viewportSize().width < 640) {
      assert.ok(button.y + button.height < 700, "App Store CTA must be visible early on phones");
    }
    const vinyl = await page.locator(".download-vinyl").boundingBox();
    const copy = await page.locator(".download-product-copy").boundingBox();
    assert.ok(vinyl.y >= copy.y + copy.height, "Vinyl must stay below the product text");
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
        const brand = route === "/download" ? "nav .download-brand" : "nav a[href='/']";
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
      console.log(`PASS ${baseUrl}: ${width}px, ${hasTouch ? "touch" : "mouse"}, home + OFFBEAT download + official images + mobile CTA + reload + browser history`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}
