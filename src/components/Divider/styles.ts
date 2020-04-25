import styled from 'styled'

// #460f0f

const Container = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;

  .gap {
    position: relative;
    height: 100%;
    width: 5px;
    border: 0.5px solid #87241c;

    &::before,
    &::after {
      position: absolute;
      content: '';
      height: 11px;
      width: 16px;
      transform: rotate(180deg);
      border: 1px groove #9b2920;
      border-radius: 10px;
    }

    &::before {
      left: -7px;
      top: -13px;
    }

    &::after {
      right: -7px;
      bottom: -13px;
    }
  }
`

export default Container
