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
import { toCategories, toHomePage } from "../../routes";

const Navigation = () => {
  return (
    <StyledNavbar>
      <StyledLink to={toHomePage()}>
        <StyledTitle>
          <StyledFontAwesomeIcon icon={faChild} />
          English for Kids
        </StyledTitle>
      </StyledLink>
      <NavigationList>
        <NavigationListItem>
          <StyledNavLink to={"/"}>Repetition</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink to={toCategories()}>Test</StyledNavLink>
        </NavigationListItem>
      </NavigationList>
    </StyledNavbar>
  );
};

export default Navigation;
