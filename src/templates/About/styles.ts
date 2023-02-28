import styled, { css } from "styled-components";

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.mediumSmall};
  `}
`;

export const PictureContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    > div {
      position: relative;
    }

    > div::after {
      content: "";
      display: block;
      position: absolute;
      top: 20px;
      left: 20px;
      width: 100%;
      max-width: 30rem;
      height: 100%;
      max-height: 30rem;
      border-radius: 5px;
      border: 2px solid ${theme.colors.green};
      z-index: -1;
      transition: ${theme.transitions.faster};
    }

    > div:hover::after {
      top: 15px;
      left: 15px;
    }

    > div::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 30rem;
      height: 100%;
      max-height: 30rem;
      border-radius: 5px;
      background-color: ${theme.colors.green};
      mix-blend-mode: multiply;
      z-index: 1;
      transition: ${theme.transitions.faster};
    }

    img {
      border-radius: 5px;
      filter: grayscale(100%) contrast(1);
      transition: ${theme.transitions.faster};
    }

    div:hover::before,
    div:hover img {
      filter: grayscale(0%);
      background-color: transparent;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;

    @media ${theme.media.medium} {
      grid-template-columns: 3fr 2fr;
    }
  `}
`;

export const TechnologiesContainer = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
  `}
`;

export const Technologies = styled.li`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${theme.font.family.mono};
    font-size: 1.4rem;

    &::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: ${theme.colors.green};
      font-size: 1.4rem;
      line-height: 12px;
    }
  `}
`;
