import styled from 'styled'

const Container = styled.div`
  display: flex;
  align-items: center;

  .description {
    ${({ theme }) => theme.screen}
    font-size: 16px;
    letter-spacing: 0;
    flex: 1;
    margin: 0 5px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export default Container

export const SpeakButton = styled.button`
  font-size: 20px;
  border-radius: 50px;
  width: 30px;
  outline: none;
`
