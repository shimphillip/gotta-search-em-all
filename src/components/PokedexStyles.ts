import styled from 'styled'

const Container = styled.div`
  width: 870px;
  background: ${({ theme }) => theme.colors.pokedexColor};
  padding: 5px 0;
  border-radius: 50px;
  box-shadow: 10px 10px 10px #a72d23, -10px -10px 10px #f54133;

  .inner-container {
    position: relative;
    top: 1%;
    left: 1%;
    height: 98%;
    width: 98%;
    border-radius: 50px;
    border: 1px solid #87241c;
    padding: 0.5rem;
    display: flex;
  }
`

export default Container
