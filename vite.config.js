import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";
import inject from "@rollup/plugin-inject";
import mkcert from "vite-plugin-mkcert";

// SUMMARY: на будущее, когда надо склеить всех цыпочек
// <=========================================================>
// export const allFilesHtml = [
//      page1.html,
//      page2.html,
//      ...
// ];

// const inputAllFiles = (allFilesHtml) => {

//     return allFilesHtml.reduce((acc,file) => {

//         let key = file.replace(/\.html/,'');

//         return {
//             ...acc,
//             [key] : resolve(__dirname, "src", "section", key, file)
//         }
//     },{})
// }
// <=========================================================>

export default defineConfig({
  root: resolve(__dirname, "./src"),
  build: {
    target: "es2021",
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "index.html"),
      },
    },
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    https: true,
    hmr: true,
  },
  plugins: [
    mkcert(),
    ViteAliases(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|webp|svg|avif)$/i,
      jpg: { quality: 65 },
      jpeg: { quality: 65 },
      png: { quality: 65 },
      webp: { lossless: false },
      avif: { lossless: true },
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    inject({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
});
