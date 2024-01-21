import * as React from 'react'
import { useModalsNavigator } from '@/contexts'

export function withModalsNavigator(WrappedComponent: any) {
  return (props: any) => {
    const modalActions = useModalsNavigator()
    return <WrappedComponent modals={modalActions} {...props} />
  }
}
