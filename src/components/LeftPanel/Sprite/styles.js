import styled from '@emotion/styled';

const Container = styled.div`
  img {
    ${({ theme }) => theme.spriteScreen}
  }

  .controls {
    display: flex;
    justify-content: space-around;
    font-family: 'Staatliches', cursive;
    margin-bottom: 10px;

    .sprite-control {
      ${({ theme }) => theme.spriteControl}

      &.sprite-control-shiny {
        transform: rotate(0);
        background: linear-gradient(
          14deg,
          #bf8823 10%,
          #ffee90 25%,
          #e6a617 47%,
          #ffee90 73%,
          #fff6c8 74%,
          #ffee90 80%
        );
        border-color: #cdb589;
        width: 90px;
        text-shadow: white -1px 1px;
      }
    }
  }
`;

export default Container;
