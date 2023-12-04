import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue2';
// import mkcert from 'vite-plugin-mkcert'
import path from 'path';


export default defineConfig({
    plugins: [
        vue(),
        // mkcert()
    ],
    server: {
        // cors: true,
        port: 8080,
        // https: true,
        //TODO: Если вдруг снова переведут на куки - раскоментировать
        // proxy: {
        //     "/api": {
        //         changeOrigin: true,
        //         target: "https://dist.nd.ru",
        //     }
        // }
    },
    resolve: {
        alias: [
            { find: '/@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    base: '/my-notes/',
    // build: {
    //     chunkSizeWarningLimit: 600,
    //     cssCodeSplit: false,
    //     rollupOptions: {
    //         external: ['vue'],
    //     }
    // },
    // css: {
    //     postcss: {
    //         plugins: [
    //             require('autoprefixer')
    //         ]
    //     }
    // }
});