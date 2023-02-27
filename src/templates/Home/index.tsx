import { useEffect, useState } from "react";
import { PortfolioProps } from "../../../types/portfolio";
import { DisplayName } from "../../components/DisplayName/DisplayName";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
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
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (!initialLoading) return;

    const timeout = setTimeout(() => {
      setInitialLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  if (initialLoading) {
    return <LoadingAnimation />;
  }

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
