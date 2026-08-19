import React, { useState } from 'react';
import { ThermometerSnowflake, ShieldAlert, Sparkles, Check, Info } from 'lucide-react';
import { PROVINCES_DATA } from '../data/initialData';

interface ClimateZoneData {
  zoneName: string;
  hddRange: string;
  atticTarget: string;
  aboveGradeWallTarget: string;
  basementWallTarget: string;
  rimJoistTarget: string;
  recommendedSolution: string;
  buildingScienceTip: string;
}

const CLIMATE_ZONE_TARGETS: Record<string, ClimateZoneData> = {
  'Zone 4 (Coastal BC)': {
    zoneName: 'Climate Zone 4 (< 3,000 HDD)',
    hddRange: 'Vancouver, Victoria, Coastal Islands',
    atticTarget: 'R-40 to R-50',
    aboveGradeWallTarget: 'R-20 to R-22 effective',
    basementWallTarget: 'R-12 to R-15 continuous',
    rimJoistTarget: 'R-20 closed-cell spray foam',
    recommendedSolution: 'Continuous mineral wool exterior sheathing with vapor-permeable rainscreen and airtight interior drywall detailing.',
    buildingScienceTip: 'High moisture loading requires prioritized drying potential toward the exterior and mold-resistant cavity assemblies.'
  },
  'Zone 5 (SW Ontario & BC Interior)': {
    zoneName: 'Climate Zone 5 (3,000 to 3,999 HDD)',
    hddRange: 'Toronto GTA, Windsor, Kelowna, Penticton',
    atticTarget: 'R-50 to R-60',
    aboveGradeWallTarget: 'R-22 to R-24 effective',
    basementWallTarget: 'R-15 to R-20 continuous',
    rimJoistTarget: 'R-22 closed-cell spray foam',
    recommendedSolution: 'Hybrid 2" closed-cell spray foam on rim joists combined with R-60 blown fiberglass/cellulose in attics.',
    buildingScienceTip: 'Balance summer cooling dehumidification needs with winter condensation prevention in exterior wall cavities.'
  },
  'Zone 6 (Central ON, QC, Prairies, Maritimes)': {
    zoneName: 'Climate Zone 6 (4,000 to 4,999 HDD)',
    hddRange: 'Montreal, Ottawa, Calgary, Halifax, Moncton',
    atticTarget: 'R-60 (approx. 18-22" blown)',
    aboveGradeWallTarget: 'R-24+ effective (2x6 + continuous ci)',
    basementWallTarget: 'R-20 continuous',
    rimJoistTarget: 'R-24 closed-cell spray foam',
    recommendedSolution: 'Monolithic closed-cell polyurethane foam on basement walls & rim joists with R-60 attic blow-in.',
    buildingScienceTip: 'Stack effect is pronounced; aggressive air-sealing of attic bypasses is mandatory before adding insulation.'
  },
  'Zone 7A (Edmonton, Winnipeg, Northern ON/QC)': {
    zoneName: 'Climate Zone 7A (5,000 to 5,999 HDD)',
    hddRange: 'Edmonton, Winnipeg, Saskatoon, Regina, Quebec City, Sudbury',
    atticTarget: 'R-60 to R-70',
    aboveGradeWallTarget: 'R-28 to R-32 effective',
    basementWallTarget: 'R-20 to R-24 continuous',
    rimJoistTarget: 'R-28 closed-cell spray foam',
    recommendedSolution: 'Continuous exterior insulation plus 2" closed-cell foam air/vapor barrier on cold perimeter framing.',
    buildingScienceTip: 'Sub-zero indoor-to-outdoor temperature deltas exceeding 50°C demand unbroken vapor retarders on the warm side.'
  },
  'Zone 7B & 8 (Far North & Territories)': {
    zoneName: 'Climate Zone 7B / 8 (6,000+ HDD)',
    hddRange: 'Yukon, NWT, Nunavut, Northern Prairie belts',
    atticTarget: 'R-80+ super-insulated',
    aboveGradeWallTarget: 'R-36 to R-45 effective (double stud or thick ci)',
    basementWallTarget: 'R-25+ / Frost-protected slab breaks',
    rimJoistTarget: 'R-30+ closed-cell spray foam',
    recommendedSolution: 'Full building envelope spray foam encapsulation with continuous exterior thermal wraps.',
    buildingScienceTip: 'Thermal bridging through wood or steel studs can cause localized interior frost without thick continuous exterior insulation.'
  }
};

export const ClimateZoneCalculator: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('Zone 6 (Central ON, QC, Prairies, Maritimes)');
  const data = CLIMATE_ZONE_TARGETS[selectedZone];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
            <ThermometerSnowflake className="w-3.5 h-3.5" />
            Canadian Building Science Tool
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white font-display">
            Canadian Climate Zone & R-Value Recommender
          </h3>
          <p className="text-sm text-slate-400">
            Select your geographic region to explore NBC 9.36 target thermal performance targets.
          </p>
        </div>

        {/* Region Selector */}
        <div className="w-full lg:w-80">
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Select Canadian Region / Climate
          </label>
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 text-sm font-medium focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            {Object.keys(CLIMATE_ZONE_TARGETS).map((zoneKey) => (
              <option key={zoneKey} value={zoneKey} className="bg-slate-900 text-slate-200">
                {zoneKey}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Target Breakdown Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Attic / Roof Ceiling</div>
          <div className="text-2xl font-bold text-amber-400 font-display">{data.atticTarget}</div>
          <div className="text-[11px] text-slate-400">Blown loose-fill or unvented hot roof</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Above-Grade Exterior Wall</div>
          <div className="text-2xl font-bold text-slate-100 font-display">{data.aboveGradeWallTarget}</div>
          <div className="text-[11px] text-slate-400">Effective R-value accounting for studs</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Basement Foundation Wall</div>
          <div className="text-2xl font-bold text-slate-100 font-display">{data.basementWallTarget}</div>
          <div className="text-[11px] text-slate-400">Continuous interior/exterior barrier</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Basement Rim Joists</div>
          <div className="text-2xl font-bold text-emerald-400 font-display">{data.rimJoistTarget}</div>
          <div className="text-[11px] text-slate-400">Air seal & vapor retarder priority</div>
        </div>
      </div>

      {/* Recommendation and Building Science Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            Recommended Assembly Configuration
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {data.recommendedSolution}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            <Info className="w-4 h-4 text-cyan-400" />
            Canadian Building Science Note
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {data.buildingScienceTip}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
        <span>Reference: National Building Code of Canada (NBC) Section 9.36 & Provincial Energy Codes</span>
        <span className="text-amber-400/80">Representative targets only</span>
      </div>
    </div>
  );
};
