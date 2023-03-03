export type PortfolioProps = {
  name: string;
  description: string;
  title: string;
  subtitle: string;
  meta: MetaProps;
  about: AboutProps;

  majorProjects: ProjectsProps[] | [];
  minorProjects: ProjectsProps[] | [];

  experiences: ExperiencesProps[] | [];

  footer: FooterProps;
  header: HeaderProps;
  cover: StrapiImageProps;
};

export type HeaderProps = {
  id: number;
  links: HeaderLink[];
  logo: StrapiImageProps;
};

type HeaderLink = {
  id: number;
  url: string;
  pathname: string;
};

export type FooterProps = {
  id: number;
  linkDesign: string;
  linkEleomar: string;
  email: string;
  linkEmail: string;
  github: boolean;
  linkGithub: string;
  linkedin: boolean;
  linkLinkedin: string;
  instagram: boolean;
  linkInstagram: string;
};

export type MetaProps = {
  id: number;
  title: string;
  description: string;
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
  cover?: StrapiImageProps;
  attributes: Attribute[];
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
  year: Date;
};

export type ExperiencesProps = {
  id: number;
  title: string;
  description: string;
  since: Date;
  until: Date | null;
  untilNow: boolean;
  company: string;
  city: string;
  country: string;
  work: boolean;
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

type Attribute = {
  id: number;
  description: string;
};
