import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faUndo } from '@fortawesome/free-solid-svg-icons';
import Container from './styles';

const Sprite = ({ sprites = {}, name }) => {
  if (Object.keys(sprites).length === 0) {
    return null;
  }

  const { front_default } = sprites;
  return (
    <Container>
      {' '}
      <img src={front_default} alt={name} />{' '}
      <div className="controls">
        <div className="sprite-control">
          <FontAwesomeIcon icon={faVenus} />
        </div>
        <div className="sprite-control sprite-control-shiny">Shiny</div>
        <div className="sprite-control">
          <FontAwesomeIcon icon={faUndo} />
        </div>
      </div>
    </Container>
  );
};

export default Sprite;
