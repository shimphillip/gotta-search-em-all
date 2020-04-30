import { useLocation } from 'react-router-dom'

// The default returns Pikachu
const usePokemonIndex = (): number => {
  const slug = useLocation().pathname.split('/')[1]
  const index = useLocation().pathname.split('/')[2]

  // if missing the path 'pokemon'
  // if missing a index value
  // if the value is not a number
  if (slug !== 'pokemon' || !index || isNaN(Number(index))) {
    return 25
  }

  // check boundary
  if (Number(index) < 1 || Number(index) > 807) {
    return 25
  }

  return Number(index)
}

export default usePokemonIndex
