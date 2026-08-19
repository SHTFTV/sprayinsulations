import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  Globe, 
  Award, 
  Briefcase, 
  Star, 
  ExternalLink,
  PlusCircle,
  Building2,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CANADIAN_CONTRACTORS } from '../data/contractorsData';
import { PROVINCES_DATA } from '../data/initialData';
import { ContractorProfile, ViewMode } from '../types';

interface ContractorsDirectoryViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const ContractorsDirectoryView: React.FC<ContractorsDirectoryViewProps> = ({
  onNavigate,
  onOpenGetHelp
}) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedContractor, setSelectedContractor] = useState<ContractorProfile | null>(null);

  const specialties = [
    { id: 'all', label: 'All Specializations' },
    { id: 'Closed-Cell Spray Foam', label: 'Closed-Cell Spray Foam' },
    { id: 'Open-Cell Spray Foam', label: 'Open-Cell Soundproofing' },
    { id: 'Attic Insulation & Air Sealing', label: 'Attic Upgrades (R-60)' },
    { id: 'Commercial & Industrial', label: 'Commercial Envelopes' },
    { id: 'Insulation Removal', label: 'Vacuum Removal & Remediation' }
  ];

  const filteredContractors = CANADIAN_CONTRACTORS.filter(c => {
    if (selectedProvince !== 'all' && c.provinceCode !== selectedProvince) return false;
    if (selectedSpecialty !== 'all' && !c.specializations.includes(selectedSpecialty)) return false;
    if (verifiedOnly && !c.isVerified) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = c.companyName.toLowerCase().includes(q);
      const matchCity = c.city.toLowerCase().includes(q);
      const matchServices = c.services.some(s => s.toLowerCase().includes(q));
      if (!matchName && !matchCity && !matchServices) return false;
    }
    return true;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-amber-400" />
            Verified Professional Network
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Find an Insulation Professional in Canada
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            Connect with verified Canadian insulation contractors, certified spray foam applicators (CUFCA / Caliber QA), and building envelope specialists equipped with commercial-grade rigs.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('join')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-amber-500/10 text-sm"
            >
              <PlusCircle className="w-4 h-4" />
              Contractors: Join Directory ($10/yr)
            </button>
            <button
              onClick={() => onNavigate('market-with-us')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition text-sm"
            >
              <Briefcase className="w-4 h-4 text-amber-400" />
              Featured City Partnerships
            </button>
          </div>
        </div>
      </section>

      {/* Directory Content Workspace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Search and Filters Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8 shadow-md space-y-4">
          
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-grow w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search contractor name, city (e.g. Calgary, Toronto, Vancouver), or service..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 placeholder-slate-500"
              />
            </div>

            {/* Province Filter */}
            <div className="w-full md:w-56">
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Canadian Provinces</option>
                {PROVINCES_DATA.map(p => (
                  <option key={p.code} value={p.code}>{p.name} ({p.code})</option>
                ))}
              </select>
            </div>

            {/* Verification Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-200">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 focus:ring-0 accent-amber-500"
              />
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Only
            </label>
          </div>

          {/* Specialty Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-800/80">
            {specialties.map(spec => (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialty(spec.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                  selectedSpecialty === spec.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {spec.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <div>
            Showing <strong className="text-amber-400">{filteredContractors.length}</strong> contractor profiles
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Verification criteria: Active WCB, $2M-$5M Liability, CUFCA / Caliber QA Certifications
          </div>
        </div>

        {/* Contractor Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredContractors.map(c => (
            <div
              key={c.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition shadow-lg relative group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition leading-snug">
                      {c.companyName}
                    </h3>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {c.city}, {c.provinceCode}
                    </div>
                  </div>
                  {c.isVerified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {c.description}
                </p>

                {/* Verification Metadata Box */}
                {c.verificationDetails && (
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 mb-4 space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Certification:</span>
                      <span className="text-slate-200 font-semibold">{c.verificationDetails.cufcaCertificationNumber || 'Caliber QA Verified'}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Liability Insurance:</span>
                      <span className="text-emerald-400 font-semibold">{c.verificationDetails.insurancePolicyAmount}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>WorkSafe / WCB:</span>
                      <span className="text-emerald-400 font-semibold">Active In Good Standing</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Experience:</span>
                      <span className="text-slate-200 font-semibold">{c.verificationDetails.yearsInBusiness} Years in Business</span>
                    </div>
                  </div>
                )}

                {/* Specialties Badges */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {c.specializations.map((spec, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div className="text-[11px] text-slate-400 mb-4">
                  <strong className="text-slate-300">Service Coverage:</strong> {c.serviceAreas.join(', ')}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <div className="text-xs text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{c.phone}</span>
                </div>
                <button
                  onClick={onOpenGetHelp}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition shadow-md shadow-amber-500/10"
                >
                  Request Quote
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* B2B Claim / Join Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              For Canadian Insulation Businesses
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Are You a Professional Insulation Contractor?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Join Canada’s premier insulation directory for just $10/year, receive homeowner and commercial leads in your service radius, or secure an exclusive City Sponsorship for your territory.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigate('join')}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-xs whitespace-nowrap shadow-lg shadow-amber-500/20"
            >
              List My Business ($10/yr)
            </button>
            <button
              onClick={() => onNavigate('market-with-us')}
              className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition text-xs whitespace-nowrap"
            >
              View City Sponsorships
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
