interface PhoneScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function PhoneScreenshot({
  src,
  alt,
  className = "",
  priority = false
}: PhoneScreenshotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.75rem] border border-white/50 bg-slate-950 p-2 shadow-[0_40px_90px_-40px_rgba(13,22,36,0.65)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-b-[1.2rem] bg-slate-950 shadow-[0_8px_20px_rgba(0,0,0,0.45)]" />
      <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-900">
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
  );
}
