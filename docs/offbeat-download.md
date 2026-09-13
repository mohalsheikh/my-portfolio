# OFFBEAT download page

`/download` lives in the portfolio's existing React Router app. It reuses
`AppShell`, the existing Inter/JetBrains Mono typography,
Tailwind container spacing, the site's button radius, `react-icons`, and `Seo`.
Its neutral paper colors and layout rules are scoped to `.download-page`.
The page has its own minimal OFFBEAT navbar with an App Store link and no footer.
The portfolio navbar and footer render only on the other routes; their designs
and behavior are unchanged. All download navbar styles are page-scoped.
The cursor glow and entrance animation are omitted on this route.

## App Store configuration

Edit **`OFFBEAT_APP_STORE_URL` in `src/config/offbeat.json`**.

The initial value is the real link found in the app's
`soundtrack/lib/config/constants.dart` (`kFallbackShareUrlIOS`):

```
https://apps.apple.com/us/app/soundtrack-social/id6747029679
```

The App Store button reads that config directly. `generate-download-qr.js`
reads the same value and creates `src/assets/offbeat/ios-qr.svg` with a
four-module white quiet zone. Never edit the generated SVG by hand.

QR generation runs automatically before `npm run dev` and `npm run build`.
After changing the config during a running development session, run
`npm run generate:download` (or restart the dev server) to refresh the QR too.
The generator rejects non-HTTPS/non-App-Store destinations.

`qrcode-generator` 2.0.4 is a development dependency with no runtime
dependencies. It is used only by the Node build script; the browser receives
an SVG image and no QR encoding library. The Dart QR package in the app is
not usable by this React/Vite build.

The printed invitation should link to **`https://moalsheikh.com/download`**.
The on-page QR points directly to the App Store. There is no device redirect,
Android destination, or clickable Android card.

## Images and fonts

- `src/assets/offbeat/app-preview-390.webp` and `app-preview-780.webp` are
  resized/compressed versions of the user's real OFFBEAT promotional capture:
  `Simulator Screenshot - iPhone 16 Pro - 2026-06-06 at 19.48.43.png`, found in
  `Desktop/Projects/Offbeat/Offbeat Promo Assets`. The UI and reactions were
  preserved; no interface was generated. The capture shows a beta version.
- `public/offbeat/app-icon.png` is the existing app icon from
  `soundtrack/assets/images/offbeat-logo.png`, resized for the page's social metadata.
- The app repository was read only. These optimized copies are self-contained
  portfolio assets; future builds do not need either external directory.
- The image uses Vite's hashed assets, responsive `srcSet`, intrinsic dimensions,
  and lazy loading. Desktop shows it entering from the section's bottom;
  phones show the full screenshot without clipping.
- Handwritten notes use system handwriting fonts when available, with a
  cursive fallback. No font files or font dependencies were added. Exterior
  notes disappear below 1100px; all QR/handwriting content disappears below 640px.
- No image placeholder remains. A fresh OFFBEAT screenshot can replace the
  existing beta capture; keep its intrinsic dimensions and both responsive sizes
  in sync. The prompt's mockup attachment was unavailable, so the written
  composition requirements guided the layout.

## Run and build

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

Open `http://127.0.0.1:5173/download`.

```sh
npm run lint
npx tsc --noEmit -p tsconfig.app.json --incremental false
npx tsc --noEmit -p tsconfig.node.json
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Production preview: `http://127.0.0.1:4173/download`.

The production build emits both `dist/download/index.html` and
`dist/download.html`. The latter lets Vite preview and Vercel's existing
`cleanUrls` setting resolve `/download` directly, without first serving the
portfolio homepage. Both have the same canonical URL and content.
`src/main.tsx` hydrates prerendered production HTML and uses `createRoot` for
Vite's empty development root.

## Responsive checks

Check 375, 430, 768, 1024, and 1440px widths (also 320 and 414px):

- iOS appears first; the CTA is at least 52px tall, keyboard accessible,
  and above the first fold on phones.
- Below 640px, the cards stack and the iOS QR is hidden. At 640px and up,
  both cards have equal dimensions and the QR is visible.
- Android is labeled Coming Soon and has a native disabled button and no link.
- No horizontal overflow, broken images, or clipped phone preview on mobile.
- The navbar shows only OFFBEAT branding and its App Store CTA; no footer or
  portfolio navigation appears on `/download`. Other routes keep their navbar/footer.
- `/download` remains usable with JavaScript disabled in the production build.
- Decode the rendered QR and compare it with the button's exact URL.

The existing lint baseline has one `react-refresh/only-export-components`
warning in `src/entry-server.tsx`; no new warning is expected.

Verification completed at all seven widths: no horizontal overflow, broken
images, failed requests, or console errors on `/download`; the rendered QR
decoded to the exact configured URL, and keyboard activation opened that
destination. Production also passed with JavaScript disabled. The OFFBEAT navbar
needs no mobile menu. Navigating to the existing Work page in
development exposes its pre-existing nested-anchor warnings in `Projects.tsx`;
that unrelated page was left unchanged.
