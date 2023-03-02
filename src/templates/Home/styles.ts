import styled, { css, DefaultTheme } from "styled-components";

type Main = { open: boolean };

export const Wrapper = styled.main<Main>`
  ${({ theme, open }) => css`
    max-width: ${theme.frameSizes.huge};
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};

    @media ${theme.media.small} {
      padding: 0 ${theme.spacings.xhuge};
    }

    @media ${theme.media.medium} {
      padding: 0 ${theme.spacings.xxhuge};
    }
    @media ${theme.media.large} {
      padding: 0 ${theme.frameSizes.xxsmall};
    }
    @media ${theme.media.xlarge} {
      padding: 0 ${theme.frameSizes.xsmall};
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
