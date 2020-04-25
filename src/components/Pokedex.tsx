import React from 'react'
import Container from './PokedexStyles'
import LeftPanel from './LeftPanel'
import Divider from './Divider'
import RightPanel from './RightPanel'
import { usePokemon } from '../hooks'

const Pokedex = () => {
  const { pokemon, pokemonIndex, loading, changePokemonIndex } = usePokemon()

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
