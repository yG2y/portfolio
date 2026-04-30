import { getPortfolioData } from "@/lib/services/portfolio-service";
import { CopyEmailButton } from "@/components/shared/CopyEmailButton";
import { extractEmail } from "@/lib/services/formatters";

export default async function ContatoPage() {
  const data = await getPortfolioData();
  const email = extractEmail(data.profile.links.email);

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-10 text-zinc-100">
      <h1 className="text-3xl font-semibold">Contato</h1>
      <div className="mt-6 flex flex-col gap-3">
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
        <div className="flex items-center gap-2">
          <span className="text-zinc-200">{email}</span>
          <CopyEmailButton email={email} />
        </div>
      </div>
    </main>
  );
}
