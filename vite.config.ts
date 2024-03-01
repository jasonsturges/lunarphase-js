import dts from "vite-plugin-dts";
import path from "path";
import { defineConfig, UserConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [dts({ rollupTypes: true })],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "lunarphase",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => {
        const fileName = `index.${format}`;
        return format === "cjs" ? fileName : `${fileName}.js`;
      },
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
} satisfies UserConfig);
