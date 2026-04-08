import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function PortfolioPage() {
  return (
    <div className="section-container py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Portfolio</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        A selection of case studies focused on problem framing, architecture decisions, and measurable business impact.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
