import { portfolioData } from "@/content/profile";
import { PortfolioData, PortfolioProject } from "@/types/portfolio";
import { ensureHttpUrl, ensureMailto } from "@/lib/services/formatters";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const sortProjects = (projects: PortfolioProject[]): PortfolioProject[] =>
  [...projects].sort((a, b) => a.order - b.order);

const readFromSupabase = async (): Promise<PortfolioData | null> => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return null;
  }

  try {
    const [profileRes, projectsRes] = await Promise.all([
      fetch(`${SUPABASE_URL}/rest/v1/profile?select=*&limit=1`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 180 },
      }),
      fetch(`${SUPABASE_URL}/rest/v1/projects?select=*`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 180 },
      }),
    ]);

    if (!profileRes.ok || !projectsRes.ok) {
      return null;
    }

    const [profileRows, projectsRows] = await Promise.all([
      profileRes.json(),
      projectsRes.json(),
    ]);
    const profile = profileRows[0];

    if (!profile) {
      return null;
    }

    const dataFromSupabase: PortfolioData = {
      profile: {
        name: profile.name,
        role: profile.role,
        location: profile.location,
        shortBio: profile.short_bio,
        links: {
          github: ensureHttpUrl(String(profile.github_url ?? "")),
          linkedin: ensureHttpUrl(String(profile.linkedin_url ?? "")),
          email: ensureMailto(String(profile.email_url ?? "")),
        },
        resumes: {
          ptBr: ensureHttpUrl(
            String(
              profile.resume_ptbr_url ??
                profile.resume_pt_url ??
                profile.resume_url ??
                portfolioData.profile.resumes.ptBr,
            ),
          ),
          enUs: ensureHttpUrl(
            String(
              profile.resume_enus_url ??
                profile.resume_en_url ??
                portfolioData.profile.resumes.enUs,
            ),
          ),
        },
        skills: profile.skills ?? [],
      },
      projects: (projectsRows ?? []).map(
        (project: Record<string, unknown>): PortfolioProject => ({
          id: String(project.id),
          name: String(project.name),
          description: String(project.description),
          url: String(project.url),
          stack: Array.isArray(project.stack)
            ? project.stack.map((item) => String(item))
            : [],
          featured: Boolean(project.featured),
          order: Number(project.order_index ?? 999),
        }),
      ),
      quickLinks: [
        { label: "GitHub", url: ensureHttpUrl(String(profile.github_url ?? "")) },
        {
          label: "LinkedIn",
          url: ensureHttpUrl(String(profile.linkedin_url ?? "")),
        },
        {
          label: "Contato por E-mail",
          url: ensureMailto(String(profile.email_url ?? "")),
        },
        {
          label: "Currículo PT-BR",
          url: ensureHttpUrl(
            String(
              profile.resume_ptbr_url ??
                profile.resume_pt_url ??
                profile.resume_url ??
                portfolioData.profile.resumes.ptBr,
            ),
          ),
        },
        {
          label: "Resume EN-US",
          url: ensureHttpUrl(
            String(
              profile.resume_enus_url ??
                profile.resume_en_url ??
                portfolioData.profile.resumes.enUs,
            ),
          ),
        },
      ],
    };

    return {
      ...dataFromSupabase,
      projects: sortProjects(dataFromSupabase.projects),
    };
  } catch {
    return null;
  }
};

export const getPortfolioData = async (): Promise<PortfolioData> => {
  const remoteData = await readFromSupabase();

  if (!remoteData) {
    return {
      ...portfolioData,
      projects: sortProjects(portfolioData.projects),
    };
  }

  return remoteData;
};
