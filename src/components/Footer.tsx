import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  Flame, 
  Layers, 
  Volume2, 
  Hammer, 
  Building2, 
  Briefcase, 
  PenTool, 
  TrendingUp, 
  Award, 
  Settings
} from 'lucide-react';
import { ViewMode } from '../types';
import { INSULATION_SERVICES, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface FooterProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30">
                <ShieldCheck className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                SprayInsulations<span className="text-amber-400">.ca</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Canada’s insulation industry platform connecting property owners, general contractors, and builders with high-performance spray foam, fire-rated, fiberglass, and acoustic building envelope solutions across all 13 provinces and territories.
            </p>

            {/* Brand Relationship Architecture */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-2 text-xs">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>SprayInsulations.ca Brand Architecture</span>
              </div>
              <div className="text-slate-400 pl-3 border-l border-slate-800 space-y-1">
                <p>A Division of <strong className="text-slate-200">Builders Haus</strong> • Powered by <strong className="text-amber-400">Industry Army Marketing</strong></p>
                <p className="flex items-center gap-1.5 text-slate-300 pt-0.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Primary Inquiries:</span>
                  <a 
                    href="mailto:build@buildershuas.com" 
                    className="text-amber-400 hover:text-amber-300 font-medium hover:underline"
                  >
                    build@buildershuas.com
                  </a>
                </p>
              </div>
            </div>

            {/* Direct Official Contact */}
            <div className="pt-1 flex items-center gap-2 text-sm text-slate-300">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Primary Inquiries:</span>
              <a 
                href="mailto:build@buildershuas.com"
                className="text-amber-400 hover:text-amber-300 font-medium hover:underline"
              >
                build@buildershuas.com
              </a>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              Official inquiries handled exclusively via email & secure portal submissions.
            </p>
          </div>

          {/* Col 2: Consumer Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-amber-500"></span>
              Insulation Services
            </h3>
            <ul className="space-y-2 text-sm">
              {INSULATION_SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="hover:text-amber-400 transition-colors text-left text-xs text-slate-300 line-clamp-1"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-1.5 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors text-left flex items-center gap-1"
                >
                  <span>Explore All 24 Services →</span>
                </button>
                <button
                  onClick={() => onNavigate('provinces-hub')}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Canada Provinces Hub</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tools & Calculators */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-cyan-500"></span>
              Tools & Pricing
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('compare')}
                  className="hover:text-amber-400 transition-colors text-left font-medium block"
                >
                  Compare Insulation Types
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="hover:text-amber-400 transition-colors text-left font-medium block"
                >
                  Project Estimator 2.0
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('advisor')}
                  className="hover:text-amber-400 transition-colors text-left font-medium block"
                >
                  What Insulation Do I Need?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cost-guide')}
                  className="hover:text-amber-400 transition-colors text-left font-medium block"
                >
                  Canadian Cost Guide & Rebates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contractors')}
                  className="hover:text-emerald-400 transition-colors text-left font-medium text-emerald-400 block"
                >
                  Find a Verified Contractor →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources-hub')}
                  className="hover:text-amber-400 transition-colors text-left font-medium block"
                >
                  Building Science & Codes Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Industry Division / B2B */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                <Briefcase className="w-3 h-3 text-amber-400" />
                Industry Division
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                B2B Opportunities
              </h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  id="footer-guest-post-link"
                  onClick={() => onNavigate('guest-post')}
                  className="group flex flex-col text-left hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-1">
                    <PenTool className="w-3.5 h-3.5 text-amber-500" />
                    Guest Post With Us
                  </span>
                  <span className="text-[11px] text-amber-400/90 font-mono">$10 CAD per submission</span>
                </button>
              </li>

              <li>
                <button
                  id="footer-market-link"
                  onClick={() => onNavigate('market-with-us')}
                  className="group flex flex-col text-left hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                    Market With Us
                  </span>
                  <span className="text-[11px] text-slate-400">Industry advertising & exposure</span>
                </button>
              </li>

              <li>
                <button
                  id="footer-membership-link"
                  onClick={() => onNavigate('membership')}
                  className="group flex flex-col text-left hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    Join for $10 / Year
                  </span>
                  <span className="text-[11px] text-amber-400/90 font-mono">$10 CAD annual membership</span>
                </button>
              </li>

              <li>
                <button
                  id="footer-city-partnerships-link"
                  onClick={() => onNavigate('city-partnerships')}
                  className="group flex flex-col text-left hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                    Exclusive City Partnerships
                  </span>
                  <span className="text-[11px] text-amber-400/90 font-mono">$10 per 100k population</span>
                </button>
              </li>

              <li className="pt-1">
                <button
                  id="footer-directory-link"
                  onClick={() => onNavigate('contractors')}
                  className="text-xs text-slate-300 hover:text-amber-400 font-medium"
                >
                  Contractor Directory →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Platform & Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Platform & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  About SprayInsulations.ca
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources-hub')} className="hover:text-amber-400 transition-colors">
                  Building Science Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors">
                  Contact Inquiries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  Editorial Guidelines & Disclaimers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  Privacy Policy & Terms
                </button>
              </li>
              <li className="pt-3">
                <button 
                  id="footer-admin-link"
                  onClick={() => onNavigate('admin')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400 hover:text-amber-400 hover:border-slate-700"
                >
                  <Settings className="w-3 h-3" />
                  <span>Platform Manager</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Corporate Division & Legal Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-300 font-medium">
              A Division of <span className="text-white font-semibold">Builders Haus</span> • Powered by <span className="text-amber-400 font-semibold">Industry Army Marketing</span>
            </p>
            <p>© {new Date().getFullYear()} SprayInsulations.ca. All rights reserved. Canada-wide insulation industry resource.</p>
            <p className="text-slate-400 max-w-2xl">
              Disclaimer: Building code requirements, fire resistance ratings, and thermal specifications must be verified against local provincial building codes (NBC / OBC / BCBC / CCQ) and certified tested assemblies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-slate-400 whitespace-nowrap">
            <button
              onClick={() => onNavigate('membership')}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-amber-400 hover:border-amber-500/30 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-500" />
              <span>Industry Division</span>
            </button>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span>Primary Inquiries:</span>
              <a href="mailto:build@buildershuas.com" className="text-amber-400 hover:text-amber-300 font-medium hover:underline">
                build@buildershuas.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
