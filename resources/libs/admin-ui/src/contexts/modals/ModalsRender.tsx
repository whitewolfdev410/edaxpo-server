import * as React from 'react'
import { withModalsNavigator } from '@/contexts'
import {memo, Suspense} from 'react'

const Empty = memo(
  ({ message }: { message: string }) => {
    return <div>{message}</div>
  },
  (prevProps, nextProps) => prevProps.message === nextProps.message
)

class ModalsRenderBase extends React.Component<any, any> {
  _closeForm =
    ({ onClose }: any, index: number) =>
    () => {
      const { modals } = this.props
      try {
        if (onClose) onClose()
      } catch (e) {
        console.log(e)
      }
      // callback from dialog
      modals.close(index)
    }

  _renderDialog = (item: any, index: number) => {
    let Screen
    const { modalsRegistry: navigatorConfigs } = this.props
    let props = {}
    if (navigatorConfigs[item._type]) {
      Screen = navigatorConfigs[item._type].Component
      if (navigatorConfigs[item._type].props) {
        // eslint-disable-next-line prefer-destructuring
        props = navigatorConfigs[item._type].props
      }
    } else if (item._screen) {
      Screen = item._screen
    } else {
      Screen = Empty
      props = {
        message: `Modal non trovata: ${item._type}`
      }
    }
    return (
      <Suspense key={`${item._type}-${index}`} fallback={<div>Loading...</div>}>
        <Screen
          {...props}
          {...item}
          onRequestClose={item.onClose}
          onClose={this._closeForm(item, index)}
        />
      </Suspense>
    )
  }

  render() {
    const { modals } = this.props
    return <div>{modals?.items?.map(this._renderDialog)}</div>
  }
}

export const ModalsRender = withModalsNavigator(ModalsRenderBase)
