import React from "react";
import { StyledContainer, StyledFontAwesomeIcon, StyledTitle, StyledText } from "./styled";
import { faChild } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledTitle>Witaj na stronie poświęconej słownictwu z języka angielskiego dla klasy I</StyledTitle>
      <StyledFontAwesomeIcon icon={faChild} />
      <StyledText>Do wyboru jest powtórka ze słówek lub test, gdzie należy 10 razy odpowiedzieć poprawnie (za każdą złą odpowiedź jest odejmowany punkt 😏 )</StyledText>
      <StyledText>Kolejne słówka będą dodawane w odpowiednim czasie.</StyledText>
    </StyledContainer>
  );
};

export default HomePage;
