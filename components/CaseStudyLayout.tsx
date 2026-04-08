import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import MetricsBlock from './MetricsBlock';
import NavigationTabs from './NavigationTabs';
import SectionBlock from './SectionBlock';

export default function CaseStudyLayout({ project, prevSlug, nextSlug }: { project: Project; prevSlug?: string; nextSlug?: string }) {
  return (
    <article>
      <section className="section-container py-14 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Case Study</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{project.impactStatement}</p>
        <div className="relative mt-8 h-72 overflow-hidden rounded-2xl md:h-[28rem]">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        </div>
      </section>

      <section className="section-container grid gap-6 border-y border-slate-200 py-8 md:grid-cols-4">
        <div><p className="text-xs uppercase tracking-wider text-slate-500">Role</p><p className="mt-2 font-medium text-slate-900">{project.role}</p></div>
        <div><p className="text-xs uppercase tracking-wider text-slate-500">Tools</p><p className="mt-2 text-slate-700">{project.tools.join(', ')}</p></div>
        <div><p className="text-xs uppercase tracking-wider text-slate-500">Technologies</p><p className="mt-2 text-slate-700">{project.technologies.join(', ')}</p></div>
        <div><p className="text-xs uppercase tracking-wider text-slate-500">Duration</p><p className="mt-2 text-slate-700">{project.duration}</p></div>
      </section>

      <NavigationTabs />

      <div className="section-container py-8">
        <SectionBlock id="problem" title="Problem">
          <p>{project.sections.problem}</p>
        </SectionBlock>
        <SectionBlock id="discovery" title="Discovery">
          <p>{project.sections.discovery}</p>
        </SectionBlock>
        <SectionBlock id="ideation" title="Ideation">
          <p>{project.sections.ideation}</p>
        </SectionBlock>
        <SectionBlock id="design" title="Design / Architecture">
          <p>{project.sections.design}</p>
        </SectionBlock>
        <SectionBlock id="implementation" title="Implementation">
          <p>{project.sections.implementation}</p>
        </SectionBlock>
        <SectionBlock id="results" title="Results / Impact">
          <MetricsBlock metrics={project.metrics} />
          <p>{project.sections.results}</p>
        </SectionBlock>
        <SectionBlock id="conclusion" title="Conclusion">
          <p>{project.sections.conclusion}</p>
        </SectionBlock>

        <section className="flex items-center justify-between py-10 text-sm font-medium">
          <div>{prevSlug ? <Link href={`/portfolio/${prevSlug}`} className="text-accent hover:underline">← Previous project</Link> : <span />}</div>
          <div>{nextSlug ? <Link href={`/portfolio/${nextSlug}`} className="text-accent hover:underline">Next project →</Link> : <span />}</div>
        </section>
      </div>
    </article>
  );
}
