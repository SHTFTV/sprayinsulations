import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Flame, 
  Layers, 
  Volume2, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ArrowRight, 
  RotateCcw,
  Info,
  Building,
  Home
} from 'lucide-react';
import { ViewMode } from '../types';

export interface InsulationEstimatorProps {
  onOpenGetHelp?: () => void;
  onNavigate?: (view: ViewMode, paramId?: string) => void;
  initialServiceId?: string;
  className?: string;
}

export interface InsulationMaterialOption {
  id: string;
  name: string;
  shortName: string;
  rPerInch: number;
  density: string;
  airBarrierMinDepth: number; // inches
  vaporBarrierMinDepth: number; // inches
  wasteFactor: number; // e.g. 0.08
  description: string;
  category: 'spray-foam' | 'fiberglass' | 'mineral-wool' | 'cellulose' | 'rigid-board';
}

export const INSULATION_MATERIAL_OPTIONS: Record<string, InsulationMaterialOption> = {
  'closed-cell-foam': {
    id: 'closed-cell-foam',
    name: '2.0 lb Closed-Cell Polyurethane Spray Foam (HFO)',
    shortName: 'Closed-Cell Spray Foam',
    rPerInch: 6.5,
    density: '2.0 - 2.2 lb/cu ft',
    airBarrierMinDepth: 1.0,
    vaporBarrierMinDepth: 2.0, // 50mm / 2" meets NBC 9.25 vapor permeance < 60 ng/(Pa·s·m²)
    wasteFactor: 0.07,
    description: 'High-density monolithic barrier providing continuous thermal insulation, air sealing, and integral vapor barrier in a single pass.',
    category: 'spray-foam'
  },
  'open-cell-foam': {
    id: 'open-cell-foam',
    name: '0.5 lb Open-Cell Polyurethane Spray Foam',
    shortName: 'Open-Cell Spray Foam',
    rPerInch: 3.7,
    density: '0.5 lb/cu ft',
    airBarrierMinDepth: 3.5,
    vaporBarrierMinDepth: 999, // Requires separate vapor barrier
    wasteFactor: 0.10,
    description: 'Flexible acoustic-dampening foam that expands 100x to air seal irregular cavities. Vapor permeable.',
    category: 'spray-foam'
  },
  'blown-fiberglass': {
    id: 'blown-fiberglass',
    name: 'High-Density Blown-In Virgin Fiberglass',
    shortName: 'Blown Fiberglass',
    rPerInch: 3.4,
    density: '1.2 - 1.8 lb/cu ft',
    airBarrierMinDepth: 999,
    vaporBarrierMinDepth: 999,
    wasteFactor: 0.05,
    description: 'Non-combustible spun glass fiber engineered for loose-fill attic floors and dense-pack wall cavities.',
    category: 'fiberglass'
  },
  'mineral-wool': {
    id: 'mineral-wool',
    name: 'Non-Combustible Stone Wool / Mineral Wool Batts & Boards',
    shortName: 'Mineral Stone Wool',
    rPerInch: 4.2,
    density: '2.5 - 4.5 lb/cu ft',
    airBarrierMinDepth: 999,
    vaporBarrierMinDepth: 999,
    wasteFactor: 0.08,
    description: 'Manufactured from natural basalt rock. Fire resistant to over 1,175°C with superior acoustic absorption.',
    category: 'mineral-wool'
  },
  'blown-cellulose': {
    id: 'blown-cellulose',
    name: 'Borate-Treated Blown Dense-Pack Cellulose',
    shortName: 'Blown Cellulose',
    rPerInch: 3.7,
    density: '1.6 - 3.5 lb/cu ft',
    airBarrierMinDepth: 999,
    vaporBarrierMinDepth: 999,
    wasteFactor: 0.06,
    description: 'Recycled fiber treated with non-toxic borate fire retardants with high thermal heat capacity.',
    category: 'cellulose'
  },
  'rigid-xps': {
    id: 'rigid-xps',
    name: 'Extruded Polystyrene (XPS) Rigid Foam Boards',
    shortName: 'Rigid XPS Board',
    rPerInch: 5.0,
    density: '1.5 - 2.0 lb/cu ft',
    airBarrierMinDepth: 1.5,
    vaporBarrierMinDepth: 2.0,
    wasteFactor: 0.08,
    description: 'Continuous smooth rigid panels ideal for foundation exterior perimeter and continuous exterior sheathing.',
    category: 'rigid-board'
  }
};

