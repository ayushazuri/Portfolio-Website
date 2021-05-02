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
  p, h1, h2, h3{
    margin: 0;
  }
  
  body {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
     margin: 0;
     padding: 0;
    /* font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; */
    transition: all 0.25s linear;
  }`;
