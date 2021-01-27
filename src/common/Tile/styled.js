import styled, { css } from "styled-components";
import { StyledTitle } from "../../features/Categories/styled";

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
  background-color: rgba(0, 0, 0, 30%);
  ${({ checked }) =>
    checked &&
    css`
      border: 3px solid ${({ theme }) => theme.color.middle};
    `}
&::after {
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
  :hover {
    background-color: rgba(0, 0, 0, 60%);
    ${StyledTitle} {
      &::after {
        transform: scaleX(1);
      }
    }
  }
  ${({ testedTile }) =>
    testedTile &&
    css`
    background-color: unset;
    &:hover{
        border: 3px solid ${({ theme }) => theme.color.middle};
        background-color: rgba(0, 0, 0, 0%);
    }
      
    `}
    @media (max-width: ${({theme})=>theme.breakpoint.xs}) {
    width: 120px;
    height: 100px;
    font-size: 13px;
  }
`;
