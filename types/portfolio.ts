export type PortfolioProps = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  links: LinksProps[] | [];
  about: AboutProps;
  majorProjects: ProjectsProps[] | [];
  minorProjects: ProjectsProps[] | [];
  experiences: ExperiencesProps[] | [];
  cover: StrapiImageProps;
};

export type LinksProps = {
  id: number;
  url: string;
  pathname: string;
};

export type AboutProps = {
  id: number;
  title: string;
  description: AboutDescriptionProps[] | [];
};

export type ProjectsProps = {
  id: number;
  title: string;
  description: string;
  preview: string;
  github: string;
  finished: boolean;
  cover: StrapiImageProps;
  tools: ToolsProps[] | [];
};

export type ExperiencesProps = {
  id: number;
  role: string;
  description: string;
  since: Date;
  until: Date | null;
  workHere: boolean;
  company: string;
};

export type StrapiImageProps = {
  data: {
    id: number;
    attributes: {
      url: string;
      formats?: {
        large?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        thumbnail?: { url: string };
      };
    };
  } | null;
};

type AboutDescriptionProps = {
  id: number;
  description: string;
  coverPosition: boolean;
  cover: StrapiImageProps;
};
type ToolsProps = {
  id: number;
  tool: string;
};
