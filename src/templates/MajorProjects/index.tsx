import { ProjectsProps } from "../../../types/portfolio";
import { HeadingComponent } from "../../components/HeadingComponent";
import { Section } from "../../components/Section";
import * as Styled from "./styles";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline/ExternalLinkOutline";
import Image from "next/image";
import { InView, PlainChildrenProps } from "react-intersection-observer";
import Link from "next/link";

export type MajorProjectProps = {
  projects: ProjectsProps[] | [];
};

type InViewProps = {
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
};

export const MajorProjects = ({ projects }: MajorProjectProps) => {
  return (
    <Section id="projects">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div ref={ref}>
            <HeadingComponent
              id="2"
              title="Projetos Principais"
              className={`${inView ? "animation-bottom" : null} delay`}
            />
          </div>
        )}
      </InView>

      <Styled.Wrapper id="majorProjects">
        {projects.map((project, index) =>
          index % 2 === 0 ? (
            <InView key={`Project-ID-${project.id}`} triggerOnce>
              {({ inView, ref }: any) => (
                <Styled.Project
                  ref={ref}
                  className={`${inView ? "animation-bottom" : null} delay3`}
                >
                  <Styled.ProjectImage aling="right">
                    <Link href={project.preview || "#"} target="_blank">
                      <Image
                        src={project.cover.data?.attributes.url || ""}
                        fill
                        alt={`Foto do projeto ${project.title}`}
                        sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                      />
                    </Link>
                  </Styled.ProjectImage>
                  <Styled.ProjectContent aling="right">
                    <p>Destaque</p>
                    <Styled.ProjectTitle>
                      <Link href={project.preview || "#"} target="_blank">
                        {project.title}
                      </Link>
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
                        <li
                          key={`Project-tool-${index}-${tool.id}-${tool.tool}`}
                        >
                          {tool.tool}
                        </li>
                      ))}
                    </Styled.ProjectTechList>
                    <Styled.ProjectLinks aling="right">
                      {project.github ? (
                        <Link
                          href={project.github}
                          target="_blank"
                          aria-label="Encaminhar para github do projeto"
                        >
                          <GithubOutline size={30} />
                        </Link>
                      ) : null}
                      {project.preview ? (
                        <Link
                          href={project.preview}
                          target="_blank"
                          aria-label="Encaminhar para preview do projeto"
                        >
                          <ExternalLinkOutline size={30} />
                        </Link>
                      ) : null}
                    </Styled.ProjectLinks>
                  </Styled.ProjectContent>
                </Styled.Project>
              )}
            </InView>
          ) : (
            <InView key={`Project-ID-${project.id}`} triggerOnce>
              {({ inView, ref }: any) => (
                <Styled.Project
                  ref={ref}
                  className={`${inView ? "animation-bottom" : null} delay3`}
                >
                  <Styled.ProjectImage aling="left">
                    <Link href={project.preview || "#"} target="_blank">
                      <Image
                        src={project.cover.data?.attributes.url || ""}
                        fill
                        alt={`Foto do projeto ${project.title}`}
                        sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                      />
                    </Link>
                  </Styled.ProjectImage>
                  <Styled.ProjectContent aling="left">
                    <p>Destaque</p>
                    <Styled.ProjectTitle>
                      <Link href={project.preview || "#"} target="_blank">
                        {project.title}
                      </Link>
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
                        <li
                          key={`Project-tool-${index}-${tool.id}-${tool.tool}`}
                        >
                          {tool.tool}
                        </li>
                      ))}
                    </Styled.ProjectTechList>
                    <Styled.ProjectLinks aling="left">
                      {project.github ? (
                        <Link
                          href={project.github}
                          target="_blank"
                          aria-label="Encaminhar para github do projeto"
                        >
                          <GithubOutline size={30} />
                        </Link>
                      ) : null}
                      {project.preview ? (
                        <Link
                          href={project.preview}
                          target="_blank"
                          aria-label="Encaminhar para preview do projeto"
                        >
                          <ExternalLinkOutline size={30} />
                        </Link>
                      ) : null}
                    </Styled.ProjectLinks>
                  </Styled.ProjectContent>
                </Styled.Project>
              )}
            </InView>
          ),
        )}
      </Styled.Wrapper>
    </Section>
  );
};
