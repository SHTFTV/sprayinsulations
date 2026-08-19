import React from 'react';
import { 
  MapPin, 
  Building2, 
  ThermometerSnowflake, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Phone, 
  Calculator, 
  AlertCircle,
  Layers,
  Compass
} from 'lucide-react';
import { PROVINCES_DATA, INITIAL_CITIES, INITIAL_ARTICLES } from '../data/initialData';
import { CANADIAN_CONTRACTORS } from '../data/contractorsData';
import { CANADIAN_REBATE_PROGRAMS } from '../data/costGuideData';
import { ProvinceData, ViewMode } from '../types';

interface ProvinceDetailViewProps {
  provinceSlugOrCode: string;
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const ProvinceDetailView: React.FC<ProvinceDetailViewProps> = ({
  provinceSlugOrCode,
  onNavigate,
  onOpenGetHelp
}) => {
  const norm = provinceSlugOrCode.toLowerCase().trim();
  const province: ProvinceData = PROVINCES_DATA.find(
    p => (p.slug && p.slug.toLowerCase() === norm) || 
         p.code.toLowerCase() === norm || 
         p.name.toLowerCase().replace(/\s+/g, '-') === norm
  ) || PROVINCES_DATA[0];

  const localContractors = CANADIAN_CONTRACTORS.filter(c => c.provinceCode === province.code);
  const provincialRebate = CANADIAN_REBATE_PROGRAMS.find(r => r.provinceCode === province.code);
  const relevantArticles = INITIAL_ARTICLES.filter(a => 
    a.provinceCode === province.code || 
    a.tags.some(t => t.toLowerCase().includes(province.name.toLowerCase()) || t.toLowerCase().includes(province.code.toLowerCase()))
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Breadcrumb & Navigation Top Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <button
            onClick={() => onNavigate('provinces-hub')}
            className="text-slate-400 hover:text-white inline-flex items-center gap-1.5 font-medium transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Canadian Provinces
          </button>
          <div className="text-slate-400">
            Canada Hub / <span className="text-amber-400 font-bold">{province.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              {province.code} • Climate & Insulation Hub
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              Capital: {province.capital}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              Population: {(province.population / 1000000).toFixed(1)}M
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Insulation Services & Building Science in {province.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            {province.overview}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('estimator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-amber-500/10 text-sm"
            >
              <Calculator className="w-4 h-4" />
              Estimate a Project in {province.name}
            </button>
            <button
              onClick={() => onNavigate('contractors')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition text-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              View {province.code} Verified Contractors ({localContractors.length})
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        
        {/* Building Code & Climate Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Energy Code Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              Building Code Reference
            </div>
            <h2 className="text-lg font-bold text-white">
              {province.buildingCodeReference}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {province.energyCodeNotes || 'Complies with National Building Code (NBC Section 9.36 / NECB) energy performance standards for residential and commercial building envelopes.'}
            </p>
          </div>

          {/* Climate & Degree Days */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <ThermometerSnowflake className="w-4 h-4" />
              Climate Zones & Degree Days
            </div>
            <h2 className="text-lg font-bold text-white">
              {province.degreeDaysRange || '3,500 – 6,500 HDD (<18°C)'}
            </h2>
            <div className="text-xs text-slate-300 space-y-1.5">
              <div><strong>Applicable Climate Zones:</strong></div>
              <div className="flex flex-wrap gap-1.5">
                {province.climateZones.map((z, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 text-[11px]">
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Moisture & Vapour Dynamics */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              Moisture & Vapour Management
            </div>
            <h2 className="text-lg font-bold text-white">
              Vapour Retarder & Air Barrier Strategy
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {province.moistureAndVapourNotes || 'CAN/ULC S705.1 closed-cell spray foam eliminates interior convective air leakage and prevents moisture vapor condensation inside exterior wall assemblies.'}
            </p>
          </div>

        </div>

        {/* Provincial Rebates Section */}
        {province.rebatePrograms && province.rebatePrograms.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  Provincial Energy Efficiency Grants
                </div>
                <h2 className="text-2xl font-extrabold text-white">
                  Available Insulation Rebates in {province.name}
                </h2>
              </div>
              <button
                onClick={onOpenGetHelp}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs border border-slate-700 transition"
              >
                Rebate Application Support
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {province.rebatePrograms.map((rebate, idx) => (
                <div key={idx} className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-white text-sm">{rebate.name}</h3>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs">{rebate.maxGrant}</span>
                  </div>
                  <div className="text-xs text-amber-400 font-semibold">{rebate.authority}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{rebate.description}</p>
                  {rebate.url && (
                    <a
                      href={rebate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 pt-1"
                    >
                      Official Program Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Local Verified Contractors */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verified Local Applicators
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Insulation Professionals Serving {province.name}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('contractors')}
              className="text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1"
            >
              Browse Full Canada Directory <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {localContractors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {localContractors.map(c => (
                <div key={c.id} className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-white text-base">{c.companyName}</h3>
                      {c.isVerified && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {c.city}, {c.provinceCode} • Serving: {c.serviceAreas.join(', ')}
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 mb-3">{c.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {c.specializations.map((spec, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-300 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-amber-400" /> {c.phone}
                    </span>
                    <button
                      onClick={onOpenGetHelp}
                      className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-slate-400 bg-slate-950 p-6 rounded-xl border border-slate-800">
              <p className="mb-3">We are currently onboarding verified contractors in {province.name}.</p>
              <button
                onClick={onOpenGetHelp}
                className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
              >
                Request Direct Project Bid
              </button>
            </div>
          )}
        </div>

        {/* Major Cities Hub */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <h2 className="text-xl font-extrabold text-white mb-2">
            Major Municipalities in {province.name}
          </h2>
          <p className="text-xs text-slate-400 mb-6">
            Explore building insulation services across major metropolitan areas and regional districts:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {province.majorCities.map((city, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate('estimator')}
                className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left transition flex items-center justify-between group"
              >
                <span className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition">{city}</span>
                <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 transition" />
              </button>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};
