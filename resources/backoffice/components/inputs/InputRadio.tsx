import { Radio, Space } from 'antd';
import fieldProps from './fieldProps';

const InputRadio = (props: any) => {
  const {options , onChange, value } = props

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
          {options.map((i: any) => (
            <Radio key={i.id} value={i.id}>{i.label}</Radio>
          ))}
      </Space>
    </Radio.Group>
  );
}

export default fieldProps(InputRadio)
