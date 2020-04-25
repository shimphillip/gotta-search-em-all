import styled from 'styled'

const Button = styled.button`
  height: 35px;
  width: 35px;
  border: groove black 2px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 1px;
  border-color: #b06868;
  font-size: 15px;
  outline: none;
  background-color: inherit;

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
`

export default Button
