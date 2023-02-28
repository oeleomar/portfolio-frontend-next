import styled, { css } from "styled-components";

type HeadingProps = {
  number: string;
};

export const Heading = styled.h2<HeadingProps>`
  ${({ theme, number }) => css`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    white-space: nowrap;

    ::before {
      content: "0${number}.";
      position: relative;
      margin-right: 10px;
      color: ${theme.colors.green};
      font-family: ${theme.font.family.mono};
      font-size: ${theme.font.sizes.small};

      font-weight: 400;
    }

    &::after {
      content: "";
      display: block;
      position: relative;

      max-width: 300px;
      width: 100%;
      height: 1px;
      margin-left: 20px;
      background-color: ${theme.colors.green};
    }

    @media ${theme.media.small} {
      font-size: ${theme.font.sizes.large};

      ::before {
        font-size: ${theme.font.sizes.normal}
    }
  `}
`;
