// Flavor texts is an array that usually contains exact words
// separated by new lines/tabs and spaces after certain length.
// This function naively checks subsequent item for the first 10 letters
// and if same, remove them.

export const getUniqueItems = (arr: string[]) => {
  const uniqueItems = [arr[0]]

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i]
    let next = arr[i + 1]

    if (current.slice(0, 10) !== next.slice(0, 10)) {
      uniqueItems.push(next)
    }
  }

  return uniqueItems
}
