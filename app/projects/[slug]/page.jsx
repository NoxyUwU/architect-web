import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { dummyProjects } from '@/data/dummyProjects';
import { getProjectBySlug } from '@/lib/projects';

export function generateStaticParams() {
  return dummyProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
