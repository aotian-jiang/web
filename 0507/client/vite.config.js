import {
    defineConfig
} from 'vite';

import {
    resolve
} from 'path'

export default defineConfig({
    server: {
        host: 'localhost',
        port: 8080,
        open: '/src/pages/home.html'
    },
    build: {
        outDir: 'dist',
        rolldownOptions: {
            input: {
                home: resolve(__dirname, 'src/pages/home.html'),
                detail: resolve(__dirname, 'src/pages/detail.html')
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})