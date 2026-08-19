import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  Send,
  Building,
  Check
} from 'lucide-react';
import { MembershipInquiry, ViewMode } from '../types';
import { MEMBERSHIP_BENEFITS, PROVINCES_DATA, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface MembershipViewProps {
  onSaveMembership: (inquiry: MembershipInquiry) => void;
  onNavigate: (view: ViewMode) => void;
}

export const MembershipView: React.FC<MembershipViewProps> = ({ onSaveMembership, onNavigate }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    website: '',
    industry: 'Insulation Contractor',
    province: 'ON',
    city: '',
    selectedPlan: 'Annual Industry Membership - $10 CAD / Year'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiry: MembershipInquiry = {
      id: `mem-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      businessName: formData.businessName,
      contactName: formData.contactName,
      email: formData.email,
      website: formData.website,
      industry: formData.industry,
      province: formData.province,
      city: formData.city,
      selectedPlan: formData.selectedPlan,
      status: 'Received'
    };

    onSaveMembership(inquiry);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          Canadian Industry Membership
        </div>
        {/* Exact Master Headline */}
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          Join the Industry for $10/Year
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Affordable, verified presence for Canadian insulation contractors, spray foam applicators, builders, suppliers, and building science professionals.
        </p>
      </div>

      {/* Main Pricing Card (Clean, High Craft) */}
      <div className="max-w-xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center space-y-6">
          
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            All-Inclusive Industry Access
          </div>

          <div>
            <div className="text-5xl sm:text-6xl font-black text-white font-display tracking-tight">
              $10
              <span className="text-xl sm:text-2xl font-normal text-slate-400"> CAD / YEAR</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Billed annually at $10 CAD. Transparent renewal terms. Cancel anytime.
            </p>
          </div>

          {/* Transparent Benefit List */}
          <div className="border-t border-b border-slate-800 py-6 text-left space-y-3.5">
            {MEMBERSHIP_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-200">{benefit.title}</div>
                  <div className="text-xs text-slate-400 leading-snug">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#membership-form"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 transition-all block text-center"
            >
              JOIN FOR $10
            </a>
            <p className="text-[11px] text-slate-400 mt-2">
              No hidden add-ons. Direct email support via <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
            </p>
          </div>

        </div>
      </div>

      {/* Renewal Terms & Disclaimers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs text-slate-400">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
          <div className="font-bold text-slate-200 text-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Transparent Annual Terms</span>
          </div>
          <p>
            Memberships are billed once per year at $10 CAD. An annual renewal notification is sent 30 days prior to expiration. Members may update profile information or cancel anytime with zero cancellation penalties.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
          <div className="font-bold text-slate-200 text-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Verification Standard</span>
          </div>
          <p>
            All member profiles undergo verification to ensure active business registration and legitimate Canadian industry operations. SprayInsulations.ca maintains authentic directory listings.
          </p>
        </div>
      </div>

      {/* Onboarding Form */}
      <div id="membership-form" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Membership Application Received</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactName}</strong> from <strong>{formData.businessName}</strong>. Your $10/year membership registration has been received. Onboarding instructions have been dispatched to <strong>{formData.email}</strong> and <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
              >
                Register Another Business
              </button>
              <button
                onClick={() => onNavigate('directory')}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm"
              >
                View Directory
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white font-display">
                Business Membership Registration ($10/Year)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Provide your company details to activate your verified Canadian directory listing and member badge.
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
                  placeholder="e.g. Great Lakes Insulation Ltd."
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contact Person <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marc Dubois"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Business Email <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="info@greatlakesinsulation.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Company Website (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://greatlakesinsulation.ca"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Industry Role <span className="text-amber-400">*</span>
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option value="Spray Foam Contractor">Spray Foam Contractor</option>
                  <option value="Insulation Contractor">Insulation Contractor</option>
                  <option value="General Contractor">General Contractor</option>
                  <option value="Builder / Developer">Builder / Developer</option>
                  <option value="Renovation Company">Renovation Company</option>
                  <option value="Manufacturer / Supplier">Manufacturer / Supplier</option>
                  <option value="Architect / Engineer">Architect / Engineer</option>
                </select>
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
                  Primary City <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Barrie, Ottawa, Calgary"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>JOIN FOR $10 / YEAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
