import { notFound } from 'next/navigation';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { projects } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((project) => project.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevSlug = projects[projectIndex - 1]?.slug;
  const nextSlug = projects[projectIndex + 1]?.slug;

  return <CaseStudyLayout project={project} prevSlug={prevSlug} nextSlug={nextSlug} />;
}
