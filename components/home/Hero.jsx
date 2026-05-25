import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-36 md:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(245,245,244,0.18),transparent_48%),radial-gradient(circle_at_75%_10%,rgba(120,113,108,0.25),transparent_42%),linear-gradient(180deg,#1c1917_0%,#0f172a_95%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-stone-300">Personal Architecture Portfolio</p>
          <h1 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-tight text-stone-100 sm:text-5xl md:text-7xl">
            Spatial Narratives for Contemporary Living and Urban Context
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-300 md:text-lg">
            I present selected architecture projects that balance material clarity, environmental response, and human-centered experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" aria-label="View architecture projects" className="rounded-full bg-stone-100 px-7 py-3 text-xs font-medium uppercase tracking-[0.14em] text-stone-900 transition hover:bg-stone-200">
              View Projects
            </Link>
            <Link href="/contact" aria-label="Start a conversation with Naufal Yuw" className="rounded-full border border-stone-400/50 px-7 py-3 text-xs uppercase tracking-[0.14em] text-stone-200 transition hover:border-stone-100 hover:text-stone-100">
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className="hidden rounded-3xl border border-stone-200/20 bg-stone-900/30 p-6 backdrop-blur lg:block">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Current Focus</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-200">Personal explorations in residential prototypes, boutique hospitality, and adaptive reuse concepts.</p>
        </div>
      </div>
    </section>
  );
}
