import React from 'react';

const Name = ({ name, pokemonIndex }) => {
  console.log(name);
  return (
    <div class="nes-container is-rounded">
      <p>
        {name}, {pokemonIndex}
      </p>
    </div>
  );
};

export default Name;
