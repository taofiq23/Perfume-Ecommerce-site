const notes = [
  {
    level: "Top Notes",
    items: "Bergamot, Pink Pepper, Neroli"
  },
  {
    level: "Heart Notes",
    items: "Rose Absolute, Saffron, Smoked Plum"
  },
  {
    level: "Base Notes",
    items: "Oud Wood, Amber, Vanilla Suede"
  }
];

export function SectionNotes() {
  return (
    <section className="border-b border-black/10 py-24 md:py-28">
      <div className="container-luxe">
        <p className="kicker">
          Olfactory Architecture
        </p>
        <h2 className="section-title mt-5">The Notes Pyramid</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.level}
              className="luxe-panel rounded-sm p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                {note.level}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-secondary/85">
                {note.items}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
