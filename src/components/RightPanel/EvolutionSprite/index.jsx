import React from 'react';
import Container from './styles';

const EvolutionSprite = ({ image, stage, name }) => {
  return (
    <Container>
      <div className="center">
        <div className="stage">{stage}</div>
      </div>
      <img className="sprite-small" src={image} alt={name} />
      <div className="name">{name}</div>
    </Container>
  );
};

export default EvolutionSprite;
