import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  ThermometerSnowflake, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Calculator, 
  Compass, 
  Layers,
  ShieldCheck
} from 'lucide-react';
import { PROVINCES_DATA } from '../data/initialData';
import { ProvinceData, ViewMode } from '../types';

interface CanadaProvincesHubViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const CanadaProvincesHubView: React.FC<CanadaProvincesHubViewProps> = ({
  onNavigate,
  onOpenGetHelp
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProvinces = PROVINCES_DATA.filter(p => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.majorCities.some(city => city.toLowerCase().includes(q)) ||
      p.buildingCodeReference.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            Canada National Insulation Directory & Climate Hub
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Canada Province & Territorial Insulation Hub
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            Explore climate zone insulation requirements, provincial building codes, heating-degree days (HDD), utility rebate programs, and verified local contractors across all 13 Canadian provinces and territories.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('estimator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-amber-500/10 text-sm"
            >
              <Calculator className="w-4 h-4" />
              Province-Specific Estimator 2.0
            </button>
            <button
              onClick={() => onNavigate('contractors')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition text-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Find Verified Contractors
            </button>
          </div>
        </div>
      </section>

      {/* Main Province Grid Workspace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Search Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-8 shadow-sm max-w-xl">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search province, territory, city (e.g. Edmonton, Surrey), or code..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 placeholder-slate-500"
            />
          </div>
        </div>

        {/* Province Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProvinces.map(prov => (
            <div
              key={prov.code}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition shadow-lg relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-extrabold text-xs">
                    {prov.code}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Pop. {(prov.population / 1000000).toFixed(1)}M
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition mb-2">
                  {prov.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {prov.overview}
                </p>

                {/* Metadata details */}
                <div className="space-y-2 text-xs bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 mb-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-slate-400">Building Code:</span>
                    <span className="text-slate-200 font-semibold text-right text-[11px]">{prov.buildingCodeReference}</span>
                  </div>
                  {prov.degreeDaysRange && (
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-400">Heating Days:</span>
                      <span className="text-amber-300 font-semibold text-[11px]">{prov.degreeDaysRange}</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-slate-400">Climate Zones:</span>
                    <span className="text-slate-300 text-[11px] text-right">{prov.climateZones.join(', ')}</span>
                  </div>
                </div>

                {/* Major Cities Pills */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Major Cities Served
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {prov.majorCities.slice(0, 4).map((city, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                        {city}
                      </span>
                    ))}
                    {prov.majorCities.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 text-[10px]">
                        +{prov.majorCities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('province-detail', prov.slug || prov.code.toLowerCase())}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                >
                  Explore {prov.name} Hub <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition"
                >
                  Estimate {prov.code}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Canada Building Science Callout */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              National Building Code (NBC Section 9.36) Compliance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every Canadian province establishes prescriptive minimum R-values and effective envelope thermal break standards. Closed-cell spray foam (CAN/ULC S705.1) complies as an air barrier and vapor barrier across all Canadian climate zones.
            </p>
          </div>
          <button
            onClick={onOpenGetHelp}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-xs whitespace-nowrap shadow-lg shadow-amber-500/20"
          >
            Speak with an Envelope Specialist
          </button>
        </div>

      </section>

    </div>
  );
};
