import styled from "styled-components";
import baloon from "../../assets/baloon.jpg";

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${baloon});
background-size: contain;
width: 1000px;
height: 400px;
`;
export const StyledText = styled.p`
font-size: 22px;
`;