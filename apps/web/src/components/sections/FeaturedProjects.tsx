import { PortfolioData } from "@/types/portfolio";

type FeaturedProjectsProps = {
  data: PortfolioData;
};

export function FeaturedProjects({ data }: FeaturedProjectsProps) {
  const featuredProjects = data.projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <h2 className="mb-3 text-lg font-semibold text-zinc-100">Projetos em Destaque</h2>
      <ul className="space-y-3">
        {featuredProjects.map((project) => (
          <li
            key={project.id}
            className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3"
          >
            <p className="font-medium text-zinc-100">{project.name}</p>
            <p className="mt-1 text-sm text-zinc-400">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-zinc-700 px-1.5 py-0.5 text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              {project.links && project.links.length > 0 ? (
                project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-purple-300 underline underline-offset-2 hover:text-purple-200"
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-purple-300 underline underline-offset-2 hover:text-purple-200"
                >
                  Acessar projeto
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
