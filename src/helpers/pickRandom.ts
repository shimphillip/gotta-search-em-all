export const pickRandom = (arr: string[]): string =>
  arr[Math.floor(Math.random() * arr.length)]

export const pickRandomIndex = (arr: any[]): number =>
  Math.floor(Math.random() * arr.length)
