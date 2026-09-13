# OFFBEAT download page

`/download` is a static React page in the existing Vite/React Router project.
Its white paper-and-ink styles and tokens are scoped to `.download-page`; no global CSS or
portfolio page designs are changed. Inter remains the content font, with the
existing Orbitron font used only for the OFFBEAT wordmark. Handwritten margin
notes reuse the original native font stack (Bradley Hand, Segoe Print, Comic
Sans MS, cursive); no font download is added. There are no entrance animations,
vinyl rotation, or device redirects.

## Layout and shared components

- OFFBEAT-only navigation links to the app preview, campus section, and download
  hero. Download has `aria-current="page"`. On phones the two essential links
  remain visible without a menu or extra JavaScript.
- A centered hero and paired, thin-bordered download cards restore the original
  campus-poster composition. The black iOS button is the primary action. Android
  is a noninteractive Coming Soon card with a compact layout on phones. The real
  QR and handwritten scan caption are visible at 640px and above.
- Handwritten side notes sit outside the cards on wide screens. Phones keep one
  small note below the download options, away from the primary button.
- The daily-song poster is the centered main product image. A static vinyl sits
  behind it, below the product text. Three alternating stories cover campus sound,
  joining a campus, and music profiles; they stack text-first on phones.
- `Footer` accepts `variant="offbeat"` for the compact wordmark, tagline, and
  Back to top link. The default portfolio footer and its existing behavior
  remain unchanged. OFFBEAT does not show portfolio links or the newsletter.
- The download page remains outside the portfolio's animation queue. The
  `ScrollToTop` effect still returns nothing, including when the browser's
  `scrollTo()` returns a Promise.

## App Store URL and QR

The existing URL comes from **`OFFBEAT_APP_STORE_URL` in
`src/config/offbeat.json`**:

```
https://apps.apple.com/us/app/soundtrack-social/id6747029679
```

Both the App Store button and `generate-download-qr.js` use that configuration.
The original URL was found in `soundtrack/lib/config/constants.dart`; the app
repository is not changed or needed to build the website.

The QR generator runs before development and production builds and writes
`src/assets/offbeat/ios-qr.svg`. If the URL changes while the server is running,
run `npm run generate:download` to refresh the QR. It preserves a four-module
quiet zone and rejects non-HTTPS/non-App-Store URLs. The existing
`qrcode-generator` development dependency adds no browser encoding JavaScript.
No dependency was added for this redesign.

The invitation's permanent QR destination remains `/download`. Android has no
Play Store URL or clickable download control.

## Official assets

All seven supplied PNG files remain untouched in `src/assets`. This page imports:

| Asset | Use |
| --- | --- |
| `offbeat-mark.png` | Small hero mark and one decorative vinyl |
| `share-daily-song.png` | Primary product visual |
| `campus-sound.png` | Campus recap, moods, and events story |
| `join-campus.png` | School email verification story |
| `music-profile.png` | Taste and social identity story |

`discover-live-music.png` and `post-with-mood.png` are intentionally unused:
campus events and daily posting are already represented, and adding them would
lengthen the page. The previous beta screenshot is no longer displayed; the
official posters are retained alongside the restored handwritten details.
Existing image files were not deleted.

Vite emits hashed asset URLs. Every image has intrinsic dimensions; posters
retain their full 1086 × 1448 aspect ratio and are not cropped, recolored, masked,
or put in fabricated phone frames. Images below the hero are lazy-loaded.
The four original posters total about 6.3 MB. Approved WebP/AVIF derivatives
could reduce transfer size later; this version uses the exact supplied PNGs.

## Local development and checks

```sh
npm install
npm run dev
```

Open **http://localhost:5173/download**. Avoid running multiple development
servers for the same project on separate IPv4/IPv6 listeners.

```sh
npm run lint
npx tsc --noEmit -p tsconfig.app.json --incremental false
npx tsc --noEmit -p tsconfig.node.json
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Production preview: http://127.0.0.1:4173/download.

The existing prerenderer emits both `dist/download/index.html` and
`dist/download.html` for slash and clean-URL hosting. Vercel configuration,
canonical URL, homepage routing, and hydration setup are unchanged.

`npm run test:render` checks production preview by default. Pass
`-- http://localhost:5173` to check development. It uses the existing Playwright
dependency and requires its Chromium browser; an installed binary can be
selected through `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

The checks cover 375, 430, 768, 1024, and 1440px, including touch/mouse input,
visible headings, early mobile CTA, QR visibility, noninteractive Android,
image loading, both footer variants, reloads, history, and browser errors.
They simulate Promise-returning `scrollTo()` to protect against the previously
fixed black-screen crash. Visual review also covers 320 and 414px.

The existing lint baseline has one `react-refresh/only-export-components`
warning in `src/entry-server.tsx`.
