'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MotionSection from '@/components/ui/MotionSection';
import { dummyProjects } from '@/data/dummyProjects';

export default function FeaturedProjects() {
  const featuredProjects = dummyProjects.slice(0, 3);

  return (
    <MotionSection className="px-6 py-20 md:px-12 md:py-24" delay={0.05}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="text-3xl font-light tracking-tight text-stone-100 md:text-5xl">Featured Projects</h2>
          <p className="max-w-md text-sm leading-relaxed text-stone-400">Selected works exploring minimalist material palettes, daylight strategy, and contextual massing.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View details for ${project.title}`}
                className="group block rounded-2xl border border-stone-200/15 bg-stone-900/30 p-6 transition hover:border-stone-300/35 hover:bg-stone-900/45"
              >
                <div className="relative mb-6 h-44 overflow-hidden rounded-xl">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} featured project preview image`}
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-light text-stone-100">{project.title}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-stone-400">{project.category}</p>
                <p className="mt-2 text-sm text-stone-300">{project.location}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
