import React from 'react';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Pokedex />
    </div>
  );
}

export default App;
