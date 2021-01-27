import React from "react";
import { useDispatch } from "react-redux";
import { resetTest } from "../../features/categoriesSlice";
import { toCategories } from "../../routes";
import { StyledContainer, StyledText, StyledLink } from "./styled"

const ErrorPage = () => {
    
 const dispatch = useDispatch();
    return (
        <StyledContainer>
            <StyledText>Ups, coś poszło nie tak.</StyledText>
            <StyledText>Wróć na stronę główną:</StyledText>
            <StyledLink to={toCategories()} onClick={dispatch(resetTest())}>Powrót na stronę główną</StyledLink>
        </StyledContainer>
    )

};

export default ErrorPage;