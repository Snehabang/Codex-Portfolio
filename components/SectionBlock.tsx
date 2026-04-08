import { ReactNode } from 'react';

export default function SectionBlock({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-slate-100 py-10">
      <h2 className="mb-4 text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}
