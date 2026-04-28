import { getPortfolioData } from "@/lib/services/portfolio-service";

export default async function SobrePage() {
  const data = await getPortfolioData();

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-10 text-zinc-100">
      <h1 className="text-3xl font-semibold">Sobre</h1>
      <p className="mt-4 text-zinc-300">{data.profile.shortBio}</p>
      <p className="mt-2 text-zinc-400">{data.profile.location}</p>
    </main>
  );
}
