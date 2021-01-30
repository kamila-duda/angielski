import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledProgressBar = styled.div.attrs((props) => ({
  width: props.progress,
}))`
  height: 20px;
  margin: 2%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.darknest};
  border-radius: 10px;
  width: 96%;
  &::before {
    content: "";
    position: absolute;
    width: ${(props) => props.progress}%;
    background-color: ${({ theme }) => theme.color.middle};
    height: 100%;
    border-radius: 9px;
  }
`;
export const StyledTitle = styled.h2`
  position: relative;
  cursor: pointer;
  text-align: center;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.middle};
  margin: 0 8px;
  font-size: 20px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledAnchor = styled.a`
  text-decoration: none;
`;
