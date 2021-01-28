import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.lighter};
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  margin: 0;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;