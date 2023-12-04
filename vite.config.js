import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
// import mkcert from 'vite-plugin-mkcert'
import path from 'path';


export default defineConfig({
    plugins: [
        vue(),
        // mkcert()
    ],
    base: '/my-notes/',
    server: {
        //TODO: Если вдруг снова переведут на куки - раскоментировать
        // cors: true,
        // https: true,
        // proxy: {
        //     "/api": {
        //         changeOrigin: true,
        //         target: "https://dist.nd.ru",
        //     }
        // }
        port: 8080,
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: [
            { find: "@", replacement: path.join(__dirname, "./src") },
            { find: /^src\//, replacement: path.join(__dirname, "src/") },
            { find: "/root/src", replacement: path.join(__dirname, "src") },
        ],
    },
});