import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.base};
    overflow: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  body {
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  a {
    text-decoration: none !important; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    word-break: break-word;
    line-height: 1.4074;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textContent}
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    line-height: 1.19;
    font-weight: 700;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
    line-height: 1.23;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    line-height: 1.14;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.h4};
    line-height: 1.25;
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.h5};
    line-height: 1.24;
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.h6};
    line-height: 1.25;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  address,
  p,
  pre,
  blockquote,
  menu,
  ol,
  ul,
  table,
  hr {
    margin: 0 0 20px;
  }

  .next-error-h1 {
    color: ${({ theme }) => theme.colors.textHeading};
  }
`;
