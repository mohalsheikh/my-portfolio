import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dedicated SSR build: emits entry-server.js + projects-data.js into dist/server
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: "dist/server",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "entry-server": "src/entry-server.tsx",
        "projects-data": "src/projects-data.ts",
      },
      output: {
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
});
