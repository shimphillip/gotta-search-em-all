import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme }) => theme.screen}
  font-size: 28px;
  letter-spacing: 4px;
  text-transform: capitalize;
  height: 45px;

  display: flex;
  justify-content: space-between;
`;

export default Container;
