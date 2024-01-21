import React from 'react'
import ReactDOM from 'react-dom'

declare const $: any

$.widget('ui.dialog', $.ui.dialog, {
  // eslint-disable-next-line
  _allowInteraction: function (event: any) {
    return !!$(event.target).closest('.ant-calendar-picker-container') || this._super(event)
  },
})
export default class Dialog extends React.Component<any,any> {
  private modalRoot: HTMLElement | null;
  private div: HTMLDivElement;

  constructor (props: any) {
    super(props)
    this.modalRoot = document.getElementById('root')
    this.div = document.createElement('div')
  }

  componentDidMount () {
    const { resizable = false, responsive = true, appendTo = '#root' } = this.props

    this.modalRoot?.appendChild(this.div)

    let width = this.props.width ? this.props.width : 600
    const wWidth = $(window).width()
    if (responsive && width > wWidth) {
      width = '98%'
    }
    $(this.div).dialog({
      modal: this.props.modal,
      title: this.props.title ? this.props.title : '',
      autoOpen: this.props.opened,
      width,
      buttons: this.props.buttons ? this.props.buttons : null,
      classes: {
        'ui-dialog': this.props.dialogClass,
      },
      position: { my: 'top', at: 'top+20' },
      appendTo,
      // position: ['center', 10],
      resizable,
      beforeClose: () => {
        if (this.props.opened) {
          this.props.onClose()
          console.log('try close but destroy')
          return false
        }
        return true
      },
    })
    $(this.div).on('dialogclose', (/* event, ui */) => {
      if (this.props.onClose) {
        this.props.onClose()
      }
    })
    // TODO: copy resize content from performa
    // console.log('dialog creada')
  }

  // llamado quando el conmponente cambia propriedades
  componentDidUpdate (prevProps: any) {
    if (prevProps.title !== this.props.title) {
      $(this.div).dialog('option', { title: this.props.title })
    }
    if (prevProps.width !== this.props.width) {
      $(this.div).dialog('option', { width: this.props.title })
    }
  }

  componentWillUnmount () {
    try {
      this.modalRoot?.removeChild(this.div)
    } catch (e) {
      console.log('error al remover from portal')
    }
    $(this.div).dialog('destroy')
    // console.log('dialog destroy')
  }

  render () {
    return (
      <>
        {ReactDOM.createPortal(
            <div className='px-3 pt-3 bg-white rounded-xl'>
                {this.props.title && <div className={'font-bold text-2xl mb-2'}>{this.props.title}</div>}
                {this.props.children}
                {this.props.footer &&
                    <div className={'py-3 mt-2 flex flex-col gap-3 justify-end'}>{this.props.footer}</div>}
            </div>,
            this.div
        )}
      </>
    )
  }
}
