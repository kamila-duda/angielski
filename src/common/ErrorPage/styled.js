import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const StyledText = styled.p`
font-size: 22px;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
`;