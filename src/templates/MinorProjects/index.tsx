import { useState, useEffect } from "react";
import { ProjectsProps } from "../../../types/portfolio";
import { HeadingComponent } from "../../components/HeadingComponent";
import { Section } from "../../components/Section";
import { FolderOutline } from "@styled-icons/evaicons-outline/FolderOutline";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline/ExternalLinkOutline";
import * as Styled from "./styles";
import {
  ProjectDescription,
  ProjectTechList,
  ProjectTitle,
} from "../MajorProjects/styles";
import { GithubOutline } from "@styled-icons/evaicons-outline";
import { InView } from "react-intersection-observer";
import Link from "next/link";

export type MinorProjectsProps = {
  projects: ProjectsProps[] | [];
};

export const MinorProjects = ({ projects }: MinorProjectsProps) => {
  const [showMore, setShowMore] = useState(false);
  const [filteredProjects, setFilteredProject] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    if (showMore) return;

    const project = projects.filter((project, index) =>
      index < 6 ? project : null,
    );
    setFilteredProject([...project]);
  }, []);

  const handleLoadMorePosts = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (!showMore) {
      const project = projects.filter((project, index) =>
        index < 6 ? project : null,
      );
      setFilteredProject([...project]);
      return;
    }

    setFilteredProject([...projects]);
  }, [showMore, projects]);

  return (
    <Styled.Wrapper>
      <Section id="">
        <Styled.Heading>Outros projetos</Styled.Heading>
        <Styled.LinkArchive>
          <Link href="/archives">veja o arquivo</Link>
        </Styled.LinkArchive>
        <Styled.ProjectsContainer>
          {filteredProjects.map((project, index) => (
            <InView key={`project-${project.id}-${project.title}`} triggerOnce>
              {({ inView, ref }) => (
                <Styled.Project
                  ref={ref}
                  className={`${inView ? "animation-bottom" : null} delay${
                    index + 1 >= 5 ? 5 : index + 1
                  }`}
                >
                  <Styled.HeaderProject>
                    <div>
                      <FolderOutline size={40} />
                      <div>
                        {project.github ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            aria-label="Encaminhar para github do projeto"
                          >
                            <GithubOutline size={26} />
                          </Link>
                        ) : null}
                        {project.preview ? (
                          <Link
                            href={project.preview || ""}
                            target="_blank"
                            aria-label="Encaminhar para preview do projeto"
                          >
                            <ExternalLinkOutline size={26} />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                    <ProjectTitle>
                      <Link
                        href={project.preview || project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </Link>
                    </ProjectTitle>
                    <ProjectDescription>
                      <p>
                        {project.description.length > 255
                          ? `${project.description.slice(0, 255)}...`
                          : project.description}
                      </p>
                    </ProjectDescription>
                  </Styled.HeaderProject>
                  <Styled.FooterProject>
                    <ProjectTechList>
                      {project.tools.map((tool, index) => (
                        <li
                          key={`Project-tool-minor-${index}-${tool.id}-${tool.tool}`}
                        >
                          {tool.tool}
                        </li>
                      ))}
                    </ProjectTechList>
                  </Styled.FooterProject>
                </Styled.Project>
              )}
            </InView>
          ))}
        </Styled.ProjectsContainer>
        {projects.length > 6 ? (
          <Styled.ShowMoreButton onClick={handleLoadMorePosts}>
            {!showMore ? "Mostrar mais" : "Mostrar menos"}
          </Styled.ShowMoreButton>
        ) : null}
      </Section>
    </Styled.Wrapper>
  );
};
