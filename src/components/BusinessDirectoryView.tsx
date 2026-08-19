import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Building, 
  Home, 
  Factory,
  Plus
} from 'lucide-react';
import { DirectoryBusiness, ViewMode } from '../types';
import { PROVINCES_DATA, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface BusinessDirectoryViewProps {
  businesses: DirectoryBusiness[];
  onNavigate: (view: ViewMode) => void;
}

export const BusinessDirectoryView: React.FC<BusinessDirectoryViewProps> = ({ businesses, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sectorFilter, setSectorFilter] = useState<'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'INDUSTRIAL'>('ALL');

  const categories = [
    'ALL',
    'Spray Foam Contractor',
    'Insulation Contractor',
    'General Contractor',
    'Builder',
    'Renovation Company',
    'Manufacturer / Supplier',
    'Architect / Engineer'
  ];

  const filteredBusinesses = businesses.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProvince = selectedProvince === 'ALL' || b.provinceCode === selectedProvince;
    const matchesCategory = selectedCategory === 'ALL' || b.category === selectedCategory;

    let matchesSector = true;
    if (sectorFilter === 'RESIDENTIAL') matchesSector = b.servesResidential;
    if (sectorFilter === 'COMMERCIAL') matchesSector = b.servesCommercial;
    if (sectorFilter === 'INDUSTRIAL') matchesSector = b.servesIndustrial;

    return matchesSearch && matchesProvince && matchesCategory && matchesSector;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          Canadian Industry Network
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          Canadian Insulation Business Directory
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Search qualified insulation contractors, spray foam applicators, general contractors, and building envelope specialists across Canada.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('membership')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>List Your Business for $10/Year</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Keyword Search */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by company name, city, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Province Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
            >
              <option value="ALL">All Canadian Provinces</option>
              {PROVINCES_DATA.map(p => (
                <option key={p.code} value={p.code}>{p.name} ({p.code})</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat === 'ALL' ? 'All Industry Categories' : cat}</option>
              ))}
            </select>
          </div>

          {/* Sector Buttons */}
          <div className="md:col-span-2 flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
            <button
              onClick={() => setSectorFilter('ALL')}
              className={`flex-1 py-1.5 rounded-lg text-center font-medium transition-all ${
                sectorFilter === 'ALL' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSectorFilter('RESIDENTIAL')}
              className={`flex-1 py-1.5 rounded-lg text-center font-medium transition-all ${
                sectorFilter === 'RESIDENTIAL' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Res
            </button>
            <button
              onClick={() => setSectorFilter('COMMERCIAL')}
              className={`flex-1 py-1.5 rounded-lg text-center font-medium transition-all ${
                sectorFilter === 'COMMERCIAL' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Comm
            </button>
          </div>

        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          <span>Showing <strong>{filteredBusinesses.length}</strong> verified industry listings</span>
          <span className="text-[11px] text-slate-400">Authentic Canadian businesses only</span>
        </div>
      </div>

      {/* Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBusinesses.map((biz) => (
          <div
            key={biz.id}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-5 transition-all shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-950 text-amber-400 border border-slate-800">
                  {biz.category}
                </span>

                <div className="flex items-center gap-2">
                  {biz.isVerified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                  {biz.isMember && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <Award className="w-3.5 h-3.5" />
                      Member
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                  {biz.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{biz.city}, {biz.provinceCode} • Active since {biz.joinedYear}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {biz.description}
              </p>

              {/* Sectors Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {biz.servesResidential && (
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800 flex items-center gap-1">
                    <Home className="w-3 h-3 text-amber-400" /> Residential
                  </span>
                )}
                {biz.servesCommercial && (
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800 flex items-center gap-1">
                    <Building className="w-3 h-3 text-indigo-400" /> Commercial
                  </span>
                )}
                {biz.servesIndustrial && (
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800 flex items-center gap-1">
                    <Factory className="w-3 h-3 text-emerald-400" /> Industrial
                  </span>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400">Direct Inquiries: <span className="text-slate-300">{biz.city} Service Area</span></span>
              {biz.website ? (
                <a
                  href={biz.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline"
                >
                  <span>Company Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-slate-400 italic">Verified Platform Listing</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Directory Onboarding Banner */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white font-display">
            Operating a Canadian Insulation or Construction Company?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Get your company verified and listed in Canada's nationwide industry directory for just <strong>$10 CAD / year</strong>.
          </p>
        </div>

        <button
          onClick={() => onNavigate('membership')}
          className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 transition-all"
        >
          JOIN THE DIRECTORY ($10/YR)
        </button>
      </div>

    </div>
  );
};
