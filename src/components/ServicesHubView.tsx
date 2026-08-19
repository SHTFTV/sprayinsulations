import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Flame, 
  Layers, 
  Volume2, 
  Hammer, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Search,
  Home,
  Thermometer,
  Wind,
  Trash2,
  RefreshCw,
  TrendingUp,
  HelpCircle,
  ChevronRight,
  Filter
} from 'lucide-react';
import { ViewMode, InsulationService } from '../types';
import { ALL_INSULATION_SERVICES, SERVICE_CATEGORIES, ServiceCategoryGroup } from '../data/services';
import { InsulationEstimator } from './InsulationEstimator';

interface ServicesHubViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const ServicesHubView: React.FC<ServicesHubViewProps> = ({ onNavigate, onOpenGetHelp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getServiceIcon = (service: InsulationService) => {
    switch (service.slug) {
      case 'spray-foam':
      case 'closed-cell-spray-foam':
      case 'open-cell-spray-foam':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'fire-rated':
        return <Flame className="w-5 h-5 text-orange-500" />;
      case 'fiberglass':
      case 'fiberglass-batt':
      case 'blown-in-fiberglass':
      case 'cellulose':
      case 'blown-in':
        return <Layers className="w-5 h-5 text-yellow-400" />;
      case 'acoustic':
        return <Volume2 className="w-5 h-5 text-cyan-400" />;
      case 'mineral-wool':
      case 'hi-bar':
      case 'rigid-board':
      case 'batt-blanket':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'thermal':
        return <Thermometer className="w-5 h-5 text-rose-400" />;
      case 'air-sealing':
        return <Wind className="w-5 h-5 text-sky-400" />;
      case 'attic-insulation':
      case 'crawlspace-insulation':
      case 'basement-insulation':
      case 'foundation-insulation':
      case 'wall-insulation':
        return <Home className="w-5 h-5 text-amber-400" />;
      case 'commercial-insulation':
      case 'industrial-insulation':
        return <Building2 className="w-5 h-5 text-indigo-400" />;
      case 'insulation-repairs':
        return <Hammer className="w-5 h-5 text-emerald-400" />;
      case 'insulation-removal':
        return <Trash2 className="w-5 h-5 text-red-400" />;
      case 'insulation-replacement':
        return <RefreshCw className="w-5 h-5 text-blue-400" />;
      case 'insulation-upgrades':
        return <TrendingUp className="w-5 h-5 text-green-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'spray-foam': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'fiberglass-cellulose': return <Layers className="w-5 h-5 text-yellow-400" />;
      case 'mineral-rigid': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'specialty': return <Flame className="w-5 h-5 text-orange-400" />;
      case 'building-areas': return <Home className="w-5 h-5 text-sky-400" />;
      case 'commercial': return <Building2 className="w-5 h-5 text-indigo-400" />;
      case 'repair-upgrade': return <Hammer className="w-5 h-5 text-teal-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  // Filtered categories and services
  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return SERVICE_CATEGORIES.map(category => {
      let matchingServices = category.services;

      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }

      if (query) {
        matchingServices = matchingServices.filter(s => 
          s.title.toLowerCase().includes(query) ||
          s.shortDesc.toLowerCase().includes(query) ||
          s.heroTagline.toLowerCase().includes(query) ||
          s.overview.toLowerCase().includes(query) ||
          (s.keyBenefits && s.keyBenefits.some(b => b.toLowerCase().includes(query)))
        );
      }

      if (matchingServices.length === 0) return null;

      return {
        ...category,
        services: matchingServices
      };
    }).filter(Boolean) as ServiceCategoryGroup[];
  }, [selectedCategory, searchQuery]);

  const totalMatchingServices = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.services.length, 0);
  }, [filteredCategories]);

  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Canadian Insulation Services & Technical Assemblies',
    'description': 'Complete Canada-wide directory of residential, commercial, and industrial insulation services, building envelope science, and code compliance standards.',
    'itemListElement': ALL_INSULATION_SERVICES.map((srv, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': srv.title,
      'description': srv.shortDesc,
      'url': `https://sprayinsulations.ca/services/${srv.slug}`
    }))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Schema.org ItemList for Search Engine Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      
      {/* Header & Breadcrumbs */}
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="border-b border-slate-800/80 pb-4">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition-colors">
                Home
              </button>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </li>
            <li className="font-semibold text-amber-400" aria-current="page">
              Insulation Services Directory
            </li>
          </ol>
        </nav>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Canada-Wide Service Architecture & Specifications
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Canadian Insulation Services Hub
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore 24 specialized insulation systems, building envelope science, and code compliance standards across all Canadian climate zones.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-2xl font-black text-amber-400 font-display">24</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Specialized Services</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-2xl font-black text-white font-display">7</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Core Categories</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-2xl font-black text-amber-400 font-display">13</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Provinces & Territories</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-2xl font-black text-white font-display">NBC 9.36</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Code Compliance</div>
          </div>
        </div>
      </div>

      {/* Interactive Category Filter & Search Bar */}
      <div className="space-y-4 bg-slate-900/70 border border-slate-800/80 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by insulation type, building area, or keyword (e.g. spray foam, attic, R-60)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs text-slate-400 shrink-0 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Showing <strong className="text-white">{totalMatchingServices}</strong> of {ALL_INSULATION_SERVICES.length} services</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            All Services ({ALL_INSULATION_SERVICES.length})
          </button>

          {SERVICE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.services.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Structured Category Hierarchies */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <Search className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-xl font-bold text-white">No insulation services matched your search</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try adjusting your search keywords or reset category filters to browse the full Canadian catalog.
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6" id={`category-section-${category.id}`}>
              
              {/* Category Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                        {category.name}
                      </h2>
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                        {category.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-3xl pt-1">
                    {category.description}
                  </p>
                </div>

                <div className="shrink-0 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  {category.services.length} {category.services.length === 1 ? 'Specification' : 'Specifications'}
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((srv) => (
                  <div
                    key={srv.id}
                    id={`services-hub-card-${srv.slug}`}
                    className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 transition-all flex flex-col justify-between group shadow-xl hover:shadow-amber-500/5 space-y-5"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                          {getServiceIcon(srv)}
                        </div>
                        <span className="text-[10px] font-mono text-amber-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                          {srv.categoryName || category.name}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-display line-clamp-2">
                          {srv.title}
                        </h3>
                        <p className="text-xs font-medium text-amber-400/80 mt-1 line-clamp-1">
                          {srv.heroTagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {srv.shortDesc || srv.overview}
                      </p>

                      {/* Key Attributes */}
                      {srv.keyBenefits && srv.keyBenefits.length > 0 && (
                        <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            Key Attributes:
                          </div>
                          <div className="space-y-1 text-xs text-slate-300">
                            {srv.keyBenefits.slice(0, 2).map((benefit, i) => (
                              <div key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span className="line-clamp-1 text-[11px]">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onNavigate('service-detail', srv.slug)}
                        className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-amber-500 text-amber-400 hover:text-slate-950 font-bold text-xs border border-slate-800 hover:border-amber-500 transition-all flex items-center gap-1.5"
                      >
                        <span>Full Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={onOpenGetHelp}
                        className="text-[11px] text-slate-400 hover:text-white font-medium underline underline-offset-2"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Interactive Insulation Project Estimator */}
      <InsulationEstimator
        onOpenGetHelp={onOpenGetHelp}
        onNavigate={onNavigate}
      />

      {/* Commercial & Technical Consultation Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              Commercial, Industrial & Engineering Inquiries
            </h3>
            <p className="text-xs text-slate-400">
              Technical assemblies, NECB compliance, CAN/ULC test verification, and project takeoffs
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-300 max-w-4xl">
          Whether designing steel-stud continuous exterior insulation, fire-rated shaft wall assemblies, cold storage polyurethane envelopes, or district heating process piping insulation, our technical network connects developers, architects, and contractors with certified Canadian applicators.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={onOpenGetHelp}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
          >
            Submit Technical Project RFP
          </button>
          <button
            onClick={() => onNavigate('canada')}
            className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold transition-all"
          >
            View Provincial Climate Standards
          </button>
        </div>
      </div>

    </div>
  );
};
