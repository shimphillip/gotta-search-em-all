import styled from 'styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 8px 0;

  span {
    font-size: 20px;
    height: 30px;

    .input {
      ${({ theme }) => theme.screen}
      padding: 5px 10px;
      width: 50px;
      font-size: 20px;
      text-align: right;
      align-self: center;
      outline: none;
    }
  }
`

export default Container
