import { PortfolioProps } from "../../../types/portfolio";
import { DisplayName } from "../../components/DisplayName/DisplayName";
import { About } from "../About";
import { Experiences } from "../Experiences";
import { MajorProjects } from "../MajorProjects";
import { MinorProjects } from "../MinorProjects";
import * as Styled from "./styles";

export const Home = ({
  name,
  description,
  about,
  majorProjects,
  minorProjects,
  experiences,
  links,
}: PortfolioProps) => {
  return (
    <Styled.Wrapper>
      <DisplayName name={name} description={description} links={links} />

      <About {...about} />
      <MajorProjects {...majorProjects} />
      <MinorProjects {...minorProjects} />

      <Experiences {...experiences} />
    </Styled.Wrapper>
  );
};
