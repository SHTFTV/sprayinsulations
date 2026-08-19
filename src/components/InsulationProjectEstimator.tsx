import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Layers, 
  Sparkles, 
  Flame, 
  Volume2, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ArrowRight, 
  Sliders, 
  Maximize2, 
  Info, 
  HelpCircle,
  RotateCcw,
  Zap,
  Building,
  Home,
  FileSpreadsheet
} from 'lucide-react';
import { InsulationService, ViewMode } from '../types';

export interface InsulationProjectEstimatorProps {
  initialServiceId?: string;
  onOpenGetHelp?: () => void;
  onNavigate?: (view: ViewMode, paramId?: string) => void;
  title?: string;
  subtitle?: string;
  className?: string;
}

interface MaterialSpec {
  id: string;
  name: string;
  shortName: string;
  rPerInch: number;
  category: 'spray-foam' | 'fiberglass' | 'mineral-wool' | 'cellulose' | 'rigid-board';
  density: string;
  airBarrierAtDepth: number; // inches needed to act as air barrier
  vaporBarrierAtDepth: number; // inches needed to act as vapor barrier
  wasteFactor: number; // e.g. 0.08 for 8%
  description: string;
  pros: string[];
}

const MATERIAL_SPECS: Record<string, MaterialSpec> = {
  'closed-cell-foam': {
    id: 'closed-cell-foam',
    name: '2.0 lb Closed-Cell Polyurethane Spray Foam (HFO)',
    shortName: 'Closed-Cell Spray Foam',
    rPerInch: 6.5,
    category: 'spray-foam',
    density: '2.0 - 2.2 lb/cu ft',
    airBarrierAtDepth: 1.0,
    vaporBarrierAtDepth: 2.0, // 50mm / 2" meets NBC 9.25 vapor permeance < 60 ng/(Pa·s·m²)
    wasteFactor: 0.07, // 7% expansion/overspray
    description: 'High-density monolithic barrier providing continuous thermal insulation, structural racking strength, and integral vapor/air sealing in a single pass.',
    pros: ['Integral vapor barrier at 2.0"+', 'Air barrier at 1.0"+', 'Highest R-value per inch (R-6.5/in)', 'Zero air infiltration']
  },
  'open-cell-foam': {
    id: 'open-cell-foam',
    name: '0.5 lb Open-Cell Polyurethane Spray Foam',
    shortName: 'Open-Cell Spray Foam',
    rPerInch: 3.7,
    category: 'spray-foam',
    density: '0.5 lb/cu ft',
    airBarrierAtDepth: 3.5,
    vaporBarrierAtDepth: 999, // Requires separate vapor barrier (poly or smart membrane)
    wasteFactor: 0.10, // 10% trimming waste
    description: 'Flexible acoustic-dampening foam that expands 100x to air seal irregular cavities and internal partitions. Vapor permeable (requires separate vapor retarder on cold climate exterior walls).',
    pros: ['Superior acoustic isolation (STC dampening)', 'Fills deep 2x6/2x8 cavities economically', 'Expands around plumbing & wiring']
  },
  'blown-fiberglass': {
    id: 'blown-fiberglass',
    name: 'High-Density Blown-In Virgin Fiberglass',
    shortName: 'Blown Fiberglass',
    rPerInch: 3.4,
    category: 'fiberglass',
    density: '1.2 - 1.8 lb/cu ft',
    airBarrierAtDepth: 999, // Not an air barrier without separate detailing
    vaporBarrierAtDepth: 999, // Requires separate 6-mil poly
    wasteFactor: 0.05, // 5% settling/blow allowance
    description: 'Non-combustible spun glass fiber engineered for loose-fill attic floors and dense-pack wall cavities. Resists settling when installed at tested design densities.',
    pros: ['Non-combustible (CAN/ULC S114)', 'Cost-effective for high attic R-values (R-50 to R-60)', 'Formaldehyde-free virgin glass']
  },
  'mineral-wool': {
    id: 'mineral-wool',
    name: 'Non-Combustible Stone Wool / Mineral Wool Batts & Boards',
    shortName: 'Mineral Stone Wool',
    rPerInch: 4.2,
    category: 'mineral-wool',
    density: '2.5 - 4.5 lb/cu ft',
    airBarrierAtDepth: 999,
    vaporBarrierAtDepth: 999,
    wasteFactor: 0.08, // 8% cut waste
    description: 'Manufactured from natural basalt rock and recycled slag. Fire resistant to over 1,175°C, hydrophobic (repels water), with superior acoustic absorption.',
    pros: ['Fire barrier > 1,175°C melting point', 'Hydrophobic & moisture resistant', 'Dense acoustic barrier', 'Friction-fit framing']
  },
  'blown-cellulose': {
    id: 'blown-cellulose',
    name: 'Borate-Treated Blown Dense-Pack Cellulose',
    shortName: 'Blown Cellulose',
    rPerInch: 3.7,
    category: 'cellulose',
    density: '1.6 - 3.5 lb/cu ft',
    airBarrierAtDepth: 999,
    vaporBarrierAtDepth: 999,
    wasteFactor: 0.06,
    description: 'Recycled newsprint fiber treated with non-toxic fire retardants. High thermal mass with excellent airflow resistance when dense-packed at 3.5 lb/cu ft.',
    pros: ['High recycled content (>85%)', 'High thermal heat capacity / thermal lag', 'Treated with borate pest & fire deterrent']
  },
  'rigid-xps': {
    id: 'rigid-xps',
    name: 'Extruded Polystyrene (XPS) Rigid Insulation Boards',
    shortName: 'Rigid XPS Foam Board',
    rPerInch: 5.0,
    category: 'rigid-board',
    density: '1.5 - 2.0 lb/cu ft',
    airBarrierAtDepth: 1.5,
    vaporBarrierAtDepth: 2.0,
    wasteFactor: 0.08,
    description: 'Continuous smooth rigid panels ideal for foundation exterior perimeter, under-slab moisture protection, and continuous exterior wall sheathing.',
    pros: ['High compressive strength (25-40 psi)', 'Moisture resistant for below-grade contact', 'Eliminates framing thermal bridging']
  }
};

