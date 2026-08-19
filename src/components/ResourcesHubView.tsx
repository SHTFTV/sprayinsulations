import React, { useState } from 'react';
import { 
  BookOpen, 
  Home, 
  HardHat, 
  Scale, 
  Sparkles, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Tag, 
  Calculator, 
  Compass,
  FileText
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../data/initialData';
import { Article, ViewMode } from '../types';

interface ResourcesHubViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const ResourcesHubView: React.FC<ResourcesHubViewProps> = ({
  onNavigate,
  onOpenGetHelp
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources & Guides', icon: BookOpen },
    { id: 'Insulation 101', label: 'Insulation 101', icon: BookOpen },
    { id: 'Homeowner Guides', label: 'Homeowner Guides', icon: Home },
    { id: 'Builder & Contractor', label: 'Builder & Contractor', icon: HardHat },
    { id: 'Building Science & Codes', label: 'Building Science & Codes', icon: Scale }
  ];

  const filteredArticles = INITIAL_ARTICLES.filter(a => {
    if (selectedCategory !== 'all' && a.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = a.title.toLowerCase().includes(q);
      const matchExcerpt = a.excerpt.toLowerCase().includes(q);
      const matchTags = a.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchExcerpt && !matchTags) return false;
    }
    return true;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Canadian Building Science & Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Insulation Resources, Codes & Technical Guides
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            Authoritative building science guides on Canadian climate zone requirements, thermal bridging calculations, air barrier continuity, moisture dynamics, and contractor QA standards.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('advisor')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-amber-500/10 text-sm"
            >
              <Compass className="w-4 h-4" />
              What Insulation Do I Need? Advisor
            </button>
            <button
              onClick={() => onNavigate('compare')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition text-sm"
            >
              <Scale className="w-4 h-4 text-amber-400" />
              Insulation Comparison Tool
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Workspace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Search & Category Filter Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8 shadow-md space-y-4">
          
          {/* Search Box */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides by topic (e.g. vapor barriers, attic frost, DC315, BC Step Code)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 placeholder-slate-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-800/80">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredArticles.map(art => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 cursor-pointer transition shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {art.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readingTime || '5 min read'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition leading-snug mb-2">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {art.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {art.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 text-[10px]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
                <span>Read Full Technical Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Article Modal / Drawer when clicked */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    {selectedArticle.category} • {selectedArticle.readingTime}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white">
                    {selectedArticle.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold"
                >
                  ✕ Close
                </button>
              </div>

              <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
                <span>Published by Canadian Insulation Research Team</span>
                <span>•</span>
                <span>{selectedArticle.publishedDate}</span>
              </div>

              <div className="text-sm text-slate-200 leading-relaxed space-y-4 mb-8">
                <p className="font-semibold text-slate-100 text-base leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                  {selectedArticle.content || `This comprehensive Canadian building science guide covers continuous air barrier continuity, dew point calculations inside exterior cavities, and code requirements under NBC Section 9.36. 

Key Takeaways:
1. Convective Air Leakage: In Canadian winters, exfiltrating warm indoor air carries 10 to 100 times more moisture into wall and attic assemblies than simple vapor diffusion through materials.
2. Monolithic Air Barriers: CAN/ULC S705.1 closed-cell spray foam eliminates bypass channels, establishing a joint-free air barrier and vapor barrier in one step.
3. Thermal Bridging Mitigation: Continuous exterior insulation (ci) or high-density polyurethane on rim joists eliminates cold concrete bridges, preventing frost accumulation.`}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onNavigate('estimator');
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition"
                >
                  Calculate Estimator for this System
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
                >
                  Back to Resources
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Resources CTA Box */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Have a Specific Building Code or Assembly Question?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our Canadian envelope technical team reviews blueprints, specifies CAN/ULC compliance systems, and coordinates with municipal building inspectors.
            </p>
          </div>
          <button
            onClick={onOpenGetHelp}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-xs whitespace-nowrap shadow-lg shadow-amber-500/20"
          >
            Ask a Technical Specialist
          </button>
        </div>

      </section>

    </div>
  );
};
