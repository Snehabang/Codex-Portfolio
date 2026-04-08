import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-container py-16 md:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{post.publishedAt}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-slate-900 md:text-5xl">{post.title}</h1>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">{post.content}</p>
    </article>
  );
}
