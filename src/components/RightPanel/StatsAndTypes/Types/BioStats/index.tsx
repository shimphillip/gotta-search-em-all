import React from 'react'
import Container from './styles'
import { padTexts } from 'helpers'

interface BioStatsProps {
  weight: number
  height: number
}

const BioStats = ({ weight, height }: BioStatsProps) => {
  return (
    <Container>
      <p>{padTexts('weight', weight + ' lbs', '.', 20)}</p>
      <p>{padTexts('height', height + "'", '.', 20)}</p>
    </Container>
  )
}

export default BioStats
