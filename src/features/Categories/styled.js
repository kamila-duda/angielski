import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
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
`;
export const StyledTitle = styled.h2`
  position: relative;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 1s ease-in-out;
    background-color: #fff;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledAnchor = styled.a`
  text-decoration: none;
`;
