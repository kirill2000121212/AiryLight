import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy"
import inject from "@rollup/plugin-inject";


// SUMMARY: на будущее, когда надо склеить всех цыпочек 
// <=========================================================>
// export const allFilesHtml = [
//     'activity.html',
//     'how-work.html',
//     'partner.html',
//     'your-man.html',
//     'pay.html',
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
    root : resolve(__dirname, './src'),
    build : {
        target : "es2021",
        outDir : "build",
        emptyOutDir : true,
        rollupOptions : {
            input : {
                main : resolve(__dirname, "src", "index.html")   
            }
        }
    },
    server : {
        port : 5000,
        host : '0.0.0.0',
        hmr: true
    },
    plugins : [
        ViteAliases(),
        ViteImageOptimizer({
            test: /\.(jpe?g|png|webp|svg|avif)$/i,
            jpg : { quality : 80 },
            jpeg : { quality : 80 },
            png : { quality : 80 },
            webp : { lossless : true },
            avif : { lossless : true },
            cache : false
        }),
        legacy({
            targets : ['defaults', 'not IE 11']
        }),
        inject({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ]
})