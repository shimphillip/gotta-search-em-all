import React from 'react'
import Container from './styles'

interface DescriptionProps {
  description: string
}

const Description = ({ description }: DescriptionProps) => {
  return <Container>{description}</Container>
}

export default Description
