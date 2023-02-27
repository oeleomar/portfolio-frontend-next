import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.frameSizes.max};
    margin: 0 auto;
  `}
`;
