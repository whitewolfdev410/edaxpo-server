export interface CrudProps {
    ListComponent?: any
    apiResource: string
    auth?: any
    collectionOperation?: string
    config?: any
    confirmDeleteMessage?: string
    confirmDeleteContent?: string
    confirmDeleteAcceptText?: string
    confirmDeleteCancelText?: string
    containerClassName?: any
    contextMenuDisabled?: any
    debug?: any
    defaultItem?: any
    deleteUrl?: any
    editableSearch?: any
    filters?: any
    headerClass?: any
    height?: any
    listActionButtonsComponent?: any
    listActionButtonsRender?: any
    modalKey?: any
    modalProps?: ModalProps | {}
    modals?: any
    onOpenForm?: any
    onRemoteDeleted?: any
    onRemoteSaved?: any
    pageLayout?: any
    prependSearchButtons?: any
    rowClassName?: any
    searchAppend?: any
    searchComponent?: any
    searchDefinitions?: any[]
    searchValues?: {[key: string]: any}
    selectable?: boolean
    sidebarWidth?: any
    tableButtonsComponent?: any
    tableColumns: any[]
    tableHeader?: any
    tableRefreshProp?: any
    tableRouter?: boolean
    tableSize?: any
    tableSorter?: {
        field: string
        order: 'asc' | 'desc'
    }
    renderSearch?: (renderProps: RenderSearchProps) => any
    actionButtonType?: any
    showDeleteButton?: any
    editableColumns?: any
    renderContextMenu?: any
    pagination?: any
    paginationPosition?: any
    pageTitle?: any
    icon?: any
    right?: any
    scrollX?: any
    scrollY?: any
    appendNote?: any
    onDataFetch?: any
    searchHeader?: any
		tableClassName?: string
}

export type RenderSearchProps = {
    form: any
    tableData: any
    auth: any
    searchDefinitions: any
    selection: any
    modals: any
    searchAppend: any
    getTable: any
    handleRefresh: any
    onNewClick: any
    onToggleClick: any
    onSubmitClick: any
    onClearClick: any
    onCustomizationClose: any
    customizationOpened: any
    customizationName: any
    definitions: any
}

export type ModalProps = {
    children: any;
    width: string | number | undefined;
    opened: any;
    onClose: any;
    saveButtonTitle: string;
    saveButton: boolean;
    searchButton: boolean;
    title: any;
    adaptiveTitle: string;
    handleSubmit: any
    itemId: any
    loadingSave: boolean
}
