import { withBasePath } from "../lib/paths";

const highlights = [
  "AI-assisted task prioritization",
  "Fast iPhone-first task capture",
  "Planner UI designed for focus"
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      <div className="hero-orb left-[-4rem] top-16 h-52 w-52 bg-brand-300" />
      <div className="hero-orb right-[-2rem] top-28 h-64 w-64 bg-emerald-200" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Organize your day with AI
          </div>

          <h1 className="section-title mt-8 max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            TaskFlow Smart
            <span className="mt-3 block text-brand-600">AI Task Manager &amp; Daily Planner</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A calm productivity app for iPhone that turns a messy task list into a focused daily
            plan. Capture quickly, prioritize with AI and move through work with more confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              id="download"
              href="https://apps.apple.com/"
              className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              View on the App Store
            </a>
            <a
              href={withBasePath("/support")}
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:border-brand-400 hover:text-brand-700"
            >
              Contact support
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-5">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="glass-panel rounded-[2rem] p-4 shadow-halo">
            <div className="rounded-[1.6rem] bg-slate-950 p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Today</p>
                  <p className="mt-2 font-display text-2xl font-bold">Tuesday, 9 tasks</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">
                  Focus score 92
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["Prepare sprint review", "High priority"],
                  ["Reply to investor email", "Suggested next"],
                  ["Plan tomorrow", "AI grouped"]
                ].map(([title, badge]) => (
                  <div key={title} className="rounded-2xl bg-white/6 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium">{title}</p>
                        <p className="mt-1 text-sm text-slate-400">{badge}</p>
                      </div>
                      <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                        On track
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-brand-500/15 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-200">AI summary</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  You have two high-energy tasks this morning. Start with the sprint review, then
                  batch short admin work after lunch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
