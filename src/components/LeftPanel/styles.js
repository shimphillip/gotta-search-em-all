import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme }) => theme.lightBorders}
  width: 360px;
  display: flex;
  flex-direction: column;
`;

export default Container;
