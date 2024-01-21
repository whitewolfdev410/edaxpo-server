import React from 'react'
import { Tooltip } from 'antd'
import format from 'date-fns/format'
import { amountFormat, amountFormatWithZero } from '../formatter'

export const renderTime = d => {
  try {
    if (d && d !== '') d = format(new Date(d), 'HH:mm')
  } catch (e) {
    console.log('invalid', `[${d}]`, e.message)
  }
  return d
}

export const renderDate = d => {
  try {
    if (d && d !== '') d = format(new Date(d), 'dd/MM/yyyy')
  } catch (e) {
    console.log('invalid', `[${d}]`, e.message)
  }
  return d
}

const IconButton = ({ icon, title }) => (
  <Tooltip title={title}><div className={styles.itemIcon}><i className={icon} /></div></Tooltip>
)

export const renderContactIcons = (d, { email, secondaryEmail, phone, mobile, skype, facebook, twitter, website }) => {
  return (
    <div className={styles.itemIcons}>
      {phone && <IconButton title={`${phone} ${mobile}`} icon={'fa fa-phone'} />}
      {email && <IconButton title={`${email} ${secondaryEmail}`} icon={'fa fa-envelope-o'} />}
      {skype && <IconButton title={skype} icon={'fa fa-skype'} />}
      {facebook && <IconButton title={`${facebook} ${twitter}`} icon={'fa fa-facebook-square'} />}
      {website && <IconButton title={website} icon={'fa fa-internet-explorer'} />}
    </div>
  )
}

export const renderEuroAmount = (d, zero = true) => {
  if (d !== null && d !== undefined && !isNaN(d)) {
    return amountFormatWithZero.format(d) + ' €'
  }
  return zero ? amountFormatWithZero.format(0) + ' €' : ''
}

export const renderPercAmount = (d, zero = true) => {
  if (d === Infinity) return amountFormatWithZero.format(d)
  if (d !== null && d !== undefined && !isNaN(d)) {
    return amountFormatWithZero.format(d) + ' %'
  }
  return zero ? amountFormatWithZero.format(0) + ' %' : ''
}


export const renderAmount = (d, zero = true) => {
  if (d !== null && d !== undefined && !isNaN(d)) {
    return amountFormatWithZero.format(d)
  }
  return zero ? amountFormatWithZero.format(0) : null
}

export const renderAmountWithoutEmptyDecimals = (d, zero = true) => {
  if (d !== null && d !== undefined) {
    return amountFormat.format(d)
  }
  return zero ? amountFormat.format(0) : ''
}



export const printName = d => (d ? d.name : '')

export const printFullName = d => (d ? d.fullName : '')
