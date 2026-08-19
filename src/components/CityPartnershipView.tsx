import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calculator, 
  CheckCircle2, 
  MapPin, 
  Award, 
  ArrowRight, 
  HelpCircle, 
  Send, 
  Building2,
  Users,
  Search
} from 'lucide-react';
import { CityPartnershipApplication, ViewMode, CityData } from '../types';
import { CityPartnershipCalculator } from './CityPartnershipCalculator';
import { PROVINCES_DATA, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface CityPartnershipViewProps {
  cities: CityData[];
  onSaveApplication: (app: CityPartnershipApplication) => void;
  onNavigate: (view: ViewMode, paramId?: string) => void;
}

export const CityPartnershipView: React.FC<CityPartnershipViewProps> = ({
  cities,
  onSaveApplication,
  onNavigate
}) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    website: '',
    phone: '',
    city: 'Calgary',
    province: 'AB',
    industry: 'Spray Foam Contractor',
    estimatedPopulation: 1390000,
    interestReason: '',
    desiredStartDate: 'Next Quarter'
  });

  const [filterQuery, setFilterQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill calculation when city changes
  const handleCityChange = (cityName: string, provinceCode: string, pop: number, fee: number) => {
    setFormData(prev => ({
      ...prev,
      city: cityName,
      province: provinceCode,
      estimatedPopulation: pop
    }));
    // scroll to form
    const el = document.getElementById('city-partnership-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculatedFee = Math.max(10, Math.round((formData.estimatedPopulation / 100000) * 10));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const app: CityPartnershipApplication = {
      id: `partner-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      businessName: formData.businessName,
      contactName: formData.contactName,
      email: formData.email,
      website: formData.website,
      phone: formData.phone,
      city: formData.city,
      province: formData.province,
      industry: formData.industry,
      estimatedPopulation: formData.estimatedPopulation,
      calculatedAnnualFee: calculatedFee,
      interestReason: formData.interestReason,
      desiredStartDate: formData.desiredStartDate,
      status: 'Pending Review'
    };

    onSaveApplication(app);
    setSubmitted(true);
  };

  const filteredCities = cities.filter(c => 
    c.name.toLowerCase().includes(filterQuery.toLowerCase()) || 
    c.provinceName.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Header / Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          Exclusive Market Territory Program
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
          Exclusive City Partnerships
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Position your company as the sole featured insulation authority in your Canadian municipal market. Transparent formula-based annual pricing.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <a
            href="#city-partnership-form"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all"
          >
            CLAIM A CITY PARTNERSHIP
          </a>
          <a
            href="#city-availability-section"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-white font-semibold text-sm border border-slate-700 transition-all"
          >
            CHECK CITY AVAILABILITY
          </a>
        </div>
      </div>

      {/* Program Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            One Exclusive Partner Per Market
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Where exclusivity is offered, only one company per designated municipality receives primary featured placement, protecting your market dominance.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Calculator className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            $10 per 100k Population Formula
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Transparent pricing indexed directly to municipal size: <code className="text-amber-400 font-mono">Population ÷ 100,000 × $10 CAD</code>. Accessible and scalable across all regions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Regional Lead & Brand Exposure
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Gain high-intent exposure to homeowners, architects, general contractors, and strata managers seeking insulation solutions in your region.
          </p>
        </div>
      </div>

      {/* Interactive Fee Calculator Section */}
      <div className="space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Interactive City Partnership Fee Calculator
          </h2>
          <p className="text-xs text-slate-400">
            Calculate your annual partnership fee based on census market population.
          </p>
        </div>

        <CityPartnershipCalculator onApplyForCity={handleCityChange} />
      </div>

      {/* City Availability Status System */}
      <div id="city-availability-section" className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white font-display">
              Canadian Market Availability Tracker
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Current status of exclusive partnership territories across major Canadian metropolitan hubs.
            </p>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter cities or provinces..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none w-full md:w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCities.map((city) => {
            const fee = Math.max(10, Math.round((city.population / 100000) * 10));
            return (
              <div
                key={city.id}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {city.provinceCode}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      city.partnershipStatus === 'AVAILABLE'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : city.partnershipStatus === 'PENDING'
                        ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                    }`}>
                      {city.partnershipStatus}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mt-1">
                    {city.name}
                  </h3>

                  <div className="text-xs text-slate-400 space-y-0.5 mt-2">
                    <div>Pop: {city.population.toLocaleString()}</div>
                    <div>Annual Partnership Fee: <strong className="text-amber-400 font-mono">${fee} CAD / yr</strong></div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleCityChange(city.name, city.provinceCode, city.population, fee)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
                  >
                    Claim {city.name} Territory →
                  </button>
                  <button
                    onClick={() => onNavigate('city-detail', city.slug)}
                    className="text-[11px] text-slate-400 hover:text-slate-200"
                  >
                    City Portal
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-slate-400 italic text-center">
          *City partnerships are currently being onboarded nationwide. Unlisted municipalities can be submitted directly through the form below.
        </p>
      </div>

      {/* Official City Partnership Application Form */}
      <div id="city-partnership-form" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-white font-display">City Partnership Application Received</h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactName}</strong> from <strong>{formData.businessName}</strong>. Your application for exclusivity in <strong>{formData.city}, {formData.province}</strong> (Calculated: ${calculatedFee} CAD/yr) is now in review. Confirmation dispatched to <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
              >
                Submit Another Territory
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white font-display">
                Request City Partnership Exclusivity
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Apply for sole featured partnership for your designated Canadian market territory.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Business / Company Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Foam Contractors"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contact Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jean-Luc Tremblay"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@apexfoam.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Website URL <span className="text-amber-400">*</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://apexfoam.ca"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="Optional contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Target City / Municipality <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Calgary, Halifax, Kelowna"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Province <span className="text-amber-400">*</span>
                </label>
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                >
                  {PROVINCES_DATA.map(p => (
                    <option key={p.code} value={p.code}>{p.name} ({p.code})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Industry Role
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option value="Spray Foam Contractor">Spray Foam Contractor</option>
                  <option value="Full-Service Insulation Contractor">Full-Service Insulation Contractor</option>
                  <option value="General Contractor / Builder">General Contractor / Builder</option>
                  <option value="Manufacturer / Supplier">Manufacturer / Supplier</option>
                  <option value="Building Envelope Consultant">Building Envelope Consultant</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Estimated Market Population
                </label>
                <input
                  type="number"
                  value={formData.estimatedPopulation}
                  onChange={(e) => setFormData({ ...formData, estimatedPopulation: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Desired Partnership Start Date
                </label>
                <select
                  value={formData.desiredStartDate}
                  onChange={(e) => setFormData({ ...formData, desiredStartDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option value="Immediate (This Month)">Immediate (This Month)</option>
                  <option value="Next Quarter">Next Quarter</option>
                  <option value="Upcoming Construction Season">Upcoming Construction Season</option>
                </select>
              </div>
            </div>

            {/* Live Fee Calculation Display */}
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Formula Calculation ({formData.city}):</div>
                <div className="text-xs text-slate-300 font-mono">
                  {formData.estimatedPopulation.toLocaleString()} pop ÷ 100,000 × $10 CAD
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-amber-400 font-display">
                  ${calculatedFee} CAD
                </span>
                <span className="text-xs text-slate-400"> / year</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Why are you interested in this market territory?
              </label>
              <textarea
                rows={3}
                placeholder="Describe your current operations in this city, services provided, crew capacity, or growth goals..."
                value={formData.interestReason}
                onChange={(e) => setFormData({ ...formData, interestReason: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST CITY PARTNERSHIP</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                All partnership applications sent directly to <span className="text-amber-400 font-medium">{PRIMARY_CONTACT_EMAIL}</span>.
              </p>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
