import { withBasePath } from "../lib/paths";
import { screenshots } from "../lib/screenshots";
import PhoneScreenshot from "./PhoneScreenshot";

const highlights = [
  "AI-assisted task prioritization",
  "Fast iPhone-first task capture",
  "Planner UI designed for focus"
];

const heroShots = screenshots.slice(0, 3);

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      <div className="hero-orb left-[-4rem] top-16 h-52 w-52 bg-brand-300" />
      <div className="hero-orb right-[-2rem] top-28 h-64 w-64 bg-emerald-200" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative rounded-[2.25rem] px-2 py-4 sm:px-4 lg:px-6">
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
              href={withBasePath("/#screenshots")}
              className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              See screenshots
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
          <div className="relative mx-auto max-w-[34rem]">
            <div className="hero-orb left-8 top-8 h-40 w-40 bg-brand-300/80" />
            <div className="hero-orb bottom-12 right-8 h-48 w-48 bg-emerald-200/80" />

            <div className="relative flex items-end justify-center gap-4 px-2 pt-8">
              <PhoneScreenshot
                src={heroShots[1].src}
                alt={heroShots[1].alt}
                className="hidden w-28 -rotate-[10deg] translate-y-8 sm:block lg:w-36"
              />
              <PhoneScreenshot
                src={heroShots[0].src}
                alt={heroShots[0].alt}
                priority
                className="w-44 sm:w-56 lg:w-64"
              />
              <PhoneScreenshot
                src={heroShots[2].src}
                alt={heroShots[2].alt}
                className="hidden w-28 rotate-[12deg] -translate-y-6 sm:block lg:w-36"
              />
            </div>

            <div className="glass-panel mt-6 rounded-[2rem] p-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Native iPhone UI
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The landing now shows the real product instead of placeholder mockups.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Real screens
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold">6</p>
                  <p className="mt-1 text-sm text-slate-300">optimized previews in the gallery</p>
                </div>

                <div className="rounded-[1.5rem] bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Fast landing
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Screenshot assets were compressed for GitHub Pages without changing the source
                    files you added.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
