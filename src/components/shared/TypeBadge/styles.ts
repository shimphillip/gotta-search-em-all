import styled from 'styled'
import { typeColors } from '../../../helpers'

interface TypeBadgeProps {
  name: string
}

const TypeBadge = styled.div<TypeBadgeProps>`
  color: rgba(0, 0, 0, 0.9);
  text-transform: capitalize;
  font-size: 1.25em;
  padding: 2px;
  margin: 2px;
  border: groove #757575 3px;
  border-radius: 20px;
  width: 150px;
  font-family: 'Staatliches', cursive;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: rgba(255, 255, 255, 0.3) -1px 1px;
  align-self: center;
  background-color: ${({ name }) => typeColors[name]};
`

export default TypeBadge
