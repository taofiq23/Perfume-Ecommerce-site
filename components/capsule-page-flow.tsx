export function CapsulePageFlow() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <div className="relative h-[230px] w-full overflow-hidden md:h-[460px]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#b49a6b_0%,transparent_34%),linear-gradient(140deg,#1f1b16_0%,#2e271f_45%,#705735_100%)]" />
          <div className="absolute inset-0 bg-black/22" />
          <div className="absolute inset-x-0 bottom-6 text-center">
            <h1 className="font-display text-5xl tracking-[0.04em] text-white md:text-7xl">
              YUBI ESSENCE
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f3f3f3] px-6 py-7 md:px-12 md:py-10">
        <p className="mx-auto max-w-3xl text-center text-[15px] leading-relaxed text-black/70 md:text-lg">
          A celebration of identity in all its forms, Yubi Essence fragrances are crafted with
          distinctive compositions for men and women, offering balanced depth and modern elegance.
        </p>
      </section>
    </>
  );
}
