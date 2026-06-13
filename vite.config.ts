import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";
import { fileURLToPath, URL } from "node:url"; // 1. Add this path helper

export default defineConfig({
  vite: {
    plugins: [
      nitro({ preset: "vercel" }),
    ],
    // 2. Add the resolve block right here inside the vite object
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});