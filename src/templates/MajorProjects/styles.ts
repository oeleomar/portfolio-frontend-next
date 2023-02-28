import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
  `}
`;

type StyledProjectProps = {
  aling: "left" | "right";
};

export const Project = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    margin-bottom: ${theme.frameSizes.xxsmall};

    @media ${theme.media.large} {
      box-shadow: none;
    }
  `}
`;

export const ProjectContent = styled.div<StyledProjectProps>`
  ${({ theme, aling }) => css`
    position: relative;
    > p {
      margin: 10px 0px;
      color: ${theme.colors.green};
      font-family: ${theme.font.family.mono};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: 400;
    }

    @media ${theme.media.medium} {
      text-align: ${aling};
    }

    @media ${theme.media.large} {
      grid-area: ${aling === "right" ? "1 / 6 / -1 / -1" : "1 / 1 / -1 / 7"};
      grid-column: ${aling !== "right" ? "1 / 8" : "none"};
    }
  `}
`;

export const ProjectImage = styled.div<StyledProjectProps>`
  ${({ theme, aling }) => css`
    height: ${theme.frameSizes.smallMedium};
    position: relative;
    transition: ${theme.transitions.fast};
    position: relative;
    z-index: -1;

    > img {
      position: relative;
      width: 200%;
    }

    @media ${theme.media.large} {
      grid-area: ${aling === "right" ? "1 / 6 / -1 / -1" : "1 / 6 / -1 / -1"};
      grid-column: ${aling === "right" ? "1 / 8" : "none"};
    }
  `}
`;

export const ProjectTitle = styled.h3`
  ${({ theme }) => css`
    margin: 0px 0px 20px;
    font-size: ${theme.font.sizes.medium};
    > a {
      color: ${theme.colors.slate3};
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.green};
      }

      ::after {
        display: none;
      }

      @media ${theme.media.medium} {
        font-size: 2.8rem;
      }
    }
  `}
`;

export const ProjectDescription = styled.div`
  ${({ theme }) => css`
    text-align: inherit;
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.slate8};
    border-radius: 5px;
  `}
`;

export const ProjectTechList = styled.ul<StyledProjectProps>`
  ${({ theme, aling }) => css`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    gap: ${theme.spacings.mediumSmall};
    justify-content: ${aling === "right" ? "end" : "start"};

    li {
      margin-bottom: 5px;
      font-family: ${theme.font.family.mono};
      font-size: ${theme.font.sizes.xsmall};
      white-space: nowrap;
    }
  `}
`;

export const ProjectLinks = styled.div<StyledProjectProps>`
  ${({ theme, aling }) => css`
    margin-top: 10px;
    margin-right: ${aling === "right" ? "-10px" : 0};
    margin-left: ${aling !== "right" ? "-10px" : 0};
    > a {
      color: ${theme.colors.slate3};
      padding: 10px;
    }
    > a::after {
      display: none;
    }
  `}
`;
