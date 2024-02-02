import { Radio, Space } from 'antd';
import fieldProps from './fieldProps';
import { FormattedMessage } from 'react-intl';

const InputRadio = (props: any) => {
  const {options , onChange, value } = props

  return (
    <Radio.Group onChange={onChange} value={value}>
          {options.map((i: any) => (
            <Radio key={i.id} value={i.id}><FormattedMessage id={i.label} /></Radio>
          ))}
    </Radio.Group>
  );
}

export default fieldProps(InputRadio)
