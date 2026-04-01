const previews = [
  {
    title: "Inbox",
    caption: "Collect tasks instantly with a clean capture flow.",
    accent: "from-brand-100 to-white"
  },
  {
    title: "Planner",
    caption: "See a structured day with space for real priorities.",
    accent: "from-emerald-100 to-white"
  },
  {
    title: "Insights",
    caption: "Use AI suggestions to reduce planning overhead.",
    accent: "from-sky-100 to-white"
  }
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-16 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Product preview</p>
          <h2 className="section-title mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            Components designed to present the app clearly
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-slate-600">
          These static preview cards stand in for App Store imagery and can be swapped with real
          screenshots in `public/screenshots/` when assets are ready.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {previews.map((preview) => (
          <article key={preview.title} className="glass-panel overflow-hidden rounded-[2rem] p-4">
            <div className={`rounded-[1.6rem] bg-gradient-to-b ${preview.accent} p-4`}>
              <div className="rounded-[1.5rem] border border-white/70 bg-slate-950 p-4 text-white shadow-2xl">
                <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{preview.title}</span>
                  <span>TaskFlow Smart</span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="rounded-xl bg-white/8 p-3">
                      <div className="h-2.5 w-20 rounded-full bg-white/40" />
                      <div className="mt-2 h-2 w-32 rounded-full bg-white/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-slate-950">{preview.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{preview.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
