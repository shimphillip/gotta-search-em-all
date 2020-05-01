import React from 'react'
import Container from './styles'
import StatsAndTypes from './StatsAndTypes'
import Evolutions from './Evolutions'
import Moves from './Moves'
import Controls from './Controls'
import { PokemonProps, ChangePokemonIndex } from '../shared/types'

interface RightPanelProps {
  pokemon?: PokemonProps
  pokemonIndex: number
  changePokemonIndex: ChangePokemonIndex
}

const RightPanel = ({
  pokemon,
  pokemonIndex,
  changePokemonIndex,
}: RightPanelProps) => {
  if (!pokemon) {
    return <div></div>
  }

  const {
    pokemonData: { types, stats, moves, weight, height },
    evolutionSprites,
    evolutionNames,
  } = pokemon

  return (
    <Container>
      <StatsAndTypes
        stats={stats}
        types={types}
        weight={weight}
        height={height}
      />
      <Evolutions
        evolutionSprites={evolutionSprites}
        evolutionNames={evolutionNames}
        changePokemonIndex={changePokemonIndex}
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
