import React, { useState } from 'react';
import { 
  DollarSign, 
  Layers, 
  HelpCircle, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Building2, 
  Home, 
  TrendingUp, 
  ExternalLink,
  Info
} from 'lucide-react';
import { CANADIAN_COST_BENCHMARKS, CANADIAN_REBATE_PROGRAMS } from '../data/costGuideData';
import { ViewMode } from '../types';

interface CostGuideViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const CostGuideView: React.FC<CostGuideViewProps> = ({
  onNavigate,
  onOpenGetHelp
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Pricing Benchmarks' },
    { id: 'Material Cost per Sq Ft', label: 'Material Costs ($/sq.ft)' },
    { id: 'Building Area Installation Cost', label: 'Whole Assembly Packages' },
    { id: 'Specialty & Removal', label: 'Removal & Remediation' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? CANADIAN_COST_BENCHMARKS 
    : CANADIAN_COST_BENCHMARKS.filter(item => item.category === selectedCategory);

  const costFaqs = [
    {
      q: 'How much does spray foam insulation cost per square foot in Canada?',
      a: 'In Canada, 2.0 lb closed-cell spray foam typically costs between $2.50 and $4.75+ per square foot installed at 2 inches thickness (~R-13). 0.5 lb open-cell foam ranges from $1.70 to $3.10 per square foot at 3.5 inches depth. Board foot volume rates generally range from $1.45 to $2.40 per board foot.'
    },
    {
      q: 'Why are insulation quotes given in ranges rather than exact fixed prices?',
      a: 'Insulation quotes depend heavily on real-world jobsite variables: total surface area (which amortizes minimum rig mobilization fees), framing cavity depth and obstructions, jobsite accessibility (crawlspaces vs open subfloors), substrate temperature in sub-zero Canadian winter conditions, and requirements for existing insulation removal.'
    },
    {
      q: 'What is the cheapest way to insulate an attic in Canada?',
      a: 'Blown-in cellulose or blown fiberglass is the most economical way to reach Canada’s National Building Code target of R-50 or R-60 on attic floors, typically costing $1.10 to $2.20 per square foot installed. Pairing this with comprehensive canned-foam air sealing of ceiling penetrations delivers the highest energy efficiency ROI.'
    },
    {
      q: 'Do Canadian government grants or utility rebates offset insulation costs?',
      a: 'Yes. Provincial and utility programs—including CleanBC Better Homes in BC (up to $5,500+), Enbridge HER+ in Ontario (up to $10,000), and Efficiency Manitoba—provide substantial grants for qualifying attic, basement wall, and exterior wall continuous insulation upgrades.'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <DollarSign className="w-4 h-4 text-amber-400" />
            2026 Canadian Market Pricing Guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Canadian Insulation Cost & Pricing Guide
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            Transparent price ranges, installed cost benchmarks, regional factors, and provincial rebate opportunities for spray foam, cellulose, mineral wool, fiberglass, and continuous insulation across Canada.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('estimator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-amber-500/10 text-sm"
            >
              <Calculator className="w-4 h-4" />
              Calculate My Project with Estimator 2.0
            </button>
            <button
              onClick={() => onNavigate('compare')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition text-sm"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              Compare All Insulation Types
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Workspace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Category Filters */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition border ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cost Benchmarks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition shadow-lg"
            >
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                  {item.materialOrArea}
                </h3>
                <div className="text-xs text-slate-400 mb-4">
                  Standard Spec: <strong className="text-slate-200">{item.typicalRValue}</strong>
                </div>

                {/* Price Range Box */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 mb-4">
                  <div className="text-2xl font-black text-amber-300">
                    ${item.lowPrice.toLocaleString()} – ${item.highPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    CAD per {item.unit}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Cost Drivers */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Key Cost Drivers
                  </span>
                  <ul className="space-y-1">
                    {item.costDrivers.map((driver, idx) => (
                      <li key={idx} className="text-slate-400 text-[11px] flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                        <span>{driver}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {item.serviceSlug && (
                  <button
                    onClick={() => onNavigate('service-detail', item.serviceSlug)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    View Specs <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => onNavigate('estimator')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition"
                >
                  Estimate Area
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Deep Dive: 6 Factors That Influence Canadian Insulation Costs */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 mb-16 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Building Science Economics
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Key Factors Influencing Canadian Insulation Project Costs
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Understanding why contractor pricing varies across Canadian provinces, seasons, and structural conditions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            
            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-xs">1</span>
                Rig Mobilization & Minimums
              </div>
              <p className="text-slate-300 leading-relaxed">
                Commercial high-pressure spray foam rigs represent significant capital investment ($80,000+). Most professional spray foam applicators maintain a minimum job charge ($1,200 – $2,000 CAD) to cover travel, generator diesel, masking, and purge prep regardless of job size.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-xs">2</span>
                Sub-Zero Winter Heating
              </div>
              <p className="text-slate-300 leading-relaxed">
                Polyurethane spray foam chemicals must be applied to substrates above 5°C (41°F) to ensure proper adhesion and expansion. Winter installations in Ontario, Alberta, and the Prairies require temporary jobsite propane or electric heaters.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-xs">3</span>
                Framing Depth & Target R-Value
              </div>
              <p className="text-slate-300 leading-relaxed">
                National Building Code (NBC 9.36) requirements vary from R-40 to R-60 depending on the province's heating degree days. Deeper stud cavities or vaulted roof decks require additional material volume per square foot.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-xs">4</span>
                Accessibility & Confined Space
              </div>
              <p className="text-slate-300 leading-relaxed">
                Low-clearance crawlspaces (under 3 feet), steep attic pitches, or multistory exterior scaffoldings increase labor hours and specialized safety equipment requirements.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-xs">5</span>
                Air Sealing & Ventilation Prep
              </div>
              <p className="text-slate-300 leading-relaxed">
                Proper attic insulation upgrades mandate installing propervent rafter baffles at soffit eaves, building attic hatch insulation dams, and canned-foam sealing electrical top-plates before blowing insulation.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-xs">6</span>
                Thermal Barrier Coatings
              </div>
              <p className="text-slate-300 leading-relaxed">
                In living spaces, crawlspaces, or commercial warehouses where foam remains exposed, building codes require approved 15-minute thermal barriers (such as DC315 intumescent paint or 1/2" drywall).
              </p>
            </div>

          </div>
        </div>

        {/* Provincial Rebates Summary Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                Canadian Energy Efficiency Rebates
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Provincial Grants & Incentive Programs
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Major rebate pathways that can cover 30% to 100% of your insulation upgrade investment:
              </p>
            </div>
            <button
              onClick={onOpenGetHelp}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs border border-slate-700 transition"
            >
              Verify My Rebate Eligibility
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
            {CANADIAN_REBATE_PROGRAMS.map(prog => (
              <div key={prog.id} className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-amber-400 uppercase text-[11px]">{prog.provinceName} ({prog.provinceCode})</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">{prog.maxIncentive}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{prog.programName}</h3>
                  <div className="text-[11px] text-slate-400 mb-3">{prog.authority}</div>
                  <ul className="space-y-1 mb-4">
                    {prog.highlights.slice(0, 3).map((h, idx) => (
                      <li key={idx} className="text-slate-300 text-[11px] flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <a
                    href={prog.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold text-xs inline-flex items-center gap-1"
                  >
                    Official Rebate Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Guide FAQs */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 mb-12 shadow-xl">
          <h2 className="text-2xl font-extrabold text-white mb-6">
            Frequently Asked Questions: Canadian Insulation Costs
          </h2>
          <div className="divide-y divide-slate-800">
            {costFaqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};
