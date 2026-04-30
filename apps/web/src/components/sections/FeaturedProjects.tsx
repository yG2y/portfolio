import { PortfolioData } from "@/types/portfolio";

type FeaturedProjectsProps = {
  data: PortfolioData;
};

export function FeaturedProjects({ data }: FeaturedProjectsProps) {
  const featuredProjects = data.projects.filter((project) => project.featured);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <h2 className="mb-3 text-lg font-semibold text-zinc-100">Projetos</h2>
      <ul className="space-y-3">
        {featuredProjects.map((project) => (
          <li
            key={project.id}
            className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3"
          >
            <p className="font-medium text-zinc-100">{project.name}</p>
            <p className="text-sm text-zinc-400">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-block text-sm text-emerald-300 underline underline-offset-2"
            >
              Acessar projeto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
