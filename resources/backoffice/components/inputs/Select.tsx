import React from 'react'
import { Select as ASelect } from 'antd'
import { FormattedMessage } from 'react-intl'
import { isObject } from 'formik'
import fieldProps from './fieldProps'

const isIrisResource = (value: any) => isObject(value) && value['@id']

const _renderOption = (items: any) =>
  items.map((item: any) => (
    <ASelect.Option key={item.value || item.id} value={item.value || item.id} item={item}>
      {item.label || <FormattedMessage id={item.labelKey} />}
    </ASelect.Option>
  ))


function Select(props: any) {
  const {
    value,
    valueKey = '@id',
    onChange,
    children,
    items,
    allowClear = true,
    disabled,
    empty,
    mode,
    style,
    placeholder,
    filterOption,
    filterSort,
    className
  } = props

  // supporto valore iris
  let currentValue = value
  if (value && isIrisResource(currentValue)) {
    currentValue = currentValue[valueKey]
  }

  return (
    <ASelect
      allowClear={allowClear}
      mode={mode}
      disabled={disabled}
      value={currentValue}
      placeholder={placeholder}
      style={style}
      className={className}
      onChange={(value, option) => {
        onChange(value, option)
      }}
      filterOption={filterOption}
      filterSort={filterSort}
    >
      {empty && <ASelect.Option value=''>{''}</ASelect.Option>}
      {items && _renderOption(items)}
      {children}
    </ASelect>
  )
}

export default fieldProps(Select)

