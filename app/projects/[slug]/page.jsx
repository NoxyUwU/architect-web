import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { dummyProjects, getProjectBySlug } from '@/data/dummyProjects';

export function generateStaticParams() {
  return dummyProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
