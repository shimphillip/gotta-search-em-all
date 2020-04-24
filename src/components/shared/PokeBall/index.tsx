import React from 'react'
import Container from './styles'

export interface PokeBallProps {
  nameClass?: string
}

const PokeBall = ({ nameClass }: PokeBallProps) => {
  return <Container nameClass={nameClass}></Container>
}

export default PokeBall
