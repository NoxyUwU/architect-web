import Link from 'next/link';
import Image from 'next/image';
import { dummyProjects } from '@/data/dummyProjects';

export default function FeaturedProjects() {
  const featuredProjects = dummyProjects.slice(0, 3);

  return (
    <section className="px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="text-3xl font-light tracking-tight text-stone-100 md:text-5xl">Featured Projects</h2>
          <p className="max-w-md text-sm leading-relaxed text-stone-400">Selected works exploring minimalist material palettes, daylight strategy, and contextual massing.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`View details for ${project.title}`}
              className="group block rounded-2xl border border-stone-200/15 bg-stone-900/30 p-6 transition hover:border-stone-300/35 hover:bg-stone-900/45"
            >
              <div className="relative mb-6 h-44 overflow-hidden rounded-xl">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} featured project preview image`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-light text-stone-100">{project.title}</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-stone-400">{project.category}</p>
              <p className="mt-2 text-sm text-stone-300">{project.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
