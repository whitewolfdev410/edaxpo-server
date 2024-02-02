import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import {Head} from "@inertiajs/react";
import {menuItems} from "@b/config/menu";
import {Outlet, Link} from "react-router-dom";
import {ICON_INDEX} from "@b/config/icons";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = menuItems.map((item, index) => {
    const Icon = ICON_INDEX[item.icon]
    return ({
        key:  item.label.toLowerCase(),
        icon: Icon ? <Icon className="!text-[15px] !text-stone-700" /> : null ,
        label: <Link to={'/admin'+item.url} >{item.label}</Link>,
    })
})

const BackofficeLayout =  ({children}: any) => {

    return (
        <Layout hasSider>
            <Head title="Dashboard" />
                <Sider
                    trigger={null}
                    collapsible
                    theme="light"
                    width="220"
                    className="shadow-2xl"
                    style={{
                        overflowY: 'auto',
                        overflowX: 'visible',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0
                    }}
                >
                    <div className="flex justify-center h-[65px] m-4 px-2" >
                        <img src="/assets/img/loader.svg" alt='logo'></img>
                    </div>
                    <Menu
                        mode="inline"
                        items={items}
                    />
                </Sider>
            <Layout className="h-full" style={{ marginLeft: 220 }}>
                <Content className="p-4 mt-4" style={{  overflow: 'initial' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default BackofficeLayout;
