import React from 'react'
import Container from './styles'
import StatsAndTypes from './StatsAndTypes'
import Evolutions from './Evolutions'
import Moves from './Moves'
import Controls from './Controls'

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

type ChangePokemonIndex = (newIndex: number) => void

type RightPanelProps = {
  pokemon: {
    pokemonData: {
      types: TypeProps[]
      stats: Stat[]
      moves: MovesProps[]
    }
    evolutionSprites: string[]
    evolutionNames: string[]
  }
  pokemonIndex: number
  changePokemonIndex: ChangePokemonIndex
}

type MovesProps = {
  move: {
    name: string
    url: string
  }
  version_group_details: VersionGroupDetails[]
}

type VersionGroupDetails = {
  level_learned_at: number
  move_learn_method: {
    name: string
  }
}

const RightPanel = ({
  pokemon,
  pokemonIndex,
  changePokemonIndex,
}: RightPanelProps) => {
  const {
    pokemonData: { types, stats, moves },
    evolutionSprites,
    evolutionNames,
  } = pokemon

  return (
    <Container>
      <StatsAndTypes stats={stats} types={types} />
      <Evolutions
        evolutionSprites={evolutionSprites}
        evolutionNames={evolutionNames}
      />
      <Moves moves={moves} />
      <Controls
        pokemonIndex={pokemonIndex}
        changePokemonIndex={changePokemonIndex}
      />
    </Container>
  )
}

export default RightPanel
