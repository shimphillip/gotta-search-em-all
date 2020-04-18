import React, { useState, useEffect } from 'react';
import Container from './styles';

const Moves = ({ moves = [] }) => {
  const [moveIndex, setMoveIndex] = useState(0);

  if (!moves.length) {
    return <div>Loading..</div>;
  }

  console.log(moves);

  const { name } = moves[moveIndex].move;
  const { url } = moves[moveIndex].move;
  const learndAt = moves[moveIndex].version_group_details[0].level_learned_at;

  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const accuracy = data.accuracy;
      const damageClass = data.damage_class.name;
      const power = data.power;
      const pp = data.pp;
      const type = data.type.name;
      const effectChance = data.effect_chance || 'None';
      let effectDescription = data.effect_entries.filter((entry) => {
        return entry.language.name === 'en';
      })[0].effect;

      if (effectDescription.includes('$effet_chance')) {
        effectDescription = effectDescription.replace(
          '$effect_chance',
          effectChance
        );
      }

      console.log(name, learndAt, accuracy, damageClass, power, pp , type, effectChance, effectDescription);
    });

  return <Container>Moves</Container>;
};

export default Moves;
