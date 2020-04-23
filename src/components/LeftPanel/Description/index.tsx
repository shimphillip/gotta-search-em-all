import React from 'react'
import Container from './styles'

type DescriptionProps = {
  description: string
}

const Description = ({ description }: DescriptionProps) => {
  return <Container>{description}</Container>
}

export default Description
