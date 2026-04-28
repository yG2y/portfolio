import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Guilherme",
    role: "Desenvolvedor Full Stack",
    location: "Belo Horizonte, Minas Gerais, Brasil",
    shortBio:
      "Profissional focado em desenvolvimento web, arquitetura limpa e experiências digitais de alto impacto.",
    links: {
      github: "https://github.com/yG2y",
      linkedin: "https://www.linkedin.com/in/g2souza",
      email: "mailto:g2002souzajardim@gmail.com",
    },
    resumes: {
      ptBr: "https://yg2y.github.io/Curriculum/curriculo_guilherme_ptbr.html",
      enUs: "https://yg2y.github.io/Curriculum/resume_guilherme_enus.html",
    },
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Supabase",
    ],
  },
  projects: [
    {
      id: "portfolio-terminal",
      name: "Portfolio Terminal",
      description:
        "Portfólio interativo em Next.js com comandos de terminal e foco em UX.",
      url: "https://github.com/yG2y",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      featured: true,
      order: 1,
    },
    {
      id: "curriculo-online",
      name: "Currículo Online",
      description:
        "Currículo web responsivo com histórico profissional e projetos técnicos.",
      url: "https://github.com/yG2y",
      stack: ["HTML", "CSS", "JavaScript"],
      featured: true,
      order: 2,
    },
  ],
  quickLinks: [
    { label: "GitHub", url: "https://github.com/yG2y" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/g2souza" },
    { label: "Contato por E-mail", url: "mailto:g2002souzajardim@gmail.com" },
    {
      label: "Currículo PT-BR",
      url: "https://yg2y.github.io/Curriculum/curriculo_guilherme_ptbr.html",
    },
    {
      label: "Resume EN-US",
      url: "https://yg2y.github.io/Curriculum/resume_guilherme_enus.html",
    },
  ],
};
