import React from "react";
import { StyledContainer } from "./styled";

const Container = ({children, wordsPage, column}) => {
  return (
    <StyledContainer wordsPage={wordsPage}>
      {children}
    </StyledContainer>
  );
};

export default Container;
