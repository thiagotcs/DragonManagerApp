import { format, isValid, parse, parseISO } from 'date-fns'
import { orderBy } from 'lodash'
import { IDragonData } from '../types/apiTypes'

export function firstCapitalLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function formatDatePT(value: string) {
  let date

  if (value.includes('-')) {
    date = parseISO(value)
  } else {
    date = parse(value, 'dd/MM/yyyy', new Date())
  }

  if (!isValid(date)) {
    return 'Data inválida'
  }

  return format(date, 'dd/MM/yyyy')
}

export function orderByArray(array: IDragonData[]) {
  const normalizedArray = array.map((item) => ({
    ...item,
    name: item.name.trim().toLowerCase(),
  }))
  const orderDragons = orderBy(normalizedArray, ['name'], ['asc'])
  return orderDragons
}
