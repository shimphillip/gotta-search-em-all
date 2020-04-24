import React from 'react'
import Container from './styles'
import StatsAndTypes from './StatsAndTypes'
import Evolutions from './Evolutions'
import Moves from './Moves'
import Controls from './Controls'
import { PokemonProps, ChangePokemonIndex } from '../sharedTypes'

type RightPanelProps = {
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
