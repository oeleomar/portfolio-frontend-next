import { PortfolioProps } from "../../../types/portfolio";
import { About } from "../About";
import { Experiences } from "../Experiences";
import { MajorProjects } from "../MajorProjects";
import { MinorProjects } from "../MinorProjects";
import * as Styled from "./styles";

export const Home = ({
  majorProjects,
  minorProjects,
  experiences,
}: PortfolioProps) => {
  return (
    <Styled.Wrapper>
      <About />

      <MajorProjects {...majorProjects} />
      <MinorProjects {...minorProjects} />

      <Experiences {...experiences} />
    </Styled.Wrapper>
  );
};
