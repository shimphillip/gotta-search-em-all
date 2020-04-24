import React from 'react'
import Container from './styles'

interface NameProps {
  name: string
  pokemonIndex: number
}

const Name = ({ name, pokemonIndex }: NameProps) => {
  return (
    <Container>
      <p>{name}</p>
      <p>no. {pokemonIndex}</p>
    </Container>
  )
}

export default Name
