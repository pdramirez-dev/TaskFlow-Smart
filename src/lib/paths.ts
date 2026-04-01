const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

export function withBasePath(path = ""): string {
  if (!path || path === "/") {
    return `${base}/`;
  }

  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("mailto:")) {
    return path;
  }

  if (path.startsWith("#")) {
    return `${base}/${path}`;
  }

  const normalized = path.replace(/^\/+/, "");
  return `${base}/${normalized}`;
}
