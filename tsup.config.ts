import { defineConfig } from "tsup";

const banner = `
/*
 * @quran/alislam
 * Author: VENi / VEMOM 
 * MIT License
 * Build time: ${new Date().toLocaleString()}
 */
`;

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
  shims: false,
  legacyOutput: false,
  sourcemap: false,
  footer: {
    js: banner,
  },
  outExtension({ format }) {
    return { js: format === "cjs" ? ".js" : ".mjs" };
  }
});
