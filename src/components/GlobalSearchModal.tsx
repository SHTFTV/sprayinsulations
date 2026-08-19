import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  Sparkles, 
  Flame, 
  Layers, 
  Volume2, 
  Hammer, 
  Building2, 
  FileText, 
  Users, 
  MapPin, 
  ArrowRight, 
  CornerDownLeft, 
  ShieldCheck 
} from 'lucide-react';
import { ViewMode, DirectoryBusiness, Article, CityData } from '../types';
import { INSULATION_SERVICES } from '../data/initialData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewMode, paramId?: string) => void;
  businesses: DirectoryBusiness[];
  articles: Article[];
  cities: CityData[];
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  businesses,
  articles,
  cities
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  // Search Services
  const matchingServices = cleanQuery
    ? INSULATION_SERVICES.filter(s => 
        s.title.toLowerCase().includes(cleanQuery) ||
        s.shortDesc.toLowerCase().includes(cleanQuery) ||
        s.overview.toLowerCase().includes(cleanQuery) ||
        s.keyBenefits.some(b => b.toLowerCase().includes(cleanQuery))
      )
    : [];

  // Search Articles
  const matchingArticles = cleanQuery
    ? articles.filter(a =>
        a.title.toLowerCase().includes(cleanQuery) ||
        (a.summary && a.summary.toLowerCase().includes(cleanQuery)) ||
        (a.excerpt && a.excerpt.toLowerCase().includes(cleanQuery)) ||
        a.category.toLowerCase().includes(cleanQuery) ||
        a.author.toLowerCase().includes(cleanQuery)
      )
    : [];

  // Search Businesses
  const matchingBusinesses = cleanQuery
    ? businesses.filter(b =>
        b.name.toLowerCase().includes(cleanQuery) ||
        b.city.toLowerCase().includes(cleanQuery) ||
        b.provinceCode.toLowerCase().includes(cleanQuery) ||
        b.category.toLowerCase().includes(cleanQuery) ||
        b.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  // Search Cities
  const matchingCities = cleanQuery
    ? cities.filter(c =>
        c.name.toLowerCase().includes(cleanQuery) ||
        c.provinceName.toLowerCase().includes(cleanQuery) ||
        c.provinceCode.toLowerCase().includes(cleanQuery) ||
        c.climateZone.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults = matchingServices.length + matchingArticles.length + matchingBusinesses.length + matchingCities.length;

  const handleSelect = (view: ViewMode, paramId?: string) => {
    onNavigate(view, paramId);
    onClose();
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'spray-foam': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'fire-rated': return <Flame className="w-4 h-4 text-orange-500" />;
      case 'fiberglass': return <Layers className="w-4 h-4 text-yellow-400" />;
      case 'acoustic': return <Volume2 className="w-4 h-4 text-cyan-400" />;
      case 'repairs': return <Hammer className="w-4 h-4 text-emerald-400" />;
      case 'commercial': return <Building2 className="w-4 h-4 text-indigo-400" />;
      default: return <ShieldCheck className="w-4 h-4 text-amber-400" />;
    }
  };

  const popularKeywords = [
    { label: 'Spray Foam', view: 'service-detail' as ViewMode, param: 'spray-foam' },
    { label: 'Fire Rated Barriers', view: 'service-detail' as ViewMode, param: 'fire-rated' },
    { label: 'Acoustic Soundproofing', view: 'service-detail' as ViewMode, param: 'acoustic' },
    { label: 'Climate Zone Guide', view: 'resources' as ViewMode, param: undefined },
    { label: 'Toronto', view: 'city-detail' as ViewMode, param: 'toronto' },
    { label: 'Calgary', view: 'city-detail' as ViewMode, param: 'calgary' },
    { label: 'Vancouver', view: 'city-detail' as ViewMode, param: 'vancouver' },
    { label: 'Contractor Directory', view: 'directory' as ViewMode, param: undefined }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 md:p-20 flex justify-center items-start animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Search Modal Card */}
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10">
        
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-800 p-4 sm:p-5 flex items-center gap-3 bg-slate-950/80">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search insulation services, guides, contractors, cities..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-base sm:text-lg focus:outline-none placeholder:text-slate-500 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono px-2.5 flex items-center gap-1 shrink-0"
          >
            <span>ESC</span>
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* If No Query: Show Quick Suggestion Pills */}
          {!cleanQuery && (
            <div className="space-y-6 py-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Popular Searches & Fast Links
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularKeywords.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(item.view, item.param)}
                      className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-xs font-medium text-slate-300 hover:text-amber-400 transition-all flex items-center gap-1.5"
                    >
                      <Search className="w-3 h-3 text-amber-400/70" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800/80">
                <div 
                  onClick={() => handleSelect('services')}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white group-hover:text-amber-400">All 6 Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Spray Foam, Fire Rated, Acoustic & more</p>
                </div>

                <div 
                  onClick={() => handleSelect('canada')}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white group-hover:text-amber-400">Canada Coverage</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">13 Provinces & Municipal Portals</p>
                </div>

                <div 
                  onClick={() => handleSelect('directory')}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white group-hover:text-amber-400">Business Directory</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Verified Canadian Contractors</p>
                </div>
              </div>
            </div>
          )}

          {/* If Query Active: Display Categorized Results */}
          {cleanQuery && (
            <>
              {totalResults === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 mx-auto flex items-center justify-center text-slate-500">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="text-base font-bold text-white">No results matching "{query}"</div>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Try searching for "spray foam", "fire rated", "soundproofing", "Toronto", or "building science".
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* Matching Services */}
                  {matchingServices.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Insulation Services ({matchingServices.length})</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {matchingServices.map(srv => (
                          <button
                            key={srv.id}
                            onClick={() => handleSelect('service-detail', srv.slug)}
                            className="w-full text-left p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850/80 transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                                {getServiceIcon(srv.id)}
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                                  {srv.title}
                                </div>
                                <div className="text-xs text-slate-400 line-clamp-1">
                                  {srv.shortDesc}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span>View Specs</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Articles & Guides */}
                  {matchingArticles.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Building Science Guides & Articles ({matchingArticles.length})</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {matchingArticles.map(art => (
                          <button
                            key={art.id}
                            onClick={() => handleSelect('article-detail', art.slug)}
                            className="w-full text-left p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850/80 transition-all flex items-center justify-between group"
                          >
                            <div className="space-y-1 pr-4">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                                  {art.category}
                                </span>
                                <span className="text-[11px] text-slate-400">{art.readTime}</span>
                              </div>
                              <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                                {art.title}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-1">
                                {art.summary || art.excerpt}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Directory Businesses */}
                  {matchingBusinesses.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>Verified Directory Businesses ({matchingBusinesses.length})</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {matchingBusinesses.map(biz => (
                          <button
                            key={biz.id}
                            onClick={() => handleSelect('directory')}
                            className="text-left p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850/80 transition-all space-y-1.5 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-800">
                                {biz.provinceCode} • {biz.city}
                              </span>
                              {biz.isVerified && (
                                <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                                  <ShieldCheck className="w-3 h-3" /> Verified
                                </span>
                              )}
                            </div>
                            <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {biz.name}
                            </div>
                            <div className="text-xs text-slate-400 line-clamp-1">
                              {biz.category}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Cities */}
                  {matchingCities.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Canadian Cities & Municipalities ({matchingCities.length})</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {matchingCities.map(city => (
                          <button
                            key={city.id}
                            onClick={() => handleSelect('city-detail', city.slug)}
                            className="text-left p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-yellow-500/50 hover:bg-slate-850/80 transition-all flex items-center justify-between group"
                          >
                            <div>
                              <div className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                                {city.name}, {city.provinceCode}
                              </div>
                              <div className="text-xs text-slate-400">
                                Pop. {city.population.toLocaleString()} • {city.climateZone}
                              </div>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800">
                              {city.partnershipStatus}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}
            </>
          )}

        </div>

        {/* Footer info in modal */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-slate-300">Click to Open</span>
          </div>
          <span>SprayInsulations.ca Global Index</span>
        </div>

      </div>

    </div>
  );
};
