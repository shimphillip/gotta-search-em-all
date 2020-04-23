import styled from 'styled'

const Container = styled.div`
  .center {
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
    margin: 3px 0;
  }

  .name {
    ${({ theme }) => theme.screen}

    width: auto;
    padding: 3px;
    margin-bottom: 3px;
    text-align: right;
  }
`

export default Container
