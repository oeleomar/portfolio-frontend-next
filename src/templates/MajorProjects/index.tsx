import { ProjectsProps } from "../../../types/portfolio";
import { HeadingComponent } from "../../components/HeadingComponent";
import { Section } from "../../components/Section";
import * as Styled from "./styles";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline/ExternalLinkOutline";
import Image from "next/image";

export type MajorProjectProps = {
  projects: ProjectsProps[] | [];
};

export const MajorProjects = ({ projects }: MajorProjectProps) => {
  return (
    <Section>
      <HeadingComponent id="2" title="Projetos Principais" />
      <Styled.Wrapper id="majorProjects">
        {projects.map((project, index) =>
          index % 2 === 0 ? (
            <Styled.Project key={`Project-ID-${project.id}`}>
              <Styled.ProjectImage aling="right">
                <Image
                  src={project.cover.data?.attributes.url || ""}
                  fill
                  alt={`Foto do projeto ${project.title}`}
                />
              </Styled.ProjectImage>
              <Styled.ProjectContent aling="right">
                <p>Destaque</p>
                <Styled.ProjectTitle>
                  <a href={project.preview} target="_blank">
                    {project.title}
                  </a>
                </Styled.ProjectTitle>

                <Styled.ProjectDescription>
                  <p>{project.description}</p>
                </Styled.ProjectDescription>
                <Styled.ProjectTechList aling="right">
                  {project.tools.map((tool, index) => (
                    <li key={`Project-tool-${index}-${tool.id}-${tool.tool}`}>
                      {tool.tool}
                    </li>
                  ))}
                </Styled.ProjectTechList>
                <Styled.ProjectLinks aling="right">
                  <a href={project.github} target="_blank">
                    <GithubOutline size={30} />
                  </a>
                  <a href={project.preview} target="_blank">
                    <ExternalLinkOutline size={30} />
                  </a>
                </Styled.ProjectLinks>
              </Styled.ProjectContent>
            </Styled.Project>
          ) : (
            <Styled.Project key={`Project-ID-${project.id}`}>
              <Styled.ProjectContent aling="left">
                <span>Destaque</span>
              </Styled.ProjectContent>
              <Styled.ProjectImage aling="right"></Styled.ProjectImage>
            </Styled.Project>
          ),
        )}
        {projects.map((project, index) =>
          index % 2 === 0 ? (
            <Styled.Project key={`Project-ID-${project.id}`}>
              <Styled.ProjectImage aling="left">
                <Image
                  src={project.cover.data?.attributes.url || ""}
                  fill
                  alt={`Foto do projeto ${project.title}`}
                />
              </Styled.ProjectImage>
              <Styled.ProjectContent aling="left">
                <p>Destaque</p>
                <Styled.ProjectTitle>
                  <a href={project.preview} target="_blank">
                    {project.title}
                  </a>
                </Styled.ProjectTitle>

                <Styled.ProjectDescription>
                  <p>{project.description}</p>
                </Styled.ProjectDescription>
                <Styled.ProjectTechList aling="left">
                  {project.tools.map((tool, index) => (
                    <li key={`Project-tool-${index}-${tool.id}-${tool.tool}`}>
                      {tool.tool}
                    </li>
                  ))}
                </Styled.ProjectTechList>
                <Styled.ProjectLinks aling="left">
                  <a href={project.github} target="_blank">
                    <GithubOutline size={30} />
                  </a>
                  <a href={project.preview} target="_blank">
                    <ExternalLinkOutline size={30} />
                  </a>
                </Styled.ProjectLinks>
              </Styled.ProjectContent>
            </Styled.Project>
          ) : (
            <Styled.Project key={`Project-ID-${project.id}`}>
              <Styled.ProjectContent aling="left">
                <span>Destaque</span>
              </Styled.ProjectContent>
              <Styled.ProjectImage aling="right"></Styled.ProjectImage>
            </Styled.Project>
          ),
        )}
      </Styled.Wrapper>
    </Section>
  );
};
