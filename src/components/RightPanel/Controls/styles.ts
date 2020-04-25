import styled from 'styled'
import { keyframes } from '@emotion/core'

type ContainerProps = {
  error: boolean
}

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
`

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 8px 0;

  span {
    font-size: 20px;
    height: 30px;

    .input {
      ${({ theme }) => theme.screen}
      animation: ${bounce} ${({ error }) =>
  error ? '0.3s' : '0s'} ease infinite;

      padding: 5px 10px;
      width: 50px;
      font-size: 20px;
      text-align: right;
      align-self: center;
      outline: none;
    }
  }
`

export default Container
