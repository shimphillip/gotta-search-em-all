import React from 'react'
import Container from './PokedexStyles'
import LeftPanel from './LeftPanel'
import Divider from './Divider'
import RightPanel from './RightPanel'
import { usePokemon } from '../hooks'
import { Loading } from './shared'
import { Global, css } from '@emotion/core'

const Pokedex = () => {
  const { pokemon, pokemonIndex, loading, changePokemonIndex } = usePokemon()

  if (loading) {
    return <Loading noBackground />
  }

  const getBackground = () => {
    // pokemonIndex is guaranteed to be above 0
    if (pokemonIndex < 152 && pokemon?.pokemonData.name) {
      console.log(pokemon?.pokemonData.name)

      return pokemon?.pokemonData.name
    }

    return 'pikachu'
  }

  // const OtherComponent = React.lazy(() => import('./OtherComponent'));

  return (
    <Container>
      <Global
        styles={css`
          body {
            background-image: url(/backgrounds/${getBackground()}.png);
          }
        `}
      />
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
