import React from 'react';
import Container from './styles';
import { PanelRow } from '../../theme';
import Stats from './Stats';
import Types from './Types';
import EvolutionSprite from './EvolutionSprite'

// pData={pData}
// sData={sData}
// evoSprites={this.state.evoSprites}
// evoNames={this.state.evoNames}
// controls={{ next: this.nextPokemon, prev: this.previousPokemon, pick: this.pickPokemon }}
// no={this.state.pokemonIndex}

const RightPanel = (pokemon) => {
  console.log(pokemon);

  const {
    pokemonData: { types, stats, moves },
    evolutionSprites,
    evolutionNames,
  } = pokemon;

  const sprite1 = evolutionSprites[0];
  const sprite2 = evolutionSprites[1];
  const sprite3 = evolutionSprites[2];

  const name1 = evolutionNames[0];
  const name2 = evolutionNames[1];
  const name3 = evolutionNames[2];

  return (
    <Container>
      <PanelRow>
        <Stats stats={stats} />
        <Types types={types} />
      </PanelRow>
      <PanelRow>
        <EvolutionSprite image={sprite1} stage="I" name={name1} />
        <EvolutionSprite image={sprite2} stage="II" name={name2} />
        <EvolutionSprite image={sprite3} stage="III" name={name3} />
      </PanelRow>
    </Container>
  );
};

export default RightPanel;
