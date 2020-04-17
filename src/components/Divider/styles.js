import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  margin: 0 20px;
  align-items: center;
  border: inset #460f0f 4px;
  border-radius: 4px;
  background: #460f0f;

  & > * {
    border-radius: 4px;
    border: solid #2d0d0d 2px;
  }

  .gap {
    background: linear-gradient(
      90deg,
      #460f0f 0,
      #891313 30%,
      #b31818 45%,
      #fd5555 65%,
      #b31818 95%
    );
    border-top-color: #891313;
    border-right-color: #b31818;
    flex: 1;
    width: 95%;

    &:first-child {
      border-radius: 0 0 5px 5px;
      border-top: none;
    }

    &:last-child {
      border-radius: 5px 5px 0 0;
    }
  }

  .hinge {
    background: linear-gradient(
      90deg,
      #891313 0,
      #b31818 30%,
      #e61515 45%,
      #fd5555 65%,
      #e61515 95%
    );
    border-right-color: #fd5555;
    border-top-color: #fd5555;
    flex: 10;
    width: 100%;
    border-left-color: #5f1010;
  }
`;

export default Container;
