import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Building2, 
  Layers, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  FileText, 
  AlertCircle,
  Sparkles,
  DollarSign
} from 'lucide-react';
import { PROVINCES_DATA, INITIAL_CITIES } from '../data/initialData';
import { CANADIAN_COST_BENCHMARKS, CANADIAN_REBATE_PROGRAMS } from '../data/costGuideData';
import { ConsumerLead, ViewMode } from '../types';

interface ProjectEstimatorViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
  onSubmitLead?: (lead: ConsumerLead) => void;
}

export const ProjectEstimatorView: React.FC<ProjectEstimatorViewProps> = ({
  onNavigate,
  onOpenGetHelp,
  onSubmitLead
}) => {
  // Step State (1 to 5)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form Fields
  const [provinceCode, setProvinceCode] = useState<string>('BC');
  const [city, setCity] = useState<string>('Vancouver');
  const [projectSector, setProjectSector] = useState<'residential' | 'commercial'>('residential');
  const [projectNature, setProjectNature] = useState<'new-build' | 'renovation-gut' | 'existing-retrofit'>('renovation-gut');
  const [buildingArea, setBuildingArea] = useState<string>('attic');
  const [squareFootage, setSquareFootage] = useState<number>(1200);
  const [insulationType, setInsulationType] = useState<string>('spray-foam-closed-cell');
  const [existingCondition, setExistingCondition] = useState<'bare-framing' | 'old-undamaged' | 'contaminated-removal' | 'uninsulated-masonry'>('bare-framing');
  const [accessibility, setAccessibility] = useState<'easy' | 'moderate' | 'difficult'>('easy');
  const [targetThickness, setTargetThickness] = useState<string>('2-inch-r13');

  // Contact Info for Saving Planning Estimate
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [projectNotes, setProjectNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Filter cities by province
  const availableCities = INITIAL_CITIES.filter(c => c.provinceCode === provinceCode);

  // Calculation Engine
  const calculateEstimate = () => {
    // Base pricing per sq ft
    let baseRateLow = 2.50;
    let baseRateHigh = 3.80;

    if (insulationType === 'spray-foam-closed-cell') {
      if (targetThickness === '2-inch-r13') { baseRateLow = 2.50; baseRateHigh = 3.60; }
      else if (targetThickness === '3-inch-r20') { baseRateLow = 3.60; baseRateHigh = 4.90; }
      else if (targetThickness === '5-inch-r32') { baseRateLow = 5.80; baseRateHigh = 7.50; }
      else { baseRateLow = 2.80; baseRateHigh = 4.20; }
    } else if (insulationType === 'spray-foam-open-cell') {
      baseRateLow = 1.70;
      baseRateHigh = 2.70;
    } else if (insulationType === 'mineral-wool') {
      baseRateLow = 1.60;
      baseRateHigh = 2.40;
    } else if (insulationType === 'blown-cellulose') {
      baseRateLow = 1.10;
      baseRateHigh = 1.80;
    } else if (insulationType === 'blown-fiberglass') {
      baseRateLow = 0.95;
      baseRateHigh = 1.60;
    } else if (insulationType === 'rigid-board') {
      baseRateLow = 1.80;
      baseRateHigh = 3.10;
    }

    // Multipliers
    let sectorMultiplier = projectSector === 'commercial' ? 1.15 : 1.0;
    let accessibilityMultiplier = 1.0;
    if (accessibility === 'moderate') accessibilityMultiplier = 1.12;
    if (accessibility === 'difficult') accessibilityMultiplier = 1.25;

    // Existing condition removal cost
    let removalCostLow = 0;
    let removalCostHigh = 0;
    if (existingCondition === 'contaminated-removal') {
      removalCostLow = squareFootage * 1.30;
      removalCostHigh = squareFootage * 2.10;
    }

    // Regional factor
    let regionalMultiplier = 1.0;
    if (['YT', 'NT', 'NU'].includes(provinceCode)) regionalMultiplier = 1.45;
    else if (['ON', 'BC'].includes(provinceCode)) regionalMultiplier = 1.05;
    else if (['MB', 'SK', 'AB'].includes(provinceCode)) regionalMultiplier = 1.0;
    else if (['NB', 'NS', 'PE', 'NL'].includes(provinceCode)) regionalMultiplier = 1.02;

    const rawLow = (squareFootage * baseRateLow * sectorMultiplier * accessibilityMultiplier * regionalMultiplier) + removalCostLow;
    const rawHigh = (squareFootage * baseRateHigh * sectorMultiplier * accessibilityMultiplier * regionalMultiplier) + removalCostHigh;

    // Minimum rig mobilization fee floor
    const finalLow = Math.max(rawLow, 1200);
    const finalHigh = Math.max(rawHigh, 1800);

    return {
      low: Math.round(finalLow / 50) * 50,
      high: Math.round(finalHigh / 50) * 50,
      materialRate: `$${(baseRateLow * regionalMultiplier).toFixed(2)} – $${(baseRateHigh * regionalMultiplier).toFixed(2)}/sq.ft`,
      removalIncluded: existingCondition === 'contaminated-removal',
      removalEstimate: removalCostLow > 0 ? `$${Math.round(removalCostLow).toLocaleString()} – $${Math.round(removalCostHigh).toLocaleString()}` : null
    };
  };

  const estimateResult = calculateEstimate();
  const activeProvince = PROVINCES_DATA.find(p => p.code === provinceCode) || PROVINCES_DATA[0];
  const provincialRebate = CANADIAN_REBATE_PROGRAMS.find(r => r.provinceCode === provinceCode);

  const handleSubmitEstimateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const newLead: ConsumerLead = {
      id: `lead-est-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      fullName,
      email,
      phone,
      province: provinceCode,
      city,
      projectType: `${projectSector === 'residential' ? 'Residential' : 'Commercial'} ${buildingArea} (${projectNature})`,
      serviceNeeded: insulationType,
      areaSquareFeet: squareFootage,
      budget: `$${estimateResult.low.toLocaleString()} – $${estimateResult.high.toLocaleString()} CAD`,
      timeline: 'Planning / Estimator 2.0 Inquiry',
      projectDetails: `Project Estimator 2.0 Output: Area: ${squareFootage} sq.ft, Material: ${insulationType}, Target: ${targetThickness}, Condition: ${existingCondition}, Accessibility: ${accessibility}. Notes: ${projectNotes || 'None'}. Planning Range: $${estimateResult.low.toLocaleString()} - $${estimateResult.high.toLocaleString()} CAD.`,
      status: 'New'
    };

    if (onSubmitLead) {
      onSubmitLead(newLead);
    }
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4 text-amber-400" />
            Project Estimator 2.0 • Canadian Building Standards
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Interactive Canadian Insulation Estimator
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Generate an instant, building-science based planning estimate tailored to your Canadian province, climate zone, application area, and insulation specifications.
          </p>
        </div>
      </section>

      {/* Estimator Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Step Progress Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 shadow-md">
          <div className="flex items-center justify-between gap-2 max-w-3xl mx-auto">
            {[
              { num: 1, label: 'Location & Type' },
              { num: 2, label: 'Building Area' },
              { num: 3, label: 'Insulation & R-Value' },
              { num: 4, label: 'Site Conditions' },
              { num: 5, label: 'Planning Estimate' }
            ].map(step => (
              <div 
                key={step.num}
                onClick={() => step.num < currentStep && setCurrentStep(step.num)}
                className={`flex items-center gap-2 cursor-pointer transition ${
                  currentStep === step.num 
                    ? 'text-amber-400 font-bold'
                    : currentStep > step.num 
                      ? 'text-emerald-400 font-medium'
                      : 'text-slate-500'
                }`}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold border ${
                  currentStep === step.num 
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : currentStep > step.num 
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {step.num}
                </div>
                <span className="hidden sm:inline text-xs">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Location & Sector */}
        {currentStep === 1 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-white mb-1">Step 1: Location & Building Scope</h2>
              <p className="text-xs text-slate-400">Canadian climate zones determine required thermal R-values and local labour rates.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Province or Territory
                </label>
                <select
                  value={provinceCode}
                  onChange={(e) => {
                    setProvinceCode(e.target.value);
                    const matched = INITIAL_CITIES.find(c => c.provinceCode === e.target.value);
                    if (matched) setCity(matched.name);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  {PROVINCES_DATA.map(p => (
                    <option key={p.code} value={p.code}>{p.name} ({p.code})</option>
                  ))}
                </select>
                <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Building Code: {activeProvince.buildingCodeReference}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  City / Region
                </label>
                {availableCities.length > 0 ? (
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    {availableCities.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Other Regional Location">Other Regional Location</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city or municipality"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Sector Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'residential', label: 'Residential', sub: 'Home / Condo' },
                    { id: 'commercial', label: 'Commercial', sub: 'Industrial / Multi' }
                  ].map(sec => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setProjectSector(sec.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition ${
                        projectSector === sec.id
                          ? 'bg-amber-500/15 border-amber-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-sm text-slate-100">{sec.label}</div>
                      <div className="text-[11px] text-slate-400">{sec.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Construction Status
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'new-build', label: 'New Build', sub: 'Open Framing' },
                    { id: 'renovation-gut', label: 'Gut Reno', sub: 'Exposed' },
                    { id: 'existing-retrofit', label: 'Finished', sub: 'Closed Cavity' }
                  ].map(nat => (
                    <button
                      key={nat.id}
                      type="button"
                      onClick={() => setProjectNature(nat.id as any)}
                      className={`p-3 rounded-xl border text-center transition ${
                        projectNature === nat.id
                          ? 'bg-amber-500/15 border-amber-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-100">{nat.label}</div>
                      <div className="text-[10px] text-slate-400">{nat.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-sm shadow-md"
              >
                Continue to Building Area
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Building Area & Square Footage */}
        {currentStep === 2 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-white mb-1">Step 2: Building Assembly & Area Dimensions</h2>
              <p className="text-xs text-slate-400">Select where the insulation will be installed and approximate total surface area.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { id: 'attic', label: 'Attic Floor / Roof', desc: 'Blown or hot roof deck' },
                { id: 'basement-walls', label: 'Basement Walls', desc: 'Concrete foundation interior' },
                { id: 'crawlspace', label: 'Crawlspace', desc: 'Wall & ground vapour barrier' },
                { id: 'exterior-walls', label: 'Exterior 2x6 Walls', desc: 'Above-grade framing' },
                { id: 'rim-joist', label: 'Rim Joists & Headers', desc: 'Perimeter floor framing' },
                { id: 'garage-ceiling', label: 'Garage / Bonus Room', desc: 'Under-floor cantilever' },
                { id: 'interior-sound', label: 'Interior Acoustic', desc: 'Between rooms / suites' },
                { id: 'commercial-envelope', label: 'Commercial Envelope', desc: 'Steel stud / roof deck' }
              ].map(area => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setBuildingArea(area.id)}
                  className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                    buildingArea === area.id
                      ? 'bg-amber-500/15 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-100 mb-1">{area.label}</div>
                  <div className="text-[10px] text-slate-400">{area.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Approximate Surface Area: <span className="text-amber-400 font-extrabold text-base">{squareFootage.toLocaleString()} sq. ft</span>
              </label>
              <input
                type="range"
                min={200}
                max={5000}
                step={50}
                value={squareFootage}
                onChange={(e) => setSquareFootage(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500 mb-4"
              />
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={100}
                  max={20000}
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(parseInt(e.target.value) || 0)}
                  className="w-36 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white font-bold"
                />
                <span className="text-xs text-slate-400">square feet of insulation coverage</span>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-sm shadow-md"
              >
                Select Insulation Type
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Insulation Material & Target Thickness */}
        {currentStep === 3 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-white mb-1">Step 3: Insulation Material & Target Thickness</h2>
              <p className="text-xs text-slate-400">Choose your preferred insulation product and thermal depth specification.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { id: 'spray-foam-closed-cell', name: '2.0 lb Closed-Cell Spray Foam', desc: 'R-6.5/inch • Air & Vapour Barrier Inherent' },
                { id: 'spray-foam-open-cell', name: '0.5 lb Open-Cell Spray Foam', desc: 'R-3.7/inch • High Acoustic Absorption' },
                { id: 'mineral-wool', name: 'Stone Wool / Mineral Wool Batts', desc: 'R-4.2/inch • Non-Combustible Fire Safe' },
                { id: 'blown-cellulose', name: 'Blown-In Cellulose (Attic / Wall)', desc: 'R-3.7/inch • 85% Recycled Low Carbon' },
                { id: 'blown-fiberglass', name: 'Blown-In Virgin Fiberglass', desc: 'R-3.4/inch • Clean Lightweight Attic Fill' },
                { id: 'rigid-board', name: 'Rigid Foam Board (XPS / Polyiso)', desc: 'R-5.0 to R-6.5/in • Continuous CI' }
              ].map(mat => (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setInsulationType(mat.id)}
                  className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
                    insulationType === mat.id
                      ? 'bg-amber-500/15 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-100 mb-1">{mat.name}</div>
                  <div className="text-[11px] text-slate-400">{mat.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Target Thickness / R-Value Specification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: '2-inch-r13', label: '2 Inches (~R-13 / R-14)', sub: 'Code Air/Vapour Barrier' },
                  { id: '3-inch-r20', label: '3 Inches (~R-20 / R-22)', sub: 'Standard 2x6 Cavity' },
                  { id: '5-inch-r32', label: '5 Inches (~R-32 / R-35)', sub: 'Deep Cavity / High R' },
                  { id: 'r50-r60-attic', label: '14"-16" (R-50 to R-60)', sub: 'Standard Canadian Attic' }
                ].map(th => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => setTargetThickness(th.id)}
                    className={`p-3 rounded-xl border text-left transition ${
                      targetThickness === th.id
                        ? 'bg-amber-500/15 border-amber-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-xs text-slate-100">{th.label}</div>
                    <div className="text-[10px] text-slate-400">{th.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-sm shadow-md"
              >
                Check Site Conditions
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Existing Condition & Site Accessibility */}
        {currentStep === 4 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-white mb-1">Step 4: Existing Conditions & Site Accessibility</h2>
              <p className="text-xs text-slate-400">Factors like old insulation removal and tight crawlspace access affect mobilization.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Existing Insulation Status
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'bare-framing', label: 'Bare Framing / New Substrate', desc: 'No existing insulation to remove' },
                    { id: 'old-undamaged', label: 'Existing Clean Insulation (Top-Up)', desc: 'Adding on top without removal' },
                    { id: 'contaminated-removal', label: 'Contaminated / Wet (Requires Vacuum Removal)', desc: 'Gas vacuum extraction to bare deck' },
                    { id: 'uninsulated-masonry', label: 'Bare Concrete / Uninsulated Brick', desc: 'Direct masonry spray foam application' }
                  ].map(c => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setExistingCondition(c.id as any)}
                      className={`w-full p-3 rounded-xl border text-left transition ${
                        existingCondition === c.id
                          ? 'bg-amber-500/15 border-amber-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-100">{c.label}</div>
                      <div className="text-[10px] text-slate-400">{c.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Jobsite Accessibility
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'easy', label: 'Easy Ground Level / Open Access', desc: 'Standard access for spray hoses and trucks' },
                    { id: 'moderate', label: 'Moderate Attic Hatch / Multi-Story', desc: 'Second-story hose runs or narrow hatchway' },
                    { id: 'difficult', label: 'Difficult / Confined Crawlspace / High Roof', desc: 'Low crawlspace clearance or high scaffolding' }
                  ].map(a => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setAccessibility(a.id as any)}
                      className={`w-full p-3 rounded-xl border text-left transition ${
                        accessibility === a.id
                          ? 'bg-amber-500/15 border-amber-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-100">{a.label}</div>
                      <div className="text-[10px] text-slate-400">{a.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setCurrentStep(5)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-sm shadow-md"
              >
                Generate Planning Estimate
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Planning Estimate Output & Lead Dispatch */}
        {currentStep === 5 && (
          <div className="space-y-8">
            
            {/* Estimate Result Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border-b border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Canadian Planning Estimate (Budget Guideline)
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Estimated Project Investment
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      {city}, {provinceCode} • {squareFootage.toLocaleString()} sq. ft • {insulationType.replace('-', ' ')}
                    </p>
                  </div>
                  <div className="text-right sm:text-right">
                    <div className="text-3xl sm:text-4xl font-black text-amber-400">
                      ${estimateResult.low.toLocaleString()} – ${estimateResult.high.toLocaleString()} <span className="text-xs font-bold text-slate-400">CAD</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Estimated rate: {estimateResult.materialRate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimate Breakdown Details */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/50">
                
                <div className="space-y-3 text-xs">
                  <h3 className="font-bold text-white uppercase tracking-wider text-[11px] text-slate-300">
                    Project Parameters Considered
                  </h3>
                  <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Location & Code:</span>
                      <span className="text-slate-200 font-semibold">{city}, {provinceCode} ({activeProvince.climateZones[0]})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Assembly Area:</span>
                      <span className="text-slate-200 font-semibold">{buildingArea} ({squareFootage} sq.ft)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Selected Material:</span>
                      <span className="text-slate-200 font-semibold">{insulationType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Target Spec:</span>
                      <span className="text-amber-300 font-semibold">{targetThickness}</span>
                    </div>
                    {estimateResult.removalIncluded && (
                      <div className="flex justify-between text-amber-400">
                        <span>Vacuum Removal Subtotal:</span>
                        <span className="font-bold">{estimateResult.removalEstimate}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <h3 className="font-bold text-white uppercase tracking-wider text-[11px] text-slate-300">
                    Provincial Rebate & Code Notes
                  </h3>
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                    {provincialRebate ? (
                      <div>
                        <div className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {provincialRebate.programName}
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed">
                          Qualifies for {provincialRebate.maxIncentive} under provincial building envelope efficiency programs.
                        </p>
                      </div>
                    ) : (
                      <p className="text-slate-400 text-[11px]">
                        Check local municipal and provincial energy utility programs for active envelope upgrade incentives.
                      </p>
                    )}
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                      <strong>Code Compliance:</strong> Evaluated under {activeProvince.buildingCodeReference}.
                    </div>
                  </div>
                </div>

              </div>

              {/* Disclaimer Notice */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Planning Estimate Disclaimer:</strong> This estimate is generated based on standard Canadian averages for materials, labour, and mobilization. Final quotes require physical jobsite verification of framing depth, substrate temperature, masking requirements, and local building code inspections.
                </span>
              </div>
            </div>

            {/* Request Official Contractor Quotes Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Planning Estimate Inquired Successfully!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your project details for {city}, {provinceCode} have been logged. A verified Canadian insulation contractor will reach out with itemized pricing.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition mt-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Calculate Another Estimate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitEstimateLead} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Lock In This Estimate: Request Formal Contractor Project Bids
                    </h3>
                    <p className="text-xs text-slate-400">
                      Submit your planning parameters to receive verified contractor quotes in {city}, {provinceCode}.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. David Campbell"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@example.ca"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(604) 555-0199"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Additional Project Notes (Optional)</label>
                    <textarea
                      rows={2}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="e.g., Timber framing with 2x6 studs, attic has two skylights requiring flashing detail..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Start Over
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition text-xs shadow-lg shadow-amber-500/20"
                    >
                      Submit for Verified Contractor Bids
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        )}

      </section>

    </div>
  );
};
