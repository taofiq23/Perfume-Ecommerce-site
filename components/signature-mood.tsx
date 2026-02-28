import Link from "next/link";

export function SignatureMood() {
  return (
    <section className="relative border-b border-black/10">
      <div className="relative h-[76vh] min-h-[540px] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,#7f6a47_0%,transparent_34%),linear-gradient(145deg,#1a1713_0%,#2a251f_35%,#69543a_100%)]" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute bottom-10 left-0 right-0 md:bottom-14">
          <div className="container-luxe">
            <p className="kicker text-base/80">Final Note</p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-base md:text-7xl">
              Intense. Magnetic.<br className="hidden md:block" />Unforgettable.
            </h2>
            <Link href="/collection" className="mt-7 inline-block border border-base/80 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-base">
              Discover Fragrances
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
