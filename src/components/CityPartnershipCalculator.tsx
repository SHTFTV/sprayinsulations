import React, { useState } from 'react';
import { Calculator, ShieldCheck, ArrowRight, HelpCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { INITIAL_CITIES } from '../data/initialData';

interface CityPartnershipCalculatorProps {
  onApplyForCity?: (cityName: string, province: string, pop: number, fee: number) => void;
}

export const CityPartnershipCalculator: React.FC<CityPartnershipCalculatorProps> = ({ onApplyForCity }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('calgary-ab');
  const [customCityName, setCustomCityName] = useState<string>('');
  const [customProvince, setCustomProvince] = useState<string>('AB');
  const [customPopulation, setCustomPopulation] = useState<number>(250000);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);

  // Selected or custom values
  const currentCity = INITIAL_CITIES.find(c => c.id === selectedCityId) || INITIAL_CITIES[0];
  const activePop = isCustomMode ? customPopulation : currentCity.population;
  const activeCityName = isCustomMode ? (customCityName || 'Custom Canadian Market') : currentCity.name;
  const activeProvince = isCustomMode ? customProvince : currentCity.provinceName;

  // Formula: Population / 100,000 * $10 CAD
  const calculatedAnnualFee = Math.max(10, Math.round((activePop / 100000) * 10));

  const handleApply = () => {
    if (onApplyForCity) {
      onApplyForCity(activeCityName, activeProvince, activePop, calculatedAnnualFee);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Formula Calculator
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              City Partnership Annual Fee Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Pricing model: <strong>$10 CAD per 100,000 population</strong> for exclusive market territory.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs self-start">
            <button
              onClick={() => setIsCustomMode(false)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                !isCustomMode ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Select Major City
            </button>
            <button
              onClick={() => setIsCustomMode(true)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                isCustomMode ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Custom Municipality
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
          
          {/* Controls column */}
          <div className="lg:col-span-7 space-y-5">
            {!isCustomMode ? (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Choose Canadian Market
                </label>
                <select
                  value={selectedCityId}
                  onChange={(e) => setSelectedCityId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {INITIAL_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}, {c.provinceCode} — Approx. Pop: {c.population.toLocaleString()} (Status: {c.partnershipStatus})
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Municipality / City Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Red Deer, Barrie, Moncton"
                      value={customCityName}
                      onChange={(e) => setCustomCityName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Province / Territory
                    </label>
                    <select
                      value={customProvince}
                      onChange={(e) => setCustomProvince(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    >
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="ON">Ontario</option>
                      <option value="QC">Quebec</option>
                      <option value="MB">Manitoba</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="YT">Yukon</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="NU">Nunavut</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
                    <span>Market Population (Census / Official Estimate):</span>
                    <span className="font-mono font-bold text-amber-400">{customPopulation.toLocaleString()} residents</span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={3000000}
                    step={10000}
                    value={customPopulation}
                    onChange={(e) => setCustomPopulation(Number(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>20k ($10 min)</span>
                    <span>500k ($50)</span>
                    <span>1M ($100)</span>
                    <span>3M ($300)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Formula Transparency Box */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Exact Calculation Formula</span>
              </div>
              <div className="font-mono text-xs text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800/80">
                ({activePop.toLocaleString()} pop ÷ 100,000) × $10 CAD = <strong className="text-amber-400 font-bold">${calculatedAnnualFee} CAD / Year</strong>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                *The actual calculation will be based on the official population methodology designated by the company upon partnership agreement.
              </p>
            </div>
          </div>

          {/* Results display column */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/30 text-center space-y-4 shadow-xl shadow-amber-500/5">
              <div className="text-xs uppercase font-bold tracking-widest text-slate-400">
                {activeCityName}, {activeProvince}
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black text-amber-400 font-display">
                  ${calculatedAnnualFee}
                  <span className="text-base sm:text-lg font-medium text-slate-400"> CAD / yr</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  {activePop.toLocaleString()} Population Base
                </div>
              </div>

              <div className="py-2 border-y border-slate-800 text-xs text-slate-300 space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>One Exclusive Partner per designated market</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>City page featured business branding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Regional consumer & contractor lead forwarding</span>
                </div>
              </div>

              <button
                id="calc-claim-city-button"
                onClick={handleApply}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Claim {activeCityName} Exclusivity</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Pre-set Benchmark Table */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Quick Market Benchmark Tiers:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-slate-400">100,000 Pop</div>
              <div className="text-base font-bold text-amber-400 font-display mt-0.5">$10 / yr</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-slate-400">200,000 Pop</div>
              <div className="text-base font-bold text-amber-400 font-display mt-0.5">$20 / yr</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-slate-400">500,000 Pop</div>
              <div className="text-base font-bold text-amber-400 font-display mt-0.5">$50 / yr</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-slate-400">1,000,000 Pop</div>
              <div className="text-base font-bold text-amber-400 font-display mt-0.5">$100 / yr</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
