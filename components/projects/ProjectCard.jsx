'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
      <Link href={`/projects/${project.slug}`} className="group block rounded-2xl border border-stone-200/15 bg-stone-900/30 p-5 transition hover:border-stone-300/30">
        <div className="relative h-56 overflow-hidden rounded-xl">
          <Image src={project.coverImage} alt={`${project.title} cover image`} fill className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-stone-400">{project.category}</p>
        <h3 className="mt-2 text-2xl font-light tracking-tight text-stone-100">{project.title}</h3>
        <p className="mt-2 text-sm text-stone-300">{project.location} · {project.year}</p>
      </Link>
    </motion.div>
  );
}
