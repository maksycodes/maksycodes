import Image from "next/image";

// A faint, low-opacity version of the real logo symbol used as a corner
// flourish on a page's top section. Uses the supplied brand asset as-is
// (never redrawn), per the brand guidelines. Purely decorative: hidden
// from assistive tech, and the parent section needs `relative overflow-hidden`
// for it to sit correctly behind the section's content.
export function BrandWatermark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/lotachi-symbol-colour.png"
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      className={`pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] opacity-[0.07] sm:-right-16 sm:-top-32 sm:h-[34rem] sm:w-[34rem] ${className}`}
    />
  );
}
