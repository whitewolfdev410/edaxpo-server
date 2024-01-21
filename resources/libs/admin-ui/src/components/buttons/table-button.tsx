import React from 'react'
import { Button, ButtonProps } from './Button'

export const TableButton = ({ loading, children, className, disabled, ...props }: ButtonProps) => (
  <Button loading={false} {...props} className={`btn-table ${className}`} disabled={loading || disabled}>
    {loading && <i className="fa fa-circle-o-notch fa-spin fa-fw" />} {children}
  </Button>
)

export const ButtonDisabled = ({
  icon,
  className,
  title,
  color = '#707070',
  bdColor = '#ECECEC',
  bgColor = '#ECECEC',
}: any) => (
  <Button
    disabled
    className={`btn-table ${className}`}
    style={{ borderColor: bdColor, backgroundColor: bgColor, height: 35, opacity: 0.65 }}
  >
    <div style={{ color }}>
      {title} {icon}
    </div>
  </Button>
)
