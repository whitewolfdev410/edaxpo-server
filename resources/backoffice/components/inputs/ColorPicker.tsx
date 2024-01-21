import { ColorPicker as AnColorPicker } from 'antd'
import React from 'react'
import { DownOutlined } from '@ant-design/icons'

const ColorPicker = (props: any) => {
  const { field, form, disabled } = props
  const { value } = field
  const [open, setOpen] = React.useState(false)

  return (
    <AnColorPicker
      onChange={(color, hex) => {
        form.setFieldValue(field.name, hex)
      }}
      value={value}
      defaultValue={'#0E8D38'}
      disabled={disabled}
      showText={() => (
        // eslint-disable-next-line react/jsx-no-undef
        <DownOutlined
          rotate={open ? 180 : 0}
          style={{
            color: '#999999'
          }}
        />
      )}

    />
  )
}

export default ColorPicker
