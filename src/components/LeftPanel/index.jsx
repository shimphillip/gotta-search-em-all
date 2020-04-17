import React from 'react';
import Container from './styles';
import Name from './Name';
import Sprite from './Sprite';
import Description from './Description';

const LeftPanel = (pokemon) => {
  console.log(pokemon);
  const {
    pokemonData: { name, sprites },
    pokemonIndex,
    pokemonDescription
  } = pokemon;
  return (
    <Container>
      <Name name={name} pokemonIndex={pokemonIndex} />
      <Sprite sprites={sprites} name={name} />
      <Description description={pokemonDescription}/>
    </Container>
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
