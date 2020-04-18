import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme }) => theme.screen}

  display: flex;
  justify-content: space-between;
  margin: 3px;
  padding: 10px 20px;
  flex: 1;
`;

export default Container;
