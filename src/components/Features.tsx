import FeatureCard from "./FeatureCard";

const iconClassName = "h-6 w-6";

const features = [
  {
    eyebrow: "AI planning",
    title: "Smart daily prioritization",
    description:
      "TaskFlow Smart reviews your inputs and suggests what to do first, what can wait and how to keep momentum without overwhelming your day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
        <path d="M12 3v18M3 12h18" />
        <path d="M7 7l10 10M17 7L7 17" />
      </svg>
    )
  },
  {
    eyebrow: "Capture",
    title: "Inbox built for fast entry",
    description:
      "Add tasks in seconds, collect ideas throughout the day and clean them up later with a flow that feels native and lightweight on iPhone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    )
  },
  {
    eyebrow: "Focus",
    title: "Clear schedule, calmer execution",
    description:
      "See only what matters today, keep upcoming work visible without noise and stay aligned with a planner view designed for focus.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
        <path d="M12 3a9 9 0 1 0 9 9" />
        <path d="M12 7v5l3 2" />
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Why it works</p>
        <h2 className="section-title mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
          Daily planning that feels structured, not rigid
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600">
          The product experience is split into focused building blocks so users can capture tasks,
          prioritize intelligently and move through the day with less friction.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
