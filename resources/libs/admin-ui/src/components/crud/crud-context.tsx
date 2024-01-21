import React from "react";
import {ModalProps} from "./crud-props";

type CrudContextType = {
  searchDefinitions: any[]
  handleOpen: (id: any) => void
  editableColumns: boolean
  editableSearch: boolean
  editableTabs: boolean
  selectedRows: any[]
  clearSelection: () => void
  handleRefresh: (options: any) => void
  getSearchFormRef: () => any
  handleDelete: (id: any) => void
  search: any[]
  modalProps: ModalProps | {} | undefined
  editableSearchOpened: boolean
  editableColumnsOpened: boolean
  editableColumnsOpen: (value: any) => void
  modals: any
  handleSearchClear: () => void
  editableSearchName: string
  editableColumnsName: string
  editableSearchOpen: (value: any) => void
}

export const crudContextDefaultValue = {
  searchDefinitions: [],
  handleOpen: (id: any) => {console.log(id)},
  editableColumns: false,
  editableSearch: false,
  editableTabs: false,
  selectedRows: [],
  clearSelection: () => {},
  handleRefresh: (options: any = {}) => { console.log(options) },
  getSearchFormRef: () => null,
  handleDelete: (id: any) => {console.log(id)},
  search: [],
  modalProps: {},
  editableSearchOpened: false,
  editableColumnsOpened: false,
  editableColumnsOpen: (value: any) => { console.log(value) },
  modals: {},
  handleSearchClear: () => {},
  editableSearchName: '',
  editableColumnsName: '',
  editableSearchOpen: (value: any) => { console.log(value) },
}

const CrudContext = React.createContext<CrudContextType>(crudContextDefaultValue)

export default CrudContext

export const useCrudContext = () => {
	const context = React.useContext(CrudContext)
	return context
}
