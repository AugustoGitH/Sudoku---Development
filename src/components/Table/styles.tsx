import styled from "styled-components"

export const Table = styled.div`
  width: 550px;
  height: 500px;
  border: 1.5px solid ${({ theme }) => theme.colors.primary.main};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`