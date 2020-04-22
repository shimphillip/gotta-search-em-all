import React from 'react'
import Container from './styles'
import Name from './Name'
import Sprite from './Sprite'
import Description from './Description'

const LeftPanel = ({ pokemon, loading }) => {
  // console.log(pokemon);
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
