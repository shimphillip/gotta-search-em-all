import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .input {
    width: 50px;
    font-size: 20px;
    height: 30px;
    text-align: right;
    align-self: center;

    ${({ theme }) => theme.screen}
  }
`;

export default Container;
