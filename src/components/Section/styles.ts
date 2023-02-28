import styled, { css } from "styled-components";

type SectionProps = {
  small: boolean;
};

export const Wrapper = styled.section<SectionProps>`
  ${({ theme, small }) => css`
    max-width: ${!small ? theme.frameSizes.xxlarge : "90rem"};
    margin: 0 auto;
    padding: ${theme.spacings.xxhero} 0;
  `}
`;
