import React from 'react'
import Container from './styles'
import TypeItem from './TypeItem'
import { TypeProps } from 'components/shared/types'

interface TypeBoxProps {
  types: TypeProps[]
}

const TypeBox = ({ types = [] }: TypeBoxProps) => {
  return (
    <Container>
      {types.map(({ type: { name } }) => {
        return <TypeItem name={name} key={name} />
      })}
    </Container>
  )
}

export default TypeBox
