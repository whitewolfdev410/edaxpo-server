import React from 'react'
import { Tooltip, Skeleton } from 'antd'
import { Formik, FormikProps, isFunction } from 'formik'
import { PageContext } from '@/components'
import { compose } from 'recompose'
import {withRemoteActions} from "./withRemoteActions";
import differences from "@/components/utils/differences";
import {withConfig} from "@/contexts";

const Title = ({label, icon, style: styleProp}: { label: string, style?: any, icon?: any}) => (
  <div style={styleProp} >
    {icon} {label}
  </div>
)

const OnlineCounter = ({ counter }: any) => (
  <Tooltip title={'Il form è stato aperto'}>
    {counter}
    {<i style={{ cursor: 'pointer' }} className={'fa fa-circle text-warning'} />}
  </Tooltip>
)
const ExternalChanges = () => (
  <Tooltip title={'Modificato esternamente'}>
    {<i style={{ cursor: 'pointer' }} className={'fa fa-exclamation-triangle text-danger ml-2'} />}
  </Tooltip>
)



const Page = ({ children, header, className = 'page-container' }: any) => (
  <div className={`stack-detail-page ${className}`}>
    {header}
    {children}
  </div>
)

const PagePlaceholder = () => (
  <div className={'page-container'}>
    <Skeleton active />
  </div>
)

