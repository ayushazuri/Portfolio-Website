import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  li{
    list-style-type: none;
  }
  p, h1, h2, h3, h4, h5, h6{
    margin: 0;
  }
  
  body {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
     margin: 0;
     padding: 0;
    transition: all 0.25s linear;
  }`;
