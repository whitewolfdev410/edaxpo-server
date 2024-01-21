import React from 'react'

export default class CardLayout extends React.Component {

  render() {
    const { content, sidebar, headerClass = 'card-header', listActionButtonsComponent: ActionButtons, listActionButtonsRender } = this.props


    let actionButtonsElement = null
    if(listActionButtonsRender) {
      actionButtonsElement = listActionButtonsRender()
    }else if(ActionButtons) {
      actionButtonsElement = <ActionButtons />
    }

    return (
      <>
        {actionButtonsElement && (
          <div className='clearfix' style={{padding: "12px 0"}}>
            {actionButtonsElement}
          </div>
        )}
        <div className='card-crud mb-0'>
          {sidebar && (
            <div className={`clearfix ${headerClass || ''}`} style={{padding: "12px 8px"}}>
              {sidebar && sidebar}
            </div>
          )}
          <div className='card-body-crud'>{content}</div>
        </div>
      </>
    )
  }
}
