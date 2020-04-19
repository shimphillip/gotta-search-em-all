import React from 'react';
import Container from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../shared';

const Controls = ({ pokemonIndex, changePokemonIndex }) => {
  return (
    <Container>
      <Button onClick={() => changePokemonIndex(pokemonIndex - 1)}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Button>
      <span>
        No:{' '}
        <input
          type="text"
          className="input"
          value={pokemonIndex}
          onChange={(e) => changePokemonIndex(e.target.value)}
        />
      </span>
      <Button onClick={() => changePokemonIndex(pokemonIndex + 1)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </Container>
  );
};

export default Controls;
