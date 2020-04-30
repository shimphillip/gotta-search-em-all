import styled from 'styled'

const Container = styled.div`
  padding-right: 7px;

  .center {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .stage {
      font-family: 'Staatliches', cursive;
      font-size: 1.25em;
      letter-spacing: 2px;
      background: transparent;
      border: none;
      text-shadow: #e78181 -1px 1px;
    }
  }

  .sprite-small {
    ${({ theme }) => theme.spriteScreen}
    height: 120px;
    width: 120px;
    margin: 7px 0;
  }

  .name {
    ${({ theme }) => theme.screen}

    width: auto;
    padding: 3px 8px;
    margin-bottom: 7px;
    text-align: center;
  }
`

export default Container
