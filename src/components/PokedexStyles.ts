import styled from 'styled'

const Container = styled.div`
  width: 850px;
  background: ${({ theme }) => theme.colors.pokedexColor};
  ${({ theme }) => theme.darkBorders};
  padding: 5px 0;

  .inner-container {
    position: relative;
    top: 1%;
    left: 1%;
    height: 98%;
    width: 98%;
    ${({ theme }) => theme.darkBorders};
    border: 3px solid black;
    padding: 0.5rem;

    display: flex;
  }
`

export default Container
