import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { blogPosts, caseStudies, webinars, whitepapers } from '../data/resourcesData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import {
  BookOpen, FileText, Video, Download, ArrowRight,
  Sparkles, Calendar, Clock, Star, Quote
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const ResourcesPage = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'all';
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Knowledge Hub - Blog, Case Studies, Webinars & Downloads"
        description="Explore SASIG's library of UK business guides, HMRC MTD tax briefings, customer stories, webinars, and operational whitepapers."
        canonical="/resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Knowledge & Resources"
          badgeVariant="violet"
          title="Learn, Grow & Master."
          highlightText="UK Business Intelligence."
          subtitle="Discover tactical software playbooks, HMRC tax guides, customer case studies, and live webinars."
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
              activeTab === 'all'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 text-brand-plum-700 dark:text-brand-plum-300'
            }`}
          >
            All Resources
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
              activeTab === 'blog'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 text-brand-plum-700 dark:text-brand-plum-300'
            }`}
          >
            Articles & Guides
          </button>
          <button
            onClick={() => setActiveTab('case-studies')}
            className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
              activeTab === 'case-studies'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 text-brand-plum-700 dark:text-brand-plum-300'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveTab('webinars')}
            className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
              activeTab === 'webinars'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 text-brand-plum-700 dark:text-brand-plum-300'
            }`}
          >
            Live Webinars
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
              activeTab === 'downloads'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 text-brand-plum-700 dark:text-brand-plum-300'
            }`}
          >
            Whitepapers
          </button>
        </div>

        {/* 1. BLOG ARTICLES SECTION */}
        {(activeTab === 'all' || activeTab === 'blog') && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-brand-violet-100 dark:border-brand-violet-900">
              <h3 className="font-heading font-black text-2xl text-brand-plum-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-violet-500" />
                <span>Featured Articles & Guides</span>
              </h3>
              <Link to="/blog" className="text-xs font-bold text-brand-violet-600 dark:text-brand-violet-300 hover:text-brand-pink-500">
                View All Posts →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} color="violet" className="flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-brand-plum-500 dark:text-brand-plum-400 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-violet-100 text-brand-violet-700 dark:bg-brand-violet-950 dark:text-brand-violet-300 font-bold">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-heading font-black text-lg text-brand-plum-900 dark:text-white group-hover:text-brand-violet-600 dark:group-hover:text-brand-violet-300 transition-colors mb-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-xs text-brand-plum-600 dark:text-brand-plum-300 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-violet-100 dark:border-brand-violet-800 flex items-center justify-between text-xs">
                    <span className="text-brand-plum-500">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-heading font-bold text-brand-violet-600 dark:text-brand-violet-300 hover:text-brand-pink-500 flex items-center gap-1"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 2. CASE STUDIES */}
        {(activeTab === 'all' || activeTab === 'case-studies') && (
          <div className="mb-16">
            <div className="mb-6 pb-2 border-b border-brand-violet-100 dark:border-brand-violet-900">
              <h3 className="font-heading font-black text-2xl text-brand-plum-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-mint-500" />
                <span>UK Customer Case Studies</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <Card key={cs.id} color="mint" className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-mint-600 dark:text-brand-mint-400">
                      {cs.industry}
                    </span>
                    <h4 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white mt-1 mb-2">
                      {cs.company}
                    </h4>

                    <div className="p-3 rounded-xl gradient-mint-yellow text-brand-plum-900 font-heading font-black text-sm mb-4">
                      {cs.metric}
                    </div>

                    <p className="text-xs text-brand-plum-600 dark:text-brand-plum-300 italic mb-4">
                      "{cs.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-mint-100 dark:border-brand-mint-900 text-xs">
                    <p className="font-bold text-brand-plum-900 dark:text-white">{cs.author}</p>
                    <p className="text-[11px] text-brand-plum-500">{cs.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 3. WEBINARS & WHITEPAPERS */}
        {(activeTab === 'all' || activeTab === 'webinars' || activeTab === 'downloads') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Webinars */}
            {(activeTab === 'all' || activeTab === 'webinars') && (
              <div className="space-y-4">
                <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white flex items-center gap-2">
                  <Video className="w-5 h-5 text-brand-pink-500" />
                  <span>Upcoming & On-Demand Webinars</span>
                </h3>
                {webinars.map((w) => (
                  <Card key={w.id} color="pink" className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-pink-100 text-brand-pink-700 dark:bg-brand-pink-950 dark:text-brand-pink-300">
                        {w.badge}
                      </span>
                      <span className="text-xs text-brand-plum-500">{w.duration}</span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-brand-plum-900 dark:text-white mb-2">
                      {w.title}
                    </h4>
                    <p className="text-xs text-brand-plum-500 dark:text-brand-plum-400 mb-4">
                      {w.date} • {w.time} • Speaker: {w.speaker}
                    </p>
                    <Button to="/demo" variant="outline" size="sm">
                      Reserve Free Seat
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {/* Whitepapers */}
            {(activeTab === 'all' || activeTab === 'downloads') && (
              <div className="space-y-4">
                <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white flex items-center gap-2">
                  <Download className="w-5 h-5 text-brand-yellow-500" />
                  <span>Downloadable Reports & Checklists</span>
                </h3>
                {whitepapers.map((wp) => (
                  <Card key={wp.id} color="yellow" className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-yellow-100 text-brand-yellow-800 dark:bg-brand-yellow-950 dark:text-brand-yellow-300">
                        {wp.format}
                      </span>
                      <span className="text-xs text-brand-mint-600 font-bold">{wp.downloads}</span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-brand-plum-900 dark:text-white mb-2">
                      {wp.title}
                    </h4>
                    <p className="text-xs text-brand-plum-600 dark:text-brand-plum-300 mb-4 leading-relaxed">
                      {wp.desc}
                    </p>
                    <Button to="/demo" variant="outline" size="sm" icon={Download}>
                      Download Free PDF
                    </Button>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <FinalCTA />
    </div>
  );
};
