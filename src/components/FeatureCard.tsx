import type { ReactNode } from "react";

interface FeatureCardProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({
  eyebrow,
  title,
  description,
  icon
}: FeatureCardProps) {
  return (
    <article className="glass-panel rounded-[2rem] p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>
      <h3 className="mt-3 font-display text-2xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
