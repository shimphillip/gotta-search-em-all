import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(5px, -30px, 7px);
  }

  70% {
    transform: translate3d(15px, -15px, 12px);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Container = styled.div`
  img {
    ${({ theme }) => theme.spriteScreen}
  }
  /* Bounce twice if action is not avaliable */
  animation: ${bounce} ${(props) => (props.error ? '0.3s' : '0s')} ease infinite;

  .controls {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
`;

export default Container;
