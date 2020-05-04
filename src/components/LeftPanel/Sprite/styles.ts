import styled from 'styled'

type ContainerProps = {
  error: boolean
}

const Container = styled.div<ContainerProps>`
  img {
    ${({ theme }) => theme.spriteScreen}
  }
  /* Bounce twice if no sprite is avaliable */
  animation: bounce ${({ error }) => (error ? '0.3s' : '0s')} ease infinite;
  .controls {
    font-family: 'Staatliches', cursive;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      transform: translate3d(5px, -30px, 7px);
    }

    70% {
      transform: translate3d(15px, -15px, 12px);
    }

    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
`

export default Container

// Shiny Button
interface IShinyButton {
  active: boolean
}

export const ShinyButton = styled.div<IShinyButton>`
  .button {
    user-select: none;
    display: inline-block;
    border: 1px solid;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    opacity: ${({ active }) => (active ? '1' : '0.6')};
    color: ${({ active }) => (active ? 'gold' : '#FFF')};

    &__text {
      display: block;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
      font-weight: bold;
      &:before {
        content: attr(title);
      }

      &--bis {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateX(-1 * 1em);
        opacity: 0;
      }
    }

    &__mask {
      display: block;
      position: absolute;
      top: 0;
      left: -3px;
      right: 0;
      bottom: 0;
      background: white;
      transform: translateX(-100%) rotate(45deg);
      transition: all 0.3s;
    }
  }

  .button:hover {
    opacity: 1;
    .button__text {
      animation: fx-text 0.3s ease-out;

      &--bis {
        animation: fx-text-bis 0.3s ease-out;
      }
    }

    .button__mask {
      animation: fx-mask 0.3s ease-out;
    }
  }

  @keyframes fx-mask {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }

  @keyframes fx-text {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1em);
      opacity: 0;
    }
  }
  @keyframes fx-text-bis {
    0% {
      transform: translateX(-1 * 1em);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
