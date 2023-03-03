import styled, { css, DefaultTheme } from "styled-components";

type Main = { open: boolean };

export const Wrapper = styled.main<Main>`
  ${({ theme, open }) => css`
    max-width: ${theme.frameSizes.huge};
    margin: 0 auto;
    padding: 125px 25px;

    @media ${theme.media.small} {
      padding: 150px 50px;
    }

    @media ${theme.media.medium} {
      padding: 200px 100px;
    }

    @media ${theme.media.large} {
      margin: 0px auto;
      width: 100%;
      max-width: 1600px;
      min-height: 100vh;
      padding: 200px 150px;
    }

    ${checkMenuMobileOpen(open, theme)}
  `}
`;

function checkMenuMobileOpen(open: boolean = false, theme: DefaultTheme) {
  if (!open) return false;

  return css`
    overflow: hidden;
    filter: blur(5px) brightness(0.7);
    transition: ${theme.transitions.fast};
    pointer-events: none;
    user-select: none;
  `;
}

export const ContentContainer = styled.section`
  ${({ theme }) => css``}
`;

export const Title = styled.h1`
  ${({ theme }) => css``}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.mono};
  `}
`;

export const TableContainer = styled.div`
  ${({ theme }) => css`
    margin: 50px -10px;

    @media ${theme.media.medium} {
      margin: 100px -20px;
    }
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;
    line-height: 1.3;

    color: ${theme.colors.slate5};
    thead {
      font-size: 1.8rem;
    }

    tr {
      cursor: default;
    }

    td,
    th {
      padding: 10px;
      padding-left: 10px;
      text-align: left;
    }

    th:first-child,
    td:first-child {
      padding-left: 20px;
    }

    > th:last-child,
    td:last-child {
      padding-right: 10px;
    }

    .hide-on-mobile {
      display: none;

      @media ${theme.media.medium} {
        display: inline-block;
      }
    }

    tbody tr:hover {
      background-color: ${theme.colors.slate8};
    }

    .overline {
      color: ${theme.colors.green};
      font-family: ${theme.font.family.mono};
      font-size: ${theme.font.sizes.small};
      font-weight: 400;
    }

    .year {
      padding-right: 20px;
    }

    .title {
      padding-top: 15px;
      padding-right: 20px;
      color: ${theme.colors.slate3};
      font-size: ${theme.font.sizes.normal};
      font-weight: 600;
      line-height: 1.25;
    }

    .company {
      font-size: ${theme.font.sizes.small};
      white-space: nowrap;
    }

    .tech {
      font-size: ${theme.font.sizes.xsmall};
      font-family: ${theme.font.family.mono};
      line-height: 1.5;
    }

    .tech span {
      display: inline-block;
      border-collapse: collapse;
    }

    .separator {
      margin: 0px 5px;
    }

    .links {
      min-width: 100px;
    }

    span {
      font-size: inherit;
    }

    .links div {
      display: flex;
      align-items: center;
    }

    .links div a {
      display: flex;
      -moz-box-pack: center;
      justify-content: center;
      -moz-box-align: center;
      align-items: center;
      flex-shrink: 0;
      color: inherit;
    }

    .links div a + a {
      margin-left: 10px;
    }

    .links div a::after {
      display: none;
    }
  `}
`;
