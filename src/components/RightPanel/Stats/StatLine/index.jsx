import React from 'react';
import Container from './styles';
import { padTexts } from '../../../../helpers';

const StatLine = ({ name, baseStat }) => {
  return <Container>{padTexts(name, baseStat, '.', 20)}</Container>;
};

export default StatLine;
