import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
  `}
`;

type StyledProjectProps = {
  aling?: "left" | "right";
};

export const Project = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 15rem;
    opacity: 0;

    @media (max-width: 768px) {
      margin: 0 auto;
      margin-bottom: 15rem;
      box-shadow: 0 10px 30px -15px ${theme.colors.slateShadow};
      overflow: hidden;
    }

    @media ${theme.media.large} {
      box-shadow: none;
    }
  `}
`;

export const ProjectContent = styled.div<StyledProjectProps>`
  ${({ theme, aling }) => css`
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
    grid-column: ${aling !== "right" ? "1 / 8" : "5 / -1"};

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

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      text-align: left;
      display: flex;
      flex-direction: column;
      -moz-box-pack: center;
      justify-content: center;
      height: 100%;

      text-align: left;
    }
  `}
`;

export const ProjectImage = styled.div<StyledProjectProps>`
  ${({ theme, aling }) => css`
    height: ${theme.frameSizes.smallMedium};
    position: relative;
    transition: ${theme.transitions.fast};
    z-index: 2;
    grid-area: 1 / 6 / -1 / -1;
    grid-column: ${aling === "right" ? "1 / 8" : "0"};
    border-radius: 5px;
    overflow: hidden;

    a {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: ${theme.colors.green};
      position: relative;
    }

    a::after {
      display: none;
    }

    > a::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: ${theme.colors.slate9};
      mix-blend-mode: screen;
      z-index: 1;
      transition: ${theme.transitions.faster};
    }

    > a img {
      border-radius: 5px;
      filter: grayscale(100%) contrast(1) brightness(90%);
      transition: ${theme.transitions.faster};
      mix-blend-mode: multiply;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }

    a:hover::before,
    a:hover img,
    a:hover {
      filter: grayscale(0%);
      background-color: transparent;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;

      > img {
        max-width: none;
        max-height: none;
        object-fit: cover;
        width: auto;
        height: 100%;
        background-position: center;
      }
    }
  `}
`;

export const ProjectTitle = styled.h3`
  ${({ theme }) => css`
    margin: 0px 0px 20px;
    font-size: ${theme.font.sizes.medium};
    > a {
      font-size: inherit;
      color: ${theme.colors.slate3};
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.green};
      }

      ::after {
        display: none;
      }

      @media ${theme.media.small} {
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
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      padding: 20px 0px;
      background-color: transparent;
      box-shadow: none;
    }
  `}
`;

export const ProjectTechList = styled.ul<StyledProjectProps>`
  ${({ theme, aling = "left" }) => css`
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

    @media (max-width: 768px) {
      margin: 10px 0px 10px;
      -moz-box-pack: start;
      justify-content: flex-start;
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

    @media (max-width: 768px) {
      -moz-box-pack: start;
      justify-content: flex-start;
      margin-left: -10px;
      margin-right: 0px;

      svg {
        width: 20px;
      }
    }
  `}
`;
