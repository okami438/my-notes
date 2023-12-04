import { defineConfig } from 'vite';
// import { createVuePlugin } from 'vite-plugin-vue2';
import vue from '@vitejs/plugin-vue2';
// import mkcert from 'vite-plugin-mkcert'
import path from 'path';


export default defineConfig({
    plugins: [
        vue(),
        // mkcert()
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
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    build: {
        chunkSizeWarningLimit: 600,
        cssCodeSplit: false,
        rollupOptions: {
            external: ['vue'],
        }
    },
    css: {
        postcss: {
            plugins: [
                require('autoprefixer')
            ]
        }
    }
});