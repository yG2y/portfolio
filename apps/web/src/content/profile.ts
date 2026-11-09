import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Guilherme Souza",
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
      id: "logistica-distribuida",
      name: "Sistema de Logística Distribuída",
      description:
        "Planejamento e coordenação técnica de um sistema distribuído com 5 microsserviços Java Spring Boot, mensageria RabbitMQ, arquitetura serverless AWS Lambda (Python), Docker Compose e app Flutter. Inclui documentação de arquitetura orientada a eventos.",
      url: "https://github.com/yG2y/Sistema-de-Logistica-Distribuida",
      stack: ["Java Spring Boot", "RabbitMQ", "AWS Lambda", "Python", "Docker", "Flutter"],
      featured: true,
      order: 1,
      links: [
        { label: "Repositório GitHub", url: "https://github.com/yG2y/Sistema-de-Logistica-Distribuida" },
        { label: "Documentação de Arquitetura (DeepWiki)", url: "https://deepwiki.com/yG2y/Sistema-de-Logistica-Distribuida" },
      ],
    },
    {
      id: "task-management-system",
      name: "Task Management System",
      description:
        "Plataforma corporativa para controle de fluxo de trabalho, status, esteira de prioridades e prazos de projetos. Construída com Java 21, Spring Boot 3 e React, documentada via OpenAPI 3 (Swagger UI).",
      url: "https://github.com/yG2y/lab-des-soft",
      stack: ["Java 21", "Spring Boot 3", "React", "OpenAPI 3"],
      featured: true,
      order: 2,
      links: [
        { label: "Live Demo (Swagger UI)", url: "https://lab-des-soft.onrender.com/api/swagger-ui/index.html#" },
        { label: "Repositório GitHub", url: "https://github.com/yG2y/lab-des-soft" },
      ],
    },
    {
      id: "controle-patrimonial-recivil",
      name: "Sistema de Controle Patrimonial Recivil",
      description:
        "Gestão completa de ativos e inventário corporativo desenvolvido sob demanda institucional. Liderado do levantamento de requisitos até a implantação.",
      url: "https://github.com/yG2y",
      stack: ["Java", "Spring Boot", "Vue.js 2", "SQL"],
      featured: false,
      order: 3,
    },
    {
      id: "portfolio-terminal",
      name: "Portfolio Terminal",
      description:
        "Portfólio interativo em Next.js com interface de terminal, comandos navegáveis e design dark premium.",
      url: "https://github.com/yG2y/portfolio",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      featured: true,
      order: 4,
      links: [
        { label: "Repositório GitHub", url: "https://github.com/yG2y/portfolio" },
      ],
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
