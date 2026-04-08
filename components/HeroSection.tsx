import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section-container py-20 md:py-28">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">AI Engineer</p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
        Building AI-powered products with clear systems thinking and measurable impact.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
        I design and ship production-grade AI systems that turn complex workflows into reliable experiences teams can trust.
      </p>
      <Link
        href="/portfolio"
        className="mt-10 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        View Work
      </Link>
    </section>
  );
}
