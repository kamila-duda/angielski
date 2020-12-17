import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  text-align: center;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.color.middle};
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${({ theme }) => theme.color.dark};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin-left: 5px;
`;
