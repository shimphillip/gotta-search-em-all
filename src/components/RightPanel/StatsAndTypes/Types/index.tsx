import React from 'react'
import Container from './styles'
import TypeBox from './TypeBox'
import { TypeProps } from 'components/sharedTypes'

type TypesProps = {
  types: TypeProps[]
}

const Types = ({ types }: TypesProps) => {
  return (
    <Container>
      <div className="type-header">Types</div>
      <TypeBox types={types} />
    </Container>
  )
}

export default Types
