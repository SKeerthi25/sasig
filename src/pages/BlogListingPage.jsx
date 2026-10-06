import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/resourcesData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const BlogListingPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="SASIG Blog - UK SaaS, Growth & Tax Insights"
        description="Expert insights on UK business efficiency, HMRC Making Tax Digital, CRM strategies, and software consolidation."
        canonical="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SASIG Editorial"
          badgeVariant="violet"
          title="Insights for UK Founders & Leaders."
          highlightText="Zero Fluff."
          subtitle="Actionable perspectives on cloud technology, digital transformation, and scaling modern British businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Card key={post.id} color="violet" className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs text-brand-plum-500 dark:text-brand-plum-400 mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-violet-100 text-brand-violet-800 dark:bg-brand-violet-950 dark:text-brand-violet-300 font-bold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white group-hover:text-brand-violet-600 dark:group-hover:text-brand-violet-300 transition-colors mb-3 leading-snug">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-violet-100 dark:border-brand-violet-800 flex items-center justify-between text-xs">
                <span className="text-brand-plum-500 dark:text-brand-plum-400">{post.date}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-heading font-bold text-brand-violet-600 dark:text-brand-violet-300 hover:text-brand-pink-500 flex items-center gap-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};
