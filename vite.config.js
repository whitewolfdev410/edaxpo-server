import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "node:path";
import {inspectorServer} from "@react-dev-inspector/vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        inspectorServer(),
    ],
    resolve: {
        alias: {
            '@b': path.join(__dirname, "resources/backoffice")
        }
    }
});
