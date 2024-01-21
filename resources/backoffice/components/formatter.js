const options = new Intl.NumberFormat('it', {
  style: 'currency',
  currency: 'EUR'
}).resolvedOptions()

// eslint-disable-next-line import/prefer-default-export
export const amountFormat = new Intl.NumberFormat('it', {
  ...options,
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
})

export const amountFormatWithZero = new Intl.NumberFormat('it', {
  ...options,
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export const amountPreciseFormat = new Intl.NumberFormat('it', {
  ...options,
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 5
})

export const amountPreciseFormatWithZero = new Intl.NumberFormat('it', {
  ...options,
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 5
})
