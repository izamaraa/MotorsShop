export const isValidNumber = (value: string, isNotYear?: boolean) => {
  const isNumber = +value

  if (typeof isNumber !== 'number' || Number.isNaN(isNumber)) return false

  if (isNotYear) return true

  const currentYear = new Date().getFullYear()

  if (isNumber < 1900 || isNumber > currentYear) return false

  return true
}
