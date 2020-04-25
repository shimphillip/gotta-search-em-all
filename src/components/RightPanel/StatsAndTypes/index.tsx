import React from 'react'
import Container from './styles'
import Stats from './Stats'
import Types from './Types'
import { TypeProps, Stat } from 'components/shared/types'

interface StatsAndTypesProps {
  stats: Stat[]
  types: TypeProps[]
  weight: number
  height: number
}

const StatsAndTypes = ({
  stats,
  types,
  weight,
  height,
}: StatsAndTypesProps) => {
  return (
    <Container>
      <Types types={types} weight={weight} height={height} />
      <Stats stats={stats} />
    </Container>
  )
}

export default StatsAndTypes
