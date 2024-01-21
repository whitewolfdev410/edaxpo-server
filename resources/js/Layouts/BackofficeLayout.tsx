import React from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import {Head} from "@inertiajs/react";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
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
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default BackofficeLayout;
