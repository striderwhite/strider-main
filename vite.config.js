import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'local.strider.test',
        },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        copy({
            targets: [
              { src: 'resources/images/*', dest: 'storage/images' },
            ],
          }),
    ],
});
