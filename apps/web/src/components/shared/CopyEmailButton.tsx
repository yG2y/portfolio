"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-200 hover:border-emerald-400/50 hover:text-emerald-300"
    >
      {copied ? "Copiado!" : "Copiar e-mail"}
    </button>
  );
}
