import React from 'react'
import Container from './PokedexStyles'
import LeftPanel from './LeftPanel'
import Divider from './Divider'
import RightPanel from './RightPanel'
import { usePokemon } from '../hooks'
import { Loading } from './shared'

const Pokedex = () => {
  const { pokemon, pokemonIndex, loading, changePokemonIndex } = usePokemon()

  if (loading) {
    return <Loading noBackground />
  }

  return (
    <Container>
      <div className="inner-container">
        <LeftPanel pokemon={pokemon} pokemonIndex={pokemonIndex} />
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
