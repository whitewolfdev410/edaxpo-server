import React from 'react'

const defaultValue = {
  handleSave: () => Promise.resolve(),
  handleSaveAndClose:  () => Promise.resolve(),
  handleDelete: null,
  handleClose: null,
  buttonsConfig: {},
  remote: {},
  getForm: () => null
}

type PageContextType = {
  handleSave: () => Promise<any>,
  handleSaveAndClose: () => Promise<any>,
  handleDelete: any,
  handleClose: any,
  buttonsConfig: any,
  remote: any
  getForm: () => any
}

export const PageContext = React.createContext<PageContextType>(defaultValue)

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageProvider')
  }
  return context
}
