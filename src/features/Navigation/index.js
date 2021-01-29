import React from "react";
import {
  NavigationList,
  NavigationListItem,
  StyledFontAwesomeIcon,
  StyledNavbar,
  StyledTitle,
  StyledNavLink,
  StyledLink
} from "./styled";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { toCategories, toHomePage, toRepetition } from "../../routes";

const Navigation = () => {
  return (
    <StyledNavbar>
      <StyledLink to={toHomePage()}>
      <StyledFontAwesomeIcon icon={faChild} />
        <StyledTitle>
          English for Kids
        </StyledTitle>
      </StyledLink>
      <NavigationList>
      <NavigationListItem>
          <StyledNavLink to={toHomePage()}>Home</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink to={toRepetition()}>Words</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink to={toCategories()}>Test</StyledNavLink>
        </NavigationListItem>
      </NavigationList>
    </StyledNavbar>
  );
};

export default Navigation;
