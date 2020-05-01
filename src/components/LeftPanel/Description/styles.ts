import styled from 'styled'

const Container = styled.div`
  display: flex;
  align-items: center;

  .description {
    ${({ theme }) => theme.screen}
    font-size: 16px;
    letter-spacing: 0;
    flex: 1;
    margin: 0 5px;
    min-height: 200px;
  }
`

export default Container
