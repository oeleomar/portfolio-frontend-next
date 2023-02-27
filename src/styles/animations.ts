import { keyframes } from "styled-components";

export const left = keyframes`
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const top = keyframes`
  0% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const bottom = keyframes`
  0% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const rigth = keyframes`
  0% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const fadeOutScale = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;
