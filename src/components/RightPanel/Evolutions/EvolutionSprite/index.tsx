import React from 'react'
import Container from './styles'
import { PokeBall } from '../../../shared'
import { ChangePokemonIndex } from '../../../shared/types'

interface EvolutionSpriteProps {
  image: string
  stage: string
  name: string
  changePokemonIndex: ChangePokemonIndex
}

const EvolutionSprite = ({
  image,
  stage,
  name = 'No Data',
  changePokemonIndex,
}: EvolutionSpriteProps) => {
  const handleImageClick = () => {
    const lastIndex = image.lastIndexOf('/') + 1
    const index = Number(image.slice(lastIndex).split('.')[0])
    changePokemonIndex(index)
  }

  return (
    <Container>
      <div className="center">
        <div className="stage">{stage}</div>
      </div>
      {image && (
        <img
          className="sprite-small"
          src={image}
          alt={name}
          onClick={handleImageClick}
        />
      )}
      {!image && <PokeBall />}
      <div className="name">{name}</div>
    </Container>
  )
}

export default EvolutionSprite
