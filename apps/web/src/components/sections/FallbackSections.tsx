import { PortfolioData } from "@/types/portfolio";
import { CopyEmailButton } from "@/components/shared/CopyEmailButton";
import { extractEmail } from "@/lib/services/formatters";

type FallbackSectionsProps = {
  data: PortfolioData;
};

export function FallbackSections({ data }: FallbackSectionsProps) {
  const email = extractEmail(data.profile.links.email);

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="mb-2 text-lg font-semibold text-zinc-100">Sobre</h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          {data.profile.shortBio}
        </p>
      </article>

      <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="mb-2 text-lg font-semibold text-zinc-100">Contato</h2>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={data.profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-emerald-300 underline underline-offset-2"
          >
            GitHub
          </a>
          <a
            href={data.profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-emerald-300 underline underline-offset-2"
          >
            LinkedIn
          </a>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-zinc-200">{email}</span>
            <CopyEmailButton email={email} />
          </div>
        </div>
      </article>
    </section>
  );
}
