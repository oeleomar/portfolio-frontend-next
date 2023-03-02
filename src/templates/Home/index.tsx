import { useEffect, useState } from "react";
import { PortfolioProps } from "../../../types/portfolio";
import { DisplayName } from "../../components/DisplayName";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { ParticlesBackground } from "../../components/ParticlesBackground";
import { About } from "../About";
import { Experiences } from "../Experiences";
import { Footer } from "../Footer";
import { Header } from "../Header";
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
  cover,
}: PortfolioProps) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    if (!initialLoading) return;

    const timeout = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (initialLoading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <ParticlesBackground />

      <Header setMenuMobile={setMenuMobile} open={menuMobile} />
      <Styled.Wrapper open={menuMobile}>
        <DisplayName name={name} description={description} />
        <About cover={cover} {...about} />
        <MajorProjects projects={majorProjects} />
        <MinorProjects projects={minorProjects} />
        <Experiences experiences={experiences} />
      </Styled.Wrapper>
      <Footer />
    </>
  );
};
