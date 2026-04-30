type ResumeEmbedProps = {
  title: string;
  url: string;
};

export function ResumeEmbed({ title, url }: ResumeEmbedProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200"
        >
          Abrir em nova aba
        </a>
      </div>

      <iframe
        src={url}
        title={title}
        className="h-[560px] w-full rounded-xl border border-zinc-800 bg-zinc-950"
        loading="lazy"
      />
    </section>
  );
}
