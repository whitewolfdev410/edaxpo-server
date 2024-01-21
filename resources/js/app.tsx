import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {ConfigProvider} from "antd";
import {antdTheme} from "@/antd";
import { StyleProvider } from '@ant-design/cssinjs';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ConfigProvider theme={antdTheme}>
                <StyleProvider hashPriority="high">
                    <App {...props} />
                </StyleProvider>
            </ConfigProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
