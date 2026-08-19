import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  Volume2, 
  Sparkles, 
  Hammer, 
  Building2, 
  Layers, 
  MapPin, 
  FileText, 
  Users, 
  HelpCircle,
  Briefcase,
  Search,
  Moon,
  Sun
} from 'lucide-react';
import { ViewMode, AppTheme } from '../types';
import { INSULATION_SERVICES } from '../data/initialData';

interface HeaderProps {
  currentView: ViewMode;
  currentTheme?: AppTheme;
  onToggleTheme?: () => void;
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  currentTheme = 'deep-navy',
  onToggleTheme,
  onNavigate, 
  onOpenGetHelp, 
  onOpenSearch 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Global keyboard shortcut for search: Cmd+K / Ctrl+K / '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'spray-foam': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'fire-rated': return <Flame className="w-4 h-4 text-orange-500" />;
      case 'fiberglass': return <Layers className="w-4 h-4 text-yellow-400" />;
      case 'acoustic': return <Volume2 className="w-4 h-4 text-cyan-400" />;
      case 'repairs': return <Hammer className="w-4 h-4 text-emerald-400" />;
      case 'commercial': return <Building2 className="w-4 h-4 text-indigo-400" />;
      default: return <ShieldCheck className="w-4 h-4 text-amber-400" />;
    }
  };

  const handleNavClick = (view: ViewMode, paramId?: string) => {
    onNavigate(view, paramId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top micro banner */}
      <div className="bg-slate-900 border-b border-slate-800/50 py-1.5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Canada-Wide Platform
            </span>
            <span className="hidden sm:inline text-slate-400">
              A Division of Builders Haus • Powered by Industry Army Marketing
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline">Primary Inquiries: <a href="mailto:build@buildershuas.com" className="text-amber-400 hover:underline">build@buildershuas.com</a></span>
            <button 
              id="header-industry-portal-link"
              onClick={() => handleNavClick('membership')}
              className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-xs"
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-500" />
              <span>Industry Division</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            id="brand-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform border border-amber-400/30">
              <ShieldCheck className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  SprayInsulations<span className="text-amber-400">.ca</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                  CA
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block tracking-wide">
                Canada's Insulation Resource
              </p>
            </div>
          </div>

          {/* Desktop Navigation (Consumer Focused) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              id="nav-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'home' 
                  ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                id="nav-services-dropdown"
                onClick={() => handleNavClick('services')}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  currentView === 'services' || currentView === 'service-detail'
                    ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                <span>Insulation Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
              </button>

              {/* Dropdown Menu */}
              <div 
                className="absolute left-0 top-full pt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-2xl shadow-slate-950/90 space-y-2">
                  <div className="flex items-center justify-between px-2 py-1 border-b border-slate-800/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Insulation Systems & Services
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      24 Specifications
                    </span>
                  </div>

                  <div className="max-h-96 overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-slate-700">
                    {INSULATION_SERVICES.map((srv) => (
                      <button
                        key={srv.id}
                        id={`nav-service-${srv.slug}`}
                        onClick={() => handleNavClick('service-detail', srv.slug)}
                        className="w-full text-left px-2.5 py-2 rounded-xl text-sm hover:bg-slate-800/90 transition-colors flex items-start gap-2.5 group/item"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-950 group-hover/item:bg-slate-900 border border-slate-800 group-hover/item:border-amber-500/30 mt-0.5 shrink-0">
                          {getServiceIcon(srv.id)}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-xs text-slate-200 group-hover/item:text-amber-400 transition-colors truncate">
                            {srv.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {srv.heroTagline || srv.shortDesc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <button
                      id="nav-all-services"
                      onClick={() => handleNavClick('services')}
                      className="w-full text-center py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all shadow-md shadow-amber-500/20"
                    >
                      Browse All 24 Services & Categories →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Dropdown */}
            <div className="relative group">
              <button
                id="nav-tools-dropdown"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  currentView === 'compare' || currentView === 'estimator' || currentView === 'advisor' || currentView === 'cost-guide'
                    ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                <span>Tools & Pricing</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
              </button>

              <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl p-2.5 shadow-2xl space-y-1">
                  <button
                    onClick={() => handleNavClick('compare')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 transition flex items-center justify-between text-slate-200 hover:text-amber-400"
                  >
                    <div>
                      <div className="font-bold">Compare Insulation Types</div>
                      <div className="text-[11px] text-slate-400">Spray Foam vs Cellulose vs Stone Wool</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('advisor')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 transition flex items-center justify-between text-slate-200 hover:text-amber-400"
                  >
                    <div>
                      <div className="font-bold">What Insulation Do I Need?</div>
                      <div className="text-[11px] text-slate-400">4-Step Guided Interactive Diagnostic</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('estimator')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 transition flex items-center justify-between text-slate-200 hover:text-amber-400"
                  >
                    <div>
                      <div className="font-bold">Project Estimator 2.0</div>
                      <div className="text-[11px] text-slate-400">Canadian Climate Zone Planning Calculator</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('cost-guide')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 transition flex items-center justify-between text-slate-200 hover:text-amber-400"
                  >
                    <div>
                      <div className="font-bold">Canadian Cost Guide</div>
                      <div className="text-[11px] text-slate-400">2026 Price Ranges & Provincial Rebates</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button
              id="nav-canada-coverage"
              onClick={() => handleNavClick('provinces-hub')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                currentView === 'provinces-hub' || currentView === 'canada' || currentView === 'province-detail' || currentView === 'city-detail'
                  ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Canada & Hubs</span>
            </button>

            <button
              id="nav-contractors"
              onClick={() => handleNavClick('contractors')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                currentView === 'contractors'
                  ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <Users className="w-4 h-4 text-emerald-400" />
              <span>Find a Contractor</span>
            </button>

            <button
              id="nav-resources"
              onClick={() => handleNavClick('resources-hub')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                currentView === 'resources-hub' || currentView === 'resources' || currentView === 'article-detail'
                  ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Resources</span>
            </button>

            <button
              id="nav-about"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'about'
                  ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              About
            </button>

            <button
              id="nav-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'contact'
                  ? 'text-amber-400 bg-slate-900 border border-slate-800' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Primary Action & Search Bar */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Global Search Bar Trigger */}
            <button
              id="header-global-search-btn"
              onClick={onOpenSearch}
              className="hidden xl:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-slate-400 hover:text-slate-200 transition-all text-xs w-52 2xl:w-60 justify-between group shadow-inner"
              title="Search insulation services, articles, and directory (Cmd+K)"
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">Search services, guides...</span>
              </div>
              <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-800 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Compact Search Button for large screens when full search is hidden */}
            <button
              id="header-compact-search-btn"
              onClick={onOpenSearch}
              className="xl:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
              title="Search insulation services, guides, and businesses"
            >
              <Search className="w-4 h-4 text-amber-400" />
            </button>

            {/* Theme Toggle Button (Deep Navy vs Light Professional) */}
            {onToggleTheme && (
              <button
                id="header-theme-toggle-btn"
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-white transition-all text-xs font-semibold shadow-inner group"
                title={
                  currentTheme === 'deep-navy'
                    ? "Switch to 'Light Professional' mode (daylight accessibility & high contrast)"
                    : "Switch to 'Deep Navy' mode"
                }
                aria-label={`Current theme: ${currentTheme === 'deep-navy' ? 'Deep Navy' : 'Light Professional'}. Click to switch.`}
              >
                {currentTheme === 'deep-navy' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                    <span className="hidden xl:inline">Deep Navy</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-45 transition-transform" />
                    <span className="hidden xl:inline">Light Pro</span>
                  </>
                )}
              </button>
            )}

            <button
              id="header-cta-get-help"
              onClick={onOpenGetHelp}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all border border-amber-300/40 whitespace-nowrap"
            >
              GET INSULATION HELP
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {onToggleTheme && (
              <button
                id="mobile-theme-toggle-btn"
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400"
                aria-label="Toggle Theme Mode"
                title={currentTheme === 'deep-navy' ? "Switch to Light Professional mode" : "Switch to Deep Navy mode"}
              >
                {currentTheme === 'deep-navy' ? (
                  <Moon className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-500" />
                )}
              </button>
            )}

            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5 text-amber-400" />
            </button>
            <button
              id="mobile-cta-help"
              onClick={onOpenGetHelp}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
            >
              GET HELP
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {/* Mobile Search Bar in Drawer */}
          <div className="pt-1 pb-1">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm hover:border-amber-500/40"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-amber-400" />
                <span>Search services, guides, cities...</span>
              </div>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-950 text-amber-400 border border-slate-800">
                Search
              </span>
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium ${
                currentView === 'home' ? 'bg-amber-500/10 text-amber-400 font-bold' : 'text-slate-200'
              }`}
            >
              Home
            </button>
            
            <div className="py-2 px-4">
              <div className="flex items-center justify-between text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <span>Insulation Services</span>
                <span className="text-[10px] text-slate-400 font-mono font-normal">24 Systems</span>
              </div>
              <div className="max-h-60 overflow-y-auto pr-1 grid grid-cols-1 gap-1 pl-2 border-l border-slate-800 scrollbar-thin scrollbar-thumb-slate-700">
                {INSULATION_SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleNavClick('service-detail', s.slug)}
                    className="text-left py-1.5 text-xs text-slate-300 hover:text-amber-400 flex items-center gap-2 truncate"
                  >
                    {getServiceIcon(s.id)}
                    <span className="truncate">{s.title}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleNavClick('services')}
                className="mt-2.5 w-full py-2 bg-slate-900 border border-slate-800 text-amber-400 font-semibold text-xs rounded-xl text-center hover:bg-slate-800"
              >
                View Services Hub (7 Categories) →
              </button>
            </div>

            {/* Tools Quick Section */}
            <div className="py-2 px-4 bg-slate-900/60 rounded-xl border border-slate-800/80 my-1">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
                Tools & Pricing
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <button
                  onClick={() => handleNavClick('compare')}
                  className="p-2 text-left bg-slate-950 rounded-lg text-slate-300 hover:text-amber-400 border border-slate-800 font-medium"
                >
                  ⚖️ Compare Types
                </button>
                <button
                  onClick={() => handleNavClick('advisor')}
                  className="p-2 text-left bg-slate-950 rounded-lg text-slate-300 hover:text-amber-400 border border-slate-800 font-medium"
                >
                  🧭 What Do I Need?
                </button>
                <button
                  onClick={() => handleNavClick('estimator')}
                  className="p-2 text-left bg-slate-950 rounded-lg text-slate-300 hover:text-amber-400 border border-slate-800 font-medium"
                >
                  🧮 Estimator 2.0
                </button>
                <button
                  onClick={() => handleNavClick('cost-guide')}
                  className="p-2 text-left bg-slate-950 rounded-lg text-slate-300 hover:text-amber-400 border border-slate-800 font-medium"
                >
                  💰 Cost Guide
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('provinces-hub')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900"
            >
              Canada Provinces Hub
            </button>
            <button
              onClick={() => handleNavClick('contractors')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Find a Contractor</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Verified</span>
            </button>
            <button
              onClick={() => handleNavClick('resources-hub')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900"
            >
              Resources & Technical Guides
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenGetHelp(); }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-center tracking-wide"
            >
              GET INSULATION HELP
            </button>
          </div>

          {/* Mobile Theme Switcher Row */}
          {onToggleTheme && (
            <div className="pt-2 pb-1 border-t border-slate-800/80">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm">
                <span className="font-semibold text-slate-300 flex items-center gap-2">
                  {currentTheme === 'deep-navy' ? (
                    <Moon className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Sun className="w-4 h-4 text-amber-500" />
                  )}
                  <span>Theme Mode:</span>
                </span>
                <button
                  onClick={onToggleTheme}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <span>{currentTheme === 'deep-navy' ? 'Deep Navy' : 'Light Pro'}</span>
                  <span className="text-[10px] text-slate-400 font-normal">(Tap to switch)</span>
                </button>
              </div>
            </div>
          )}

          {/* Industry Division Mini Links for Mobile */}
          <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="w-full font-semibold text-slate-300">Industry Opportunities:</span>
            <button onClick={() => handleNavClick('guest-post')} className="text-amber-400 hover:underline">Guest Posts ($10)</button>
            <span>•</span>
            <button onClick={() => handleNavClick('membership')} className="text-amber-400 hover:underline">Join ($10/yr)</button>
            <span>•</span>
            <button onClick={() => handleNavClick('city-partnerships')} className="text-amber-400 hover:underline">City Partnerships</button>
          </div>
        </div>
      )}
    </header>
  );
};
