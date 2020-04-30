import { useLocation } from 'react-router-dom'

const usePokemonIndex = (): number => {
  const index = useLocation().pathname.split('/')[2]

  if (!index) {
    // you know what it is! Pikachu!
    return 25
  }
  return Number(index)
}

export default usePokemonIndex
