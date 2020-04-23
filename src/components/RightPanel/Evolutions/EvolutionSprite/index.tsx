import React from 'react'
import Container from './styles'
import { PokeBall } from '../../../shared'

type EvolutionSpriteProps = {
  image: string
  stage: string
  name: string
}

const EvolutionSprite = ({
  image,
  stage,
  name = 'No Data',
}: EvolutionSpriteProps) => {
  return (
    <Container>
      <div className="center">
        <div className="stage">{stage}</div>
      </div>
      {image && <img className="sprite-small" src={image} alt={name} />}
      {!image && <PokeBall />}
      <div className="name">{name}</div>
    </Container>
  )
}

export default EvolutionSprite
