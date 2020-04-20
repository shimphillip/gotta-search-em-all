import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme }) => theme.spriteScreen}
  background: linear-gradient(15deg, #83887b 64%, #8b8f81 70%, #8b8f81 81%, #babfb1 86%, #8b8f81 89%, #8b8f81 100%);
  position: relative;
  height: ${(props) => (props.nameClass === 'bigScreen' ? '343px' : '120px')};
  width: ${(props) => (props.nameClass === 'bigScreen' ? '100%' : '120px')};
  margin: ${(props) => (props.nameClass === 'bigScreen' ? '10px 0' : '3px 0')};

  /* Thank you https://nostalgic-css.github.io/NES.css/ */
  &::before {
    position: absolute;
    top: ${(props) => (props.nameClass === 'bigScreen' ? '35%' : '10px')};
    left: ${(props) => (props.nameClass === 'bigScreen' ? '35%' : '10px')};
    content: '';
    background: 0 0;
    width: 6px;
    height: 6px;
    color: #060606;
    box-shadow: 36px 6px, 42px 6px, 48px 6px, 54px 6px, 24px 12px, 30px 12px,
      36px 12px #ff001d, 42px 12px #ff001d, 48px 12px #ff001d, 54px 12px #ff001d,
      60px 12px, 66px 12px, 18px 18px, 24px 18px #fff, 30px 18px #fff,
      36px 18px #ff001d, 42px 18px #ff001d, 48px 18px #ff001d, 54px 18px #ff001d,
      60px 18px #ff001d, 66px 18px #ff001d, 72px 18px, 12px 24px, 18px 24px #fff,
      24px 24px #fff, 30px 24px #ff001d, 36px 24px #ff001d, 42px 24px #ff001d,
      48px 24px #ff001d, 54px 24px #ff001d, 60px 24px #ff001d, 66px 24px #ff001d,
      72px 24px, 78px 24px, 12px 30px, 18px 30px #fff, 24px 30px #ff001d,
      30px 30px #ff001d, 36px 30px #ff001d, 42px 30px #ff001d, 48px 30px #ff001d,
      54px 30px #ff001d, 60px 30px #ff001d, 66px 30px #ff001d, 72px 30px #ff001d,
      78px 30px, 6px 36px, 12px 36px #fff, 18px 36px #ff001d, 24px 36px #ff001d,
      30px 36px #ff001d, 36px 36px #ff001d, 42px 36px #ff001d, 48px 36px #ff001d,
      54px 36px #ff001d, 60px 36px #ff001d, 66px 36px #ff001d, 72px 36px #ff001d,
      78px 36px #ff001d, 84px 36px, 6px 42px, 12px 42px, 18px 42px,
      24px 42px #ff001d, 30px 42px #ff001d, 36px 42px #ff001d, 42px 42px #ff001d,
      48px 42px, 54px 42px, 60px 42px, 66px 42px #ff001d, 72px 42px #ff001d,
      78px 42px #ff001d, 84px 42px, 6px 48px, 12px 48px, 18px 48px, 24px 48px,
      30px 48px #ff001d, 36px 48px #ff001d, 42px 48px, 48px 48px #fff,
      54px 48px #fff, 60px 48px #fff, 66px 48px, 72px 48px #ff001d,
      78px 48px #ff001d, 84px 48px, 6px 54px, 12px 54px #9fa1a1, 18px 54px #fff,
      24px 54px, 30px 54px, 36px 54px, 42px 54px, 48px 54px #fff, 54px 54px #fff,
      60px 54px #fff, 66px 54px, 72px 54px, 78px 54px, 84px 54px, 12px 60px,
      18px 60px #fff, 24px 60px #fff, 30px 60px #fff, 36px 60px, 42px 60px,
      48px 60px #fff, 54px 60px #fff, 60px 60px #fff, 66px 60px, 72px 60px #fff,
      78px 60px, 12px 66px, 18px 66px #fff, 24px 66px #fff, 30px 66px #fff,
      36px 66px #fff, 42px 66px #fff, 48px 66px, 54px 66px, 60px 66px,
      66px 66px #fff, 72px 66px #fff, 78px 66px, 18px 72px, 24px 72px #9fa1a1,
      30px 72px #9fa1a1, 36px 72px #fff, 42px 72px #fff, 48px 72px #fff,
      54px 72px #fff, 60px 72px #fff, 66px 72px #fff, 72px 72px, 24px 78px,
      30px 78px, 36px 78px #9fa1a1, 42px 78px #9fa1a1, 48px 78px #9fa1a1,
      54px 78px #9fa1a1, 60px 78px, 66px 78px, 36px 84px, 42px 84px, 48px 84px,
      54px 84px;
    transform: rotate(0);
  }
`;

export default Container;
