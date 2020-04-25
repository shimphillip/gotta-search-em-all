import React from 'react'
import Container from './styles'
import TypeItem from './TypeItem'
import { TypeProps } from 'components/shared/types'

interface TypesProps {
  types: TypeProps[]
}

const Types = ({ types }: TypesProps) => {
  return (
    <Container>
      {types.map(({ type: { name } }) => {
        return <TypeItem name={name} key={name} />
      })}
    </Container>
  )
}

export default Types
