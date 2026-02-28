export function SectionEditorialStrip() {
  return (
    <section className="py-24 md:py-28">
      <div className="container-luxe grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-stretch">
        <div className="group luxe-image min-h-[480px] md:min-h-[620px]">
          <div className="h-full w-full bg-[linear-gradient(180deg,#e8dcc8_0%,#b99a62_100%)]" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="luxe-panel p-8 md:p-10">
            <p className="kicker">Campaign Direction</p>
            <h3 className="mt-4 font-display text-4xl leading-[1.06] md:text-5xl">
              Clean framing. Deep contrast. Signature mood.
            </h3>
            <p className="mt-5 leading-relaxed text-secondary/80">
              This strip adds the editorial cadence used by global brands:
              oversized imagery, compact copy, and strong tonal consistency.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group luxe-image min-h-[220px]">
              <div className="h-full w-full bg-gradient-to-b from-[#f0e7d8] to-[#ceb384]" />
            </div>
            <div className="group luxe-image min-h-[220px]">
              <div className="h-full w-full bg-gradient-to-b from-[#dbd0bf] to-[#9c7f4f]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
