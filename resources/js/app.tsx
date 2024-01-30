import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {ConfigProvider} from "antd";
import {antdTheme} from "@/antd";
import {antdTheme as antdTheme2} from "@b/config/antd";
import { StyleProvider } from '@ant-design/cssinjs';
import {ConfigContextProvider, ModalsContextProvider, ModalsRender} from "@logicpanel/admin-ui";
import React from "react";
import adminUi from "../backoffice/config/admin-ui";
import {IntlProvider} from "react-intl";
// @ts-ignore
import {gotoEditor, Inspector} from "react-dev-inspector";
import english from './locales/en-US'
import italian from './locales/it-IT'
import {modalsRegistry} from "@b/config/modals";
import {gotoServerEditor} from "@/goToEditor";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const locales = {
    en: english,
    it: italian,
}

// check if exists backoffice-app element
const element = document.getElementById('backoffice-app');
if (!element) {
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup({ el, App, props }) {
            const root = createRoot(el);
            // todo: set language from user
            const currentLocale = locales.it
            root.render(
                <ConfigProvider locale={currentLocale.localeAntd} theme={antdTheme}>
                    <StyleProvider hashPriority="high">
                        <IntlProvider
                            locale={currentLocale.locale}
                            messages={currentLocale.messages as any}
                        >
                            <App {...props} />
                            <Inspector
                                disableLaunchEditor={true}
                                onClickElement={({codeInfo}) =>{
                                    gotoServerEditor(codeInfo)
                                }}
                            />
                        </IntlProvider>
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

            // todo: set language from user
            const currentLocale = locales.it
            root.render(
                <ConfigProvider locale={currentLocale.localeAntd} theme={antdTheme2}>
                    <StyleProvider hashPriority="high">
                        <IntlProvider
                            locale={currentLocale.locale}
                            messages={currentLocale.messages as any}
                        >
                            <ConfigContextProvider config={adminUi(null)}>
                                <ModalsContextProvider>
                                    <App {...props} />
                                    <ModalsRender
                                        modalsRegistry={modalsRegistry}
                                    />
                                </ModalsContextProvider>
                            </ConfigContextProvider>
                            <Inspector
                                disableLaunchEditor={true}
                                onClickElement={({codeInfo}) =>{
                                    gotoServerEditor(codeInfo)
                                }}
                            />
                        </IntlProvider>
                    </StyleProvider>
                </ConfigProvider>
            );
        },
        progress: {
            color: '#4B5563',
        },
    });
}




