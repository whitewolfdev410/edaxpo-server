import React, {ReactNode, createContext, useEffect, useState} from "react";
import {useConfig} from "@/contexts";
const defaultLength = 20

const defaultPagination = {
  pageSize: defaultLength,
  current: 1,
  size: 'small',
  total: undefined
}
export const AsyncTableContext = createContext({} as any)

type AsyncTableProviderProps = {
  children ?: ReactNode,
  params : Record<any, any>
  source : string
}

export const AsyncTableProvider = ({ children, params, source }: AsyncTableProviderProps) => {
  const [state, setState] = useState({loading: true, response: null} as any)
  const [pagination, setPagination] = useState(defaultPagination)
  const config = useConfig()
  const getData = (parameters: Record<any, any>) => {
    /* const { parms, source, config } = props
    if (typeof source === 'function') {
      return source({
        params: {
          itemsPerPage: defaultLength,
          ...params,
          ...parms,
        },
      })
    } */
    return config.apiClient.get(source, {
      params: {
        itemsPerPage: pagination.pageSize,
        ...parameters,
        ...params,
      },
    })
  }

  useEffect(() => {
    setState((prevState: any) => ({...prevState, loading: true}))
    getData({page: pagination.current, itemsPerPage: pagination.pageSize}).then((res: any) => {
      setState((prevState: any) => ({...prevState, loading: false, response: res.data}))
      setPagination((prevState: any) => ({...prevState, total: res.data['hydra:totalItems']}))
    })
  }, [pagination.current, pagination.pageSize]);

  const refresh = (options = {}) => {
    setState((prevState: any) => ({...prevState, loading: true}))
    getData(options).then((res: any) => {
      setState((prevState: any) => ({...prevState, loading: false, response: res.data}))
    })
  }

  const value = {
    refresh,
    pagination,
    setPagination,
    ...state
  }

  return (
    <AsyncTableContext.Provider value={value}>
      {children}
    </AsyncTableContext.Provider>
  )
}

export const useAsyncTable = () => {
  return React.useContext(AsyncTableContext)
}
