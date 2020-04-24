export const getLocalStorage = (key: string) => {
  if (!localStorage.getItem(key)) {
    return 25
  }
  return Number(localStorage.getItem(key))
}

export const setLocalStorage = (key: string, value: string | number) => {
  localStorage.setItem(key, value.toString())
}
