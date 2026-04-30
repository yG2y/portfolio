import { PortfolioData } from "@/types/portfolio";

type QuickLinksProps = {
  data: PortfolioData;
};

export function QuickLinks({ data }: QuickLinksProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <h2 className="mb-3 text-lg font-semibold text-zinc-100">Links rápidos</h2>
      <div className="flex flex-wrap gap-2">
        {data.quickLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200 hover:bg-emerald-400/20"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
