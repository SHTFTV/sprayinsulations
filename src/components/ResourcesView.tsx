import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  PenTool, 
  Calendar 
} from 'lucide-react';
import { Article, ViewMode } from '../types';
import { INITIAL_ARTICLES } from '../data/initialData';
import { NewsSection } from './NewsSection';
import { IndustryFAQ } from './IndustryFAQ';

interface ResourcesViewProps {
  articles: Article[];
  onNavigate: (view: ViewMode, paramId?: string) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ articles, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    'ALL',
    'Building Science',
    'Spray Foam',
    'Fire Safety & Codes',
    'Acoustics & Sound',
    'Residential Retrofits',
    'Commercial Envelopes'
  ];

  const filteredArticles = articles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          a.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || a.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Building Science & Education Hub
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          Insulation Knowledge & Technical Guides
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Independent building envelope science, Canadian national/provincial code interpretations, and practical insulation guides.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('guest-posts')}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 text-xs font-bold transition-all inline-flex items-center gap-2"
          >
            <PenTool className="w-4 h-4" />
            <span>Contribute a Guest Post ($10 Submission)</span>
          </button>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat === 'ALL' ? 'All Guides' : cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => onNavigate('article-detail', article.slug)}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-90"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/90 backdrop-blur-md text-[11px] font-mono text-amber-400 border border-slate-800">
                  {article.category}
                </div>
              </div>

              <div className="px-6 space-y-2.5">
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    {article.datePublished}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Canadian Building Code & Regulations Industry FAQ */}
      <IndustryFAQ />

      {/* Canadian Building Science News, Codes & Industry Trends */}
      <NewsSection 
        title="Canadian Building Science & Industry Updates"
        subtitle="Timely analysis of national model codes, provincial step codes, federal retrofit programs, and advanced envelope research."
        showFilters={true}
        showSubscribeCTA={true}
      />

    </div>
  );
};
