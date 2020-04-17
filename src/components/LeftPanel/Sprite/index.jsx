import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faUndo } from '@fortawesome/free-solid-svg-icons';
import Container from './styles';

const Sprite = ({ sprites = {}, name = 'Pokemon Name' }) => {
  const [sprite, setSprite] = useState({
    front: true,
    male: true,
    shiny: false,
  });
  const [src, setSrc] = useState('');

  useEffect(() => {
    const source = buildImage(sprite);
    if (!sprites[source]) {
      return;
    }

    setSrc(sprites[source]);
  }, [sprite, sprites]);

  function buildImage(sprite) {
    const dir = sprite.front ? 'front' : 'back';
    const gender = sprite.female ? '_female' : '';
    const shiny = sprite.shiny ? '_shiny' : '_default';
    return dir + shiny + gender;
  }

  const handleChange = (prop) =>
    setSprite({ ...sprite, [prop]: !sprite[prop] });

  console.table(sprites);

  return (
    <Container>
      <img src={src} alt={name} />
      <div className="controls">
        <div className="sprite-control" onClick={() => handleChange('male')}>
          <FontAwesomeIcon icon={faVenus} />
        </div>
        <div
          className="sprite-control sprite-control-shiny"
          onClick={() => handleChange('shiny')}
        >
          Shiny
        </div>
        <div className="sprite-control" onClick={() => handleChange('front')}>
          <FontAwesomeIcon icon={faUndo} />
        </div>
      </div>
    </Container>
  );
};

export default Sprite;
