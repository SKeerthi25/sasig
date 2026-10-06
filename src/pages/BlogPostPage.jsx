import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/resourcesData';
import { SEO } from '../components/common/SEO';
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles } from 'lucide-react';
import { Button } from '../components/common/Button';
import { FinalCTA } from '../components/home/FinalCTA';

export const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="py-10 sm:py-16">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-plum-600 dark:text-brand-plum-400 hover:text-brand-violet-600 dark:hover:text-brand-violet-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Header */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-brand-violet-100 text-brand-violet-800 dark:bg-brand-violet-950 dark:text-brand-violet-300 text-xs font-heading font-bold">
              {post.category}
            </span>
            <span className="text-xs text-brand-plum-500 dark:text-brand-plum-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-brand-plum-900 dark:text-white leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-b border-brand-violet-100 dark:border-brand-violet-800 pb-6 text-xs text-brand-plum-500 dark:text-brand-plum-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-violet-pink text-white flex items-center justify-center font-bold">
                S
              </div>
              <div>
                <p className="font-bold text-brand-plum-900 dark:text-white">{post.author}</p>
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Post CTA Box */}
        <div className="mt-16 p-8 rounded-3xl gradient-emerald-mint text-white shadow-2xl space-y-4">
          <span className="text-xs uppercase tracking-widest font-heading font-extrabold text-brand-champagne-300">
            SASIG Cloud Business Suite
          </span>
          <h3 className="font-heading font-black text-2xl">
            Streamline your UK operations today
          </h3>
          <p className="text-sm text-white/90 max-w-xl">
            Discover how SASIG's 8 native applications unify your sales, books, and operations with local UK support.
          </p>
          <div className="pt-2">
            <Button to="/demo" variant="white" size="md">
              Schedule a Live Demo
            </Button>
          </div>
        </div>
      </article>

      <div className="mt-20">
        <FinalCTA />
      </div>
    </div>
  );
};
