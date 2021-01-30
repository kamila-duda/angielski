import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: 20px;
  color: ${({theme})=>theme.color.darknest};
`;
export const StyledPolishWord = styled.h3`
  font-size: 15px;
  color: ${({ theme }) => theme.color.middle};
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
  &:hover {
    transform: scaleX(1.01);
    box-shadow: 0px 0px 8px 0px #000;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.middle};
  font-size: 30px;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
