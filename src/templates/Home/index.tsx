import Head from "next/head";
import { useEffect, useState } from "react";
import { PortfolioProps } from "../../../types/portfolio";
import { DisplayName } from "../../components/DisplayName";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { About } from "../About";
import { Experiences } from "../Experiences";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { MajorProjects } from "../MajorProjects";
import { MinorProjects } from "../MinorProjects";
import * as Styled from "./styles";

export const Home = ({
  title,
  subtitle,
  description,
  about,
  majorProjects,
  minorProjects,
  experiences,
  header,
  cover,
  meta,
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
    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>
        <LoadingAnimation />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>

      <Header setMenuMobile={setMenuMobile} open={menuMobile} header={header} />

      <Styled.Wrapper open={menuMobile}>
        <DisplayName
          name={title}
          subtitle={subtitle}
          description={description}
        />
        <About cover={cover} {...about} />
        <MajorProjects projects={majorProjects} />
        <MinorProjects projects={minorProjects} />
        <Experiences experiences={experiences} />
      </Styled.Wrapper>

      <Footer />
    </>
  );
};
