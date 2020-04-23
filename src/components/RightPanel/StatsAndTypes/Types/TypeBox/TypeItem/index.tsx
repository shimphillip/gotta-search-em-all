import React from 'react'
import { TypeBadge } from '../../../../../shared'

type TypeItemProps = {
  name: string
}

const TypeItem = ({ name }: TypeItemProps) => {
  return <TypeBadge name={name}>{name}</TypeBadge>
}

export default TypeItem
