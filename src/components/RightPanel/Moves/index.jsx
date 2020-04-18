import React, { useState, useEffect } from 'react';
import Container from './styles';
import MovesScreen from './MovesScreen';

const Moves = ({ moves = [] }) => {
  const [moveIndex, setMoveIndex] = useState(0);
  const [moveInfo, setMoveInfo] = useState({});

  useEffect(() => {
    fetchMove(moves);
  }, [moves]);

  async function fetchMove(moves) {
    console.log('inside', moves);

    if (!moves.length) {
      return;
    }

    const { name } = moves[moveIndex].move;
    const { url } = moves[moveIndex].move;
    const learndAt = moves[moveIndex].version_group_details[0].level_learned_at;
    const learnMethod =
      moves[moveIndex].version_group_details[0].move_learn_method.name;

    const data = await fetch(url).then((response) => response.json());
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

    setMoveInfo({
      name,
      learndAt,
      accuracy,
      damageClass,
      power,
      pp,
      type,
      effectChance,
      effectDescription,
      learnMethod,
    });
  }

  return (
    <Container>
      <MovesScreen moveInfo={moveInfo} />
      <div className="button-container">
        <button>1</button>
        <button>2</button>
      </div>
    </Container>
  );
};

export default Moves;
