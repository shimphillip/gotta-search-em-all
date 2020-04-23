import React, { useState, useEffect } from 'react'
import Container from './PokedexStyles'
import LeftPanel from './LeftPanel'
import Divider from './Divider'
import RightPanel from './RightPanel'
import { pokemonAPI, pickRandom } from '../helpers'

const NUMBER_OF_POKEMONS = 807

export interface PokemonProps {
  pokemonData: {
    name: string
    sprites: {
      back_female: string | null
      back_shiny_female: string | null
      back_default: string | null
      front_female: string | null
      front_shiny_female: string | null
      back_shiny: string | null
      front_default: string | null
      front_shiny: string | null
      [key: string]: string | null
    }
    types: TypeProps[]
    stats: Stat[]
    moves: MovesProps[]
  }
  pokemonDescription: string
  speciesData: SpeciesDataProps
  evolutionSprites: string[]
  evolutionNames: string[]
}

interface SpeciesDataProps {
  flavor_text_entries: FlavorTextEntriesProps[]
  evolution_chain: {
    url: string
  }
}

interface FlavorTextEntriesProps {
  language: {
    name: string
  }
  flavor_text: string
}

type TypeProps = {
  type: {
    name: string
  }
}

type Stat = {
  stat: {
    name: string
  }
  base_stat: number
}

type MovesProps = {
  move: {
    name: string
    url: string
  }
  version_group_details: VersionGroupDetails[]
}

type VersionGroupDetails = {
  level_learned_at: number
  move_learn_method: {
    name: string
  }
}

type ChangePokemonIndex = (newIndex: number) => void

const getLocalStorage = (key: string) => {
  if (!localStorage.getItem(key)) {
    return 25
  }
  return Number(localStorage.getItem(key))
}

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<PokemonProps | undefined>(undefined)
  const [pokemonIndex, setPokemonIndex] = useState(
    getLocalStorage('pokemonIndex')
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    changePokemon(pokemonIndex)
    localStorage.setItem('pokemonIndex', pokemonIndex.toString())
  }, [pokemonIndex])

  async function changePokemon(pokemonIndex: number) {
    try {
      setLoading(true)
      const pokemonData = await fetch(
        `${pokemonAPI}pokemon/${pokemonIndex}`
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
    if (newIndex < 0 || newIndex > NUMBER_OF_POKEMONS) {
      return
    }

    return setPokemonIndex(newIndex)
  }

  return (
    <Container>
      <div className="inner-container">
        <LeftPanel
          pokemon={pokemon}
          loading={loading}
          pokemonIndex={pokemonIndex}
        />
        <Divider />
        <RightPanel
          pokemon={pokemon}
          pokemonIndex={pokemonIndex}
          changePokemonIndex={changePokemonIndex}
        />
      </div>
    </Container>
  )
}

export default Pokedex