interface ApplicationPreset {
  id: string;
  name: string;
  icon: string;
  defaultMaterial: string;
  defaultDepthInches: number;
  recommendedRValue: string;
  targetAreaDesc: string;
  typicalSqFt: number;
}

const APPLICATION_PRESETS: ApplicationPreset[] = [
  {
    id: 'attic-flat',
    name: 'Attic Floor / Flat Roof Ceiling',
    icon: 'home',
    defaultMaterial: 'blown-fiberglass',
    defaultDepthInches: 18, // R-60
    recommendedRValue: 'R-50 to R-60 (NBC 9.36 Zone 4-7)',
    targetAreaDesc: 'Total attic horizontal floor footprint',
    typicalSqFt: 1200
  },
  {
    id: 'exterior-walls',
    name: '2x4 / 2x6 Above-Grade Exterior Walls',
    icon: 'building',
    defaultMaterial: 'closed-cell-foam',
    defaultDepthInches: 3.5, // R-22.75
    recommendedRValue: 'R-22 to R-28 Effective',
    targetAreaDesc: 'Net exterior wall surface area excluding windows/doors',
    typicalSqFt: 1400
  },
  {
    id: 'basement-walls',
    name: 'Basement & Foundation Concrete Walls',
    icon: 'layers',
    defaultMaterial: 'closed-cell-foam',
    defaultDepthInches: 2.5, // R-16.25
    recommendedRValue: 'R-15 to R-20 Continuous',
    targetAreaDesc: 'Interior perimeter foundation wall height × perimeter',
    typicalSqFt: 900
  },
  {
    id: 'rim-joist',
    name: 'Rim Joists / Header Bands & Cantilevers',
    icon: 'shield',
    defaultMaterial: 'closed-cell-foam',
    defaultDepthInches: 3.0, // R-19.5
    recommendedRValue: 'R-20 to R-24 Closed-Cell Foam',
    targetAreaDesc: 'Floor perimeter linear feet × ~10-12" joist height',
    typicalSqFt: 180
  },
  {
    id: 'interior-acoustic',
    name: 'Interior Partition Walls / Floor Acoustics',
    icon: 'volume',
    defaultMaterial: 'mineral-wool',
    defaultDepthInches: 3.5, // 2x4 cavity
    recommendedRValue: 'R-14.7 + STC Sound Isolation',
    targetAreaDesc: 'Total party wall or bedroom/bathroom partition area',
    typicalSqFt: 650
  },
  {
    id: 'under-slab',
    name: 'Under-Slab / Crawlspace Grade',
    icon: 'layers',
    defaultMaterial: 'rigid-xps',
    defaultDepthInches: 2.0, // R-10
    recommendedRValue: 'R-10 to R-15 Continuous',
    targetAreaDesc: 'Total basement concrete slab or crawlspace footprint',
    typicalSqFt: 1000
  }
];

