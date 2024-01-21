import React from 'react'
import { Layout, Dropdown, Menu } from 'antd'
import { Form, Formik } from 'formik'
import SideBarLayoutPage from '@/components/crud/layouts/SideBarLayoutPage'
import HorizontalLayoutPage from '@/components/crud/layouts/HorizontalLayoutPage'
import InlineLayout from '@/components/crud/layouts/InlineLayout'
import { CustomizableCrudTable, CrudTable } from '@/components/crud/crud-table'
import CardLayout from '@/components/crud/layouts/CardLayout'
import CrudContext, { crudContextDefaultValue } from '@/components/crud/crud-context'
// import { resourceClient } from '@/components/platform/hocs/Form'
// import CustomizableSearch, { Search as SimpleSearch } from '@/components/search/customizable-search'
import { axiosErrorHandler, getHeight, getWindowHeight } from '../utils'
import {showDeleteConfirm} from "@/components/crud/show-delete-confirm";
import {messagesIds, withConfig, withModalsNavigator} from "@/contexts";
import {CrudProps} from "@/components/crud/crud-props";
import {showResponseMessage} from "@/components";
const { Content } = Layout

class Crud extends React.Component<CrudProps,any> {
  static defaultProps = {
    filters: {},
    pageLayout: 'default',
    actionButtonType: 'context-menu',
    showDeleteButton: true,
    searchComponent: 'default',
    searchAppend: null,
    ListComponent: CustomizableCrudTable,
    tableRouter: false,
    onOpenForm: null,
    selectable: false,
    searchHeader: true,
	  tableClassName: '',
  }
  private table: any;
  private form: any;
  private layout: any;
  private locales: {[key: string]: any } = {};

