import React  from 'react'
import {isFunction} from 'formik'
import {axiosErrorHandler} from '@/components/utils'
import {showResponseMessage as adminResponseMessage} from '@/components/utils/message'
import {showDeleteConfirm} from '@/components/crud/show-delete-confirm'
import {getAxiosErrorMessage} from "@/components/utils";
import {messagesIds} from "@/contexts";

const getResourceClient = (apiClient: any) =>  {
  const resourceClient = {
    getItems: (url: any, config: any) => apiClient.get(`${url}`, config),
    getItem: (url: any, id: any, params: any) => apiClient.get(`${url}/${id}`, { params }),
    deleteItem: (url: any, id: any) => apiClient.delete(`${url}/${id}`, { params: {} }),
    updateItem: (url: any, id: any, data: any) => apiClient.put(`${url}/${id}`, data),
    patchItem: (url: any, id: any, data: any) =>
      apiClient.patch(`${url}/${id}`, data, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      }),
    createItem: (url: any, data: any) => apiClient.post(`${url}`, data),
    saveItem: (url: any, withPatch: any, { id, ...data }: any) => {
      if (id) {
        return withPatch
          ? resourceClient.patchItem(url, id, data)
          : resourceClient.updateItem(url, id, data)
      }
      return resourceClient.createItem(url, data)
    },
  }
  return resourceClient
}

export function withRemoteActions(params: any): any {
  const {
    source: baseUrl,
    apiResource = null,
    apiSaveUrl,
    apiGetItemParams = {},
    setItemOnSave = true,
    savingFn,
    apiMethod,
    defaultItem: defaultOptionsItem,
    confirmDeleteMessage,
    getExtraData,
    getItemValues,
  } = params
  return (Component: any) => {
    class RemoteActionComponent extends React.Component<any, any> {
      state = {
        item: null,
        itemHash: null,
        loadingItem: true,
        savingItem: false,
        deletingItem: false,
        responseItem: null,
        errors: null,
        extraData: null,
      }
      private resourceClient: any;
      private locales: {[key: string]: any } = {};

      constructor(props: any) {
        super(props);
        this.resourceClient = getResourceClient(props.config.apiClient);
        this.locales = {
          ...(props.config.locales || {}),
        }
      }

      _showResponseMessage = (props: { error: boolean, message: string }) => {
        if (this.props.config.DefaultResponseMessage) {
          this.props.config.DefaultResponseMessage(props)
        } else {
          adminResponseMessage(props)
        }
      }

      _getDefaultItem = async () => {
        const { defaultItem } = this.props
        return {
          data: defaultItem || defaultOptionsItem || {},
        }
      }

      _finalGetItem = async (id: any) => {
        const { parms } = this.props

        let res
        let item
        let rest
        if (apiResource) {
          res =
            id > 0
              ? await this.resourceClient.getItem(apiResource, id, { ...apiGetItemParams, ...parms })
              : await this._getDefaultItem()
          console.log('apiResource', res)
          item = res.data
          rest = {}
        } else {
          res = await this.props.config.apiClient.get(`${baseUrl}/${id}`, { params: { ...parms } })
          const { item: respItem, ...other } = res.data
          item = respItem
          rest = other
        }

        let extraData
        if (getExtraData) {
          extraData = await getExtraData({ item, formProps: this.props })
        }

        if (getItemValues) {
          item = await getItemValues({ item, extraData })
        }

        this.setState({
          item,
          extraData,
          responseItem: rest,
          loadingItem: false,
          savingItem: false,
          itemHash: null,
        })
      }

      _getItem = async (id: any) => {
        await this._setState({ loadingItem: true })
        return this._finalGetItem(id)
      }

      _finalSave = async (item: any, callback: any, errorsCb: any) => {
        const { onRemoteSaved } = this.props
        const savingItem = savingFn && isFunction(savingFn) ? savingFn({ data: item }) : item

        try {
          const response = await this.resourceClient.saveItem(
            apiSaveUrl || apiResource,
            apiMethod === 'patch',
            savingItem,
          )
          this._showResponseMessage({ error: false, message: 'Salvato correttamente' })

          const newState = setItemOnSave
            ? {
                item: { ...(this.state.item || {}), ...response.data },
                savingItem: false,
                itemHash: null,
              }
            : {
                savingItem: false,
                itemHash: null,
              }

          await this._setState(newState)

          if (callback) callback(response)
          if (onRemoteSaved) onRemoteSaved(response)
          return response
        } catch (error: any) {
          if (error.response) {
            const message = getAxiosErrorMessage(error)
            this._showResponseMessage({ error: true, message:  message?.replaceAll("metadata.","") || 'Errore' })
            const errors = message
            await this._setState({
              savingItem: false,
              errors,
            })
            if (errorsCb) {
              errorsCb(error.response.data)
            }
          } else {
            this._showResponseMessage({ error: true, message: error.message })
          }
        }
        // console.log('eerors', e)
        // this.setState({ savingItem: false, errors: e.response.data.errors })
      }

      _setState = (state: any) =>
        new Promise((resolve: any) => {
          this.setState(state, resolve)
        })

      _save = async (item: any, callback = null, errors: (errors2: any) => void) => {
        await this._setState({ savingItem: true, errors: null })
        return this._finalSave(item, callback, errors)
      }

      _getLabel = (id: messagesIds, defaultLabel?: string ) => {
        return this.locales[id] || defaultLabel || id
      }

      _confirmDelete = (id: any, callback: any) => {
        const { onRemoteDeleted } = this.props

        showDeleteConfirm({
          title: confirmDeleteMessage || this._getLabel('global.confirm_delete', "Confermi l'eliminazione?"),
          content: this._getLabel('global.confirm_delete_content', "Controlla nel caso lo avessi fatto per errore"),
          acceptText: 'Si, elimina questa voce',
          cancelText: 'No, mantienila',
          onAccept: async () => {
            await this._setState({deletingItem: true})

            try {
              const response = apiResource
                ? await this.resourceClient.deleteItem(apiResource, id)
                : await this.props.config.apiClient.post(`${baseUrl}/delete`, {id}) as any
              if (callback) callback()
              if (onRemoteDeleted) {
                response.id = id
                if (apiResource) response.iris = `${apiResource}/${id}`
                onRemoteDeleted(response)
              }
              if (apiResource) {
                this._showResponseMessage({error: false, message: 'Eliminato correttamente'})
              } else {
                this._showResponseMessage(response?.data)
              }
            } catch (error: any) {
              axiosErrorHandler(error, this.props.config.DefaultResponseMessage)
            }
            this.setState({deletingItem: false})
          }
        })
      }

      _onItemChange = (item: any) => this.setState({ item })

      render() {
        const {
          loadingItem,
          item,
          extraData,
          responseItem,
          savingItem,
          deletingItem,
          itemHash,
          errors,
        } = this.state
        return (
          <Component
            remote={{
              loadItem: this._getItem,
              saveItem: this._save,
              deleteItem: this._confirmDelete,
              onItemChange: this._onItemChange,
              loadingItem,
              itemHash,
              savingItem,
              deletingItem,
              item,
              errors,
              responseItem,
              extraData,
            }}
            {...this.props}
          />
        )
      }
    }
    return RemoteActionComponent
  }
}
