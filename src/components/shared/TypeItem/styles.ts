import styled from 'styled'
import { typeColors } from '../../../helpers'

interface TypeBadgeProps {
  name: string
  size?: string
}

const TypeBadge = styled.div<TypeBadgeProps>`
  color: rgba(0, 0, 0, 0.9);
  text-transform: capitalize;
  font-size: ${({ size }) => (size === 'small' ? '0.75rem' : '1.25em')};
  width: ${({ size }) => (size === 'small' ? '120px' : '150px')};
  padding: 2px;
  margin: 2px;
  border-radius: 20px;
  font-family: 'Staatliches', cursive;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: rgba(255, 255, 255, 0.3) -1px 1px;
  align-self: center;
  background-color: ${({ name }) => typeColors[name]};
  border: groove ${({ name }) => typeColors[name]} 3px;
  cursor: pointer;
`

export default TypeBadge
