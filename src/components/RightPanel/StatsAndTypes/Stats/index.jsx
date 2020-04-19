import React from 'react';
import Container from './styles';
import StatLine from './StatLine';

const Stats = ({ stats = [] }) => {
  return (
    <Container>
      {stats.map((stat) => {
        const name = stat.stat.name;
        const baseStat = stat.base_stat;

        return <StatLine name={name} baseStat={baseStat} key={name} />;
      })}
    </Container>
  );
};

export default Stats;
