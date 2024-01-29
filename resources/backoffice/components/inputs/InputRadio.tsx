import { Radio, Space } from 'antd';
import fieldProps from './fieldProps';

const InputRadio = (props: any) => {
  const { options, onChange, value } = props

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={12}>Option AB</Radio>
      </Space>
    </Radio.Group>
  );
}

export default fieldProps(Radio)
