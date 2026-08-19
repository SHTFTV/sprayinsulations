import React, { useState } from 'react';
import { 
  Newspaper, 
  Search, 
  Tag, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  BookOpen, 
  Building2, 
  ShieldCheck, 
  Bell, 
  Send,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';
import { NewsItem } from '../types';
import { INITIAL_NEWS_TRENDS } from '../data/initialData';

export interface NewsSectionProps {
  newsItems?: NewsItem[];
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  showSubscribeCTA?: boolean;
  className?: string;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  newsItems = INITIAL_NEWS_TRENDS,
  title = 'News, Trends & Building Science Updates',
  subtitle = 'Current Canadian national building codes, federal/provincial energy grants, and innovative insulation technologies.',
  maxItems,
  showFilters = true,
  showSubscribeCTA = true,
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedNewsId, setExpandedNewsId] = useState<string | null>(newsItems[0]?.id || null);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success'>('idle');

  const categories = [
    'ALL',
    'Codes & Standards',
    'Rebates & Grants',
    'Building Science',
    'Industry Trends',
    'Technology & Materials'
  ];

  // Filtering
  const filteredItems = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const displayedItems = maxItems ? filteredItems.slice(0, maxItems) : filteredItems;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail || !subscriberEmail.includes('@')) return;
    setSubscribeStatus('success');
    setTimeout(() => {
      setSubscriberEmail('');
      setSubscribeStatus('idle');
    }, 4500);
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Codes & Standards':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'Rebates & Grants':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Building Science':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Technology & Materials':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <section 
      id="news-trends-section"
      className={`space-y-8 ${className}`}
      aria-label="Canadian Building Science and Insulation News"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-amber-400">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Canadian Building Science & Industry Wire</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-400 font-mono text-[11px]">Updated 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Live Authority Status indicator */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <div>
            <div className="font-bold text-white">NRC & NRCan Monitoring</div>
            <div className="text-[11px] text-slate-400">National Code & Rebate Revisions</div>
          </div>
        </div>
      </div>

      {/* Controls: Search and Filter Pills */}
      {showFilters && (
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat === 'ALL' ? 'All Updates' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search codes, rebates, HFOs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>
      )}

      {/* News Cards Grid */}
      {displayedItems.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
          <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-lg font-bold text-white font-display">No news records found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            No updates matched "{searchQuery}" under the category "{selectedCategory}". Try clearing your search parameters.
          </p>
          <button
            onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-amber-400 font-semibold hover:bg-slate-850 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured/Selected News Item */}
          {displayedItems.map((news) => {
            const isExpanded = expandedNewsId === news.id;

            return (
              <div
                key={news.id}
                className={`lg:col-span-12 rounded-3xl border transition-all overflow-hidden ${
                  news.isBreaking 
                    ? 'bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 border-amber-500/40 shadow-lg shadow-amber-500/5'
                    : 'bg-slate-950/90 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      {news.isBreaking && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black tracking-wider text-[10px] uppercase flex items-center gap-1 shadow-sm shadow-amber-500/30">
                          <Sparkles className="w-3 h-3" />
                          Key Regulation
                        </span>
                      )}
                      <span className={`px-2.5 py-0.5 rounded-full border font-semibold text-xs ${getCategoryBadgeClass(news.category)}`}>
                        {news.category}
                      </span>
                      <span className="text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {news.date}
                      </span>
                    </div>

                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {news.readTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
                    {news.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {news.summary}
                  </p>

                  {/* Expanded Breakdown View */}
                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-5">
                      {/* Key Takeaways Box */}
                      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          <span>Key Industry Takeaways & Practical Impact</span>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                          {news.keyTakeaways.map((takeaway, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                              <span className="leading-relaxed">{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stakeholder Impact & Source Citation */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                          <span className="text-slate-400 block mb-1">Primary Affected Sectors:</span>
                          <span className="text-slate-200 font-semibold">{news.impactArea}</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between">
                          <div>
                            <span className="text-slate-400 block mb-1">Authoritative Source:</span>
                            <span className="text-amber-400 font-semibold">{news.source}</span>
                          </div>
                          {news.sourceUrl && (
                            <a
                              href={news.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                              title="Visit official authority resource"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Tag Cloud */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
                        {news.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Toggle Expand Action */}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setExpandedNewsId(isExpanded ? null : news.id)}
                      className="font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <span>{isExpanded ? 'Hide Full Technical Analysis' : 'View Key Takeaways & Impact Analysis'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <div className="text-[11px] text-slate-400">
                      Ref: {news.id.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Subscribe to Canadian Building Science Updates CTA */}
      {showSubscribeCTA && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Bell className="w-4 h-4 text-amber-400" />
              <span>Building Code & Grant Alerts</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Stay Informed on Canadian Building Envelope Regulations
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Get quarterly briefings on NBC 9.36 tiered code adoption, provincial insulation rebate schedules, and tested cold-climate wall assemblies.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 shrink-0">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              required
              className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-amber-500 w-full sm:w-64"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </button>
          </form>

          {subscribeStatus === 'success' && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce">
              <CheckCircle2 className="w-4 h-4" />
              <span>Subscribed! You will receive our next quarterly Canadian Building Science Bulletin.</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
