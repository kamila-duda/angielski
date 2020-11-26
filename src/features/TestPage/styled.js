import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
min-height: 300px;
`;

export const StyledTitle = styled.h2`
position: relative;
text-align: center;
&::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 1s ease-in-out;
    background-color: #fff;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${({theme})=>theme.color.middle};
cursor: pointer;
margin-left: 5px;
`;
export const StyledTile = styled.div`
position: relative;
cursor: pointer;
width: 250px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
color: #fff;
text-transform: uppercase;
border-radius: 15px;
border: 3px solid rgba(0, 0, 0, 0%);
margin: 10px;
${({ checked }) =>
    checked &&
    css`
     border: 3px solid ${({theme})=>theme.color.middle};
    `}
&::after{
content: "";
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
z-index: -1;
border-radius: 15px;
${({ image }) =>
    image &&
    css`
     background-image: url(${image});
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
    `}
}
:hover{
    border: 3px solid ${({theme})=>theme.color.middle};
}
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
`;
export const StyledButton = styled.button`
cursor: pointer;
width: 250px;
padding: 20px;
margin: 15px;
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