import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import {Head} from "@inertiajs/react";
import {menuItems} from "@b/config/menu";
import {Outlet, Link} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = menuItems.map((item, index) => ({
    key:  item.label.toLowerCase(),
    icon: <i className={item.icon} />,
    label: <Link to={'/admin'+item.url} >{item.label}</Link>,
}));

const BackofficeLayout =  ({children}: any) => {

    return (
        <Layout hasSider>
            <Head title="Dashboard" />
            <Sider
                theme="light"
                style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
            >
                <div className="demo-logo-vertical h-[50px] bg-gray-100 m-2 text-center pt-3" >
                    Qui logo
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout className="h-screen" style={{ marginLeft: 200 }}>
                <Content className="p-4" style={{  overflow: 'initial' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default BackofficeLayout;
