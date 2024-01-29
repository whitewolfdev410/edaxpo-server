import { Input as AntInput } from 'antd'
import React from 'react'
import fieldProps from './fieldProps'

const InputText = (props: any) => {
  const { name, style, formatter, parser, onChange, value } = props

  return (
    <>
      <AntInput.TextArea
        style={style}
        className={'h-[36px] w-full'}
        name={name}
        value={value}
        autoSize
        onChange={onChange}
      />
    </>
  )
}

export default fieldProps(InputText)
