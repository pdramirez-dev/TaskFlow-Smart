import { screenshots } from "../lib/screenshots";
import PhoneScreenshot from "./PhoneScreenshot";

const accents = [
  "from-brand-100 via-white to-brand-50",
  "from-emerald-100 via-white to-emerald-50",
  "from-sky-100 via-white to-sky-50",
  "from-orange-100 via-white to-amber-50",
  "from-blue-100 via-white to-indigo-50",
  "from-teal-100 via-white to-cyan-50"
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="scroll-mt-32 py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">
            Product preview
          </p>
          <h2 className="section-title mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            Real app screens, presented as product storytelling
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Instead of wrapping every screen in fake hardware, the gallery now treats the app as
            the product itself: clear surfaces, strong hierarchy and direct visibility into each
            flow.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Direct product view
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The screenshots read cleanly without competing against decorative device frames.
              </p>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Lighter visual system
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The new treatment is calmer, sharper and more aligned with a modern product page.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {screenshots.map((preview, index) => (
            <article key={preview.src} className="glass-panel overflow-hidden rounded-[2rem] p-4">
              <div
                className={`rounded-[1.9rem] bg-gradient-to-b ${accents[index % accents.length]} px-4 pb-4 pt-6`}
              >
                <PhoneScreenshot
                  src={preview.src}
                  alt={preview.alt}
                  priority={index < 2}
                  badge={preview.label}
                  className="mx-auto w-full max-w-[15rem]"
                />
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                    {preview.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-950">
                    {preview.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{preview.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
