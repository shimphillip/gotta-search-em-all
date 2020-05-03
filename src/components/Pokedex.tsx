import React from 'react'
import Container from './PokedexStyles'
import { usePokemon } from '../hooks'
import { Loading } from './shared'
import { Global, css } from '@emotion/core'
import Panels from './shared/Panels'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'

const Pokedex = () => {
  const temp = useSelector((state: RootState) => state.pokemonReducer.temp)
  const { pokemon, pokemonIndex } = temp

  const getBackground = () => {
    // pokemonIndex is guaranteed to be above 0
    if (pokemonIndex < 152 && pokemon?.pokemonData.name) {
      return pokemon?.pokemonData.name
    }

    return 'pikachu'
  }

  return (
    <Container>
      <Global
        styles={css`
          body {
            background-image: url(/backgrounds/${getBackground()}.jpg);
          }
        `}
      />
      <div className="inner-container">
        <Panels />
      </div>
    </Container>
  )
}

export default Pokedex
