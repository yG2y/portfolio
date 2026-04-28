export type PortfolioLink = {
  label: string;
  url: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  description: string;
  url: string;
  stack: string[];
  featured: boolean;
  order: number;
};

export type PortfolioProfile = {
  name: string;
  role: string;
  location: string;
  shortBio: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
  resumes: {
    ptBr: string;
    enUs: string;
  };
  skills: string[];
};

export type PortfolioData = {
  profile: PortfolioProfile;
  projects: PortfolioProject[];
  quickLinks: PortfolioLink[];
};
