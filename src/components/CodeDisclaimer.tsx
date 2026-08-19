import React, { useState } from 'react';
import { ShieldAlert, Info, MapPin, ChevronDown } from 'lucide-react';
import { PROVINCES_DATA } from '../data/initialData';

export interface CodeDisclaimerProps {
  variant?: 'banner' | 'card' | 'inline';
  showJurisdictionSelector?: boolean;
  selectedProvinceCode?: string;
  onProvinceChange?: (provinceCode: string) => void;
  className?: string;
}

export const CodeDisclaimer: React.FC<CodeDisclaimerProps> = ({
  variant = 'card',
  showJurisdictionSelector = true,
  selectedProvinceCode = '',
  onProvinceChange,
  className = ''
}) => {
  const [internalProvince, setInternalProvince] = useState<string>(selectedProvinceCode);

  const activeProvinceCode = onProvinceChange ? selectedProvinceCode : internalProvince;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (onProvinceChange) {
      onProvinceChange(value);
    } else {
      setInternalProvince(value);
    }
  };

  const selectedProvince = PROVINCES_DATA.find(p => p.code === activeProvinceCode);

  if (variant === 'inline') {
    return (
      <div className={`text-xs text-slate-400 flex items-start gap-2 ${className}`}>
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <span>
          <strong>Building Code Notice:</strong> Building-code requirements vary by province, territory, building type, and assembly application. Information provided is general educational guidance and is not a substitute for project-specific code review, engineering verification, or the applicable authority having jurisdiction (AHJ).
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`rounded-2xl bg-slate-950/90 border border-slate-800 p-5 sm:p-6 text-xs text-slate-300 space-y-3.5 shadow-lg ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>Canadian Building Code & Jurisdiction Notice</span>
        </div>

        {showJurisdictionSelector && (
          <div className="flex items-center gap-2 text-xs">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <label htmlFor="jurisdiction-select" className="text-slate-400 whitespace-nowrap text-[11px]">
              Jurisdiction:
            </label>
            <div className="relative">
              <select
                id="jurisdiction-select"
                value={activeProvinceCode}
                onChange={handleSelectChange}
                aria-label="Select Canadian Province or Territory for building code context"
                className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-1 pr-7 text-xs focus:outline-none focus:border-amber-500 appearance-none cursor-pointer"
              >
                <option value="">National Model Codes (NBC / NECB)</option>
                {PROVINCES_DATA.map((prov) => (
                  <option key={prov.code} value={prov.code}>
                    {prov.name} ({prov.code})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        )}
      </div>

      <p className="leading-relaxed text-slate-300">
        Building-code requirements vary across Canada by province, territory, climate zone, occupancy classification, and assembly type. The technical information provided on this platform is for general educational and planning purposes and is not a substitute for project-specific engineering, architectural review, manufacturer documentation, or the approval of the local authority having jurisdiction (AHJ).
      </p>

      {selectedProvince && (
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-amber-300/90 flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>{selectedProvince.name} Context:</strong> In {selectedProvince.name}, projects are governed by applicable provincial/territorial building and energy regulations (such as {selectedProvince.code === 'BC' ? 'BC Building Code & BC Energy Step Code' : selectedProvince.code === 'ON' ? 'Ontario Building Code (OBC Supplementary Standard SB-12)' : selectedProvince.code === 'QC' ? 'Construction Code of Quebec (CCQ Chapter I.1)' : selectedProvince.code === 'AB' ? 'National Building Code – Alberta Edition (NBC-AE)' : 'the applicable provincial/territorial building code'} in addition to municipal bylaws). Always confirm compliance requirements with your local building official and certified professional.
          </div>
        </div>
      )}
    </div>
  );
};
