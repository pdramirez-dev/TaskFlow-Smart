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
            Real iPhone screenshots, integrated into the landing
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            The previous placeholder cards were replaced with optimized assets from
            `public/screenshots`. The section is built to feel closer to an App Store editorial
            layout while keeping the page lightweight.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Anchor links
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Landing CTAs now point to valid internal sections instead of placeholder external
                URLs.
              </p>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Optimized images
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Gallery assets were resized to keep the screenshots sharp without shipping the full
                simulator PNG weight.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {screenshots.map((preview, index) => (
            <article key={preview.src} className="glass-panel overflow-hidden rounded-[2rem] p-4">
              <div className={`rounded-[1.9rem] bg-gradient-to-b ${accents[index % accents.length]} p-3`}>
                <PhoneScreenshot
                  src={preview.src}
                  alt={preview.alt}
                  priority={index < 2}
                  className="w-full"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-950">{preview.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">TaskFlow Smart on iPhone</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Preview
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
