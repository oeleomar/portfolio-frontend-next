import Head from "next/head";
import { useRouter } from "next/router";
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
  title,
  subtitle,
  description,
  about,
  majorProjects,
  minorProjects,
  experiences,
  header,
  footer,
  meta,
  cover,
}: PortfolioProps) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [menuMobile, setMenuMobile] = useState(false);
  const router = useRouter();

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
          <meta
            name="keywords"
            content="Programação, eleomar dorneles, React, Next, WEB, Mobile, Back-end, Front-end, Desenvolvimento"
          />
          <meta name="robots" content="" />
          <meta name="revisit-after" content="1 day" />
          <meta name="language" content="Portuguese" />
          <meta name="generator" content="N/A" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <LoadingAnimation />
      </>
    );
  }

  return (
    <>
      <ParticlesBackground />

      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta
          name="keywords"
          content="Programação, eleomar dorneles, React, Next, WEB, Mobile, Back-end, Front-end, Desenvolvimento"
        />
        <meta name="robots" content="" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Portuguese" />
        <meta name="generator" content="N/A" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={router.basePath || "https://eleomardorneles.com.br"}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={meta.cover.data?.attributes.url || ""}
        />
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

      <Footer footer={footer} />
    </>
  );
};
