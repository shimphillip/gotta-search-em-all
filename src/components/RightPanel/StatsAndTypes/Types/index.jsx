import React from 'react';
import Container from './styles';
import TypeBox from './TypeBox';

const Types = ({ types }) => {
  return (
    <Container>
      <div className="type-header">Types</div>
      <TypeBox types={types} />
    </Container>
  );
};

export default Types;
