import styled, { css } from "styled-components";
import { fadeInScale, fadeOutScale } from "../../styles/animations";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.slate9};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

type AnimationOutProps = {
  out: boolean;
};

export const AnimationContainer = styled.div<AnimationOutProps>`
  ${({ theme, out }) => css`
    position: relative;
    animation: ${out ? fadeOutScale : fadeInScale} 1s ease-in-out;
    > h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${theme.font.sizes.huge};
    }
  `}
`;
