import { FormattedMessage } from 'react-intl'
import React from 'react'
import { format } from 'date-fns'
import { notification } from 'antd'

export function timeDifferenceShort(previous) {
  const current = new Date();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = current - previous;
  if (elapsed < msPerDay ) {
    return `${Math.round(elapsed/msPerHour )  }h`;
  }
  if (elapsed < msPerMonth) {
    return `${  Math.round(elapsed/msPerDay)  }d`;
  }
  if (elapsed < msPerYear) {
    return `${  Math.round(elapsed/msPerMonth)  }m`;
  }
  return `${  Math.round(elapsed/msPerYear )  }y`;
}

export function getDimensions() {
  const w = window
  const d = document
  const e = d.documentElement
  const g = d.getElementsByTagName('body')[0]
  const x = w.innerWidth || e.clientWidth || g.clientWidth
  const y = w.innerHeight || e.clientHeight || g.clientHeight
  return { x, y }
}

export function chunkArray(myArray, chunk_size) {
  let index = 0
  const arrayLength = myArray.length
  const tempArray = []

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size)
    // Do something if you want with the group
    tempArray.push(myChunk)
  }

  return tempArray
}

export function timeDifference(current, previous) {
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = current - previous

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)} sec fa`
  }

  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} min fa`
  }

  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} ore fa`
  }

  if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} giorni fa`
  }

  if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} mesi fa`
  }

  return `${Math.round(elapsed / msPerYear)} anni fa`
}

export function relativeTime(previous) {
  return timeDifference(new Date().getTime(), previous)
}

export function getWindowHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}

export function getHeight(element) {
  return element.innerHeight || element.clientHeight
}

export function applySearchDefinitions(definitions, configMap) {
  const config = configMap[definitions.name] || undefined
  return {
    ...definitions,
    ...config,
    label: <FormattedMessage id={definitions.labelKey} defaultMessage={definitions.title} />,
  }
}

export const getIris = value => {
  if (!value || typeof value === 'string') return value

  return value['@id']
}

export const getIrisId = value => {
  const iris = getIris(value)
  return iris ? iris.split('/').pop() : iris
}

export const formatDateLocale = (date, formatStr) => {
  if (!date) return ''
  if (date instanceof Date) {
    date = date.toLocaleString()
  }
  return format(date, formatStr)
}

export const isEmpty = value => {
  if (value === undefined || value === null) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

export const axiosErrorHandler = (error, defaultResponseMessage = undefined) => {
  if (defaultResponseMessage) {
    defaultResponseMessage({
      error: true,
      message: getAxiosErrorMessage(error)
    })
  } else {
    notification.error({
      message: getAxiosErrorMessage(error),
      placement: 'bottomRight',
    })
  }
  return null;
}

export const getAxiosErrorMessage = e => {
  return (
    e.response?.data?.['hydra:description'] ||
    e.response?.data?.detail ||
    e.response?.data?.message ||
    e.message ||
    'Error: riprovare piu tardi'
  )
}

export const customerCare = (user) => user.role.includes('ROLE_CUSTOMER_CARE')
