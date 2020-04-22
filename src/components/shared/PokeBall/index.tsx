import React from 'react'
import Container from './styles'

export type PokeBallProps = {
  nameClass: string
}

const PokeBall = ({ nameClass }: PokeBallProps) => {
  return <Container nameClass={nameClass}></Container>
}

export default PokeBall
