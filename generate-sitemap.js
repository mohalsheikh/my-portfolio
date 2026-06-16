// Generates dist/sitemap.xml and dist/robots.txt from the route list.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const SITE_URL = "https://moalsheikh.com";

const run = async () => {
  const data = await import(path.join(distDir, "server/projects-data.js"));
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    { path: "/", priority: "1.0", freq: "monthly" },
    { path: "/aboutme", priority: "0.8", freq: "monthly" },
    { path: "/projects", priority: "0.9", freq: "monthly" },
    { path: "/contact", priority: "0.7", freq: "yearly" },
  ];
  const projectRoutes = data.projects.map((p) => ({
    path: `/projects/${p.slug}`,
    priority: "0.8",
    freq: "yearly",
  }));

  const all = [...staticRoutes, ...projectRoutes];
  const urls = all
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path === "/" ? "" : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.freq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf-8");

  const robots = `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(distDir, "robots.txt"), robots, "utf-8");

  console.log(`✓ sitemap.xml (${all.length} urls) + robots.txt generated`);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
