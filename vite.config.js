import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';


export default defineConfig({
    plugins: [
        createVuePlugin(),
    ],
    server: {
        cors: true,
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
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ]
    },
    build: {
        chunkSizeWarningLimit: 600,
        cssCodeSplit: false
    },
    css: {
        postcss: {
            plugins: [
                require('autoprefixer')
            ]
        }
    }
});