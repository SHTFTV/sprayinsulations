import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Flame, 
  Volume2, 
  Sparkles, 
  Scale, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  Layers, 
  ThermometerSnowflake,
  Calculator,
  Compass
} from 'lucide-react';
import { INSULATION_COMPARISON_MATERIALS } from '../data/comparisonData';
import { InsulationComparisonMaterial, ViewMode } from '../types';

interface InsulationComparisonViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const InsulationComparisonView: React.FC<InsulationComparisonViewProps> = ({
  onNavigate,
  onOpenGetHelp
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'closed-cell-spray-foam',
    'mineral-wool',
    'blown-in-cellulose',
    'fiberglass-batts'
  ]);
  const [activeTab, setActiveTab] = useState<'all' | 'thermal' | 'acoustic' | 'fire' | 'costs' | 'pros-cons'>('all');

  const toggleMaterial = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 2) {
        setSelectedIds(prev => prev.filter(item => item !== id));
      }
    } else {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const selectedMaterials = INSULATION_COMPARISON_MATERIALS.filter(m => selectedIds.includes(m.id));

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4 text-amber-400" />
            Canadian Building Science Comparison Tool
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Insulation Type Comparison Matrix
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            Compare Canadian building insulation types side-by-side across thermal R-values, air sealing performance, acoustic dampening, fire resistance ratings, moisture impermeability, and installed costs.
          </p>

          {/* Quick Action Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('advisor')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-amber-500/10 text-sm"
            >
              <Compass className="w-4 h-4" />
              Not Sure? Use What Insulation Do I Need? Advisor
            </button>
            <button
              onClick={() => onNavigate('estimator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition text-sm"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              Project Estimator 2.0
            </button>
            <button
              onClick={() => onNavigate('cost-guide')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition text-sm"
            >
              <Layers className="w-4 h-4 text-sky-400" />
              Canadian Cost Guide
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Comparison Workspace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Material Selection Pills */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Select Materials to Compare Side-by-Side</h2>
              <p className="text-xs text-slate-400">Click to toggle materials (minimum 2 required for comparative view):</p>
            </div>
            <div className="text-xs text-slate-400">
              Showing <span className="font-bold text-amber-400">{selectedMaterials.length}</span> of {INSULATION_COMPARISON_MATERIALS.length} materials
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {INSULATION_COMPARISON_MATERIALS.map(mat => {
              const isSelected = selectedIds.includes(mat.id);
              return (
                <button
                  key={mat.id}
                  onClick={() => toggleMaterial(mat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-2 border ${
                    isSelected 
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-slate-600'}`} />
                  {mat.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* View Focus Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-8 overflow-x-auto">
          {[
            { id: 'all', label: 'Complete Comparison Matrix', icon: Scale },
            { id: 'thermal', label: 'Thermal & Air Sealing', icon: ThermometerSnowflake },
            { id: 'acoustic', label: 'Acoustic Soundproofing', icon: Volume2 },
            { id: 'fire', label: 'Fire Safety & Codes', icon: Flame },
            { id: 'costs', label: 'Cost & Budget Ranges', icon: Calculator },
            { id: 'pros-cons', label: 'Pros & Cons Breakdown', icon: CheckCircle2 }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition border ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                    : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Side-by-Side Comparison Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(selectedMaterials.length, 4)} gap-6 mb-12`}>
          {selectedMaterials.map(mat => (
            <div 
              key={mat.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-slate-700 transition"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-slate-800 bg-slate-900/80">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                  {mat.category}
                </div>
                <h3 className="text-lg font-extrabold text-white leading-tight mb-2">
                  {mat.shortName}
                </h3>
                <div className="text-xs text-slate-400 mb-3">
                  {mat.name}
                </div>
                <div className="flex items-baseline gap-2 bg-slate-950/80 px-3 py-2 rounded-lg border border-slate-800/80">
                  <span className="text-xs text-slate-400">R-Value:</span>
                  <span className="text-sm font-bold text-amber-300">{mat.rValuePerInch}</span>
                </div>
              </div>

              {/* Card Body Metrics */}
              <div className="p-5 space-y-4 flex-grow text-xs">
                
                {/* Cost */}
                {(activeTab === 'all' || activeTab === 'costs') && (
                  <div className="border-b border-slate-800/60 pb-3">
                    <span className="text-slate-400 font-semibold block mb-1">Typical Cost Range</span>
                    <div className="text-slate-100 font-bold">{mat.costRangeSqFt}</div>
                    {mat.boardFootCost && (
                      <div className="text-[11px] text-slate-400 mt-0.5">({mat.boardFootCost})</div>
                    )}
                  </div>
                )}

                {/* Air & Vapour Barrier */}
                {(activeTab === 'all' || activeTab === 'thermal') && (
                  <div className="border-b border-slate-800/60 pb-3 space-y-2">
                    <div>
                      <span className="text-slate-400 font-semibold block mb-1">Air Barrier Performance</span>
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                        mat.airBarrierPerformance.includes('Inherent')
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      }`}>
                        {mat.airBarrierPerformance}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block mb-1">Vapour Retarder (Permeance)</span>
                      <span className="text-slate-300">{mat.vapourBarrierPerformance}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block mb-1">Moisture & Mould</span>
                      <p className="text-slate-300 leading-relaxed text-[11px]">{mat.moistureResistance}</p>
                    </div>
                  </div>
                )}

                {/* Acoustic */}
                {(activeTab === 'all' || activeTab === 'acoustic') && (
                  <div className="border-b border-slate-800/60 pb-3">
                    <span className="text-slate-400 font-semibold block mb-1">Acoustic Sound Rating</span>
                    <p className="text-slate-200 font-medium leading-relaxed">{mat.acousticRatingSTC}</p>
                  </div>
                )}

                {/* Fire Safety */}
                {(activeTab === 'all' || activeTab === 'fire') && (
                  <div className="border-b border-slate-800/60 pb-3">
                    <span className="text-slate-400 font-semibold block mb-1">Fire Safety & Code Standard</span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">{mat.firePerformance}</p>
                  </div>
                )}

                {/* Best Applications */}
                {(activeTab === 'all' || activeTab === 'thermal') && (
                  <div className="border-b border-slate-800/60 pb-3">
                    <span className="text-slate-400 font-semibold block mb-1.5">Best Applications</span>
                    <ul className="space-y-1">
                      {mat.bestApplications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-slate-300 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pros & Cons */}
                {(activeTab === 'all' || activeTab === 'pros-cons') && (
                  <div className="space-y-3 pt-1">
                    <div>
                      <span className="text-emerald-400 font-bold flex items-center gap-1 mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Key Advantages
                      </span>
                      <ul className="space-y-1">
                        {mat.pros.slice(0, 3).map((pro, idx) => (
                          <li key={idx} className="text-slate-300 text-[11px] pl-3 border-l border-emerald-500/40">
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-amber-400 font-bold flex items-center gap-1 mb-1.5">
                        <XCircle className="w-3.5 h-3.5" /> Key Limitations
                      </span>
                      <ul className="space-y-1">
                        {mat.cons.slice(0, 2).map((con, idx) => (
                          <li key={idx} className="text-slate-400 text-[11px] pl-3 border-l border-amber-500/40">
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>

              {/* Card Footer CTA */}
              <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex flex-col gap-2">
                <button
                  onClick={() => onNavigate('service-detail', mat.relatedServiceSlug)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition text-xs"
                >
                  View {mat.shortName} Specs
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Deep Dive Summary Comparison Matrix Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mb-12 shadow-md">
          <div className="p-6 border-b border-slate-800 bg-slate-900/90">
            <h3 className="text-lg font-extrabold text-white mb-1">
              Canadian Building Science Quick Matrix
            </h3>
            <p className="text-xs text-slate-400">
              Prescriptive comparison summary under National Building Code (NBC 9.36 / NECB) and Canadian climate conditions:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-4">Insulation Material</th>
                  <th className="p-4">R-Value / Inch</th>
                  <th className="p-4">Air Barrier</th>
                  <th className="p-4">Vapour Barrier</th>
                  <th className="p-4">Fire Performance</th>
                  <th className="p-4">Acoustics</th>
                  <th className="p-4">Cost Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {INSULATION_COMPARISON_MATERIALS.map(mat => (
                  <tr key={mat.id} className="hover:bg-slate-800/30 transition">
                    <td className="p-4 font-bold text-white whitespace-nowrap">
                      <div className="text-slate-100">{mat.shortName}</div>
                      <div className="text-[10px] text-slate-400 font-normal">{mat.category}</div>
                    </td>
                    <td className="p-4 font-semibold text-amber-300 whitespace-nowrap">{mat.rValuePerInch}</td>
                    <td className="p-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        mat.airBarrierPerformance.includes('Inherent')
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {mat.airBarrierPerformance}
                      </span>
                    </td>
                    <td className="p-4 text-slate-300">{mat.vapourBarrierPerformance}</td>
                    <td className="p-4 text-slate-300">{mat.firePerformance.includes('Non-combustible') ? 'Non-combustible (CAN/ULC S114)' : 'Combustible (Requires 15-min barrier)'}</td>
                    <td className="p-4 text-slate-300">{mat.acousticRatingSTC.slice(0, 25)}...</td>
                    <td className="p-4 font-semibold text-slate-200 whitespace-nowrap">{mat.costRangeSqFt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* "Not Sure? Get Help" Interactive Conversion Box */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              Need Technical Building Science Advice?
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Still Wondering Which Material Fits Your Exact Blueprint?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every building assembly has distinct moisture, ventilation, and thermal dynamics. Run through our 4-step Advisor or speak directly with our Canadian building envelope team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigate('advisor')}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-center shadow-lg shadow-amber-500/20 text-sm whitespace-nowrap"
            >
              Launch Interactive Advisor
            </button>
            <button
              onClick={onOpenGetHelp}
              className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition text-center text-sm whitespace-nowrap"
            >
              Get Free Project Review
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
