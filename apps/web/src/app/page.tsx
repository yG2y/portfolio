import { FallbackSections } from "@/components/sections/FallbackSections";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { Terminal } from "@/components/terminal/Terminal";
import { getPortfolioData } from "@/lib/services/portfolio-service";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <div className="text-zinc-100">
      <main className="flex w-full flex-col gap-6">
        <header className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
            Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
            {data.profile.name}
          </h1>
          <p className="mt-2 text-zinc-300">{data.profile.role}</p>
        </header>

        <Terminal data={data} />
        <QuickLinks data={data} />
        <FeaturedProjects data={data} />
        <FallbackSections data={data} />
      </main>
    </div>
  );
}
