import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-size: 1.6rem;
      background: ${theme.colors.slate9};
      font-family: ${theme.font.family.default};
      color: ${theme.colors.emerald4};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.font.family.secondary};
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
  
`;
