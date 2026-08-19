import React from 'react';
import { 
  MapPin, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Building2, 
  Sparkles, 
  Users, 
  Award,
  AlertCircle 
} from 'lucide-react';
import { ViewMode, CityData, DirectoryBusiness } from '../types';
import { INSULATION_SERVICES, INITIAL_CITIES, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface CityDetailViewProps {
  citySlug?: string;
  onNavigate: (view: ViewMode, paramId?: string) => void;
  cities: CityData[];
  directoryBusinesses: DirectoryBusiness[];
  onOpenGetHelp: () => void;
}

export const CityDetailView: React.FC<CityDetailViewProps> = ({
  citySlug,
  onNavigate,
  cities,
  directoryBusinesses,
  onOpenGetHelp
}) => {
  const city = cities.find(c => c.slug === citySlug) || cities[0];
  const localBusinesses = directoryBusinesses.filter(
    b => b.city.toLowerCase() === city.name.toLowerCase() || b.provinceCode === city.provinceCode
  );

  // Partnership calculation for this city:
  const cityAnnualFee = Math.max(10, Math.round((city.population / 100000) * 10));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('canada')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Canada & Cities Overview</span>
        </button>
      </div>

      {/* City Hero */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-amber-400 border border-slate-700">
                {city.provinceCode}
              </span>
              <span className="text-xs text-slate-400">
                {city.provinceName} • Climate {city.climateZone}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              {city.name} Insulation Resources
            </h1>
          </div>

          {/* Availability Badge */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Market Exclusivity Status:</div>
              <div className="text-xs font-bold text-amber-400">{city.partnershipStatus}</div>
            </div>
            <span className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border ${
              city.partnershipStatus === 'AVAILABLE'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : city.partnershipStatus === 'PENDING'
                ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
            }`}>
              {city.partnershipStatus}
            </span>
          </div>
        </div>

        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Welcome to the {city.name} insulation portal. Connect with high-performance building envelope information, local climate considerations, and verified insulation contractors serving the {city.name} and {city.provinceName} metropolitan areas.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={onOpenGetHelp}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all"
          >
            Get Insulation Help in {city.name}
          </button>

          <button
            onClick={() => onNavigate('city-partnerships')}
            className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Apply for {city.name} City Partnership</span>
          </button>
        </div>
      </div>

      {/* Market Characteristics & Common Needs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Market Highlights */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-xl">
            <Building2 className="w-5 h-5" />
            <span>{city.name} Building Market Overview</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            {city.marketHighlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Insulation Needs */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-display font-bold text-xl">
            <Sparkles className="w-5 h-5" />
            <span>Frequent Local Insulation Needs</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            {city.commonInsulationNeeds.map((need, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{need}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Local Verified Businesses & Contractors */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>Verified Businesses & Contractors ({city.name} & {city.provinceCode})</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Verified Canadian building envelope and insulation specialists.
            </p>
          </div>

          <button
            onClick={() => onNavigate('directory')}
            className="text-xs font-bold text-amber-400 hover:underline"
          >
            View Full Canada Directory →
          </button>
        </div>

        {localBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localBusinesses.map((biz) => (
              <div
                key={biz.id}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                    {biz.category}
                  </span>
                  {biz.isVerified && (
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-display">
                  {biz.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {biz.description}
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>{biz.city}, {biz.provinceCode}</span>
                  {biz.website && (
                    <a href={biz.website} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                      Visit Profile
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-base font-bold text-white">Local Directory Onboarding</h3>
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              Verified local contractors for {city.name} are currently being onboarded. If you operate an insulation or construction business in {city.name}, apply for membership or list your business for $10/year.
            </p>
            <button
              onClick={() => onNavigate('membership')}
              className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30 transition-colors"
            >
              List Your {city.name} Business ($10/Year)
            </button>
          </div>
        )}
      </div>

      {/* B2B Exclusive City Partnership Box for this specific city */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase">
              <Award className="w-3.5 h-3.5" />
              B2B Market Opportunity
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Claim Exclusive City Partnership for {city.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Secure the sole exclusive featured partnership for the {city.name} market territory. Position your company directly on the {city.name} portal, receive regional inquiry forwarding, and build authoritative industry brand visibility.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center shrink-0 min-w-[200px]">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Formula Calculated Fee:</div>
            <div className="text-3xl font-black text-amber-400 font-display mt-0.5">
              ${cityAnnualFee} <span className="text-xs text-slate-400 font-normal">CAD / yr</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 font-mono">
              ({city.population.toLocaleString()} pop ÷ 100k × $10)
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Current status: <strong className="text-amber-400">{city.partnershipStatus}</strong> • Direct inquiries to <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`} className="text-amber-400 underline">{PRIMARY_CONTACT_EMAIL}</a>
          </div>

          <button
            onClick={() => onNavigate('city-partnerships')}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Apply for {city.name} Exclusivity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