export const InsulationProjectEstimator: React.FC<InsulationProjectEstimatorProps> = ({
  initialServiceId,
  onOpenGetHelp,
  onNavigate,
  title = 'Insulation Material & Requirement Estimator',
  subtitle = 'Calculate estimated material quantities, board footage, bag counts, and nominal thermal R-values for Canadian residential and commercial projects.',
  className = ''
}) => {
  const calcId = useId();

  // Selected Application
  const [selectedAppId, setSelectedAppId] = useState<string>('exterior-walls');
  const activeApp = APPLICATION_PRESETS.find(a => a.id === selectedAppId) || APPLICATION_PRESETS[0];

  // Selected Material
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(() => {
    if (initialServiceId === 'spray-foam') return 'closed-cell-foam';
    if (initialServiceId === 'fire-rated') return 'mineral-wool';
    if (initialServiceId === 'fiberglass') return 'blown-fiberglass';
    if (initialServiceId === 'acoustic') return 'mineral-wool';
    return 'closed-cell-foam';
  });

  const activeMaterial = MATERIAL_SPECS[selectedMaterialId] || MATERIAL_SPECS['closed-cell-foam'];

  // Input Mode: Direct Area vs Dimensions
  const [dimensionMode, setDimensionMode] = useState<'direct' | 'dimensions'>('direct');
  const [unitSystem, setUnitSystem] = useState<'imperial' | 'metric'>('imperial');

  // Dimension values
  const [areaSqFt, setAreaSqFt] = useState<number>(activeApp.typicalSqFt);
  const [roomLength, setRoomLength] = useState<number>(40);
  const [roomWidth, setRoomWidth] = useState<number>(30);
  const [wallHeight, setWallHeight] = useState<number>(9);
  const [depthInches, setDepthInches] = useState<number>(activeApp.defaultDepthInches);

  // Copy spec feedback
  const [hasCopied, setHasCopied] = useState(false);

  // Switch application preset handler
  const handleSelectApp = (appId: string) => {
    setSelectedAppId(appId);
    const app = APPLICATION_PRESETS.find(a => a.id === appId);
    if (app) {
      setSelectedMaterialId(app.defaultMaterial);
      setDepthInches(app.defaultDepthInches);
      if (dimensionMode === 'direct') {
        setAreaSqFt(app.typicalSqFt);
      }
    }
  };

  // Compute Active Surface Area
  const effectiveAreaSqFt = dimensionMode === 'direct' 
    ? Math.max(10, areaSqFt || 0)
    : selectedAppId === 'exterior-walls' || selectedAppId === 'basement-walls' || selectedAppId === 'interior-acoustic'
      ? Math.max(10, (2 * (roomLength + roomWidth) * wallHeight) * 0.85) // 15% window/door subtraction for walls
      : selectedAppId === 'rim-joist'
        ? Math.max(10, (2 * (roomLength + roomWidth)) * 1.0) // 1 ft height for rim joist
        : Math.max(10, roomLength * roomWidth); // Attic or Slab footprint

  const effectiveAreaSqMeters = effectiveAreaSqFt * 0.092903;
  const depthMm = depthInches * 25.4;

  // Thermal Calculations
  const calculatedNominalRValue = Math.round(depthInches * activeMaterial.rPerInch * 10) / 10;
  const calculatedRsiValue = Math.round((calculatedNominalRValue / 5.678) * 100) / 100; // RSI in m²·K/W

  // Volume Calculations
  const rawBoardFeet = effectiveAreaSqFt * depthInches;
  const totalBoardFeetWithWaste = Math.round(rawBoardFeet * (1 + activeMaterial.wasteFactor));
  const totalCubicFeet = Math.round((rawBoardFeet / 12) * 10) / 10;
  const totalCubicMeters = Math.round((totalCubicFeet * 0.0283168) * 100) / 100;

  // Material Package Counts
  let packageQuantityDisplay = '';
  let packageQuantityNote = '';

  if (activeMaterial.category === 'spray-foam') {
    // 55 Gallon A/B drum set yields approx 4,000 to 4,500 board feet of 2.0 lb foam (or ~18,000 for open cell)
    const drumSetYield = activeMaterial.id === 'open-cell-foam' ? 17000 : 4200;
    const drumSetsRequired = (totalBoardFeetWithWaste / drumSetYield).toFixed(2);
    packageQuantityDisplay = `${totalBoardFeetWithWaste.toLocaleString()} Board Feet (bd ft)`;
    packageQuantityNote = `Equates to approx. ${drumSetsRequired} standard 55-gal chemical drum set(s) (including ${Math.round(activeMaterial.wasteFactor * 100)}% overspray allowance).`;
  } else if (activeMaterial.category === 'fiberglass') {
    // Standard 30lb bag of blown fiberglass covers ~55-65 sq ft at R-60 (18" depth)
    const sqFtPerBag = Math.max(10, 1000 / depthInches);
    const bagCount = Math.ceil(effectiveAreaSqFt / sqFtPerBag);
    packageQuantityDisplay = `Approx. ${bagCount} - ${Math.ceil(bagCount * 1.1)} Bags`;
    packageQuantityNote = `Based on standard 30-lb compressed manufacturer bags blown to ${depthInches}" settling depth.`;
  } else if (activeMaterial.category === 'mineral-wool') {
    // Standard bag of 3.5" (R-14) or 5.5" (R-22) batts covers ~48-60 sq ft
    const sqFtPerBattBag = depthInches > 5 ? 40 : 58;
    const bagCount = Math.ceil((effectiveAreaSqFt * (1 + activeMaterial.wasteFactor)) / sqFtPerBattBag);
    packageQuantityDisplay = `Approx. ${bagCount} Bundles / Bags`;
    packageQuantityNote = `Standard packaging (~${sqFtPerBattBag} sq ft/bag) with 8% framing cut waste allowance.`;
  } else if (activeMaterial.category === 'cellulose') {
    // Standard 25-30lb cellulose bag covers ~35-40 sq ft at R-50
    const sqFtPerBag = Math.max(12, 850 / depthInches);
    const bagCount = Math.ceil(effectiveAreaSqFt / sqFtPerBag);
    packageQuantityDisplay = `Approx. ${bagCount} - ${Math.ceil(bagCount * 1.12)} Bags`;
    packageQuantityNote = `Standard 25-lb borate treated bags blown to design density.`;
  } else if (activeMaterial.category === 'rigid-board') {
    // Standard 4x8 ft sheet = 32 sq ft
    const sheetCount = Math.ceil((effectiveAreaSqFt * (1 + activeMaterial.wasteFactor)) / 32);
    packageQuantityDisplay = `${sheetCount} Sheets (4' × 8')`;
    packageQuantityNote = `Calculated with 8% cut/overlap waste factor on 32 sq ft rigid boards.`;
  }

  // Air / Vapor Barrier Compliance Check
  const meetsAirBarrier = depthInches >= activeMaterial.airBarrierAtDepth;
  const meetsVaporBarrier = depthInches >= activeMaterial.vaporBarrierAtDepth;

  // Handle Quick R-Value Presets
  const applyPresetR = (targetR: number) => {
    const calculatedDepth = Math.round((targetR / activeMaterial.rPerInch) * 10) / 10;
    setDepthInches(Math.max(1, calculatedDepth));
  };

  // Copy Spec String
  const generateSpecString = () => {
    return `SprayInsulations.ca Project Estimation Summary:
------------------------------------------------
Application: ${activeApp.name}
Insulation Type: ${activeMaterial.name}
Surface Area: ${Math.round(effectiveAreaSqFt)} sq ft (${effectiveAreaSqMeters.toFixed(1)} m²)
Target Depth: ${depthInches}" (${depthMm.toFixed(0)} mm)
Nominal R-Value: R-${calculatedNominalRValue} (RSI ${calculatedRsiValue})
Total Board Footage: ${totalBoardFeetWithWaste.toLocaleString()} bd ft
Total Volume: ${totalCubicFeet} cu ft (${totalCubicMeters} m³)
Estimated Material Requirement: ${packageQuantityDisplay}
Air Barrier Status: ${meetsAirBarrier ? 'Integrated Compliant' : 'Requires Separate Air Sealing'}
Vapor Barrier Status: ${meetsVaporBarrier ? 'Integrated Compliant (<60 ng/Pa·s·m²)' : 'Requires Separate 6-mil Poly or Smart Membrane'}
Note: Non-binding engineering estimate. Verify framing and municipal code with a certified installer.`;
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(generateSpecString());
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  return (
    <div 
      id="insulation-project-estimator"
      className={`rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl ${className}`}
    >
      {/* Estimator Header Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Building Science Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Quick Reset Button */}
        <button
          onClick={() => {
            setAreaSqFt(activeApp.typicalSqFt);
            setDepthInches(activeApp.defaultDepthInches);
            setDimensionMode('direct');
          }}
          className="self-start md:self-center px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          title="Reset dimensions to defaults"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Controls & Input Parameters (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Step 1: Select Application Scope */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[11px] font-mono">1</span>
                <span>Select Project Application Zone</span>
              </label>
              <span className="text-[11px] text-slate-400">NBC 9.36 Presets</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {APPLICATION_PRESETS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => handleSelectApp(app.id)}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    selectedAppId === app.id
                      ? 'bg-amber-500/10 border-amber-500 text-white shadow-md shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold leading-tight block mb-1">
                    {app.name}
                  </span>
                  <span className="text-[10px] font-mono text-amber-400/90 block">
                    {app.recommendedRValue.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Step 2: Choose Insulation Material Type */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[11px] font-mono">2</span>
                <span>Choose Insulation Material</span>
              </label>
              <span className="text-[11px] font-mono text-amber-400">
                R-{activeMaterial.rPerInch}/inch
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.values(MATERIAL_SPECS).map((mat) => (
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

          {/* 3. Step 3: Area Dimensions */}
          <div className="space-y-3 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[11px] font-mono">3</span>
                <span>Input Surface Area</span>
              </label>

              {/* Mode Toggle: Direct Sq Ft vs Room Dimensions */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
                <button
                  type="button"
                  onClick={() => setDimensionMode('direct')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    dimensionMode === 'direct' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Direct Sq Ft
                </button>
                <button
                  type="button"
                  onClick={() => setDimensionMode('dimensions')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    dimensionMode === 'dimensions' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  L × W Calculator
                </button>
              </div>
            </div>

            {dimensionMode === 'direct' ? (
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={10}
                    max={100000}
                    step={25}
                    value={areaSqFt || ''}
                    onChange={(e) => setAreaSqFt(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full sm:w-48 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-base font-bold focus:outline-none focus:border-amber-500"
                    placeholder="1200"
                  />
                  <div className="text-xs text-slate-300 font-medium">
                    Square Feet (ft²)
                    <span className="text-slate-400 block text-[11px]">
                      ≈ {effectiveAreaSqMeters.toFixed(1)} m²
                    </span>
                  </div>
                </div>

                {/* Quick Area Steppers */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] text-slate-400 mr-1">Quick Presets:</span>
                  {[250, 500, 1000, 1500, 2500, 5000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAreaSqFt(preset)}
                      className={`px-2 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                        areaSqFt === preset
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {preset} sq ft
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Length (ft)</label>
                  <input
                    type="number"
                    min={1}
                    max={500}
                    value={roomLength}
                    onChange={(e) => setRoomLength(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Width (ft)</label>
                  <input
                    type="number"
                    min={1}
                    max={500}
                    value={roomWidth}
                    onChange={(e) => setRoomWidth(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Wall Height (ft)</label>
                  <input
                    type="number"
                    min={1}
                    max={40}
                    value={wallHeight}
                    onChange={(e) => setWallHeight(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono font-bold"
                  />
                </div>
                <div className="col-span-2 sm:col-span-3 text-[11px] text-slate-400 pt-1">
                  Computed Area: <span className="text-amber-400 font-bold font-mono">{Math.round(effectiveAreaSqFt)} sq ft</span> (includes 15% standard aperture allowance for wall cutouts).
                </div>
              </div>
            )}
          </div>

          {/* 4. Step 4: Insulation Depth & Target R-Value */}
          <div className="space-y-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[11px] font-mono">4</span>
                <span>Insulation Thickness / Depth</span>
              </label>
              <div className="text-right">
                <span className="text-lg font-black text-amber-400 font-mono">
                  {depthInches}" 
                </span>
                <span className="text-slate-400 text-xs font-mono ml-1">
                  ({depthMm.toFixed(0)} mm)
                </span>
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <input
                type="range"
                min={0.5}
                max={22}
                step={0.5}
                value={depthInches}
                onChange={(e) => setDepthInches(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0.5" (R-{(0.5 * activeMaterial.rPerInch).toFixed(1)})</span>
                <span>3.5" (2x4)</span>
                <span>5.5" (2x6)</span>
                <span>12" (Attic R-40)</span>
                <span>18" (Attic R-60)</span>
                <span>22"</span>
              </div>
            </div>

            {/* Quick Target R Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800">
              <span className="text-[10px] text-slate-400 mr-1">Target R-Values:</span>
              {[
                { label: 'R-12 (Basement/2x4)', r: 12 },
                { label: 'R-20 (Code Wall)', r: 20 },
                { label: 'R-31 (High-Eff)', r: 31 },
                { label: 'R-50 (Attic)', r: 50 },
                { label: 'R-60 (NBC Attic)', r: 60 }
              ].map((item) => (
                <button
                  key={item.r}
                  type="button"
                  onClick={() => applyPresetR(item.r)}
                  className="px-2 py-1 rounded-lg bg-slate-950 hover:bg-slate-850 border border-slate-800 text-[10px] font-mono text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Calculated Material Requirements Output (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500/40 shadow-xl shadow-amber-500/5 space-y-6">
            
            {/* Top Thermal Output Box */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Thermal Resistance Output
                </span>
                <div className="text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                  <span>R-{calculatedNominalRValue}</span>
                  <span className="text-xs font-normal text-slate-400 font-sans">
                    (RSI {calculatedRsiValue})
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Core Calculated Quantities */}
            <div className="space-y-4">
              
              {/* Primary Material Requirement */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block font-medium">
                  Estimated Material Requirement
                </span>
                <div className="text-xl font-bold text-amber-400 font-display">
                  {packageQuantityDisplay}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  {packageQuantityNote}
                </p>
              </div>

              {/* Board Footage & Volume Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Board Footage</span>
                  <span className="text-white font-mono font-bold text-sm">
                    {totalBoardFeetWithWaste.toLocaleString()} bd ft
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ({rawBoardFeet.toLocaleString()} net + waste)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Total Volume</span>
                  <span className="text-white font-mono font-bold text-sm">
                    {totalCubicFeet} cu ft
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ({totalCubicMeters} m³)
                  </span>
                </div>
              </div>

              {/* Building Envelope Integrity Badges */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs">
                <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">
                  Envelope Barrier Compliance Check
                </span>

                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-850">
                  <span className="text-slate-400">Air Barrier Integrity:</span>
                  <span className={`font-semibold flex items-center gap-1 ${meetsAirBarrier ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {meetsAirBarrier ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                    {meetsAirBarrier ? 'Monolithic Air Seal' : `Requires ≥${activeMaterial.airBarrierAtDepth}" or taping`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-400">Vapor Retarder Compliance:</span>
                  <span className={`font-semibold flex items-center gap-1 ${meetsVaporBarrier ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {meetsVaporBarrier ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Info className="w-3.5 h-3.5 text-slate-400" />}
                    {meetsVaporBarrier ? 'Meets NBC 9.25 (<60 ng)' : 'Requires separate poly/smart retarder'}
                  </span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
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
                onClick={handleCopySpec}
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
              <span className="font-semibold text-slate-300 block mb-0.5">Non-Binding Calculation Notice:</span>
              Estimates are mathematical approximations based on nominal material yields and standard waste factors. Actual requirements depend on site access, framing layout, ambient temperatures, and municipal building code requirements.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
