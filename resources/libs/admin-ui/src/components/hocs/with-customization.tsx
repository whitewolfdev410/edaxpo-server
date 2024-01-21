import React, { useCallback, useEffect, useMemo, useReducer } from 'react'
import {Skeleton} from "antd";
import { applyCustomizationToDefinitions } from './applyCustomizationToDefinitions'
import {useConfig} from "@/contexts";

const initialState = {
  loading: true,
  visibleFields: [],
  customizedFields: [],
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'set':
      return { ...state, ...action.payload }
    default:
      throw new Error()
  }
}


const withCustomization = ({
  identifier = 'name',
  labelKey = 'labelKey',
  labelTenantKey = 'labelTenantKey',
  prefix = '',
  definitionsProp,
  renderLabelProp,
  modalTitle,
  classNameSkeleton
}: any) => (WrappedComponent: any) => {
  const WithCustomizationComponent = ({
    onCustomizationClose,
    customizationOpened,
    customizationName: customizationId,
    definitions: defItems = [],
    ...props
  }: any) => {
    // const {editableSearchOpen, editableSearchOpened, editableSearchName} = useContext(CrudContext)
    const [state, dispatch] = useReducer(reducer, initialState, undefined)
    const { apiClient, SearchSettingsComponent } = useConfig()

    const definitions = definitionsProp ? props[definitionsProp] : defItems
    const customizationName = customizationId ? `${prefix}${customizationId}` : customizationId

    const refresh = useCallback(() => {
      apiClient
        .get('/api/customization_vars', {
          params: {
            'customization.type': customizationName,
            pagination: false,
          },
        })
        .then((response: any) => {
          const { visibleFields, customizedFields } = applyCustomizationToDefinitions(response.data['hydra:member'],definitions,identifier)
          dispatch({ type: 'set', payload: { visibleFields, customizedFields, loading: false } })
        })
    }, [customizationName, definitions, dispatch])

    useEffect(refresh, [refresh])

    const sortedFields = useMemo(() => {
      return state.visibleFields.sort((a: any, b: any) => a.position - b.position)
    }, [state.visibleFields])

    if (state.loading) {
      return <Skeleton active style={{ marginTop: 10 }} className={classNameSkeleton} />
    }

    if (!definitions || !customizationId) {
      console.log('Error: missing props', props)
      return (
        <div>
          Error: missing props
          <pre>
            prefix: {prefix}
            {'\n'}
            definitions: {definitions.length}
            {'\n'}
            customizationId: {customizationId}
          </pre>
        </div>
      )
    }

    return (
      <>
        <WrappedComponent sortedFields={sortedFields} {...props} />
        {(customizationOpened && SearchSettingsComponent) && (
          <SearchSettingsComponent
            type={customizationName}
            onSave={refresh}
            modalTitle={modalTitle}
            identifier={identifier}
            labelKey={labelKey}
            labelTenantKey={labelTenantKey}
            onClose={onCustomizationClose}
            renders={renderLabelProp ? props.renders : undefined}
            renderLabelProp={renderLabelProp}
            fields={state.customizedFields}
          />
        )}
      </>
    )
  }
  return WithCustomizationComponent
}

export default withCustomization
