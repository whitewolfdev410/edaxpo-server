import React, {useMemo} from 'react'

type Action<T> = { type: 'SET'; payload: T }

export const genericReducer = <T = any>(state: T, action: Action<T>): T => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}


export const ModalsContext = React.createContext({} as any)

const defaultState = {
  items: []
}

const initStateForm = (options: any) => ({...options})

export const ModalsContextProvider = ({children}: any) => {
  const [state, dispatch] = React.useReducer(genericReducer as typeof genericReducer<any>, defaultState)

  const modalActions = useMemo(() => {
    return {
      open: (modalKey: string, options: any) => {
        dispatch({
          type: 'SET',
          payload: {
            ...state,
            items: [
              ...state.items,
              initStateForm({_type: modalKey, ...options})
            ]
          }
        })
      },
      close: (index: number) => {
        dispatch({
          type: 'SET',
          // payload: update(state, {items: {$splice: [[index, 1]]}})
          payload: {
            ...state,
            items: state.items.filter((_: any, i: any) => i !== index)
          }
        })
      },
      items: state.items
    }
  }, [state.items])

  return (
    <ModalsContext.Provider value={modalActions}>
      {children}
    </ModalsContext.Provider>
  )
}

export const useModalsNavigator = () => {
  return React.useContext(ModalsContext)
}
