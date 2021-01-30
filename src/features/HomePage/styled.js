import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 34px;
  width: 80%;
  display: flex;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 22px;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: #ffffffb8;
margin: 15px;
font-size: 300px;
position: absolute;
z-index: -1;
`;
export const StyledText = styled.p`
text-align: justify;
line-height: 1.5;
width: 60%;
color: ${({ theme }) => theme.color.darknest};
@media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 14px;
  }
`;