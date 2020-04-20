import React from 'react';
import Container from './styles';
import PokeBall from '../../../shared/PokeBall'

const EvolutionSprite = ({ image, stage, name = 'No Data' }) => {
  return (
    <Container>
      <div className="center">
        <div className="stage">{stage}</div>
      </div>
      {image && <img className="sprite-small" src={image} alt={name} />}
      {!image && <PokeBall />}
      <div className="name">{name}</div>
    </Container>
  );
};

export default EvolutionSprite;
