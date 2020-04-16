import styled from '@emotion/styled';

const Container = styled.div`
  height: 600px;
  width: 600px;
  background: ${({ theme }) => theme.colors.pokedexColor};
  ${({ theme }) => theme.darkBorders};

  .inner-container {
    position: relative;
    top: 1%;
    left: 1%;
    height: 98%;
    width: 98%;
    ${({ theme }) => theme.darkBorders};
    padding: 0.5rem;

    display: flex;
  }
`;

export default Container;
