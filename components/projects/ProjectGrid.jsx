import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectGrid({ projects }) {
  return (
    <section className="px-6 pb-20 pt-36 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Projects</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-stone-100 md:text-6xl">Architecture Works</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
