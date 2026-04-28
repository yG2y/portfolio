import { getPortfolioData } from "@/lib/services/portfolio-service";

export default async function ProjetosPage() {
  const data = await getPortfolioData();

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-10 text-zinc-100">
      <h1 className="text-3xl font-semibold">Projetos</h1>
      <ul className="mt-6 space-y-4">
        {data.projects.map((project) => (
          <li key={project.id} className="rounded-xl border border-zinc-800 p-4">
            <p className="text-lg font-medium">{project.name}</p>
            <p className="text-zinc-400">{project.description}</p>
            <p className="mt-1 text-sm text-zinc-500">{project.stack.join(", ")}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-block text-emerald-300 underline underline-offset-2"
            >
              Abrir projeto
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
