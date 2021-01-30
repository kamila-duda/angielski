import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  width: 250px;
  padding: 20px;
  margin: 10px;
  text-transform: uppercase;
  font-size: 18px;
  color: ${({ theme }) => theme.color.middle};
  border: 3px solid ${({ theme }) => theme.color.middle};
  outline-style: none;
  border-radius: 15px;
  ${({ checked }) =>
    checked &&
    css`
      background-color: ${({ theme }) => theme.color.middle};
      color: ${({ theme }) => theme.color.lighter};
    `}
  ${({ repetitionEnd }) =>
    repetitionEnd &&
    css`
      margin: 25px 0 15px;
    `}
  &:hover {
    background-color: ${({ theme }) => theme.color.middle};
    color: ${({ theme }) => theme.color.lighter};
  }
  &:disabled {
    background-color: gray;
    color: ${({ theme }) => theme.color.lighter};
    cursor: not-allowed;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;
