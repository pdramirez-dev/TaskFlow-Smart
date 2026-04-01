import { withBasePath } from "../lib/paths";

const navItems = [
  { href: withBasePath("/#features"), label: "Features" },
  { href: withBasePath("/#screenshots"), label: "Preview" },
  { href: withBasePath("/support"), label: "Support" },
  { href: withBasePath("/privacy"), label: "Privacy" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 py-4">
      <div className="glass-panel flex items-center justify-between rounded-full px-5 py-3">
        <a href={withBasePath("/")} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-lg font-bold text-white shadow-halo">
            TF
          </span>
          <div>
            <div className="font-display text-sm font-bold tracking-tight text-slate-950">
              TaskFlow Smart
            </div>
            <div className="text-xs text-slate-500">AI Task Manager &amp; Daily Planner</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://apps.apple.com/"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          App Store
        </a>
      </div>
    </header>
  );
}
