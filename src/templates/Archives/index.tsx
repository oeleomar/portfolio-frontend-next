import Head from "next/head";
import { useEffect, useState } from "react";
import { PortfolioProps, ProjectsProps } from "../../../types/portfolio";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline/ExternalLinkOutline";

import * as Styled from "./styles";
import Link from "next/link";
import { ParticlesBackground } from "../../components/ParticlesBackground";

export const Archives = ({
  footer,
  header,
  meta,
  majorProjects,
  minorProjects,
}: PortfolioProps) => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [projects, setProjects] = useState<ProjectsProps[] | []>([]);

  useEffect(() => {
    const notFilteredProjects = [...majorProjects, ...minorProjects];
    const sortedProjects = notFilteredProjects.slice().sort((a, b) => {
      const dateA = new Date(a.year).getTime();
      const dateB = new Date(b.year).getTime();
      return dateB - dateA;
    });
    setProjects(() => [...sortedProjects]);
  }, []);

  return (
    <>
      <Head>
        <title>Arquivos | Eleomar Dorneles</title>
        <meta
          name="description"
          content="Seção contendo todos os projetos públicos realizados pelo desenvolvedor Eleomar Dorneles"
        />
      </Head>
      <ParticlesBackground />

      <Header setMenuMobile={setMenuMobile} open={menuMobile} header={header} />

      <Styled.Wrapper open={menuMobile}>
        <Styled.ContentContainer>
          <header>
            <Styled.Title>Arquivos</Styled.Title>
            <Styled.Subtitle>
              Uma lista de coisas que tenho trabalhado
            </Styled.Subtitle>
          </header>
          <Styled.TableContainer>
            <Styled.Table>
              <thead>
                <tr>
                  <th>Ano</th>
                  <th>Titulo</th>
                  <th className="hide-on-mobile">Estado</th>
                  <th className="hide-on-mobile">Construido com</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id + project.title}>
                    <td className="overline year">
                      {new Date(project.year).getFullYear()}
                    </td>

                    <td className="title">{project.title}</td>

                    <td className="company hide-on-mobile">
                      {project.finished ? "Concluído" : "---"}
                    </td>

                    <td className="tech hide-on-mobile">
                      {project.tools.map((tool, index) => (
                        <span key={tool.id + tool.tool}>
                          {tool.tool}{" "}
                          {project.tools.length === index + 1 ? (
                            ""
                          ) : (
                            <span className="separator">·</span>
                          )}
                        </span>
                      ))}
                    </td>

                    <td className="links">
                      <div>
                        {project.github && (
                          <Link
                            href={project.github}
                            aria-label="Link para o Github de Eleomar Dorneles"
                            target="_blank"
                          >
                            <GithubOutline size={20} />
                          </Link>
                        )}
                        {project.preview && (
                          <Link
                            href={project.preview}
                            aria-label="Link para o Instagram de Eleomar Dorneles"
                            target="_blank"
                          >
                            <ExternalLinkOutline size={20} />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Styled.Table>
          </Styled.TableContainer>
        </Styled.ContentContainer>
      </Styled.Wrapper>

      <Footer footer={footer} />
    </>
  );
};
