import { InputNumber, Radio, Space } from 'antd';
import fieldProps from './fieldProps';

const InputCurrency = (props: any) => {
  const {options , onChange, value } = props
// formatter and parser input number
const formatterNumber = (val:any) => {
    if (!val) return 0;
    return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/\.(?=\d{0,2}$)/g, ",");
  }
  
  const parserNumber = (val:any) => {
    if (!val) return 0;
    return Number.parseFloat(val.replace(/\$\s?|(\.*)/g, "").replace(/(\,{1})/g, ".")).toFixed(2)
  }
  return (
<InputNumber 
  {...props}
  formatter={(value) => formatterNumber(value)}
  parser={(value) => parserNumber(value)}
/>
  );
}

export default fieldProps(InputCurrency)
