import { getPortfolioData } from "@/lib/services/portfolio-service";
import { ResumeEmbed } from "@/components/sections/ResumeEmbed";

export default async function CurriculoPage() {
  const data = await getPortfolioData();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10 text-zinc-100">
      <h1 className="text-3xl font-semibold">Currículo</h1>
      <p className="mt-4 text-zinc-300">
        Acesse as versões online do currículo em português e inglês.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={data.profile.resumes.ptBr}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200"
        >
          Currículo PT-BR
        </a>
        <a
          href={data.profile.resumes.enUs}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200"
        >
          Resume EN-US
        </a>
      </div>

      <p className="mt-6 text-sm text-zinc-400">
        Visualização embutida: pode ser bloqueada por políticas de segurança do
        site externo. Se isso acontecer, use os botões acima para abrir em nova aba.
      </p>

      <div className="mt-5 grid gap-4">
        <ResumeEmbed title="Currículo em Português" url={data.profile.resumes.ptBr} />
        <ResumeEmbed title="Resume in English" url={data.profile.resumes.enUs} />
      </div>
    </main>
  );
}
