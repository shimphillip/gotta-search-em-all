import React from 'react';
import { TypeBadge } from '../../../../shared';

const TypeItem = ({ name }) => {
  return <TypeBadge name={name}>{name}</TypeBadge>;
};

export default TypeItem;
