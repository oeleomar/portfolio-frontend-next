import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.mediumSmall};
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.mono};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.green};
  `}
`;

export const Name = styled.h1``;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.slate4};
  `}
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: ${theme.frameSizes.largeMedium};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Button = styled.button``;
