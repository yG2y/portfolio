"use client";

import { FormEvent, KeyboardEvent, useMemo, useState } from "react";
import { executeCommand, getCommandNames } from "@/lib/terminal/commands";
import { TerminalOutputLine } from "@/lib/terminal/types";
import { PortfolioData } from "@/types/portfolio";
import "./terminal.css";

type TerminalEntry = {
  input: string;
  output: TerminalOutputLine[];
};

const initialOutput: TerminalOutputLine[] = [
  { text: "Boas-vindas ao seu portfólio interativo." },
  { text: 'Digite "help" para ver os comandos.' },
];

type TerminalProps = {
  data: PortfolioData;
};

export function Terminal({ data }: TerminalProps) {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const commands = useMemo(() => getCommandNames(), []);
  const history = useMemo(() => entries.map((entry) => entry.input), [entries]);

  const runCommand = (typedInput: string) => {
    const result = executeCommand(typedInput, data);

    if (!typedInput) return;

    if (result.clear) {
      setEntries([]);
      setInput("");
      setHistoryIndex(null);
      return;
    }

    setEntries((currentEntries) => [
      ...currentEntries,
      { input: typedInput, output: result.lines },
    ]);
    setInput("");
    setHistoryIndex(null);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input.trim());
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;

      const nextIndex =
        historyIndex === null ? history.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === null) return;

      const nextIndex = Math.min(historyIndex + 1, history.length);
      if (nextIndex === history.length) {
        setHistoryIndex(null);
        setInput("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (!input.trim()) return;
      const match = commands.find((command) => command.startsWith(input.trim()));
      if (match) setInput(match);
    }
  };

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(null), 1200);
  };

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl shadow-zinc-950/30">
      <header className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
        <p className="font-mono text-sm text-zinc-300">portfolio-terminal</p>
        <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
          online
        </span>
      </header>

      <div
        className="terminal-scrollbar max-h-[55vh] overflow-y-auto px-4 py-4 font-mono text-sm text-zinc-100"
        aria-live="polite"
      >
        {initialOutput.map((line) => (
          <p key={line.text} className="mb-1 text-emerald-300">
            {line.text}
          </p>
        ))}

        {entries.map((entry, index) => (
          <div key={`${entry.input}-${index}`} className="mb-3">
            <p className="text-cyan-300">
              <span className="text-zinc-500">$</span> {entry.input}
            </p>
            {entry.output.map((line, lineIndex) =>
              line.kind === "link" && line.href ? (
                <a
                  key={`${line.text}-${lineIndex}`}
                  href={line.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
                >
                  {line.text}
                </a>
              ) : line.kind === "copy" && line.copyValue ? (
                <div key={`${line.text}-${lineIndex}`} className="mt-1">
                  {(() => {
                    const valueToCopy = line.copyValue;
                    return (
                  <button
                    type="button"
                        onClick={() => handleCopy(valueToCopy)}
                    className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-200 hover:border-emerald-400/50 hover:text-emerald-300"
                  >
                        {copiedValue === valueToCopy ? "Copiado!" : line.text}
                  </button>
                    );
                  })()}
                </div>
              ) : (
                <p key={`${line.text}-${lineIndex}`} className="text-zinc-200">
                  {line.text}
                </p>
              ),
            )}
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="border-t border-zinc-800 px-4 py-3">
        <label htmlFor="command-input" className="sr-only">
          Comando do terminal
        </label>
        <div className="flex items-center gap-2">
          <span className="font-mono text-zinc-500">$</span>
          <input
            id="command-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder={`Ex.: ${commands.join(" | ")}`}
            className="w-full bg-transparent font-mono text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
            autoComplete="off"
          />
        </div>
      </form>
    </section>
  );
}
