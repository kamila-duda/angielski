import React from "react";
import { StyledButton } from "./styled";

const Button = ({text, disabled, onClick, repetitionEnd}) => {
    return (
      <StyledButton disabled={disabled} onClick={onClick} repetitionEnd={repetitionEnd}>
        {text}
      </StyledButton>
    );
  };

export default Button;
