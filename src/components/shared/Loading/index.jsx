import React from 'react';
import Container from './styles';

const Loading = () => {
  return (
    <Container>
      <div class="pokeball">
        <div class="glow"></div>
        <div class="lower-half"></div>
        <div class="lower-half lh2"></div>
        <div class="circle-out">
          <div class="circle-in"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </Container>
  );
};

export default Loading;
