import React from 'react'
import { Select } from 'antd'
import { isObject } from 'formik'
import { StyleHTMLAttributes } from 'react'
import fieldProps from './fieldProps'
import {apiClient} from "@b/services/http/client";
import {getAxiosErrorMessage} from "@b/components/utils/getAxiosErrorMessage";

const { Option } = Select

const isIrisResource = (value: any) => isObject(value) && value['@id']

export interface AsyncSelectProps {
  valueKey?: string
  useIris?: boolean
  name: string,
  value?: any,
  onChange: (value: any) => void,
  parms?: any
  source: string
  valueLabel?: string
  mode?: undefined | 'multiple'
  style?: StyleHTMLAttributes<any>
  placeholder?: string
  disabled?: boolean
  getLabel?: (item: any) => any
  loading?: boolean
  prependOption?: any
  useAxios?: boolean
  className?: string
}

class AsyncSelect extends React.Component<AsyncSelectProps, any> {
  static defaultProps = {
    valueKey: '@id',
    useIris: true,
    useAxios: false
  }

  constructor(props: AsyncSelectProps) {
    super(props)
    this.state = {
      data: props.useIris && isIrisResource(props.value) ? [props.value] : [],
      error: null,
      loading: false
    }
  }

  componentDidMount() {
    this.refresh()
  }

  refresh() {
    const { parms, source } = this.props
    this.setState({ loading: true }, () => {
      apiClient
        .get(source, {
          params: {
            ...(parms || {}),
            pagination: false
          }
        })
        .then(res => this.setState({ data: res.data?.['hydra:member'] || res.data, error: null, loading: false }))
        .catch(e => {
          this.setState({ error: getAxiosErrorMessage(e), loading: false })
          // axiosErrorHandler(e)
        })
    })
  }

  render() {
    const {
      valueKey = '@id',
      valueLabel = 'label',
      mode,
      style,
      placeholder,
      useIris = false,
      disabled = false,
      prependOption,
      getLabel,
      className,
      value,
      onChange
    } = this.props

    // supporto valore iris
    let currentValue = value

    if (mode === 'multiple') {
      currentValue = currentValue?.map((v: any) => {
        return isObject(v) ? v[valueKey] : v
      }) || []
    } else if (useIris && isIrisResource(currentValue)) {
      currentValue = currentValue['@id']
    }

    if (this.state.error) {
      return <div className={'alert alert-danger'}>{this.state.error}</div>
    }

    const options = this.state.data.map((d: any) => (
      <Option value={d[valueKey]} key={d[valueKey]} item={d}>
        {getLabel ? getLabel(d) : d[valueLabel]}
      </Option>
    ))
    return (
      <Select
        showSearch
        className={className}
        style={style}
        placeholder={placeholder}
        allowClear
        value={currentValue}
        onChange={(value) => {
          onChange(value)
        }}
        mode={mode}
        loading={this.state.loading}
        filterOption={(input, option: any) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        disabled={disabled}
      >
        {prependOption}
        {options}
      </Select>
    )
  }
}

export default fieldProps(AsyncSelect)
