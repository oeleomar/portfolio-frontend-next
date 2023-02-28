import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    position: relative;
  `}
`;

export const FooterIcons = styled.div`
  ${({ theme }) => css`
    > div {
      width: 2px;
      height: 10rem;
      position: fixed;
      background-color: ${theme.colors.slate4};
      display: none;

      @media ${theme.media.medium} {
        display: block;
        left: 30px;
        bottom: 0;
      }

      @media ${theme.media.large} {
        display: block;
        left: 60px;
      }
    }

    > ul {
      display: none;
      position: fixed;
      list-style: none;

      > li {
        padding: 10px;
      }

      > li:hover {
        color: ${theme.colors.green};
        transform: translateY(-5%);
        transition: ${theme.transitions.fastest};
      }

      > li a {
        font-size: inherit;
        color: inherit;
      }

      > li a::after {
        display: none;
      }

      @media ${theme.media.medium} {
        display: block;
        left: 10px;
        bottom: 115px;
      }

      @media ${theme.media.large} {
        left: 40px;
      }
    }
  `}
`;

export const FooterEmail = styled.div`
  ${({ theme }) => css`
    position: relative;

    > div {
      width: 2px;
      height: 10rem;
      position: fixed;
      background-color: ${theme.colors.slate4};
      display: none;

      @media ${theme.media.medium} {
        display: block;
        right: 30px;
        bottom: 0;
      }

      @media ${theme.media.large} {
        display: block;
        right: 60px;
      }
    }

    p {
      position: fixed;
      transform: rotate(90deg);
      font-family: ${theme.font.family.mono};
      font-size: ${theme.font.sizes.small};
      transition: ${theme.transitions.fastest};

      &:hover {
        color: ${theme.colors.green};
        transform: translateY(-10px) rotate(90deg);
      }

      a {
        color: inherit;
        font-size: inherit;
        font-family: inherit;
      }

      a::after {
        display: none;
      }

      @media ${theme.media.medium} {
        display: block;
        right: -62px;
        bottom: 215px;
      }

      @media ${theme.media.large} {
        right: -34px;
      }
    }
  `}
`;
