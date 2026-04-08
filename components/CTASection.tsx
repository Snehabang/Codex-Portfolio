import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-container py-20">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
        <p className="text-3xl font-semibold text-slate-900">Let&apos;s build something impactful.</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
