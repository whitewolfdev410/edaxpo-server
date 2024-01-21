import React from 'react'
import {Helmet} from 'react-helmet'
import { Layout } from 'antd'

const { Sider } = Layout

export default class SideBarLayoutPage extends React.Component {
  state = {
    opened: window.innerWidth > 1000,
  }

  toggle() {
    const { opened } = this.state
    this.setState({ opened: !opened })
  }

  render() {
    const { content, sidebar, title, sidebarWidth = 200 } = this.props
    const { opened } = this.state
    return (
      <div>
        <Helmet title={title} />
        <Layout style={{ minHeight: 'auto' }}>
          {sidebar && (
            <Sider collapsed={!opened} collapsedWidth={0} width={sidebarWidth} theme={'light'}>
              {sidebar && sidebar}
            </Sider>
          )}
          <Layout style={{ minHeight: 'auto' }}>{content}</Layout>
        </Layout>
      </div>
    )
  }
}
