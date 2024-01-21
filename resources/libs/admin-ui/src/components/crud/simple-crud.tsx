import React, {FC, ReactNode} from 'react'
import Crud from './index'
import { CrudTable } from './crud-table'
import {ModalProps, RenderSearchProps} from "@/components/crud/crud-props";

type pageLayout =  'inline' | 'card' | 'vertical'
type actionButtonType = boolean | 'edit' | 'context-menu'

interface SimpleCrudProps {
  tableColumns: any[]
  scrollY?: any
  apiResource: string
  deleteUrl?: string
  debug?: boolean
  selectable?: boolean
  filters?: any
  actionButtonType?: actionButtonType
  showDeleteButton?: any
  pageLayout?: pageLayout
  headerClass?: string | null
  renderSearch?: (RenderSearchProps: RenderSearchProps) => any
  modalKey?: string
  defaultItem?: any
  renderContextMenu?: any
  contextMenuDisabled?: boolean
  tableSorter?: any
  tableRefreshProp?: any
  pagination?: boolean
  paginationPosition?: any
  onRemoteDeleted?: any
  onRemoteSaved?: any
  appendNote?: string
  pageTitle?: string
	tableClassName?: string
  searchHeader?: boolean
  searchValues?: any
  listActionButtonsComponent?: FC<any>
  listActionButtonsRender?: () => ReactNode
  tableButtonsComponent?: any
  modalProps?: ModalProps | {}
}

export function SimpleCrud({
  debug = false,
  scrollY,
  selectable = false,
  tableColumns,
  filters,
  apiResource,
  deleteUrl,
  actionButtonType = false,
  showDeleteButton = undefined,
  searchHeader,
  pageLayout = 'card',
  headerClass = undefined,
  renderSearch,
  tableSorter,
  modalKey,
  defaultItem,
  renderContextMenu,
  contextMenuDisabled,
  tableRefreshProp,
  pagination = true,
  paginationPosition,
  onRemoteDeleted,
  onRemoteSaved,
  appendNote = undefined,
  pageTitle,
  searchValues,
  modalProps,
  listActionButtonsComponent,
  listActionButtonsRender,
  tableButtonsComponent,
  tableClassName
}: SimpleCrudProps) {
  return (
    <Crud
      scrollY={scrollY}
      searchHeader={searchHeader}
      headerClass={headerClass}
      pageTitle={pageTitle}
      debug={debug}
      searchValues={searchValues}
      selectable={selectable}
      onRemoteDeleted={onRemoteDeleted}
      onRemoteSaved={onRemoteSaved}
      appendNote={appendNote}
      modalKey={modalKey}
      pageLayout={pageLayout}
      apiResource={apiResource}
      filters={filters}
      deleteUrl={deleteUrl}
      listActionButtonsComponent={listActionButtonsComponent}
      listActionButtonsRender={listActionButtonsRender}
      tableButtonsComponent={tableButtonsComponent}
      tableSorter={tableSorter || { field: 'id', order: 'desc' }}
      tableColumns={tableColumns}
      actionButtonType={actionButtonType}
      showDeleteButton={showDeleteButton}
      ListComponent={CrudTable}
      searchComponent={false}
      renderSearch={renderSearch}
      defaultItem={defaultItem}
      renderContextMenu={renderContextMenu}
      contextMenuDisabled={contextMenuDisabled}
      tableRefreshProp={tableRefreshProp}
      pagination={pagination}
      paginationPosition={paginationPosition}
      modalProps={modalProps}
      tableClassName={tableClassName}
    />
  )
}
