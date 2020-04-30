import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { pickRandom } from '../helpers'
import {
  PokemonProps,
  SpeciesDataProps,
  ChangePokemonIndex,
} from '../components/shared/types'
import { usePokemonIndex, usePokemonName } from './index'

// Settings
const NUMBER_OF_POKEMONS = 807
const pokemonAPI = 'https://pokeapi.co/api/v2/'

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonProps | undefined>(undefined)
  const [pokemonIndex, setPokemonIndex] = useState(usePokemonIndex())
  const [loading, setLoading] = useState(true)
  let history = useHistory()
  const pokemonNameIndex = usePokemonName()

  useEffect(() => {
    if (pokemonNameIndex) {
      setPokemonIndex(pokemonNameIndex)
    }
    changePokemon(pokemonIndex)
  }, [pokemonIndex])

  async function changePokemon(pokemonIndex: number) {
    try {
      setLoading(true)
      const pokemonData = await fetch(
        `${pokemonAPI}pokemon/${pokemonNameIndex || pokemonIndex}`
      ).then((response) => response.json())

      const speciesRequest = pokemonData.species.url

      const speciesData: SpeciesDataProps = await fetch(
        speciesRequest
      ).then((response) => response.json())

      const flavorTexts = speciesData.flavor_text_entries
        .filter((entry) => entry.language.name === 'en')
        .map((entry) => entry.flavor_text)

      const description = pickRandom(flavorTexts)
      const evolutionRequest = speciesData.evolution_chain.url

      const evolutionData = await fetch(evolutionRequest).then((response) =>
        response.json()
      )

      const evolutions = []
      const first = evolutionData.chain
      let second
      let third

      const evolution1 = fetch(`${pokemonAPI}pokemon/${first.species.name}/`)
      evolutions.push(evolution1)
      second = first.evolves_to[0]

      if (second) {
        const evolution2 = fetch(`${pokemonAPI}pokemon/${second.species.name}/`)
        evolutions.push(evolution2)
        third = second.evolves_to[0]
      }

      if (third) {
        const evolution3 = fetch(`${pokemonAPI}pokemon/${third.species.name}/`)
        evolutions.push(evolution3)
      }

      Promise.all(evolutions).then((responses) => {
        Promise.all(responses.map((response) => response.json())).then(
          (pokemons) => {
            const sprites = pokemons.map((pokemon) => {
              return pokemon.sprites.front_default
            })
            const names = pokemons.map((pokemon) => {
              return pokemon.name
            })

            setLoading(false)
            setPokemon({
              ...pokemon,
              pokemonData,
              speciesData,
              pokemonDescription: description,
              evolutionSprites: sprites,
              evolutionNames: names,
            })
          }
        )
      })
    } catch (error) {
      console.error(error)
    }
  }
  const changePokemonIndex: ChangePokemonIndex = (newIndex) => {
    if (newIndex < 1 || newIndex > NUMBER_OF_POKEMONS) {
      return
    }
    history.push(`/pokemon/${newIndex}`)
    return setPokemonIndex(newIndex)
  }
  return { pokemon, pokemonIndex, loading, changePokemonIndex }
}

export default usePokemon
