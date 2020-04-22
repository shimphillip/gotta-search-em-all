export const padTexts = (
  name: string,
  value: string | number,
  symbol: string,
  length: number
) => {
  value = value || '0'
  value = value.toString()

  return `
      ${name}${symbol.repeat(length - (value.length + name.length))}${value}`
}
