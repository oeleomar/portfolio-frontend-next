import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.frameSizes.xxlarge};
    margin: 0 auto;
  `}
`;
