import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledContainer = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.color.darknest};
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${({theme})=>theme.color.middle};
margin: 15px;
font-size: 300px;
position: absolute;
z-index: -1;
`;
export const StyledText = styled.p`
text-align: center;
width: 80%;
`;