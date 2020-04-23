import styled from 'styled'

const Container = styled.div`
  ${({ theme }) => theme.screen}

  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  flex: 1;
`

export default Container
