import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;

    .Sphere {
      opacity: 0.6;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${theme.colors.emerald6};
    }
  `}
`;

export const TypeContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.frameSizes.xlarge};
    z-index: 2;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.hero} auto;
    display: flex;
    gap: ${theme.spacings.hero};

    z-index: 2;
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.emerald4};
    color: ${theme.colors.slate9};
    font-family: inherit;
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    display: inline-block;
    padding: ${theme.spacings.tiny} 0;
    width: ${theme.frameSizes.xsmall};
    border-radius: 5px;
    cursor: pointer;
  `}
`;
