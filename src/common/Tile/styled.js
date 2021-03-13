import styled, { css } from "styled-components";
import { StyledTitle } from "../../features/TestCategories/styled";
import { StyledTitle as WordsTitle } from "../../features/WordsPage/styled";

export const StyledTile = styled.div`
  position: relative;
  cursor: pointer;
  width: 260px;
  height: 150px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${({ theme }) => theme.color.lighter};
  text-transform: uppercase;
  border-radius: 15px;
  border: 3px solid rgba(0, 0, 0, 0%);
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
    border-radius: 12px;
    ${({ image }) =>
      image &&
      css`
        background-image: url(${image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
  }
  &:hover {
    background-color: rgba(0, 0, 0, 60%);
    ${StyledTitle} {
      &::after {
        transform: scaleX(1);
      }
    }
    ${WordsTitle} {
      &::after {
        transform: scaleX(1);
      }
    }
  }
  ${({ repetitionTile }) =>
    repetitionTile &&
    css`
      background-color: unset;
      width: 180px;
      &:hover {
        border: 3px solid transparent;
        background-color: unset;
      }
    `}
  ${({ testedTile }) =>
    testedTile &&
    css`
      background-color: unset;
      width: 180px;
      &:hover {
        border: 3px solid ${({ theme }) => theme.color.middle};
        background-color: unset;
      }
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 120px;
    height: 100px;
    font-size: 13px;
  }
`;
