import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledContainer = styled.section`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
min-height: 300px;
`;
export const StyledTitle = styled.h2`
font-size: 20px;
`;
export const StyledPolishWord = styled.h3`
font-size: 15px;
color: ${({theme})=>theme.color.middle};
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
`;
export const StyledAnchor = styled.a`
text-decoration: none;
position: relative;
text-align: center;
cursor: pointer;
margin: 8px;
border-radius: 15px;
box-shadow: 0px 0px 5px 0px #000;
&::after{
    content: "📢";
    position: absolute;
    font-size: 30px;
    right: 0;
    bottom: 0;
}
`;
export const StyledButton = styled.button`
cursor: pointer;
width: 250px;
padding: 20px;
margin: 25px 0 15px;
text-transform: uppercase;
font-size: 18px;
color: ${({theme})=>theme.color.middle};
border: 3px solid ${({theme})=>theme.color.middle};
outline-style: none;
border-radius: 15px;
&:hover{
    background-color: ${({theme})=>theme.color.middle};
    color: ${({theme})=>theme.color.lighter};
}
`;