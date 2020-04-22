import React from 'react'
import Container from './styles'
import EvolutionSprite from './EvolutionSprite'

const Evolutions = ({ evolutionSprites, evolutionNames }) => {
  const sprite1 = evolutionSprites[0]
  const sprite2 = evolutionSprites[1]
  const sprite3 = evolutionSprites[2]

  const name1 = evolutionNames[0]
  const name2 = evolutionNames[1]
  const name3 = evolutionNames[2]

  return (
    <Container>
      <EvolutionSprite image={sprite1} stage="I" name={name1} />
      <EvolutionSprite image={sprite2} stage="II" name={name2} />
      <EvolutionSprite image={sprite3} stage="III" name={name3} />
    </Container>
  )
}

export default Evolutions
