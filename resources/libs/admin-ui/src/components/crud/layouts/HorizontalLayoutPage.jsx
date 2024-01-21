import * as React from 'react'
import {Helmet} from 'react-helmet'
import { Layout } from 'antd'

export default class HorizontalLayoutPage extends React.Component {
  render() {
    const { content, sidebar, title } = this.props
    return (
      <div>
        <Helmet title={title} />
        <Layout className='max-h-fit bg-body'>
          <div className='my-6 bg-white'>
              {sidebar && sidebar}
          </div>
          {content}
        </Layout>
      </div>
    )
  }
}
