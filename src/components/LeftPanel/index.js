import React from 'react';
import Name from './Name';

const LeftPanel = (pokemon) => {
  console.log(pokemon);
  const {
    pokemonData: { name },
    pokemonIndex,
  } = pokemon;
  return (
    <div className="panel">
      <Name name={name} pokemonIndex={pokemonIndex} />
      <div className="sprite"></div>
      <div className="description"></div>
    </div>
  );

  //   return (
  //     <div className="panel left-panel">
  //       <PokemonName name={pData.name} no={props.no} />
  //       <PokemonSprite src={pData.sprites} />
  //       <PokemonDescription description={props.description} no={props.no} />
  //     </div>
  //   );
};

export default LeftPanel;
