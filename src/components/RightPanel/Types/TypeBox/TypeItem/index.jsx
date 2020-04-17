import React from 'react';
import Container from './styles';

const TypeItem = ({ name }) => {
  return <Container name={name}>{name}</Container>;
};

export default TypeItem;
