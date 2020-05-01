import React from 'react'
import Container from './styles'
import EvolutionSprite from './EvolutionSprite'
import { ChangePokemonIndex } from '../../shared/types'

interface EvolutionProps {
  evolutionSprites: string[]
  evolutionNames: string[]
  changePokemonIndex: ChangePokemonIndex
}

const Evolutions = ({
  evolutionSprites,
  evolutionNames,
  changePokemonIndex,
}: EvolutionProps) => {
  const sprite1 = evolutionSprites[0]
  const sprite2 = evolutionSprites[1]
  const sprite3 = evolutionSprites[2]

  const name1 = evolutionNames[0]
  const name2 = evolutionNames[1]
  const name3 = evolutionNames[2]

  return (
    <Container>
      <EvolutionSprite
        image={sprite1}
        stage="I"
        name={name1}
        changePokemonIndex={changePokemonIndex}
      />
      <EvolutionSprite
        image={sprite2}
        stage="II"
        name={name2}
        changePokemonIndex={changePokemonIndex}
      />
      <EvolutionSprite
        image={sprite3}
        stage="III"
        name={name3}
        changePokemonIndex={changePokemonIndex}
      />
    </Container>
  )
}

export default Evolutions
