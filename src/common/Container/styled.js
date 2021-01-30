import styled, { css } from "styled-components";

export const StyledContainer = styled.section`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${({ wordsPage }) =>
    wordsPage &&
    css`
      min-height: 300px;
    `}
    ${({ column }) =>
    column &&
    css`
     flex-direction: column;
    `}
`;
