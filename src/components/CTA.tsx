import { withBasePath } from "../lib/paths";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
        <div className="hero-orb left-8 top-8 h-40 w-40 bg-brand-400/40" />
        <div className="hero-orb bottom-0 right-4 h-48 w-48 bg-emerald-300/30" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              Built for iPhone
            </p>
            <h2 className="section-title mt-4 text-4xl font-bold sm:text-5xl">
              Replace the messy to-do list with a cleaner daily flow
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              TaskFlow Smart is positioned as a polished productivity app with clear support and
              privacy routes, ready to publish as a static site on GitHub Pages.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/"
              className="rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-brand-100"
            >
              Open App Store
            </a>
            <a
              href={withBasePath("/privacy")}
              className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-brand-300 hover:text-brand-200"
            >
              Review privacy policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
