import React from 'react';
import Container from './styles';
import { PanelRow } from '../../theme';
import Stats from './Stats';
import Types from './Types';

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
  } = pokemon;

  return (
    <Container>
      <PanelRow>
        <Stats stats={stats} />
        <Types types={types} />
      </PanelRow>
    </Container>
  );
};

export default RightPanel;
