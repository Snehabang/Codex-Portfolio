export default function AboutPage() {
  return (
    <div className="section-container py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">About</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Story</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            I started in backend engineering, then moved into applied AI when I realized the biggest leverage comes from combining robust systems with thoughtful product design.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Background</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            7+ years across platform engineering, data systems, and AI product development. I partner with product, design, and operations teams to ship reliable solutions end-to-end.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Skills & Strengths</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>AI system design and LLM integration</li>
            <li>Scalable backend architecture</li>
            <li>Data pipelines and observability</li>
            <li>Cross-functional decision facilitation</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Philosophy</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            I build with clarity: frame the problem, expose tradeoffs, and measure outcomes. Great systems are useful, explainable, and resilient under real-world constraints.
          </p>
        </section>
      </div>
    </div>
  );
}
