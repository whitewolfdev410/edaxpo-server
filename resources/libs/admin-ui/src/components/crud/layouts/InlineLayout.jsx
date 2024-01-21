import React from 'react'

export default class InlineLayout extends React.Component {

  render() {
    const { content, sidebar, listActionButtonsComponent} = this.props

    return (
      <div>
        {sidebar && (
          <div>
            {sidebar && sidebar}
          </div>
        )}
        {listActionButtonsComponent && (
          <div className={`clearfix`} style={{padding: "12px 0"}}>
            {listActionButtonsComponent}
          </div>
        )}
        <div style={{ minHeight: 'auto' }}>{content}</div>
      </div>
    )
  }
}
