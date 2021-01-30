import React from "react";
import { StyledFontAwesomeIcon, StyledTitle, StyledText } from "./styled";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import Container from "../../common/Container";

const HomePage = () => {
  return (
    <Container>
      <StyledTitle>Witaj na stronie ze słówkami z języka angielskiego dla klasy I</StyledTitle>
      <StyledFontAwesomeIcon icon={faChild} />
      <StyledText>W zakładce "WORDS" znajdują się słówka do nauki, natomiast w zakładce "TEST" po wybraniu jednej lub kilku kategorii można rozpocząć test, w którym należy odpowiedzieć poprawnie 10 razy (za każdą złą odpowiedź jest odejmowany punkt 😏)</StyledText>
      <StyledText>Kolejne słówka będą dodawane w odpowiednim czasie.</StyledText>
    </Container>
  );
};

export default HomePage;
