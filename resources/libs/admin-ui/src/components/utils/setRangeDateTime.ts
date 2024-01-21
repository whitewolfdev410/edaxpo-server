import {parseISO, set} from "date-fns"

type setRangeDateTimeInputs = {
  startDate?: string | null
  endDate?: string | null
}

type setRangeDateTimeSetters = {
  date?: string,
  startTime?: string,
  endTime?: string
}

type settersType = {
  year?: number
  month?: number
  date?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}

export const setRangeDateTime = (inputs: setRangeDateTimeInputs, setters: setRangeDateTimeSetters): setRangeDateTimeInputs => {

  if(setters.date === null || setters.startTime === null){
    return {
      startDate: null,
      endDate: null
    }
  }

  if(setters.endTime === null && inputs.startDate){
    return {
      startDate: parseISO(inputs.startDate).toISOString(),
      endDate: null
    }
  }

  const values = inputs

  const selectedDate = setters.date ? parseISO(setters.date) : new Date()
  const currentStartDate = values.startDate ? parseISO(values.startDate) : selectedDate
  let currentEndDate = values.endDate ? parseISO(values.endDate) : null

  let setters1: settersType = {
    date: currentStartDate.getDate(),
    month: currentStartDate.getMonth(),
    year: currentStartDate.getFullYear(),
    seconds: 0,
    milliseconds: 0
  }

  let setters2: settersType | undefined

  if(setters.date && values.endDate){
    setters1 = {
      date: selectedDate.getDate(),
      month: selectedDate.getMonth(),
      year: selectedDate.getFullYear(),
      seconds: 0,
      milliseconds: 0
    }
    setters2 = {
      date: selectedDate.getDate(),
      month: selectedDate.getMonth(),
      year: selectedDate.getFullYear(),
      seconds: 0,
      milliseconds: 0
    }
  }

  if(setters.startTime){
    const startTimeChunks = setters.startTime.split(":")
    setters1.hours = startTimeChunks[0] ? parseInt(startTimeChunks[0],10) : undefined
    setters1.minutes = startTimeChunks[1] ? parseInt(startTimeChunks[1],10) : undefined
  }

  if(setters.endTime){
    const endTimeChunks = setters.endTime.split(":")
    currentEndDate = currentEndDate || currentStartDate

    const hours = endTimeChunks[0] ? parseInt(endTimeChunks[0],10) : undefined
    const minutes = endTimeChunks[1] ? parseInt(endTimeChunks[1],10) : undefined

    // inizializzo el startTime se è vuoto
    if(!values.startDate){
      setters1.hours = hours ? hours - 1 : undefined
      setters1.minutes = minutes
    }

    currentEndDate = currentEndDate || currentStartDate
    setters2= {
      date: currentEndDate.getDate(),
      month: currentEndDate.getMonth(),
      year: currentEndDate.getFullYear(),
      hours,
      minutes,
      seconds: 0,
      milliseconds: 0
    }

    if(
      values.startDate &&
      currentStartDate >= set(currentStartDate,setters2)
    ){
      currentEndDate = null
    }
  }

  return ({
    startDate: set(currentStartDate,setters1).toISOString(),
    endDate: currentEndDate ? (setters2 ? set(currentEndDate, setters2) : currentEndDate).toISOString(): null
  })
}
