import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content" className="pt-24">
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-foreground-muted hover:text-foreground transition-colors mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <header className="mb-12">
            <time className="text-sm text-foreground-subtle">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-foreground-muted">
              {post.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-foreground-subtle">
                By {post.author}
              </span>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-background-subtle text-foreground-subtle rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {post.image && (
            <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden bg-background-subtle">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground-muted prose-a:text-foreground prose-a:underline hover:prose-a:text-foreground-muted prose-strong:text-foreground prose-code:text-foreground prose-code:bg-background-elevated prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-background-elevated prose-pre:border prose-pre:border-border prose-blockquote:border-l-border prose-blockquote:text-foreground-muted prose-li:text-foreground-muted prose-table:border-collapse prose-table:w-full prose-th:border prose-th:border-border prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:text-foreground prose-th:bg-background-elevated prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-td:text-foreground-muted">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </main>
  );
}
