import styled from 'styled'

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 4rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 10px;
    font-family: 'Staatliches', sans-serif;
    letter-spacing: 5px;
    background: #fdd54b;
    opacity: 0.8;

    .red {
      color: #df1c18;
    }
  }
`

export default Container
