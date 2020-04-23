import React from 'react'
import Container from './styles'
import Stats from './Stats'
import Types from './Types'

type TypeProps = {
  type: {
    name: string
  }
}

type Stat = {
  stat: {
    name: string
  }
  base_stat: number
}

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
