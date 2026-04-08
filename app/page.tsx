import Link from 'next/link';
import CTASection from '@/components/CTASection';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <HeroSection />
      <section className="section-container py-10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-slate-900">Featured Case Studies</h2>
          <Link href="/portfolio" className="text-sm font-medium text-accent hover:underline">
            View All Projects
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
