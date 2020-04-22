import React from 'react'
import Container from './styles'
import Stats from './Stats'
import Types from './Types'

const StatsAndTypes = ({ stats, types }) => {
  return (
    <Container>
      <Stats stats={stats} />
      <Types types={types} />
    </Container>
  )
}

export default StatsAndTypes
