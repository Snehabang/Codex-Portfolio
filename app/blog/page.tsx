import Link from 'next/link';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="section-container py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Blog</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 p-6">
            <p className="text-xs uppercase tracking-wide text-slate-500">{post.publishedAt}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-3 text-slate-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
