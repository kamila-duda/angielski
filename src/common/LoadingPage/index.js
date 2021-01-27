import React from "react";
import Container from "../Container";
import { StyledContainer, StyledText, StyledLink } from "./styled"

const LoadingPage = () => {
    
    return (
        <Container>
            <StyledContainer>
                <StyledText>
                    Dobra odpowiedź! Losuję kolejne słowo...
                </StyledText>
            </StyledContainer>
        </Container>
    )

};

export default LoadingPage;