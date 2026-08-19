import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  ChevronRight, 
  Building2 
} from 'lucide-react';
import { ViewMode, CityData } from '../types';
import { PROVINCES_DATA, INITIAL_CITIES } from '../data/initialData';

interface CanadaDirectoryViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  cities: CityData[];
}

export const CanadaDirectoryView: React.FC<CanadaDirectoryViewProps> = ({ onNavigate, cities }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvinceFilter, setSelectedProvinceFilter] = useState('ALL');

  const filteredCities = cities.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.provinceName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = selectedProvinceFilter === 'ALL' || c.provinceCode === selectedProvinceFilter;
    return matchesSearch && matchesProvince;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          Nationwide Coverage
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          Insulation Across Canada
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore regional building codes, climate zones, and insulation resources across all 10 Canadian provinces and 3 northern territories.
        </p>
      </div>

      {/* 13 Provinces & Territories Interactive Selector */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Provinces & Territories (13 Jurisdictions)
          </h2>
          <span className="text-xs text-slate-400">Select any province for building codes</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PROVINCES_DATA.map((prov) => (
            <div
              key={prov.code}
              id={`canada-prov-card-${prov.code}`}
              onClick={() => onNavigate('province-detail', prov.code)}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    {prov.code}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Pop: {(prov.population / 1000000).toFixed(1)}M
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                  {prov.name}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {prov.overview}
                </p>

                <div className="pt-2 text-[11px] font-mono text-slate-300 flex items-center gap-1">
                  <span className="text-amber-400 font-bold">Code:</span>
                  <span className="truncate">{prov.buildingCodeReference.split('/')[0]}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>View Regional Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* City & Municipal Market Directory */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white font-display">
              Municipal & City Market Portals
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select your city to check climate characteristics, local market resources, and partnership availability.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city or province..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none w-full sm:w-56"
              />
            </div>

            <select
              value={selectedProvinceFilter}
              onChange={(e) => setSelectedProvinceFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
            >
              <option value="ALL">All Provinces</option>
              {PROVINCES_DATA.map(p => (
                <option key={p.code} value={p.code}>{p.code} - {p.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCities.map((city) => (
            <div
              key={city.id}
              onClick={() => onNavigate('city-detail', city.slug)}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all hover:bg-slate-900 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{city.provinceName} ({city.provinceCode})</span>
                </div>

                {/* Partnership Status Badge */}
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                  city.partnershipStatus === 'AVAILABLE'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : city.partnershipStatus === 'PENDING'
                    ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                    : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                }`}>
                  {city.partnershipStatus}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                {city.name}
              </h3>

              <div className="mt-2 text-xs text-slate-400 space-y-1">
                <div><strong>Pop. Approx:</strong> {city.population.toLocaleString()}</div>
                <div><strong>Climate:</strong> {city.climateZone}</div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>View City Portal</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Scalable Directory Architecture Note */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <span>*Scalable architecture: More Canadian cities & municipalities are continuously mapped and verified.</span>
          <button
            onClick={() => onNavigate('city-partnerships')}
            className="text-amber-400 font-semibold hover:underline"
          >
            Inquire About Unlisted City Partnership →
          </button>
        </div>
      </div>

    </div>
  );
};
