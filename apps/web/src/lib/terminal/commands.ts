import { PortfolioData } from "@/types/portfolio";
import { extractEmail } from "../services/formatters";
import {
  TerminalCommand,
  TerminalCommandName,
  TerminalExecutionResult,
} from "@/lib/terminal/types";

const notFound = (command: string): TerminalExecutionResult => ({
  lines: [
    {
      text: `Comando não encontrado: "${command}". Digite "help" para listar os comandos.`,
    },
  ],
});

const buildCommands = (data: PortfolioData): Record<TerminalCommandName, TerminalCommand> => ({
  help: {
    name: "help",
    description: "Lista os comandos disponíveis",
    run: () => ({
      lines: [
        { text: "Comandos disponíveis:" },
        ...Object.values(buildCommands(data)).map((command) => ({
          text: `- ${command.name}: ${command.description}`,
        })),
      ],
    }),
  },
  about: {
    name: "about",
    description: "Mostra um resumo profissional",
    run: () => ({
      lines: [
        { text: `${data.profile.name} - ${data.profile.role}` },
        { text: data.profile.shortBio },
        { text: `Localização: ${data.profile.location}` },
      ],
    }),
  },
  projects: {
    name: "projects",
    description: "Lista projetos em destaque",
    run: () => ({
      lines: data.projects.flatMap((project) => [
        {
          text: `${project.name}: ${project.description} [${project.stack.join(", ")}]`,
        },
        { kind: "link", text: `Abrir ${project.name}`, href: project.url },
      ]),
    }),
  },
  skills: {
    name: "skills",
    description: "Exibe stack e principais tecnologias",
    run: () => ({
      lines: [{ text: `Stack principal: ${data.profile.skills.join(", ")}` }],
    }),
  },
  contact: {
    name: "contact",
    description: "Mostra links de contato",
    run: () => ({
      lines: [
        { kind: "link", text: "GitHub", href: data.profile.links.github },
        { kind: "link", text: "LinkedIn", href: data.profile.links.linkedin },
        { text: `E-mail: ${extractEmail(data.profile.links.email)}` },
        {
          kind: "copy",
          text: "Copiar e-mail",
          copyValue: extractEmail(data.profile.links.email),
        },
      ],
    }),
  },
  resume: {
    name: "resume",
    description: "Abre os currículos online em PT-BR e EN-US",
    run: () => ({
      lines: [
        {
          kind: "link",
          text: "Abrir Currículo PT-BR",
          href: data.profile.resumes.ptBr,
        },
        {
          kind: "link",
          text: "Abrir Resume EN-US",
          href: data.profile.resumes.enUs,
        },
        {
          kind: "link",
          text: "Visualizar dentro do portfólio",
          href: "/curriculo",
        },
      ],
    }),
  },
  clear: {
    name: "clear",
    description: "Limpa o histórico do terminal",
    run: () => ({
      lines: [],
      clear: true,
    }),
  },
});

export const getCommandNames = (): TerminalCommandName[] =>
  ["help", "about", "projects", "skills", "contact", "resume", "clear"];

export const executeCommand = (
  rawInput: string,
  data: PortfolioData,
): TerminalExecutionResult => {
  const command = rawInput.trim().toLowerCase() as TerminalCommandName;

  if (!command) {
    return { lines: [] };
  }

  const commands = buildCommands(data);
  const commandHandler = commands[command];
  if (!commandHandler) {
    return notFound(rawInput.trim());
  }

  return commandHandler.run();
};
