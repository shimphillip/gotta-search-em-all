import styled from '@emotion/styled';
import { typeColors } from '../../helpers';

export const TypeBadge = styled.div`
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

export const Button = styled.button`
  height: 35px;
  width: 35px;
  border: groove grey 3px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 1px;
  border-color: #b06868;
  font-size: 15px;

  &:hover {
    border-color: #b8ed7c;
  }

  ${({ className }) =>
    className === 'shiny'
      ? `
        font-family: 'Staatliches',cursive;
        transform: rotate(0);
        background: linear-gradient(
          14deg,
          #bf8823 10%,
          #ffee90 25%,
          #e6a617 47%,
          #ffee90 73%,
          #fff6c8 74%,
          #ffee90 80%
        );
        border-color: #cdb589;
        width: 90px;
        text-shadow: white -1px 1px;
  `
      : null}
`;
