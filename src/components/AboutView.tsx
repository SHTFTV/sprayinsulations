import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Compass, 
  Award, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Mail, 
  Globe 
} from 'lucide-react';
import { ViewMode } from '../types';
import { PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface AboutViewProps {
  onNavigate: (view: ViewMode) => void;
  onOpenGetHelp: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenGetHelp }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          Industry Platform Overview
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          About SprayInsulations.ca
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Canada’s dedicated insulation and building envelope platform connecting property owners, builders, general contractors, and qualified insulation professionals across all 13 provinces and territories.
        </p>
      </div>

      {/* Brand Architecture Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
        <div className="border-b border-slate-800 pb-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
            Corporate Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
            SprayInsulations.ca | A Division of Builders Haus
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            SprayInsulations.ca operates as a specialized vertical industry platform under <strong>Builders Haus</strong>, engineered and scaled with digital growth infrastructure <strong>Powered by Industry Army Marketing</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono text-amber-400 font-bold uppercase">Vertical Focus</div>
            <h3 className="text-lg font-bold text-white font-display">Specialized Domain</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unlike generic contractor directories, SprayInsulations.ca concentrates solely on thermal, acoustic, and fire-resistant building envelope systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono text-amber-400 font-bold uppercase">National Scope</div>
            <h3 className="text-lg font-bold text-white font-display">Canada-Wide Reach</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Covering regional building codes (OBC, BCBC, NBC-AE, CCQ) and diverse Canadian climate zones from maritime regions to extreme northern permafrost areas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono text-amber-400 font-bold uppercase">Transparent B2B</div>
            <h3 className="text-lg font-bold text-white font-display">Accessible Growth</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Providing $10 guest post publishing, $10/yr directory memberships, and formula-based exclusive city partnerships without predatory fees.
            </p>
          </div>
        </div>
      </div>

      {/* Core Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 text-amber-400 font-bold text-xl font-display">
            <Compass className="w-5 h-5" />
            <span>For Canadian Property Owners & Builders</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Navigating building envelope decisions, R-value requirements, and rebate compliance can be complex. We provide unbiased technical education, climate zone thermal targets, and direct channels to request vetted contractor assistance.
          </p>
          <button
            onClick={onOpenGetHelp}
            className="text-xs font-bold text-amber-400 hover:underline inline-flex items-center gap-1 pt-2"
          >
            <span>Request Project Assistance</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 text-cyan-400 font-bold text-xl font-display">
            <Building2 className="w-5 h-5" />
            <span>For Contractors & Industry Professionals</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We provide legitimate market visibility, authoritative educational contribution opportunities, and structured city partnerships to help quality Canadian tradespeople scale their local presence.
          </p>
          <button
            onClick={() => onNavigate('city-partnerships')}
            className="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1 pt-2"
          >
            <span>Explore City Partnerships</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Corporate Inquiries */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-3">
        <h3 className="text-xl font-bold text-white font-display">Official Corporate Inquiries</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          All platform management, technical editorial inquiries, partnership proposals, and contractor support are handled via our central dispatch desk:
        </p>
        <div className="pt-2">
          <a
            href={`mailto:${PRIMARY_CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 font-bold text-sm hover:bg-slate-850 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{PRIMARY_CONTACT_EMAIL}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
