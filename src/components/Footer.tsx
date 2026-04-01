import { withBasePath } from "../lib/paths";

const footerLinks = [
  { href: withBasePath("/privacy"), label: "Privacy Policy" },
  { href: withBasePath("/support"), label: "Support" },
  { href: "mailto:pauldiaz.dev@icloud.com", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="glass-panel flex flex-col gap-6 rounded-[2rem] px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-slate-950">TaskFlow Smart</p>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            Plan your day, capture tasks faster and let AI help you turn intent into a clear,
            manageable schedule.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
