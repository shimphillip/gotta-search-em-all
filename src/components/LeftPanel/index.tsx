import React from 'react'
import Container from './styles'
import Name from './Name'
import Sprite from './Sprite'
import Description from './Description'
import { PokemonProps } from '../shared/types'

interface LeftPanelprops {
  pokemon?: PokemonProps
  pokemonIndex: number
}

const LeftPanel = ({ pokemon, pokemonIndex }: LeftPanelprops) => {
  if (!pokemon) {
    return <div></div>
  }

  const {
    pokemonData: { name, sprites },
    pokemonDescriptions,
  } = pokemon

  return (
    <Container>
      <Name name={name} pokemonIndex={pokemonIndex} />
      <Sprite sprites={sprites} name={name} />
      <Description descriptions={pokemonDescriptions} />
    </Container>
  )
}

export default LeftPanel
