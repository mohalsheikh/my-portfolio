// Generates static HTML for each route into dist/ so search engines and
// social scrapers receive real content + correct <head> tags, not an empty shell.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");

// Read hashed asset paths from the client build's index.html.
function readAssets() {
  const tpl = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
  const js = (tpl.match(/\/assets\/[^"']+\.js/) || [])[0];
  const css = (tpl.match(/\/assets\/[^"']+\.css/) || [])[0];
  if (!js || !css) throw new Error("Could not find built JS/CSS assets in dist/index.html");
  return { js, css };
}

async function getRoutesAndRender() {
  const mod = await import(path.join(distDir, "server/entry-server.js"));
  const routes = ["/", "/aboutme", "/projects", "/contact", "/privacy", "/terms"];
  const data = await import(path.join(distDir, "server/projects-data.js"));
  for (const p of data.projects) routes.push(`/projects/${p.slug}`);
  return { render: mod.render, routes };
}

function outFileFor(route) {
  if (route === "/") return path.join(distDir, "index.html");
  return path.join(distDir, route.replace(/^\//, ""), "index.html");
}

const run = async () => {
  const assets = readAssets();
  const { render, routes } = await getRoutesAndRender();

  for (const route of routes) {
    const page = render(route, assets);
    const file = outFileFor(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page, "utf-8");
    console.log("✓ prerendered", route, "→", path.relative(__dirname, file));
  }
  console.log(`\nDone. ${routes.length} routes prerendered.`);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
