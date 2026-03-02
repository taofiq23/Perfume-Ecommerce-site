export default function StoryPage() {
  return (
    <section className="bg-base-2 py-16 md:py-24">
      <div className="container-luxe grid gap-12 md:grid-cols-2 md:items-center">
        <div className="luxe-image">
          <div className="aspect-[4/5] bg-gradient-to-b from-[#dfd2be] via-[#c3ab80] to-[#7b6540]" />
        </div>
        <div>
          <p className="kicker">Our House</p>
          <h1 className="section-title mt-4">The Story of Yubi Essence</h1>
          <p className="mt-6 text-sm uppercase leading-relaxed tracking-[0.14em] text-secondary/72">
            Built for modern fragrance collectors, Yubi Essence is a perfume house
            focused on clean composition, rich materials, and refined design.
            Every release balances emotion, structure, and long-lasting signature.
          </p>
          <p className="mt-4 text-sm uppercase leading-relaxed tracking-[0.14em] text-secondary/72">
            This site is designed with editorial rhythm and premium spacing to
            reflect a global luxury brand presence from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
