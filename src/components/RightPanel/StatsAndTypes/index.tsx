import React from 'react'
import Container from './styles'
import Stats from './Stats'
import Types from './Types'
import { TypeProps, Stat } from 'components/sharedTypes'

type StatsAndTypesProps = {
  stats: Stat[]
  types: TypeProps[]
}

const StatsAndTypes = ({ stats, types }: StatsAndTypesProps) => {
  return (
    <Container>
      <Stats stats={stats} />
      <Types types={types} />
    </Container>
  )
}

export default StatsAndTypes
