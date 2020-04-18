import styled from '@emotion/styled';

const Container = styled.div`
  img {
    ${({ theme }) => theme.spriteScreen}
  }

  .controls {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
`;

export default Container;
