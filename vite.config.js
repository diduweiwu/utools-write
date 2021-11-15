import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginCopy from "@col0ring/vite-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vitePluginCopy([
            {src: './plugin.json', target: 'dist/'},
            {src: './logo.png', target: 'dist/'}
        ])
    ],
    resolve: {
        alias: {
            '@/': new URL('./src/', import.meta.url).pathname
        }
    },
    base:"",
    server:{
        port:4000,
    }
})
