import React from 'react'
import { Switch as AntSwitch } from 'antd'
import fieldProps from "@b/components/inputs/fieldProps";

function Switch(props: any) {

  const onChange = (newValue: any) => {
    props.onChange(props.name, newValue)
  }

  return (
    <AntSwitch
      checked={props.value}
      onChange={(checked) => onChange(checked)}
      className={'w-max-4xl'}
    />
  )
}

export default fieldProps(Switch)
