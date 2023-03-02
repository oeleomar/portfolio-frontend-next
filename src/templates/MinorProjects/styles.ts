import styled, { css } from "styled-components";
import { Wrapper as SectionWrapper } from "../../components/Section/styles";
import {
  ProjectTitle,
  ProjectDescription,
  ProjectTechList,
} from "../MajorProjects/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    ${SectionWrapper} {
      padding-top: 0;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xsmall};

    @media ${theme.media.small} {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const LinkArchive = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.font.family.mono};
  `}
`;

export const ProjectsContainer = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.spacings.small};
    list-style: none;
    margin-top: ${theme.spacings.xhuge};
    transition: ${theme.transitions.fast};
  `}
`;

export const Project = styled.li`
  ${({ theme }) => css`
    min-width: ${theme.frameSizes.smallMedium};
    padding: ${theme.spacings.mediumLarge} ${theme.spacings.medium};
    background-color: ${theme.colors.slate8};
    box-shadow: 0 10px 30px -15px ${theme.colors.slateShadow};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    transition: ${theme.transitions.fast};
    border-radius: 5px;
    opacity: 0;

    &:hover {
      transform: translateY(-10px);
    }
  `}
`;

export const HeaderProject = styled.header`
  ${({ theme }) => css`
    width: 100%;
    text-align: start;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${theme.spacings.large};
    }

    &:first-child {
      color: ${theme.colors.green};
    }
    > div div a {
      color: ${theme.colors.slate4};
      padding: 5px;
      transition: ${theme.transitions.fast};
    }

    > div div a:hover {
      color: ${theme.colors.green};
    }

    > div div a::after {
      display: none;
    }

    ${ProjectTitle} {
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xsmall};

      a {
        font-size: inherit;
      }
    }

    ${ProjectDescription} {
      margin: 0;
      padding: 0;
    }
  `}
`;

export const FooterProject = styled.footer`
  ${({ theme }) => css`
    ${ProjectTechList} {
      margin-bottom: 0;
    }
  `}
`;

export const ShowMoreButton = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxhero};
  `}
`;
