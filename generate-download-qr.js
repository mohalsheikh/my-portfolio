// Build-time only: the browser receives an SVG, not a QR encoder.
import fs from "node:fs";
import qrcode from "qrcode-generator";

const config = JSON.parse(
  fs.readFileSync(new URL("./src/config/offbeat.json", import.meta.url), "utf8")
);
const url = new URL(config.OFFBEAT_APP_STORE_URL);
if (url.protocol !== "https:" || url.hostname !== "apps.apple.com") {
  throw new Error("OFFBEAT_APP_STORE_URL must be a real https://apps.apple.com URL.");
}

const qr = qrcode(0, "M");
qr.addData(config.OFFBEAT_APP_STORE_URL);
qr.make();
// Four modules of untouched white quiet zone on every edge.
const svg = qr.createSvgTag({ cellSize: 4, margin: 16, scalable: true });
const output = new URL("./src/assets/offbeat/ios-qr.svg", import.meta.url);
fs.mkdirSync(new URL("./src/assets/offbeat/", import.meta.url), { recursive: true });
fs.writeFileSync(output, `${svg}\n`);
console.log("Generated OFFBEAT QR from src/config/offbeat.json");
