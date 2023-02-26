import { ProjectsProps } from "../../../types/portfolio";
import * as Styled from "./styles";

export const MajorProjects = ({ ...data }: ProjectsProps[]) => {
  return <Styled.Wrapper id="majorProjects">Major Projects</Styled.Wrapper>;
};
