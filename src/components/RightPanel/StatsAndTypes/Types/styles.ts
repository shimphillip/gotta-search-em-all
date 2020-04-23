import styled from 'styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: groove #757575 3px;
  flex: 1;

  .type-header {
    text-transform: capitalize;
    font-size: 1.25em;
    padding: 5px;
    font-family: 'Staatliches', cursive;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      14deg,
      #460f0f 0,
      #891313 30%,
      #b31818 45%,
      #fd5555 65%,
      #b31818 95%
    );
    border: groove #e61515 3px;
    border-width: 3px 2px;
    text-shadow: #fd5555 -1px 1px;
  }
`

export default Container
