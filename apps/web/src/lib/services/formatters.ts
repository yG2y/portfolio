export const ensureHttpUrl = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  if (trimmed.startsWith("www.")) {
    return `https://${trimmed}`;
  }
  if (trimmed.includes("linkedin.com") || trimmed.includes("github.com")) {
    return `https://${trimmed}`;
  }
  return trimmed;
};

export const ensureMailto = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  return trimmed.startsWith("mailto:") ? trimmed : `mailto:${trimmed}`;
};

export const extractEmail = (mailtoOrEmail: string): string =>
  mailtoOrEmail.replace(/^mailto:/i, "");
