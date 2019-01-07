import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    line-height: 1.5;
    color: ${props => props.theme.black}
    background-color: ${props => props.theme.grey}
    margin: 2em;
  }
`;