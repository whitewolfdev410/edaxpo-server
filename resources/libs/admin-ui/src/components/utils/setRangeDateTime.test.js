import { deepStrictEqual } from 'assert'
import {format, parseISO, set} from 'date-fns'
import {setRangeDateTime} from './setRangeDateTime'

describe('setRangeDateTime', () => {
  const currentDate = Date.now()
  const currentFormatedDate = format(currentDate, "yyyy-MM-dd")

  it('set date with empty inputs', () => {
    const result = setRangeDateTime({}, {
      date: currentFormatedDate
    })
    deepStrictEqual(result, {
      startDate: parseISO(currentFormatedDate).toISOString(),
      endDate: null
    }, '')
  })

  it('set startTime with empty inputs', () => {
    const result = setRangeDateTime({}, {
      startTime: "09:00"
    })
    deepStrictEqual(result, {
      startDate: set(parseISO(currentFormatedDate),{ hours: 9, minutes: 0}).toISOString(),
      endDate: null
    }, '')
  })

  it('set endTime with empty inputs', () => {
    const result = setRangeDateTime({}, {
      endTime: "09:00"
    })
    deepStrictEqual(result, {
      startDate: set(parseISO(currentFormatedDate),{ hours: 8, minutes: 0}).toISOString(),
      endDate: set(parseISO(currentFormatedDate),{ hours: 9, minutes: 0}).toISOString(),
    }, '')
  })

  it('set startTime with only startDate', () => {
    const startDate = "2020-12-01 22:00:00"
    const result = setRangeDateTime({
      startDate
    }, {
      startTime: "09:00"
    })
    deepStrictEqual(result, {
      startDate: set(parseISO(startDate),{ hours: 9, minutes: 0}).toISOString(),
      endDate: null
    }, '')
  })

  it('set endTime with only startDate', () => {
    const startDate = "2020-12-01 22:00:00"
    const result = setRangeDateTime({
      startDate
    }, {
      endTime: "23:00"
    })
    deepStrictEqual(result, {
      startDate: parseISO(startDate).toISOString(),
      endDate: set(parseISO(startDate),{ hours: 23, minutes: 0}).toISOString()
    }, '')
  })

  it('setto entime minore al startime', () => {
    const startDate = "2020-12-01 08:00:00"
    const result = setRangeDateTime({
      startDate
    }, {
      endTime: "05:00"
    })
    deepStrictEqual(result, {
      startDate: set(parseISO(startDate),{ hours: 8, minutes: 0}).toISOString(),
      endDate:  null
    }, '')
  })

  it('setto entime maggiore al startime', () => {
    const startDate = "2020-12-01 08:00:00"
    const result = setRangeDateTime({
      startDate
    }, {
      endTime: "10:00"
    })
    deepStrictEqual(result, {
      startDate: set(parseISO(startDate),{ hours: 8, minutes: 0}).toISOString(),
      endDate: set(parseISO(startDate),{ hours: 10, minutes: 0}).toISOString()
    }, '')
  })


  it('setto starttime con a los valores existentes', () => {
    const startDate = "2020-12-01 08:00:00"
    const endDate = "2020-12-01 09:00:00"
    const result = setRangeDateTime({
      startDate,
      endDate
    }, {
      startTime: "08:30"
    })
    deepStrictEqual(result, {
      startDate: set(parseISO(startDate),{ hours: 8, minutes: 30}).toISOString(),
      endDate: set(parseISO(startDate),{ hours: 9, minutes: 0}).toISOString()
    }, '')
  })

  it('setto date con a los valores existentes', () => {
    const startDate = "2020-12-01 08:00:00"
    const endDate = "2020-12-01 09:00:00"
    const result = setRangeDateTime({
      startDate,
      endDate
    }, {
      date: "2020-12-31"
    })
    deepStrictEqual(result, {
      startDate: set(parseISO("2020-12-31"),{ hours: 8, minutes: 0}).toISOString(),
      endDate: set(parseISO("2020-12-31"),{ hours: 9, minutes: 0}).toISOString()
    }, '')
  })


  it('set null', () => {
    const startDate = "2020-12-01 08:00:00"
    const endDate = "2020-12-01 09:00:00"

    const inputs = {
      startDate,
      endDate
    }

    const result = setRangeDateTime(inputs, {
      date: null
    })

    deepStrictEqual(result, {
      startDate: null,
      endDate: null
    }, 'Null tutto')

    const result2 = setRangeDateTime(inputs, {
      startTime: null
    })

    deepStrictEqual(result2, {
      startDate: null,
      endDate: null
    }, 'Null tutto 2')

    const result3 = setRangeDateTime(inputs, {
      endTime: null
    })

    deepStrictEqual(result3, {
      startDate: parseISO(startDate).toISOString(),
      endDate: null
    }, 'Null end time')

  })
})
