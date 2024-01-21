import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {ConfigProvider} from "antd";
import {antdTheme} from "@/antd";
import { StyleProvider } from '@ant-design/cssinjs';
import {ConfigContextProvider, ModalsContextProvider, ModalsRender} from "@logicpanel/admin-ui";
import React from "react";
import adminUi from "@/config/admin-ui";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const UserFormFake = (props: any) => <div><pre>{JSON.stringify(props,null,2)}</pre></div>

// check if exists backoffice-app element
const element = document.getElementById('backoffice-app');
if (!element) {
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
}else{
    createInertiaApp({
        id: 'backoffice-app',
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup({ el, App, props }) {
            const root = createRoot(el);

            root.render(
                <ConfigProvider theme={antdTheme}>
                    <StyleProvider hashPriority="high">
                        <ConfigContextProvider config={adminUi(null)}>
                            <ModalsContextProvider>
                                <App {...props} />
                                <ModalsRender
                                    modalsRegistry={{
                                        user: {
                                            Component: UserFormFake
                                        }
                                    }}
                                />
                            </ModalsContextProvider>
                        </ConfigContextProvider>
                    </StyleProvider>
                </ConfigProvider>
            );
        },
        progress: {
            color: '#4B5563',
        },
    });
}




