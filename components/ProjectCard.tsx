import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1">
      <div className="relative h-52 w-full">
        <Image src={project.coverImage} alt={project.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/portfolio/${project.slug}`} className="inline-block text-sm font-medium text-accent hover:underline">
          Read case study →
        </Link>
      </div>
    </article>
  );
}
