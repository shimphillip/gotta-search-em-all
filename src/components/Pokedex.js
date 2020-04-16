import React from 'react';
import './Pokedex.scss';
import LeftPanel from './LeftPanel';
import Divider from './Divider';
import RightPanel from './RightPanel';

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="inner-container">
        <LeftPanel />
        <Divider />
        <RightPanel />
      </div>
    </div>
  );
};

export default Pokedex;
