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
                <a href={project.preview || "#"} target="_blank">
                  <Image
                    src={project.cover.data?.attributes.url || ""}
                    fill
                    alt={`Foto do projeto ${project.title}`}
                    sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  />
                </a>
              </Styled.ProjectImage>
              <Styled.ProjectContent aling="right">
                <p>Destaque</p>
                <Styled.ProjectTitle>
                  <a href={project.preview || "#"} target="_blank">
                    {project.title}
                  </a>
                </Styled.ProjectTitle>

                <Styled.ProjectDescription>
                  <p>
                    {project.description.length > 255
                      ? `${project.description.slice(0, 255)}...`
                      : project.description}
                  </p>
                </Styled.ProjectDescription>
                <Styled.ProjectTechList aling="right">
                  {project.tools.map((tool, index) => (
                    <li key={`Project-tool-${index}-${tool.id}-${tool.tool}`}>
                      {tool.tool}
                    </li>
                  ))}
                </Styled.ProjectTechList>
                <Styled.ProjectLinks aling="right">
                  {project.github ? (
                    <a href={project.github} target="_blank">
                      <GithubOutline size={30} />
                    </a>
                  ) : null}
                  {project.preview ? (
                    <a href={project.preview} target="_blank">
                      <ExternalLinkOutline size={30} />
                    </a>
                  ) : null}
                </Styled.ProjectLinks>
              </Styled.ProjectContent>
            </Styled.Project>
          ) : (
            <Styled.Project key={`Project-ID-${project.id}`}>
              <Styled.ProjectImage aling="left">
                <a href={project.preview || "#"} target="_blank">
                  <Image
                    src={project.cover.data?.attributes.url || ""}
                    fill
                    alt={`Foto do projeto ${project.title}`}
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  />
                </a>
              </Styled.ProjectImage>
              <Styled.ProjectContent aling="left">
                <p>Destaque</p>
                <Styled.ProjectTitle>
                  <a href={project.preview || "#"} target="_blank">
                    {project.title}
                  </a>
                </Styled.ProjectTitle>

                <Styled.ProjectDescription>
                  <p>
                    {project.description.length > 255
                      ? `${project.description.slice(0, 255)}...`
                      : project.description}
                  </p>
                </Styled.ProjectDescription>
                <Styled.ProjectTechList aling="left">
                  {project.tools.map((tool, index) => (
                    <li key={`Project-tool-${index}-${tool.id}-${tool.tool}`}>
                      {tool.tool}
                    </li>
                  ))}
                </Styled.ProjectTechList>
                <Styled.ProjectLinks aling="left">
                  {project.github ? (
                    <a href={project.github} target="_blank">
                      <GithubOutline size={30} />
                    </a>
                  ) : null}
                  {project.preview ? (
                    <a href={project.preview} target="_blank">
                      <ExternalLinkOutline size={30} />
                    </a>
                  ) : null}
                </Styled.ProjectLinks>
              </Styled.ProjectContent>
            </Styled.Project>
          ),
        )}
      </Styled.Wrapper>
    </Section>
  );
};
