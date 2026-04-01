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
          <div className="flex items-center gap-4">
            <img
              src={withBasePath("/icon.png")}
              alt="TaskFlow Smart app icon"
              width={72}
              height={72}
              className="h-14 w-14 rounded-[1.25rem] shadow-[0_20px_45px_-25px_rgba(47,117,255,0.65)] ring-1 ring-black/5 sm:h-[4.5rem] sm:w-[4.5rem]"
            />
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Organize your day with AI
              </div>
              <p className="text-sm font-medium text-slate-500">Built for iPhone</p>
            </div>
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
          <div className="relative mx-auto max-w-[42rem] px-2 pb-4 pt-6">
            <div className="hero-orb left-8 top-8 h-40 w-40 bg-brand-300/80" />
            <div className="hero-orb bottom-12 right-8 h-48 w-48 bg-emerald-200/80" />
            <div className="absolute inset-x-8 top-10 bottom-10 rounded-[2.75rem] bg-white/40 blur-3xl" />
            <div className="absolute inset-x-12 bottom-8 h-20 rounded-full bg-slate-950/10 blur-3xl" />

            <div className="relative px-2 pt-8">
              <div className="mx-auto grid max-w-[38rem] grid-cols-1 items-end gap-4 md:grid-cols-[0.82fr_1fr_0.82fr] md:gap-5">
              <PhoneScreenshot
                src={heroShots[0].src}
                alt={heroShots[0].alt}
                badge={heroShots[0].label}
                className="mx-auto hidden w-full md:block md:translate-y-8"
              />
              <PhoneScreenshot
                src={heroShots[2].src}
                alt={heroShots[2].alt}
                priority
                badge={heroShots[2].label}
                className="relative z-20 mx-auto w-full max-w-[18rem] md:max-w-none"
              />
              <PhoneScreenshot
                src={heroShots[1].src}
                alt={heroShots[1].alt}
                badge={heroShots[1].label}
                className="mx-auto hidden w-full md:block md:-translate-y-3"
              />
              </div>
            </div>

            <div className="glass-panel mt-6 rounded-[2rem] p-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Capture fast
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Build tasks quickly with details, organization and priority in one place.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Plan visually
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold">3 core flows</p>
                  <p className="mt-1 text-sm text-slate-300">capture, planning and daily calendar</p>
                </div>

                <div className="rounded-[1.5rem] bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Real product
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The visual direction now presents the app as software, not as forced hardware
                    mockups.
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
