import React from 'react';
import Container from './styles';

const StatLine = ({ name, baseStat }) => {
  return (
    <Container>
      <span>{name}</span> <span>{baseStat}</span>
    </Container>
  );
};

export default StatLine;
