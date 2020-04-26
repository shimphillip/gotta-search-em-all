const getLocalStorage = (key: string): number => {
  if (!localStorage.getItem(key)) {
    return 25
  }
  return Number(localStorage.getItem(key))
}

const setLocalStorage = (key: string, value: string | number) => {
  localStorage.setItem(key, value.toString())
}

export default {
  getLocalStorage,
  setLocalStorage,
}
