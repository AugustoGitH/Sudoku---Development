import styled from "styled-components";

export const SubSectorTable = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  transition: 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.success.light};
  }
  &:active {
    background: ${({ theme }) => theme.colors.success.main};
  }
`;
