export default function ContactPage() {
  return (
    <div className="section-container py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Contact</h1>
      <p className="mt-4 text-slate-600">Tell me about your product, team, or problem space.</p>
      <form className="mt-10 max-w-2xl space-y-5" action="#" method="post">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Name</span>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-accent/40 focus:ring"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Email</span>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-accent/40 focus:ring"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Message</span>
          <textarea
            required
            name="message"
            rows={6}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-accent/40 focus:ring"
          />
        </label>
        <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700">
          Submit
        </button>
      </form>
    </div>
  );
}
