import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
} 
body{
  background-color: ${({theme})=>theme.color.light};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
  padding: 0;
  color: ${({theme})=>theme.color.middle};
}
`;