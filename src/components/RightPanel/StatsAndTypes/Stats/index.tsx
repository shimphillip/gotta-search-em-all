import React from 'react'
import Container from './styles'
import StatLine from './StatLine'

type StatsProps = {
  stats: Stat[]
}

type Stat = {
  stat: {
    name: string
  }
  base_stat: number
}

const Stats = ({ stats = [] }: StatsProps) => {
  return (
    <Container>
      {stats.map((stat) => {
        const name = stat.stat.name
        const baseStat = stat.base_stat

        return <StatLine name={name} baseStat={baseStat} key={name} />
      })}
    </Container>
  )
}

export default Stats
