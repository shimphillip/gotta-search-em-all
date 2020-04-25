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
    border: 1px solid #460f0f;

    &::before {
      position: absolute;
      content: '';
      height: 10px;
      width: 16px;
      left: -7px;
      top: -13px;
      transform: rotate(180deg);
      border: 1px groove #460f0f;
    }

    &::after {
      position: absolute;
      content: '';
      height: 10px;
      width: 16px;
      right: -7px;
      bottom: -13px;
      transform: rotate(180deg);
      border: 1px groove #460f0f;
    }
  }
`

export default Container
