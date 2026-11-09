import Image from "next/image";
import { getPortfolioData } from "@/lib/services/portfolio-service";

export default async function ProjetosPage() {
  const data = await getPortfolioData();
  const sorted = [...data.projects].sort((a, b) => a.order - b.order);

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-10 text-zinc-100">
      <div className="mb-8 flex items-center gap-4">
        <Image
          src="/images/G2-1x1.jpeg"
          alt="Guilherme Souza"
          width={56}
          height={56}
          className="rounded-full border-2 border-purple-500/40 object-cover"
        />
        <h1 className="text-3xl font-semibold">Projetos</h1>
      </div>

      <ul className="space-y-5">
        {sorted.map((project) => (
          <li key={project.id} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-lg font-semibold text-zinc-100">{project.name}</p>
              {!project.links && (
                <span className="shrink-0 rounded border border-zinc-700 px-1.5 py-0.5 text-xs text-zinc-500">
                  Privado
                </span>
              )}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-zinc-700 px-2 py-0.5 text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-purple-300 underline underline-offset-2 hover:text-purple-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