export const InsulationEstimator: React.FC<InsulationEstimatorProps> = ({
  onOpenGetHelp,
  onNavigate,
  initialServiceId,
  className = ''
}) => {
  // Inputs
  const [squareFootage, setSquareFootage] = useState<number>(1200);
  const [depthInches, setDepthInches] = useState<number>(3.5);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(() => {
    if (initialServiceId === 'spray-foam') return 'closed-cell-foam';
    if (initialServiceId === 'fire-rated') return 'mineral-wool';
    if (initialServiceId === 'fiberglass') return 'blown-fiberglass';
    if (initialServiceId === 'acoustic') return 'mineral-wool';
    return 'closed-cell-foam';
  });

  const [hasCopied, setHasCopied] = useState(false);

  const activeMaterial = INSULATION_MATERIAL_OPTIONS[selectedMaterialId] || INSULATION_MATERIAL_OPTIONS['closed-cell-foam'];

  // Calculations
  const sqFt = Math.max(1, squareFootage || 0);
  const depth = Math.max(0.5, depthInches || 0.5);
  const sqMeters = sqFt * 0.092903;
  const depthMm = depth * 25.4;

  const nominalRValue = Math.round(depth * activeMaterial.rPerInch * 10) / 10;
  const rsiValue = Math.round((nominalRValue / 5.678) * 100) / 100;

  // Board feet = sq ft * thickness in inches
  const netBoardFeet = sqFt * depth;
  const grossBoardFeet = Math.round(netBoardFeet * (1 + activeMaterial.wasteFactor));
  const cubicFeet = Math.round((netBoardFeet / 12) * 10) / 10;
  const cubicMeters = Math.round((cubicFeet * 0.0283168) * 100) / 100;

  // Material requirement ranges
  let materialRequirementDisplay = '';
  let materialRequirementNote = '';

  if (activeMaterial.category === 'spray-foam') {
    const drumYield = activeMaterial.id === 'open-cell-foam' ? 17000 : 4200;
    const drumSetsMin = (grossBoardFeet / drumYield).toFixed(2);
    const drumSetsMax = ((grossBoardFeet * 1.08) / drumYield).toFixed(2);
    materialRequirementDisplay = `${grossBoardFeet.toLocaleString()} – ${Math.round(grossBoardFeet * 1.08).toLocaleString()} bd ft`;
    materialRequirementNote = `Estimated ${drumSetsMin} to ${drumSetsMax} standard 55-gal chemical drum set(s) (including ~${Math.round(activeMaterial.wasteFactor * 100)}% pass and overspray allowance).`;
  } else if (activeMaterial.category === 'fiberglass') {
    const sqFtPerBag = Math.max(10, 1000 / depth);
    const bagMin = Math.ceil(sqFt / sqFtPerBag);
    const bagMax = Math.ceil(bagMin * 1.12);
    materialRequirementDisplay = `${bagMin} – ${bagMax} Bags (30 lb)`;
    materialRequirementNote = `Based on standard compressed 30-lb bags blown to ${depth}" settling thickness.`;
  } else if (activeMaterial.category === 'mineral-wool') {
    const sqFtPerBag = depth > 5 ? 40 : 58;
    const bagMin = Math.ceil((sqFt * (1 + activeMaterial.wasteFactor)) / sqFtPerBag);
    const bagMax = Math.ceil(bagMin * 1.1);
    materialRequirementDisplay = `${bagMin} – ${bagMax} Bundles / Bags`;
    materialRequirementNote = `Standard packaging (~${sqFtPerBag} sq ft/bag) with 8% framing cut waste allowance.`;
  } else if (activeMaterial.category === 'cellulose') {
    const sqFtPerBag = Math.max(12, 850 / depth);
    const bagMin = Math.ceil(sqFt / sqFtPerBag);
    const bagMax = Math.ceil(bagMin * 1.15);
    materialRequirementDisplay = `${bagMin} – ${bagMax} Bags (25 lb)`;
    materialRequirementNote = `Based on standard 25-lb borate-treated bags blown to design density.`;
  } else {
    // rigid-board
    const sheetsMin = Math.ceil((sqFt * (1 + activeMaterial.wasteFactor)) / 32);
    const sheetsMax = Math.ceil(sheetsMin * 1.08);
    materialRequirementDisplay = `${sheetsMin} – ${sheetsMax} Sheets (4' × 8')`;
    materialRequirementNote = `Based on standard 32 sq ft (4x8 ft) sheets with 8% cutting and joint allowance.`;
  }

  // Air / Vapor Barrier Compliance Check
  const meetsAirBarrier = depth >= activeMaterial.airBarrierMinDepth;
  const meetsVaporBarrier = depth >= activeMaterial.vaporBarrierMinDepth;

  const handleCopy = () => {
    const summaryText = `SprayInsulations.ca Insulation Estimation Summary:
------------------------------------------------
Insulation Type: ${activeMaterial.name}
Square Footage: ${sqFt.toLocaleString()} sq ft (${sqMeters.toFixed(1)} m²)
Target Depth: ${depth}" (${depthMm.toFixed(0)} mm)
Nominal R-Value: R-${nominalRValue} (RSI ${rsiValue})
Total Board Footage: ${grossBoardFeet.toLocaleString()} bd ft
Total Volume: ${cubicFeet} cu ft (${cubicMeters} m³)
Estimated Material Requirement: ${materialRequirementDisplay}
Air Barrier Status: ${meetsAirBarrier ? 'Integrated Compliant' : 'Requires Separate Air Sealing'}
Vapor Barrier Status: ${meetsVaporBarrier ? 'Integrated Compliant (<60 ng/Pa·s·m²)' : 'Requires Separate 6-mil Poly or Smart Membrane'}
Disclaimer: Non-binding preliminary estimate. Actual quantities vary by framing assembly, substrate condition, and local municipal building codes.`;
    navigator.clipboard.writeText(summaryText);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  return (
    <div 
      id="insulation-estimator-tool"
      className={`rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl ${className}`}
    >
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Insulation Project Material Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Input basic dimensions (square footage & depth) and select insulation types to calculate a non-binding range of material requirements and thermal R-values.
          </p>
        </div>

        <button
          onClick={() => {
            setSquareFootage(1200);
            setDepthInches(3.5);
            setSelectedMaterialId('closed-cell-foam');
          }}
          className="self-start md:self-center px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUTS (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Select Material */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[11px] font-mono">1</span>
                <span>Select Insulation Material</span>
              </span>
              <span className="text-[11px] font-mono text-amber-400">
                R-{activeMaterial.rPerInch}/inch
              </span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.values(INSULATION_MATERIAL_OPTIONS).map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterialId(mat.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedMaterialId === mat.id
                      ? 'bg-slate-900 border-amber-400 text-white ring-1 ring-amber-400/30'
                      : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white leading-tight">
                      {mat.shortName}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-700 text-[10px] font-mono text-amber-400 shrink-0">
                      R-{mat.rPerInch}/in
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {mat.density}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Square Footage Input */}
          <div className="space-y-3 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[11px] font-mono">2</span>
                <span>Square Footage Area</span>
              </span>
              <span className="text-[11px] text-slate-400">
                ≈ {sqMeters.toFixed(1)} m²
              </span>
            </label>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min={10}
                max={100000}
                step={50}
                value={squareFootage || ''}
                onChange={(e) => setSquareFootage(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full sm:w-56 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-lg font-bold focus:outline-none focus:border-amber-500"
                placeholder="1200"
              />
              <span className="text-xs text-slate-300 font-medium">
                Square Feet (ft²)
              </span>
            </div>

            {/* Quick Area Steppers */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] text-slate-400 mr-1">Quick Presets:</span>
              {[250, 500, 1000, 1500, 2500, 5000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setSquareFootage(preset)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                    squareFootage === preset
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {preset} sq ft
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Insulation Depth Input */}
          <div className="space-y-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[11px] font-mono">3</span>
                <span>Insulation Thickness / Depth</span>
              </label>
              <div className="text-right">
                <span className="text-xl font-black text-amber-400 font-mono">
                  {depth}" 
                </span>
                <span className="text-slate-400 text-xs font-mono ml-1">
                  ({depthMm.toFixed(0)} mm)
                </span>
              </div>
            </div>

            {/* Depth Slider */}
            <div className="space-y-2">
              <input
                type="range"
                min={0.5}
                max={20}
                step={0.5}
                value={depth}
                onChange={(e) => setDepthInches(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0.5"</span>
                <span>2" (Basement)</span>
                <span>3.5" (2x4)</span>
                <span>5.5" (2x6)</span>
                <span>12" (Attic R-40)</span>
                <span>18" (Attic R-60)</span>
                <span>20"</span>
              </div>
            </div>

            {/* Quick Depth Presets */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800">
              <span className="text-[10px] text-slate-400 mr-1">Common Cavities:</span>
              {[
                { label: '2" (R-13 CC)', d: 2.0 },
                { label: '3.5" (2x4 Cavity)', d: 3.5 },
                { label: '5.5" (2x6 Cavity)', d: 5.5 },
                { label: '14" (Attic R-50)', d: 14.0 },
                { label: '18" (Attic R-60)', d: 18.0 }
              ].map((item) => (
                <button
                  key={item.d}
                  type="button"
                  onClick={() => setDepthInches(item.d)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                    depth === item.d
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* OUTPUTS & SCOPE RANGE (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500/40 shadow-xl shadow-amber-500/5 space-y-6">
            
            {/* Top Thermal Output Box */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Preliminary Planning Estimate
                </span>
                <div className="text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                  <span>R-{nominalRValue}</span>
                  <span className="text-xs font-normal text-slate-400 font-sans">
                    (RSI {rsiValue})
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Core Calculated Quantities */}
            <div className="space-y-4">
              
              {/* Material Quantity Range */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block font-medium">
                  Material Requirement Range
                </span>
                <div className="text-xl font-bold text-amber-400 font-display">
                  {materialRequirementDisplay}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  {materialRequirementNote}
                </p>
              </div>

              {/* Board Footage & Volume Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Board Footage</span>
                  <span className="text-white font-mono font-bold text-sm">
                    {grossBoardFeet.toLocaleString()} bd ft
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ({netBoardFeet.toLocaleString()} net + waste)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Total Volume</span>
                  <span className="text-white font-mono font-bold text-sm">
                    {cubicFeet} cu ft
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ({cubicMeters} m³)
                  </span>
                </div>
              </div>

              {/* Barrier Compliance */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs">
                <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">
                  Envelope Barrier Status Check
                </span>

                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-850">
                  <span className="text-slate-400">Air Barrier Integrity:</span>
                  <span className={`font-semibold flex items-center gap-1 ${meetsAirBarrier ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {meetsAirBarrier ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                    {meetsAirBarrier ? 'Monolithic Air Seal' : `Requires ≥${activeMaterial.airBarrierMinDepth}" depth`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-400">Vapor Retarder Status:</span>
                  <span className={`font-semibold flex items-center gap-1 ${meetsVaporBarrier ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {meetsVaporBarrier ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Info className="w-3.5 h-3.5 text-slate-400" />}
                    {meetsVaporBarrier ? 'Meets NBC 9.25 (<60 ng)' : 'Requires separate poly barrier'}
                  </span>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5 pt-2">
              {onOpenGetHelp && (
                <button
                  onClick={onOpenGetHelp}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>REQUEST VERIFIED CONTRACTOR QUOTE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}

              <button
                onClick={handleCopy}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {hasCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Summary Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Material Specification Sheet</span>
                  </>
                )}
              </button>
            </div>

            {/* Non-Binding Legal Disclaimer */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-0.5">Non-Binding Estimate Disclaimer:</span>
              Actual project requirements and pricing depend on site conditions, materials, thickness, assembly, access, labour and project-specific requirements. Calculated material quantities are general approximations for preliminary planning purposes only.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
