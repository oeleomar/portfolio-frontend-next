import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
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
  `}
`;
