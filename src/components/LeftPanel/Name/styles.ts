import styled from 'styled'

const Container = styled.div`
  ${({ theme }) => theme.screen}
  padding: 15px;
  font-size: 28px;
  letter-spacing: 4px;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
`

export default Container
