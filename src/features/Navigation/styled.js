import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.middle};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  z-index: 10;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${({theme})=>theme.color.middle};
margin: 0 8px;
font-size: 20px;
`;
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
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  width: max-content;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0;
  }
`;
export const NavigationListItem = styled.li`
  flex-grow: 0;
  margin: 15px 5px;
`;
export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  color: ${({ theme }) => theme.color.lighter};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  &.active {
    border: 1px solid ${({ theme }) => theme.color.lighter};
    box-sizing: border-box;
    border-radius: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 12px;
  }
`;
