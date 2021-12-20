const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    minify: true,
    outDir: "dist",
    sourcemap: false,
    lib: {
      name: "shirkhan-retext",
      entry: path.resolve(__dirname, "src/lib/index.js"),
      fileName: (format) => `shirkhan-retext.${format}.js`,
    },
    rollupOptions: {},
  },
});
