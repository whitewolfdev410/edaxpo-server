import React from 'react'

const _onChange = (props, { setFieldValue, setValues, ...form }) => (parm1, context = {}) => {
  if (props.setValues) {
    setValues({ ...form.values, ...props.setValues(parm1, context) })
  } else {
    let value
    const { name } = props.field
    // native event
    if (parm1 && parm1.target) {
      const { target } = parm1
      if (target.type === 'checkbox') value = target.checked ? 1 : 0
      else value = target ? target.value : null
      // name = target.name;
    } else if (parm1 == null) {
      value = null
    } else {
      value = parm1
    }
    setFieldValue(name, value)
    if (props.onAfterChange) {
      props.onAfterChange(value)
    }
  }
}

const fieldProps = Component => {
  const FielWithProps = ({ value, ...props }) => {
    // const renderCounter = React.useRef(0)
    // renderCounter.current += 1;
    if (props.field && props.form) {
      return (
        <Component
          name={props.field ? props.field.name : props.name}
          onChange={_onChange(props, props.form)}
          value={props.field ? props.field.value : props.value}
          {...props}
        />
      )
    }
    return <Component value={value} {...props} />
  }
  FielWithProps.displayName = `FielWithProps(${getDisplayName(Component)})`
  return FielWithProps
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default fieldProps
