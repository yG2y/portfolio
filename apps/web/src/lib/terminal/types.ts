export type TerminalCommandName =
  | "help"
  | "about"
  | "projects"
  | "skills"
  | "contact"
  | "resume"
  | "clear";

export type TerminalOutputLine = {
  kind?: "text" | "link" | "copy";
  text: string;
  href?: string;
  copyValue?: string;
};

export type TerminalExecutionResult = {
  lines: TerminalOutputLine[];
  clear?: boolean;
};

export type TerminalCommand = {
  name: TerminalCommandName;
  description: string;
  run: () => TerminalExecutionResult;
};
