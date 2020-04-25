import styled from 'styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    background: #fd5555;
    text-shadow: #fd5555 -1px 1px;
    border-radius: 70px;
  }
`

export default Container
