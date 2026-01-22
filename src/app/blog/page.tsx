import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on building production AI systems for enterprise.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main id="main-content" className="pt-24">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
              Blog
            </h1>
            <p className="mt-6 text-lg text-foreground-muted">
              Insights on building production AI systems for enterprise.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="p-12 bg-background-elevated border border-border rounded-lg text-center">
              <p className="text-foreground-muted mb-6">
                Content coming soon. In the meantime, let&apos;s talk about your AI challenges.
              </p>
              <Button href="/contact">
                Book a Demo
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group block p-6 bg-background-elevated border border-border rounded-lg hover:border-border-hover transition-colors"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {post.image && (
                        <div className="relative w-full sm:w-48 h-32 flex-shrink-0 rounded-md overflow-hidden bg-background-subtle">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <time className="text-sm text-foreground-subtle">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-foreground-muted transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-foreground-muted line-clamp-2">
                          {post.description}
                        </p>
                        {post.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
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
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
