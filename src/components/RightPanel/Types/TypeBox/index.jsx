import React from 'react';
import Container from './styles';
import TypeItem from './TypeItem';

const TypeBox = ({ types = [] }) => {
  console.log('types', types);

  return (
    <Container>
      {types.map(({ type: { name } }) => {
        return <TypeItem name={name} key={name} />;
      })}
    </Container>
  );
};

export default TypeBox;
