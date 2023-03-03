import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    overflow-x: hidden;

    .vertical-timeline-element-title {
      font-size: ${theme.font.sizes.normal};
      transition: ${theme.transitions.fast};

      @media ${theme.media.medium} {
        font-size: ${theme.font.sizes.medium};
      }
    }

    .vertical-timeline-element-title:hover {
      color: ${theme.colors.green};
    }

    .vertical-timeline-element-subtitle {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.slate4};
    }

    .vertical-timeline-element-description {
      font-size: ${theme.font.sizes.xsmall};
    }

    .date {
      color: ${theme.colors.slate3};
      font-size: ${theme.font.sizes.xsmall};
    }

    .vertical-timeline-element-content {
      box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    }
  `}
`;
