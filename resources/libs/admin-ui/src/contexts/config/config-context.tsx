import React, {ComponentType, ReactNode} from 'react'

type handleDeleteProps = {
  id: string | number
  apiResource: string
}

export type TableActionButtonsComponent = ComponentType<{ onClick : () => any, onDeleteClick: () => any, showDeleteButton: () => any }>
export type messagesIds = "global.delete" | "global.modify" | "global.confirm_delete" | "global.confirm_delete_content" | "global.actions"
export type ConfigContextType = {
  DefaultCrudLayout?: ComponentType<any>
  DefaultResponseMessage?: (props: { error: boolean, message: string }) => void
  DefaultSearchComponent: ComponentType<any>
  ModalComponent: ComponentType<any>
  SearchSettingsComponent?: ComponentType<any>
  TableActionButtons: TableActionButtonsComponent
  TableContextMenuIcon: ComponentType<any>
  apiClient: any
  getPageFromUrl?: () => number | string
  handleDelete: (props: handleDeleteProps) => Promise<void>
  locales?: Partial<Record<messagesIds, string>>
  navigate: { goBack: () => void, push: (url: string) => void, replace: (url: string) => void }
  setPageInUrl?: (props: { page: number | string }) => void
}


export const ConfigContext = React.createContext<ConfigContextType>({} as any)


export const ConfigContextProvider = ({children, config}: { children: ReactNode, config: ConfigContextType}) => {

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => {
  return React.useContext(ConfigContext)
}

export const withConfig = (WrappedComponent: any) => {
  return (props: any) => {
    const config = useConfig()
    return <WrappedComponent {...props} config={config} />
  }
}