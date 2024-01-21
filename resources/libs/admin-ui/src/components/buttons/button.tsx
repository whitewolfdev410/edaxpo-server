import {Button as BButton, ButtonProps as BButtonProps} from 'reactstrap'
import React from 'react'
import {Tooltip} from "antd";

export interface ButtonProps extends BButtonProps {
  loading? : boolean,
  children: any,
  title?: any
}

export const Button = ({ loading, children, title, ...props }: ButtonProps) => {
  const button = (
    <BButton disabled={loading} {...props}>
      {loading && <i className="fa fa-circle-o-notch fa-spin fa-fw" />} {children}
    </BButton>
  )
  return title ? (
    <Tooltip title={title}>
      {button}
    </Tooltip>
  ) : (
    button
  )
}
