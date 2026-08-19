import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Layers, 
  Volume2, 
  Hammer, 
  Building2, 
  MapPin, 
  FileText, 
  ChevronRight,
  CheckCircle2,
  Thermometer,
  Award,
  Users,
  Compass
} from 'lucide-react';
import { ViewMode, Testimonial } from '../types';
import { INSULATION_SERVICES, PROVINCES_DATA, INITIAL_CITIES, INITIAL_ARTICLES, PRIMARY_CONTACT_EMAIL } from '../data/initialData';
import { ClimateZoneCalculator } from './ClimateZoneCalculator';
import { Testimonials } from './Testimonials';
import { NewsSection } from './NewsSection';
import { InsulationProjectEstimator } from './InsulationProjectEstimator';

interface HomeViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
  testimonials?: Testimonial[];
  onAddTestimonial?: (testimonial: Testimonial) => void;
  cities?: any[];
  articles?: any[];
}

export const HomeView: React.FC<HomeViewProps> = ({ 
  onNavigate, 
  onOpenGetHelp,
  testimonials,
  onAddTestimonial
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'spray-foam': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'fire-rated': return <Flame className="w-6 h-6 text-orange-500" />;
      case 'fiberglass': return <Layers className="w-6 h-6 text-yellow-400" />;
      case 'acoustic': return <Volume2 className="w-6 h-6 text-cyan-400" />;
      case 'repairs': return <Hammer className="w-6 h-6 text-emerald-400" />;
      case 'commercial': return <Building2 className="w-6 h-6 text-indigo-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80">
        {/* Background visual atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-slate-950 pointer-events-none z-0"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Canada's Nationwide Insulation & Building Envelope Resource</span>
              </div>

              {/* Exact Master Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display leading-[1.1]">
                Canada's Insulation Resource for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Better Buildings</span>
              </h1>

              {/* Exact Master Supporting Copy */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                Connect with insulation solutions, information and industry resources for homes, renovations, commercial buildings and construction projects across Canada.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-explore-services-cta"
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>EXPLORE INSULATION SERVICES</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-request-info-cta"
                  onClick={onOpenGetHelp}
                  className="px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-white font-semibold text-base border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>REQUEST INFORMATION</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>10 Provinces + 3 Territories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Building Science Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>B2C & B2B Industry Hub</span>
                </div>
              </div>

            </div>

            {/* Hero Visual Card / Canadian Construction Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Canadian construction and high-performance spray foam insulation installation"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Floating overlay badges */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Engineered for Canadian Extremes</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">NBC 9.36 / NECB</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-tight">
                    Thermal barriers, continuous air sealing, and condensation prevention from coastal Zone 4 to arctic Zone 8.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRIMARY CONSUMER SERVICE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            Consumer & Contractor Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            High-Performance Insulation Solutions
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Explore core insulation systems engineered for Canadian residential retrofits, custom home construction, multi-family party walls, and commercial building envelopes.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSULATION_SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.slug}`}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Service Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/30 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Canadian Standard
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Points */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('service-detail', service.slug)}
                  className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 hover:underline"
                >
                  <span>Learn Applications & Specs</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] text-slate-400">NBC Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE CANADIAN BUILDING SCIENCE / CLIMATE ZONE EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClimateZoneCalculator />
      </section>

      {/* 4. INTERACTIVE INSULATION PROJECT & MATERIAL ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsulationProjectEstimator
          onOpenGetHelp={onOpenGetHelp}
          onNavigate={onNavigate}
        />
      </section>

      {/* 5. CANADA-WIDE COVERAGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              Coast to Coast to Coast
            </div>
            {/* Exact Master Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Insulation Resources Across Canada
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore building codes, climate considerations, and insulation resources for all 10 provinces and 3 territories. Scalable market architecture for verified Canadian contractors and suppliers.
            </p>
          </div>

          {/* 13 Provinces & Territories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {PROVINCES_DATA.map((prov) => (
              <button
                key={prov.code}
                id={`prov-btn-${prov.code}`}
                onClick={() => onNavigate('province-detail', prov.code)}
                className="p-4 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    {prov.code}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {prov.climateZones[0].split(' ')[0]}
                  </span>
                </div>
                <div className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                  {prov.name}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {prov.buildingCodeReference.split('/')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Featured Major Canadian Cities */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Major Metropolitan Insulation Markets
                </h3>
                <p className="text-xs text-slate-400">
                  Select a city to view local building characteristics, climate zones, and partner availability.
                </p>
              </div>
              <button
                onClick={() => onNavigate('canada')}
                className="text-xs font-bold text-amber-400 hover:underline self-start sm:self-auto"
              >
                View Full Canada Directory →
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {INITIAL_CITIES.map((city) => (
                <button
                  key={city.id}
                  id={`city-chip-${city.slug}`}
                  onClick={() => onNavigate('city-detail', city.slug)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/60 hover:border-amber-500/50 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{city.name}, {city.provinceCode}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. EDUCATIONAL RESOURCES / BUILDING SCIENCE HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              Building Science Desk
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Technical Resources & Insulation Education
            </h2>
          </div>
          <button
            onClick={() => onNavigate('resources')}
            className="text-sm font-bold text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>Explore All Articles</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_ARTICLES.slice(0, 3).map((art) => (
            <div
              key={art.id}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                    {art.category}
                  </span>
                  <span className="text-slate-400">{art.readTime}</span>
                </div>

                <h3 
                  onClick={() => onNavigate('article-detail', art.slug)}
                  className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display cursor-pointer"
                >
                  {art.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{art.date}</span>
                <button
                  onClick={() => onNavigate('article-detail', art.slug)}
                  className="font-bold text-amber-400 hover:underline"
                >
                  Read Article →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CANADIAN BUILDING SCIENCE NEWS & INDUSTRY TRENDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsSection 
          maxItems={3}
          title="Canadian Building Science News & Codes"
          subtitle="Stay updated with National Building Code revisions (NBC 9.36), NRCan deep retrofit grants, and next-generation insulation chemistry."
          showFilters={true}
          showSubscribeCTA={true}
        />
      </section>

      {/* 7. TRUST & VERIFIED PROJECT REVIEWS (WITH SCHEMA.ORG REVIEW & AGGREGATERATING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Testimonials
          testimonials={testimonials}
          onAddTestimonial={onAddTestimonial}
          showCategoryFilter={true}
          scriptId="homepage"
        />
      </section>

      {/* 8. CALL TO ACTION / GET STARTED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Ready to Upgrade Your Canadian Building Envelope?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Connect with insulation guidance, local market insights, and industry professionals. Direct inquiries to <span className="text-amber-400 font-semibold">{PRIMARY_CONTACT_EMAIL}</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenGetHelp}
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all text-center"
            >
              GET INSULATION HELP
            </button>
            <button
              onClick={() => onNavigate('directory')}
              className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all text-center"
            >
              Browse Directory
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
