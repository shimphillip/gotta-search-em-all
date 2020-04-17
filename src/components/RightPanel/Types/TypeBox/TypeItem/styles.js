import styled from '@emotion/styled';

const typeColors = {
  normal: '#bfbfbf',
  fighting: '#d87c58',
  flying: '#999ade',
  poison: '#925192',
  ground: '#dea761',
  rock: '#897864',
  bug: '#b1c967',
  ghost: '#c195dc',
  steel: '#49769c',
  fire: '#cf1414',
  water: '#1689de',
  grass: '#47a047',
  electric: '#e6b700',
  psychic: '#fa43b8',
  ice: '#98c3de',
  dragon: '#89315d',
  dark: '#282433',
  fairy: '#dca0ce',
  unknown: '#545454',
  shadow: '#364163',
};

const Container = styled.div`
  color: rgba(0, 0, 0, 0.9);
  text-transform: capitalize;
  font-size: 1.25em;
  padding: 2px;
  margin: 2px;
  border: groove #757575 3px;
  border-radius: 10px;
  width: 150px;
  font-family: 'Staatliches', cursive;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: rgba(255, 255, 255, 0.3) -1px 1px;
  align-self: center;
  background: linear-gradient(
    15deg,
    rgba(128, 128, 128, 0.5) 64%,
    rgba(138, 138, 138, 0.5) 70%,
    rgba(230, 230, 230, 0.5) 81%,
    rgba(255, 255, 255, 0.5) 86%,
    rgba(220, 220, 220, 0.5) 89%,
    rgba(230, 230, 230, 0.5) 100%
  );
  background-blend-mode: hard-light;
  background-color: ${(props) => typeColors[props.name]};
`;

export default Container;
