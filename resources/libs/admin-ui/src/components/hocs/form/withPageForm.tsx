import React from 'react'
import ReactDOM from 'react-dom'
import { Tooltip, Skeleton } from 'antd'
import { Formik, FormikProps, isFunction } from 'formik'
import { Helmet } from 'react-helmet'
import { PageContext } from './PageContext'
import { compose } from 'recompose'
// import withSocket from './withSocket'
import {withRemoteActions} from "./withRemoteActions";
import differences from "@/components/utils/differences";
import {withConfig} from "@/contexts";

export const Title = ({label, icon, style: styleProp}: { label: string, style?: any, icon?: any}) => (
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



const Page = ({ children, header, pageTitle, className = 'page-container' }: any) => (
  <div className={`stack-detail-page ${className}`}>
    <Helmet title={pageTitle} />
    {header}
    {children}
  </div>
)

const PagePlaceholder = () => (
  <div className='p-6'>
    <Skeleton active />
  </div>
)

export const withPageForm = ({
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
  leftButtons: LeftButtons,
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

    private modalForm: any = null

    private form: FormikProps<any> | null = null

    private btnLeftContainer: any

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
          this.props.history.replace('/auth/404')
        }else{
          this.props.history.replace('/auth/500')
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

   _save = () => {
     this._saveForm()
   }

   _saveClose = () => {
     this.closeModal = true
     this._saveForm()
   }

   _saveForm = () => {
     if (this.modalForm?.saveForm) {
       this.modalForm.saveForm()
     } else {
       // eslint-disable-next-line no-unused-expressions
       this.form?.submitForm()
     }
   }

   _setWidth = (dialogWidth: any) => {
     this.setState({ width: dialogWidth })
   }

   render() {
     const { remote, ...rest } = this.props
     const { width: dialogWidth, clientCounter, externalChanges } = this.state

     if (remote.loadingItem) {
       return <PagePlaceholder />
     }

     const Container = Page
     return (
       <Formik
         innerRef={node => {
           this.form = node
         }}
         initialValues={remote.item}
         onSubmit={(values , formikHelpers) => {
           if (remote.item.id && apiMethod === 'patch') {
             values = differences(values, remote.item)
             values.id = remote.item.id
           }
           remote.saveItem(values, (response: any) => {
             // send event
             /* this.props.socket.emit('room_events', {
               room: this.roomName,
               eventType: 'api:saved',
               resource: response.data,
             }) */
              if (this.closeModal) {
                this.props.onClose()
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
            const finalTitle = isFunction(title) ? title(props.values) : title
            const finalButtons = isFunction(buttons) ? buttons(props.values) : buttons
            const finalPageTitle = isFunction(pageTitle) ? pageTitle(props.values) : pageTitle
            return (
              <PageContext.Provider
                value={{
                  handleSave: this._save,
                  handleSaveAndClose: this._saveClose,
                  handleDelete: () => remote.deleteItem(remote.item.id, this.props.onClose),
                  handleClose: () => this.props.onClose(),
                  buttonsConfig: finalButtons,
                  remote
                }}
              >
                <>
                  <Container
                    pageTitle={finalPageTitle}
                    className={pageClass}
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
                  >
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
                      ref={(modalForm: any) => {
                        this.modalForm = modalForm
                      }}
                    />
                    {this.btnLeftContainer &&
                      LeftButtons &&
                      ReactDOM.createPortal(<LeftButtons form={props} />, this.btnLeftContainer)}
                    {/*  {remote.errors != null && (
                      <div style={{ padding: 20 }}>
                        <Alert
                          message="Errore"
                          description={
                            <div style={{ whiteSpace: 'pre-line' }}>{remote.errors}</div>
                          }
                          type="error"
                          showIcon
                        />
                      </div>
                    )}
                    <pre>{JSON.stringify(props.values,null,2)}</pre> */}
                  </Container>
                </>
              </PageContext.Provider>
            )
          }}
        </Formik>
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
