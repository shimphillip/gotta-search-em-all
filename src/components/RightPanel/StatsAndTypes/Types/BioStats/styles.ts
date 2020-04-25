import styled from 'styled'

const Container = styled.div`
  ${({ theme }) => theme.spriteScreen}
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  text-transform: capitalize;
`

export default Container
