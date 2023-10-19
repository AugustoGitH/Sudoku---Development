import styled from "styled-components"

export const SectorTable = styled.div`
  border: 1.5px solid ${({ theme }) => theme.colors.primary.main};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

`