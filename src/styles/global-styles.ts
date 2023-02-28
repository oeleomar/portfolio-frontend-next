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
      color: ${theme.colors.slate4};
      @media ${theme.media.large} {
        font-size: 1.8rem;
      }
    }

    a {
      color: ${theme.colors.green};
      text-decoration: none;
      animation: ${theme.transitions.fast};
      position: relative;
      display: inline-block;
    }

    a:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      display: inline;
      width: 0%;
      height: 2px;
      background-color: ${theme.colors.green};
      transition: ${theme.transitions.faster};
    }

    a:hover::after {
      width: 100%;
    }

    button {
      background-color: transparent;
      color: ${theme.colors.green};
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family.mono};
      padding: ${theme.spacings.mediumSmall} ${theme.spacings.mediumLarge};
      border: 2px solid ${theme.colors.green};
      border-radius: 5px;
      outline: none;
      line-height: 1;
      cursor: pointer;
      transition: ${theme.transitions.fast};
    }

    button:hover {
      background-color: ${theme.colors.greenTint};
    }
  `}
`;
