import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppShell } from "./App";

type Assets = { js: string; css: string };

// Renders a COMPLETE HTML document. On React 19, <title>/<meta>/<link> emitted
// by Helmet inside the tree are natively hoisted into <head> during render,
// so we don't extract them manually — we just render the whole document.
function Document({ url, assets }: { url: string; assets: Assets }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07070A" />
        <meta name="author" content="Mohammed Alsheikh" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="stylesheet" href={assets.css} />
      </head>
      <body>
        <div id="root">
          <HelmetProvider>
            <StaticRouter location={url}>
              <AppShell />
            </StaticRouter>
          </HelmetProvider>
        </div>
        <script type="module" crossOrigin="" src={assets.js} />
      </body>
    </html>
  );
}

export function render(url: string, assets: Assets) {
  const html = renderToString(<Document url={url} assets={assets} />);
  return "<!doctype html>" + html;
}
