import { defineConfig, UserConfig } from "vite";

export default defineConfig({
  base: "/lunarphase-js",
  build: {
    sourcemap: true,
  },
} satisfies UserConfig);
