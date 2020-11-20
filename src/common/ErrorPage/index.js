import React from "react";
import { toCategories } from "../../routes";
import { StyledContainer, StyledText, StyledLink } from "./styled"

const ErrorPage = () => {

    return (
        <StyledContainer>
            <StyledText>Ups, coś poszło nie tak.</StyledText>
            <StyledText>Wróć na stronę główną:</StyledText>
            <StyledLink to={toCategories()}>Powrót na stronę główną</StyledLink>
        </StyledContainer>
    )

};

export default ErrorPage;