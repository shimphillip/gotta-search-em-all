import React from 'react'
import Container from './styles'

interface NameProps {
  name: string
  pokemonIndex: number
}

const Name = ({ name, pokemonIndex }: NameProps) => {
  return (
    <Container>
      <p data-testid="pokemon-name">{name}</p>
      <p data-testid="pokemon-index">no. {pokemonIndex}</p>
    </Container>
  )
}

export default Name
