import { Link } from "react-router-dom";
import styled from "styled-components";

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
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
