const base = import.meta.env.BASE_URL;

export function withBasePath(path = ""): string {
  const normalized = path.replace(/^\/+/, "");
  return normalized ? `${base}${normalized}` : base;
}
