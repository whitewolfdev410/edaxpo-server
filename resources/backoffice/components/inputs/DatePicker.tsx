import dayjs from 'dayjs'
import { DatePicker as AnDatePicker } from 'antd'
import './datePickerStyle.css'
import { useIntl } from 'react-intl'

const dateFormat = 'DD/MM/YYYY'
const formatter = (m: any, format: string | null) => {
  if (!format) return m.toISOString()
  return format === 'X' ? parseInt(m.format(format), 10) : m.format(format)
}

const DatePicker = (props: any) => {
  const { field, form, format = null, disabled, disabledDate } = props
  const intl = useIntl()
  const { value } = field

  return (
    <AnDatePicker
      onChange={m => form.setFieldValue(field.name, m ? formatter(m, format) : m)}
      className='w-full h-[36px]'
      value={value ? dayjs(value, format === 'X' ? 'X' : undefined) : null}
      format={dateFormat}
      disabled={disabled}
      disabledDate={disabledDate}
    />
  )
}

export default DatePicker
