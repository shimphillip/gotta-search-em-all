import { useLocation } from 'react-router-dom'
import { getPokemonNames } from '../helpers'

// default returns empty string. Later this is used in a ternary operator which will default to Pikachu
const usePokemonName = (): number => {
  const slug = useLocation().pathname.split('/')[1]
  const name = useLocation().pathname.split('/')[2].toLowerCase()

  // if missing the path 'pokemon'
  // if missing a name value
  // if the value is not a string
  if (slug !== 'pokemon' || !name || !isNaN(Number(name))) {
    return 0
  }

  // not a valid pokemon name
  const pokemonNameIndex = getPokemonNames()[name]
  if (!pokemonNameIndex) {
    return 0
  }

  return pokemonNameIndex
}

export default usePokemonName