  constructor(props: any) {
    super(props)

    const initialSearchValues = this.props.searchValues

    this.locales = {
      ...(props.config.locales || {}),
    }

    this.state = {
      search: {
        ...initialSearchValues,
      },
      popup: {
        visible: false,
        x: 0,
        y: 0,
      },
      selection: [],
      tableData: null,
      offsetHeight: 0,

      editableSearchOpened: false,
      editableColumnsOpened: false,
      selectedRows: [],
      selectedRowKeys: [],
    }
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.tableRefreshProp !== prevProps.tableRefreshProp) {
      this.table.fetch()
    }
  }

  onRow = (record: any) => ({
    onContextMenu: (event: any) => {
      event.preventDefault()
      this._openContextMenu(record)
    },
  })

  _openContextMenu = (record: any, visible = true) => {
    this.setState({
      popup: {
        record,
        visible,
      },
    })
  }

  _setContextVisible = (visible: any, cb: any = undefined) => {
    this.setState(
      ({ popup }: any) => ({
        popup: {
          ...popup,
          visible,
        },
      }),
      cb,
    )
  }

  _getLabel = (id: messagesIds, defaultLabel?: string ) => {
    return this.locales[id] || defaultLabel || id
  }

  _onActionClick = (e: any) => {
    if (e.key === 'edit') {
      this._setContextVisible(false, () => this._openForm(this.state.popup.record.id))
    }
    if (e.key === 'delete') {
      this._setContextVisible(false, () => this._confirmDelete(this.state.popup.record.id))
    }
  }

  _delete = async (id: any, showResponse?: boolean, onFinish?: (error: boolean) => void) => {
    try {
      const response = await this.props.config.handleDelete({
        apiResource: this.props.deleteUrl || this.props.apiResource,
        id,
      })
      console.log('debug response', response)
      if (response.data.error && response.data.message) {
        if (showResponse) axiosErrorHandler(response.data, this.props.config.DefaultResponseMessage)
        if (onFinish) onFinish(true)
        return
      }
      if (this.props.onRemoteDeleted && response.status === 204) {
        this.props.onRemoteDeleted({ id, iris: `${this.props.apiResource}/${id}` })
      }
      this.table.fetch()
      if (this.props.config.DefaultResponseMessage) {
        if (showResponse) this.props.config.DefaultResponseMessage({ error: false, message: 'Eliminato correttamente' })
      } else {
        if (showResponse) showResponseMessage({ error: false, message: 'Eliminato correttamente' })
      }
      if (onFinish) onFinish(false)
    } catch (e) {
      console.log('debug error', e)
      if (showResponse) axiosErrorHandler(e, this.props.config.DefaultResponseMessage)
      if (onFinish) onFinish(true)
    }
  }

  _confirmDelete = (id: any) => {
    showDeleteConfirm({
      title: this.props.confirmDeleteMessage || this._getLabel('global.confirm_delete', "Confermi l'eliminazione?"),
      content: this.props.confirmDeleteContent || this._getLabel('global.confirm_delete_content', "Controlla nel caso lo avessi fatto per errore"),
      acceptText: this.props.confirmDeleteAcceptText || 'Si, elimina questa voce',
      cancelText: this.props.confirmDeleteCancelText || 'No, mantienila',
      onAccept: this._delete.bind(this, id),
    })
  }

  _refreshHeight = () => {
    const elements = document.getElementsByClassName('crud-height-offset')
    let offsetHeight = 0
    for (let i = 0; i < elements.length; i += 1) {
      offsetHeight += getHeight(elements.item(i))
    }
    this.setState({ offsetHeight })
  }

  _getHeight = () => {
    const headerHeight = 32 + 170
    const windowHeight = getWindowHeight() // this.props.height
    // console.log('windowHeight', windowHeight, headerHeight, this.state.offsetHeight)
    return windowHeight - headerHeight - this.state.offsetHeight
  }

  _openForm = (id: any) => {
    if (this.props.onOpenForm) {
      return this.props.onOpenForm(id)
    }
    if (!this.props.modalKey) return false
    this.props.modals.open(this.props.modalKey, {
      itemId: id,
      onClose: () => this.table.fetch(),
      onRemoteSaved: this.props.onRemoteSaved,
      onRemoteDeleted: this.props.onRemoteDeleted,
      defaultItem: this.props.defaultItem,
      modalProps: this.props.modalProps,
    })
    return false
    // modals.open(modal, { itemId: 0, onClose: () => this.table.fetch() }
  }

  _getTable = () => this.table

  _editableSearchOpen = (opened: any) => this.setState({ editableSearchOpened: opened })

  _editableColumnsOpen = (opened: any) => this.setState({ editableColumnsOpened: opened })

  _refresh = (options: any) => {
    const table = this._getTable()
    if (options === false) {
      table.fetch()
    } else {
      table.fetch({ page: 1 })
    }
  }

  _searchClear = () => {
    this.setState({ search: this.props.searchValues }, () => {
      this.form.setValues(this.props.searchValues)
      this._refresh({})
    })
  }

  _getSearchForm = () => {
    return this.form
  }

  _setSelectedRows = (selectedRowKeys: any, selectedRows: any) => {
    this.setState({ selectedRows, selectedRowKeys })
  }

  _clearSelection = () => {
    this.setState({ selectedRows: [], selectedRowKeys: [] })
  }

  render() {
    const { search, selection, tableData, editableSearchOpened, editableColumnsOpened } = this.state

    const {
      pageLayout,
      headerClass = undefined,
      containerClassName = 'page-container',
      modals,
      auth,
      searchComponent,
      searchDefinitions,
      searchAppend,
      prependSearchButtons,
      editableSearch,
      renderSearch,
      sidebarWidth,
      debug,
      rowClassName,
      apiResource,
      collectionOperation,
      tableHeader,
      tableSize = 'small',
      tableSorter,
      tableRouter,
      tableColumns,
      contextMenuDisabled = false,
      selectable,
      listActionButtonsComponent,
      tableButtonsComponent,
      listActionButtonsRender,
      actionButtonType,
      showDeleteButton,
      editableColumns,
      renderContextMenu,
      pagination = true,
      paginationPosition,
      pageTitle,
      icon,
      right,
      scrollX = null,
      scrollY = null,
      appendNote,
      onDataFetch = undefined,
      searchHeader,
      config,
	    tableClassName
    } = this.props

    let PageLayout
    if (pageLayout === 'horizontal') {
      PageLayout = HorizontalLayoutPage
    } else if (pageLayout === 'inline') {
      PageLayout = InlineLayout
    } else if (pageLayout === 'card') {
      PageLayout = CardLayout
    } else if (pageLayout === 'default') {
      PageLayout = config.DefaultCrudLayout || HorizontalLayoutPage
    } else {
      PageLayout = SideBarLayoutPage
    }

    const apiCollectionOperation = collectionOperation || apiResource

    const ListComponent = editableColumns ? this.props.ListComponent : CrudTable

    let Search: any
    if (searchComponent === false) {
      Search = null
    } else if(searchComponent === 'default') {
      Search = this.props.config.DefaultSearchComponent
    } else {
      Search = searchComponent || this.props.config.DefaultSearchComponent
    }

    const menu = renderContextMenu ? (
      renderContextMenu({
        onActionClick: this._onActionClick,
        modals: this.props.modals,
        setContextVisible: this._setContextVisible,
        item: this.state.popup.record,
        handleRefresh: this._refresh
      })
    ) : (
      <Menu onClick={this._onActionClick}>
        <Menu.Item key="edit">
          {this._getLabel('global.modify', 'Modifica')}
        </Menu.Item>
        <Menu.Item key="delete">
          {this._getLabel('global.delete', 'Elimina')}
        </Menu.Item>
      </Menu>
    )

    const editableColumnsName = `${apiResource}:columns`
    const editableSearchName = `${apiResource}:search`

    const DropdownProvider = contextMenuDisabled ? React.Fragment : Dropdown
    return (
      <CrudContext.Provider
        value={{
          ...crudContextDefaultValue,
          editableSearch,
          editableSearchOpened,
          editableSearchOpen: this._editableSearchOpen,
          editableSearchName,
          handleOpen: this._openForm,
          handleDelete: this._confirmDelete,
          // forceDelete: this._delete,
          editableColumns,
          editableColumnsName,
          editableColumnsOpened,
          handleRefresh: this._refresh,
          handleSearchClear: this._searchClear,
          getSearchFormRef: this._getSearchForm,
          editableColumnsOpen: this._editableColumnsOpen,
          modals: this.props.modals,
          modalProps: this.props.modalProps,
          selectedRows: this.state.selectedRows,
          search: this.state.search,
          clearSelection: this._clearSelection,
        }}
      >
        <PageLayout
          title={pageTitle}
          icon={icon}
          right={right}
          searchDefinitions={searchDefinitions}
          getTable={this._getTable}
          sidebarWidth={sidebarWidth}
          listActionButtonsComponent={listActionButtonsComponent}
          listActionButtonsRender={listActionButtonsRender}
          refreshHeight={this._refreshHeight}
          ref={(layout: any) => {
            this.layout = layout
          }}
          containerClassName={containerClassName}
          prependSearchButtons={prependSearchButtons}
          appendNote={appendNote}
          searchHeader={searchHeader}
          headerClass={headerClass}
          sidebar={
            !!Search || !!renderSearch ? (
              <Formik
                innerRef={node => {
                  this.form = node
                }}
                initialValues={search}
                onSubmit={(values /* , { setSubmitting } */) => {
                  // ,()=>this.form.submitForm()
                  this.setState({ search: values }, () => {
                    this._refresh({})
                  })
                }}
              >
                {({ ...props }) => {
                  const searchProps = {
                    form: props,
                    tableData,
                    auth,
                    searchDefinitions,
                    selection,
                    modals,
                    searchAppend,
                    getTable: this._getTable,
                    handleRefresh: this._refresh,
                    onNewClick: () => this._openForm(0),
                    onToggleClick: () => this.layout.toggle(),
                    onSubmitClick: () => this.form.submitForm(),
                    onClearClick: this._searchClear,
                    // customization props
                    onCustomizationClose: () => this._editableSearchOpen(false),
                    customizationOpened: editableSearchOpened,
                    customizationName: editableSearchName,
                    definitions: searchDefinitions,
                  }
                  const searchContent = renderSearch ? (
                    renderSearch(searchProps)
                  ) : (
                    <Search {...searchProps} />
                  )
                  return <Form>{searchContent}</Form>
                }}
              </Formik>
            ) : null
          }
          content={
            <Content>
              <DropdownProvider
                onVisibleChange={s => {
                  if (!s) this._setContextVisible(false)
                }}
                visible={this.state.popup.visible}
                trigger={['contextMenu']}
                overlay={menu}
              >
                <div className={`crud-container ${tableClassName}`} style={{ padding: 0 }}>
                  <ListComponent
                    tableRouter={tableRouter}
                    selectable={selectable}
                    onSelectionChange={this._setSelectedRows}
                    selectedRowKeys={this.state.selectedRowKeys}
                    actionButtonType={actionButtonType}
                    showDeleteButton={showDeleteButton}
                    onOpenForm={this._openForm}
                    confirmDelete={this._confirmDelete}
                    onOpenContextMenu={this._openContextMenu}
                    tableButtonsComponent={tableButtonsComponent}
                    menu={menu}
                    setTableData={onDataFetch}
                    key={apiCollectionOperation}
                    debug={debug}
                    onRef={(table: any) => {
                      this.table = table
                    }}
                    source={apiCollectionOperation}
                    onRow={this.onRow}
                    parms={{
                      ...this.props.filters,
                      ...search,
                    }}
                    scroll={{
                      x: scrollX, // 900,
                      y: scrollY !== null ? scrollY : this._getHeight(),
                      scrollToFirstRowOnChange: true,
                    }}
                    size={tableSize}
                    rowClassName={rowClassName}
                    showHeader={tableHeader}
                    pagination={pagination}
                    paginationPosition={paginationPosition || ['bottomRight']}
                    sorter={tableSorter}
                    // customization props
                    // customization props
                    onCustomizationClose={() => this._editableColumnsOpen(false)}
                    customizationOpened={editableColumnsOpened}
                    customizationName={editableColumnsName}
                    definitions={tableColumns}
                  />
                </div>
              </DropdownProvider>
            </Content>
          }
        />
      </CrudContext.Provider>
    )
  }
}

export default withModalsNavigator(withConfig(Crud))
