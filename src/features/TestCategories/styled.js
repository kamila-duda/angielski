import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  width: 250px;
  padding: 20px;
  margin: 10px;
  text-transform: uppercase;
  font-size: 18px;
  color: ${({ theme }) => theme.color.middle};
  border: 3px solid ${({ theme }) => theme.color.middle};
  outline-style: none;
  border-radius: 15px;
  ${({ checked }) =>
    checked &&
    css`
      background-color: ${({ theme }) => theme.color.middle};
      color: ${({ theme }) => theme.color.lighter};
    `}
  &:hover {
    background-color: ${({ theme }) => theme.color.middle};
    color: ${({ theme }) => theme.color.lighter};
  }
  &:disabled {
    background-color: gray;
    color: ${({ theme }) => theme.color.lighter};
    cursor: not-allowed;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;
export const StyledTitle = styled.h2`
  position: relative;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledAnchor = styled.a`
  text-decoration: none;
`;
