import React from 'react';
import Container from './styles';

const Loading = () => {
  return (
    <Container>
      <div className="pokeball">
        <div className="glow"></div>
        <div className="lower-half"></div>
        <div className="lower-half lh2"></div>
        <div className="circle-out">
          <div className="circle-in"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </Container>
  );
};

export default Loading;
