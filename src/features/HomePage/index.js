import React from "react";
import { NavigationList, NavigationListItem, StyledFontAwesomeIcon, StyledNavbar, StyledTitle, StyledImage ,StyledNavLink } from "./styled";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import Container from "../../common/Container";
import baloon from "../../assets/baloon.jpg";

const HomePage = () => {
  return (
    <Container>
      <StyledTitle>Witaj na stronie poświęconej słownictwu z języka angielskiego dla klasy I</StyledTitle>
      <StyledFontAwesomeIcon icon={faChild} />
      <p>bla</p>
    </Container>
  );
};

export default HomePage;
