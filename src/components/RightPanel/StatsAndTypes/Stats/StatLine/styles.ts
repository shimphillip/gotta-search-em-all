import styled from 'styled'

interface IContainer {
  baseStat: number
}

const Container = styled.p<IContainer>`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  text-transform: capitalize;
  /* color: ${({ baseStat }) => baseStat >= 100 && 'green'}; */
  font-weight: ${({ baseStat }) => baseStat >= 100 && 'bold'};
`

export default Container
