import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Mail, 
  Layers, 
  MapPin, 
  FileText, 
  Award, 
  Send,
  Building2 
} from 'lucide-react';
import { MarketingInquiry, ViewMode } from '../types';
import { PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface MarketWithUsViewProps {
  onSaveInquiry: (inquiry: MarketingInquiry) => void;
  onNavigate: (view: ViewMode) => void;
}

export const MarketWithUsView: React.FC<MarketWithUsViewProps> = ({ onSaveInquiry, onNavigate }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    website: '',
    interestAreas: ['Sponsored Content', 'Featured Business Placement'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (area: string) => {
    if (formData.interestAreas.includes(area)) {
      setFormData({ ...formData, interestAreas: formData.interestAreas.filter(a => a !== area) });
    } else {
      setFormData({ ...formData, interestAreas: [...formData.interestAreas, area] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiry: MarketingInquiry = {
      id: `mkt-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      website: formData.website,
      interestAreas: formData.interestAreas,
      message: formData.message
    };

    onSaveInquiry(inquiry);
    setSubmitted(true);
  };

  const marketingOpportunities = [
    {
      title: 'Sponsored Content & Technical Features',
      desc: 'Publish in-depth product spotlights, project case studies, and engineering insights directly within our building science resources library.',
      icon: <FileText className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Featured Business Directory Placement',
      desc: 'Top-tier verified listing in our Canadian contractor and supplier directory with direct company links and category badges.',
      icon: <Award className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'City-Level Market Exposure',
      desc: 'Prominent branding on specific Canadian municipal portal pages (Toronto, Vancouver, Calgary, Montreal, Edmonton, etc.).',
      icon: <MapPin className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Industry Advertising & Brand Positioning',
      desc: 'Targeted display placement across technical service pages visited by builders, property managers, and general contractors.',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5" />
          B2B Marketing & Exposure
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          Market With SprayInsulations.ca
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Accessible, high-intent brand positioning for manufacturers, equipment suppliers, contractors, and building science firms across Canada.
        </p>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {marketingOpportunities.map((opp, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
              {opp.icon}
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              {opp.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {opp.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Transparent Disclaimer Box */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1 leading-relaxed max-w-3xl mx-auto">
        <div className="font-semibold text-slate-300 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Transparent Platform Guarantee & Trust Rules</span>
        </div>
        <p>
          We provide legitimate industry visibility, clear brand positioning, and direct directory routing. We never fabricate impression metrics, traffic numbers, search ranking promises, or guaranteed conversion rates.
        </p>
      </div>

      {/* Inquiry Form */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Marketing Inquiry Received</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactName}</strong> ({formData.companyName}). Our partnership desk has logged your request. Direct confirmation sent to <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white font-display">
                Request Marketing Information
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Tell us about your brand and the promotional channels you wish to explore.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Company Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Canadian Foam Tech Inc."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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
                  placeholder="e.g. Mark Roberts"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Work Email <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="mark@company.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Company Website
                </label>
                <input
                  type="url"
                  placeholder="https://company.ca"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Interest Checkboxes */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Areas of Interest (Select all that apply):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  'Industry Advertising & Banners',
                  'Sponsored Technical Content',
                  'Featured Business Directory Placement',
                  'City-Level Portal Visibility',
                  'Product Launch Announcements',
                  'Exclusive Market Partnerships'
                ].map((item, i) => (
                  <label key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interestAreas.includes(item)}
                      onChange={() => toggleInterest(item)}
                      className="rounded border-slate-700 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-slate-300">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Campaign Objectives or Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your target Canadian markets, product categories, or preferred campaign timing..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>MARKET WITH US</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                Official contact: <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`} className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</a>
              </p>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
