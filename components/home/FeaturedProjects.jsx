const featuredProjects = [
  { title: 'Terrace Light House', type: 'Residential', location: 'Bandung, ID' },
  { title: 'Folded Courtyard Offices', type: 'Commercial', location: 'Jakarta, ID' },
  { title: 'Riverfront Cultural Hub', type: 'Urban Design', location: 'Surabaya, ID' },
];

export default function FeaturedProjects() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-light tracking-tight text-stone-100 md:text-5xl">Featured Projects</h2>
          <p className="max-w-md text-sm leading-relaxed text-stone-400">Selected works exploring minimalist material palettes, daylight strategy, and contextual massing.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-stone-200/15 bg-stone-900/30 p-6">
              <div className="mb-6 h-44 rounded-xl bg-gradient-to-br from-stone-700/60 to-slate-900/60" />
              <h3 className="text-xl font-light text-stone-100">{project.title}</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-stone-400">{project.type}</p>
              <p className="mt-2 text-sm text-stone-300">{project.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
