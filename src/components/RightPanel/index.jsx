import React from 'react';
import Container from './styles';
import StatsAndTypes from './StatsAndTypes';
import Evolutions from './Evolutions';
import Moves from './Moves';
import Controls from './Controls';

const RightPanel = ({ pokemon, pokemonIndex, changePokemonIndex }) => {
  const {
    pokemonData: { types, stats, moves },
    evolutionSprites,
    evolutionNames,
  } = pokemon;

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
  );
};

export default RightPanel;
