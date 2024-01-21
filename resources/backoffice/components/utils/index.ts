import { renderPercAmount } from '../table/renders'

export function isEmptyValue(value: any) {
  return value === undefined || value === null || value === '' || value === 0
}

export const getSorter = (field:string) => (a: any, b: any) => (parseFloat(a[field]) || 0) - (parseFloat(b[field]) || 0)

export function calculatePercentage(initialValue: number, finalValue: number, formated = false) {
  if (isEmptyValue(finalValue)) {
    if (formated) {
      return renderPercAmount(-100)
    }
    return -100
  }
  let result = ((finalValue - initialValue) / initialValue * 100)

  if (result === Infinity) {
    result = 100
  }

  if (formated) {
    return renderPercAmount(result)
  }
  return result
}
