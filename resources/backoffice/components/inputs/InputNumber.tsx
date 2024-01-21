import { InputNumber as AntInputNumber } from 'antd'
import React from 'react'
import fieldProps from './fieldProps'

const InputNumber = (props: any) => {
  const { name, style, formatter, parser, onChange, value } = props

  return (
    <>
      <AntInputNumber
        style={style}
        className={'h-[36px] w-full'}
        name={name}
        value={value}
        formatter={formatter}
        parser={parser}
        onChange={onChange}
        precision={2}
      />
    </>
  )
}

export default fieldProps(InputNumber)
