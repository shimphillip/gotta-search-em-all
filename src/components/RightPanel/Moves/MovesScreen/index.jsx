import React from 'react';
import Container from './styles';

const MovesScreen = ({ moveInfo }) => {
  console.log(moveInfo);

  return (
    <Container>
      <div className="move-left">left</div>
      <div className="move-right">right</div>
    </Container>
  );
};

export default MovesScreen;
