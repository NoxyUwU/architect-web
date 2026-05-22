import ProjectGrid from '@/components/projects/ProjectGrid';
import { dummyProjects } from '@/data/dummyProjects';

export default function ProjectsPage() {
  return <ProjectGrid projects={dummyProjects} />;
}
