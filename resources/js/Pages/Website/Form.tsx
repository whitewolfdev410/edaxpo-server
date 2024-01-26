import { Flex, Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
};



const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
};

export default function Form() {
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <Content style={contentStyle}>Content</Content>
            </Layout>

        </Flex>
    );
}