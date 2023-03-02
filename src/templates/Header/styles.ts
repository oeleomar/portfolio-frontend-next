import styled, { css } from "styled-components";

type Scrool = {
  scroll: boolean;
  progress: boolean;
};

export const Wrapper = styled.header<Scrool>`
  ${({ theme, scroll, progress }) => css`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: ${theme.spacings.xxhero};
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(10px);
    transition: ${theme.transitions.fastest};
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;

    a {
      font-size: inherit;
      color: inherit;
    }

    a::after {
      display: none;
    }

    @media ${theme.media.medium} {
      transform: ${scroll
        ? `translateY(-${theme.spacings.xxhero})`
        : "translateY(0)"};

      box-shadow: ${!progress &&
      !scroll &&
      `0 10px 30px -10px ${theme.colors.slateShadow};`};
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css``}
`;

export const Navbar = styled.nav`
  ${({ theme }) => css`
    font-family: ${theme.font.family.mono};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${theme.colors.slate3};
  `}
`;

export const List = styled.ol`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.medium} {
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: space-between;
      font-size: ${theme.font.sizes.small};

      > button {
        margin-left: 15px;
        font-size: inherit;
        padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      }
    }
  `}
`;

export const Link = styled.li`
  ${({ theme }) => css`
    counter-increment: item 1;
    padding: 10px;
    font-size: inherit;
    transition: ${theme.transitions.fast};

    a:hover {
      color: ${theme.colors.green};
    }

    &::before {
      font-size: inherit;
      content: "0" counter(item) ".";
      margin-right: 5px;
      color: ${theme.colors.green};
    }
  `}
`;

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    z-index: ${theme.layers.aboveAll};
    position: fixed;
    top: 20px;
    right: 30px;
    border: none;
    padding: 0;
    margin: 0;

    @media ${theme.media.medium} {
      display: none;
    }
  `}
`;

type MenuMobile = {
  open: boolean;
};

export const AsideMobile = styled.aside<MenuMobile>`
  ${({ theme, open }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: ${theme.colors.slate8};
    box-shadow: -10px 0px 30px -15px ${theme.colors.slateShadow};
    //z-index: 9;
    transform: ${open ? "translateX(0vw)" : "translateX(100vw)"};
    visibility: ${open ? "visible" : "hidden"};
    transition: ${theme.transitions.fast};

    ol {
      list-style: none;
    }

    ol li {
      counter-increment: item 1;
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: ${theme.transitions.fast};
      width: 100%;
      padding: 3px 20px 20px;
      font-size: ${theme.font.sizes.normal};
      margin-bottom: ${theme.spacings.mediumSmall};
    }

    ol li::before {
      content: "0" counter(item) ".";
      display: block;
      margin-bottom: 5px;
      color: ${theme.colors.green};
      font-size: ${theme.font.sizes.small};
    }
    text-align: center;

    @media ${theme.media.medium} {
      display: none;
    }
  `}
`;
