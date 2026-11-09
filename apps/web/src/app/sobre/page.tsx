import Image from "next/image";
import { getPortfolioData } from "@/lib/services/portfolio-service";

export default async function SobrePage() {
  const data = await getPortfolioData();

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-10 text-zinc-100">
      <div className="mb-6 flex items-center gap-4">
        <Image
          src="/images/G2-1x1.jpeg"
          alt="Guilherme Souza"
          width={56}
          height={56}
          className="rounded-full border-2 border-purple-500/40 object-cover"
        />
        <h1 className="text-3xl font-semibold">Sobre</h1>
      </div>
      <p className="text-zinc-300 leading-relaxed">{data.profile.shortBio}</p>
      <p className="mt-2 text-zinc-400">{data.profile.location}</p>
    </main>
  );
}
