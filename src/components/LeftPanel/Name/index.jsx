import React from 'react';
import Container from './styles';

const Name = ({ name, pokemonIndex }) => {
  console.log(name);
  return (
    <Container>
      <p>{name}</p>
      <p>no. {pokemonIndex}</p>
    </Container>
  );
};

export default Name;
