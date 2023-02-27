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
      color: ${theme.colors.slate3};
      line-height: 1.3;
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h1,
    h2,
    h3 {
      font-weight: 600;
      font-size: ${theme.font.sizes.xlarge};

      @media ${theme.media.medium} {
        font-size: ${theme.font.sizes.huge};
      }

      @media ${theme.media.large} {
        font-size: ${theme.font.sizes.xxhuge};
      }

      @media ${theme.media.xlarge} {
        font-size: ${theme.font.sizes.hero};
      }
    }

    a,
    span,
    p,
    li {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.slate5};
      @media ${theme.media.large} {
        font-size: ${theme.font.sizes.normal};
      }
    }
  `}
`;
