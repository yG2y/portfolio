import { describe, expect, it } from "vitest";
import { executeCommand } from "./commands";
import { portfolioData } from "../../content/profile";

describe("terminal commands", () => {
  it("lists commands with help", () => {
    const result = executeCommand("help", portfolioData);
    expect(result.lines.length).toBeGreaterThan(1);
    expect(result.lines[0]?.text).toContain("Comandos disponíveis");
  });

  it("returns contact links", () => {
    const result = executeCommand("contact", portfolioData);
    expect(result.lines.some((line) => line.kind === "link")).toBe(true);
  });

  it("clears terminal", () => {
    const result = executeCommand("clear", portfolioData);
    expect(result.clear).toBe(true);
  });

  it("handles unknown commands", () => {
    const result = executeCommand("invalid", portfolioData);
    expect(result.lines[0]?.text).toContain("Comando não encontrado");
  });
});
