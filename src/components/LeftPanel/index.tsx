import React from 'react'
import Container from './styles'
import Name from './Name'
import Sprite from './Sprite'
import Description from './Description'

interface LeftPanelprops {
  pokemon: {
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
    }
    pokemonIndex: number
    pokemonDescription: string
  }
  loading: boolean
}

const LeftPanel = ({ pokemon, loading }: LeftPanelprops) => {
  const {
    pokemonData: { name, sprites },
    pokemonIndex,
    pokemonDescription,
  } = pokemon

  return (
    <Container>
      <Name name={name} pokemonIndex={pokemonIndex} />
      <Sprite sprites={sprites} name={name} loading={loading} />
      <Description description={pokemonDescription} />
    </Container>
  )
}

export default LeftPanel