export const withModalForm = ({
                                source,
                                apiResource,
                                apiGetItemParams = {},
                                title = false,
                                pageTitle = '',
                                icon = false,
                                width = '95%',
                                isPage = true,
                                bodyStyle = null,
                                dialogClass = undefined,
                                pageClass = 'page-container',
                                buttons = {},
                                apiMethod = 'patch',
                                savingFn,
                                defaultItem = undefined,
                                getExtraData,
                                getItemValues
                              }: any) => (FormWrapped: any) => {
  const isFunctionComponent = typeof FormWrapped !== 'string' && !FormWrapped.prototype?.render

  // console.log("isFunctionComponent",isFunctionComponent,apiResource)

  // eslint-disable-next-line no-unused-vars
  const LastFormWrapped = isFunctionComponent
    ? React.forwardRef(props => <FormWrapped {...props} />)
    : FormWrapped

  class ModalForm extends React.Component<any, any> {
    isPage = false

    roomName: any = null

    private closeModal = false

    private form: FormikProps<any> | null = null

    constructor(props: any) {
      super(props)
      if (isPage) {
        this.isPage = true
      }
      this.state = {
        width,
        clientCounter: 0,
        externalChanges: false,
      }
    }

    async componentDidMount() {
      const id = this._getId()

      try{
        await this.props.remote.loadItem(id)
      }catch (error: any) {
        if( error.response && error.response?.status === 404 && this.props.history ){
          this.props.config.navigate.replace('/auth/404')
        }else{
          this.props.config.navigate.replace('/auth/500')
        }
      }

      /* if (id && id > 0) {
        this.roomName = `modalform_${this.props._type}_${id}`
        this.props.socket.on(`${this.roomName}:clients_counter`, this._onSocketCounter)
        this.props.socket.on(`${this.roomName}:events`, this._onSocketEvents)
        this.props.socket.on('connect', this._joinRoom)
        this._joinRoom()
      } */
    }

    componentWillUnmount() {
      /* if (this.roomName) {
       this.props.socket.off(`${this.roomName}:clients_counter`, this._onSocketCounter)
       this.props.socket.off(`${this.roomName}:events`, this._onSocketEvents)
       this.props.socket.off('connect', this._joinRoom)
       this.props.socket.emit('leave', {
         room: this.roomName,
       })
     } */
    }

    /* _joinRoom = () => {
      console.log('_joinRoom', this.roomName)
      this.props.socket.emit('join', {
        room: this.roomName,
      })
    } */

    _onSocketEvents = (event: any) => {
      console.log('_onSocketEvents', event)
      if (event.eventType === 'api:saved') {
        this.setState({ externalChanges: true })
      }
    }

    _onSocketCounter = (counter: any) => {
      this.setState({ clientCounter: counter })
    }

    _getId = () => this.props.itemId

    _save = async () => {
      this.closeModal = false
      return this._saveForm()
    }

    _saveClose = async () => {
      this.closeModal = true
      return this._saveForm()
    }

    _saveForm = () => {
      return this.form?.submitForm()
    }

    _setWidth = (dialogWidth: any) => {
      this.setState({ width: dialogWidth })
    }

    render() {
      const { remote, ...rest } = this.props
      const { width: dialogWidth, clientCounter, externalChanges } = this.state

      const Container = this.props.config.ModalComponent || Page

      console.log(this.props.config.ModalComponent)

      let finalTitle = ""
      let finalPageTitle = ""
      let finalButtons = {}
      try{
        finalTitle = isFunction(title) ? title(remote.item) : title
        finalPageTitle = isFunction(pageTitle) ? pageTitle(remote.item) : pageTitle
        finalButtons = isFunction(buttons) ? buttons(remote.item) : buttons
      }catch (e) {
        console.log(e)
      }


      return (
        <PageContext.Provider
          value={{
            handleSave: this._save,
            handleSaveAndClose: this._saveClose,
            handleDelete: () => remote.deleteItem(remote.item.id, this.props.onClose),
            handleClose: () => this.props.onClose(),
            buttonsConfig: finalButtons,
            remote,
            getForm: () => this.form,
          }}
        >
          <Container
            pageTitle={finalPageTitle}
            className={pageClass}
            title={!remote.loadingItem && <Title icon={icon} label={finalTitle} />}
            header={
              finalTitle && (
                <div>
                  <Title icon={icon} label={finalTitle} />
                  <div style={{ position: 'absolute', right: 40, top: 10 }}>
                    {clientCounter > 1 && <OnlineCounter counter={clientCounter} />}
                    {externalChanges && <ExternalChanges />}
                  </div>
                </div>
              )
            }
            bodyStyle={bodyStyle}
            visible
            opened
            modal
            style={{ top: 20 }}
            dialogClass={dialogClass}
            onClose={() => this.props.onClose()}
            width={dialogWidth}
            itemId={this._getId()}
            {...this.props.modalProps}
          >
            {remote.loadingItem && (
              <div className="py-4">
                <PagePlaceholder />
              </div>
            )}
            {!remote.loadingItem && (
              <Formik
                innerRef={node => {
                  this.form = node
                }}
                initialValues={remote.item}
                onSubmit={async (values , formikHelpers) => {
                  if (remote.item.id && apiMethod === 'patch') {
                    values = differences(values, remote.item)
                    values.id = remote.item.id
                  }
                  return remote.saveItem(values, (response: any) => {
                    if (this.closeModal) {
                      this.props.onClose()
                      if(this.props.onAfterClose) this.props.onAfterClose()
                    } else {
                      // eslint-disable-next-line no-unused-expressions
                      formikHelpers.setValues(response.data)
                    }
                  },(errorResponse: any) => {
                    if(errorResponse?.violations){
                      const formikErrors = errorResponse.violations.reduce((acc: any, violation: any) => {
                        acc[violation.propertyPath] = violation.message
                        return acc
                      }, {})
                      formikHelpers.setErrors(formikErrors)
                    }
                  })
                }}
              >
                {({ isSubmitting, ...props }) => {
                  return (
                    <LastFormWrapped
                      form={props}
                      responseItem={remote.responseItem}
                      modalForm={{
                        setWidth: this._setWidth,
                        handleSave: this._save,
                        savingItem: remote.savingItem,
                        setValues: remote.onItemChange
                      }}
                      modal={rest}
                    />
                  )
                }}
              </Formik>
            )}
          </Container>
        </PageContext.Provider>
      )
    }
  }
  return compose(
    withConfig,
    withRemoteActions({
      source,
      apiGetItemParams,
      apiResource,
      savingFn,
      apiMethod,
      defaultItem,
      getExtraData,
      getItemValues
    }),
    // withSocket(),
  )(ModalForm)
}
