interface PhoneScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  badge?: string;
}

export default function PhoneScreenshot({
  src,
  alt,
  className = "",
  priority = false,
  badge
}: PhoneScreenshotProps) {
  return (
    <div className={`relative isolate ${className}`}>
      {badge ? (
        <div className="mb-3">
          <span className="inline-flex rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-[0_16px_30px_-22px_rgba(15,23,42,0.35)]">
            {badge}
          </span>
        </div>
      ) : null}

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white p-3 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.35)]">
        <div className="overflow-hidden rounded-[1.55rem] border border-slate-200 bg-slate-100">
          <img
            src={src}
            alt={alt}
            width={506}
            height={1100}
            loading={priority ? "eager" : "lazy"}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
