import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-secondary text-base-2">
      <div className="container-luxe flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl tracking-[0.2em]">NOIR ATELIER</p>
        <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.22em] text-base-2/70">
          <Link href="/story">Story</Link>
          <Link href="/collection">Collection</Link>
          <Link href="#">Client Services</Link>
          <Link href="#">Shipping</Link>
        </div>
      </div>
    </footer>
  );
}
