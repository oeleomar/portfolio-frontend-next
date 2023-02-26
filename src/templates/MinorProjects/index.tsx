import { ProjectsProps } from "../../../types/portfolio";
import * as Styled from "./styles";

export type MinorProjectsProps = {
  title?: string;
};

export const MinorProjects = ({ ...data }: ProjectsProps[]) => {
  return <Styled.Wrapper>Minor Projects</Styled.Wrapper>;
};
