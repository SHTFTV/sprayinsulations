import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  AlertTriangle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Calculator, 
  Home, 
  Building2, 
  Volume2, 
  Flame, 
  Hammer 
} from 'lucide-react';
import { ADVISOR_STEPS, getAdvisorRecommendation } from '../data/advisorData';
import { ViewMode } from '../types';

interface InsulationAdvisorViewProps {
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const InsulationAdvisorView: React.FC<InsulationAdvisorViewProps> = ({
  onNavigate,
  onOpenGetHelp
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const currentStep = ADVISOR_STEPS[currentStepIdx];
  const selectedOptionId = currentStep ? answers[currentStep.id] : undefined;

  const handleSelectOption = (optionId: string) => {
    const nextAnswers = { ...answers, [currentStep.id]: optionId };
    setAnswers(nextAnswers);

    if (currentStepIdx < ADVISOR_STEPS.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentStepIdx > 0) {
      setCurrentStepIdx(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIdx(0);
    setShowResult(false);
  };

  const recommendation = getAdvisorRecommendation(answers);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-amber-400" />
            Interactive Insulation Advisor
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            What Insulation Do I Need?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Answer 4 quick diagnostic questions to identify the ideal insulation material, required R-value, and building code considerations for your specific project.
          </p>
        </div>
      </section>

      {/* Main Advisor Diagnostic Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {!showResult ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
            
            {/* Step Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                <span>Step {currentStep.number} of {ADVISOR_STEPS.length}</span>
                <span className="text-amber-400 font-bold">{Math.round(((currentStepIdx + 1) / ADVISOR_STEPS.length) * 100)}% Completed</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStepIdx + 1) / ADVISOR_STEPS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Question Header */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {currentStep.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {currentStep.description}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {currentStep.options.map(option => {
                const isSelected = selectedOptionId === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`p-4 rounded-xl border text-left transition flex items-start gap-3.5 group ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-md'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition ${
                      isSelected 
                        ? 'bg-amber-500 text-slate-950 font-bold' 
                        : 'bg-slate-800 text-slate-400 group-hover:text-amber-400 group-hover:bg-slate-700'
                    }`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-bold text-sm text-slate-100 group-hover:text-white transition mb-1">
                        {option.label}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed">
                        {option.sublabel}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
              {currentStepIdx > 0 ? (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous Step
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-slate-200 transition flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Reset Diagnostic
              </button>
            </div>

          </div>
        ) : (
          
          /* Recommendation Output Screen */
          <div className="space-y-6">
            
            {/* Primary Recommendation Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Card Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border-b border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Primary Recommended System
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {recommendation.primaryTitle}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 font-semibold text-amber-300">
                    Target: {recommendation.rValueTarget}
                  </span>
                  <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-slate-300">
                    Category: {recommendation.primaryCategory}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
                
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs text-slate-300 mb-2">
                    Why This System Is Recommended
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {recommendation.rationale}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs text-slate-300 mb-2">
                    Key Performance Advantages
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recommendation.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Warning Box */}
                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Canadian Building Code Compliance Warning
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {recommendation.codeComplianceWarning}
                  </p>
                </div>

                {/* Alternative Recommendation */}
                <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Alternative Value Option:
                  </div>
                  <div className="font-bold text-white text-sm">
                    {recommendation.alternativeTitle}
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {recommendation.alternativeRationale}
                  </p>
                </div>

                {/* Recommended Next Steps */}
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs text-slate-300 mb-2">
                    Recommended Next Actions
                  </h3>
                  <div className="space-y-1.5">
                    {recommendation.nextSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Start Over
                </button>
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => onNavigate('service-detail', recommendation.primaryServiceSlug)}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold border border-slate-700 transition"
                  >
                    View System Specs
                  </button>
                  <button
                    onClick={() => onNavigate('estimator')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold border border-slate-700 transition"
                  >
                    <Calculator className="w-3.5 h-3.5 text-amber-400" />
                    Estimate Project Cost
                  </button>
                  <button
                    onClick={onOpenGetHelp}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition shadow-md shadow-amber-500/20"
                  >
                    Request Contractor Quotes
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </section>

    </div>
  );
};
