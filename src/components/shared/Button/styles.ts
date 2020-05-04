import styled from 'styled'

interface ButtonProps {
  active?: boolean
  className?: string
}

const Button = styled.button<ButtonProps>`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 1px;
  border: solid ${({ active }) => (active ? '#b8ed7c' : '#b06868')} 2px;
  font-size: 15px;
  outline: none;
  background-color: inherit;
  transform: ${({ active }) => active && 'translateY(2px)'};
  transition: 0.1s;

  &:hover {
    border-color: #b8ed7c;
  }
`

export default Button
