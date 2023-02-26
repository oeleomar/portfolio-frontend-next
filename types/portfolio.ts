export type PortfolioProps = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  links: LinksProps[] | [];
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

type ToolsProps = {
  id: number;
  tool: string;
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
  };
};
