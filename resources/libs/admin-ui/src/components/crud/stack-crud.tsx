import React, {useCallback, useEffect, useState} from 'react'
import Crud from '@/components/crud'
import {useConfig} from "@/contexts";
import {CrudProps} from "./crud-props";

type StackCrudProps = CrudProps & {
    detailPageComponent: any
    getDetailPagePath: (itemId: any) => string
    defaultItem?: any
    itemId?: string
}

export const StackCrud = (props: StackCrudProps) => {
  const {
    itemId,
    getDetailPagePath,
    detailPageComponent: DetailPage,
    defaultItem,
    ...rest
  } = props
  const {navigate} = useConfig()
  const [masterLoaded, setMasterLoaded] = useState(!itemId)
  const [tableRefreshProp, setTableRefreshProp] = useState(0)

  useEffect(()=> {
    setMasterLoaded(true)
  },[itemId])

  const onOpenForm = useCallback(
    (id = 0) => navigate.push(getDetailPagePath(id)),
    [navigate],
  )

  return (
    <>
      <div style={{display: !itemId ? "block" : "none"}}>
        {masterLoaded && (
          <Crud
            tableRefreshProp={tableRefreshProp}
            onOpenForm={onOpenForm}
            {...rest}
          />
        )}
      </div>
      {itemId && (
        <DetailPage
          onClose={() => {
            navigate.goBack()
            setTableRefreshProp(tableRefreshProp+1)
          }}
          defaultItem={defaultItem}
          key={itemId}
          itemId={itemId}
          history={history}
        />
      )}
    </>
  )
}
