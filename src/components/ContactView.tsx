import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  HelpCircle,
  Building 
} from 'lucide-react';
import { ConsumerLead, ViewMode } from '../types';
import { PRIMARY_CONTACT_EMAIL, PROVINCES_DATA } from '../data/initialData';

interface ContactViewProps {
  onSaveLead: (lead: ConsumerLead) => void;
  onNavigate: (view: ViewMode) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onSaveLead, onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: 'ON',
    city: '',
    projectType: 'General Inquiry',
    serviceNeeded: 'Building Envelope Consultation',
    timeline: 'Standard Inquiries (1-3 Business Days)',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lead: ConsumerLead = {
      id: `lead-contact-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      province: formData.province,
      city: formData.city,
      projectType: formData.projectType,
      serviceNeeded: formData.serviceNeeded,
      timeline: formData.timeline,
      projectDetails: formData.projectDetails,
      status: 'New'
    };

    onSaveLead(lead);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          Central Dispatch Desk
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          Contact SprayInsulations.ca
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Inquiries for project assistance, contractor onboarding, guest publishing, or municipal partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Information Column */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white font-display">
              Primary Electronic Inquiries
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Official Website Email</div>
                  <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`} className="text-amber-400 font-bold hover:underline">
                    {PRIMARY_CONTACT_EMAIL}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Monitored continuously for inquiries nationwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 text-slate-400 border border-slate-800 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Response Times</div>
                  <div className="text-slate-200 font-medium">1–2 Business Days</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Urgent contractor and city partnership requests are prioritized.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 text-slate-400 border border-slate-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Operating Territory</div>
                  <div className="text-slate-200 font-medium">All 13 Provinces & Territories</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Canada-wide network infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300">Brand Architecture:</div>
              <div>SprayInsulations.ca is a division of <strong>Builders Has</strong> and is <strong>Powered by Industry Army Marketing</strong>.</div>
            </div>
          </div>

          {/* Direct B2B shortcuts */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
            <div className="font-bold text-slate-300 uppercase tracking-wider">Quick B2B Portals</div>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('city-partnerships')}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-left text-slate-300 font-semibold border border-slate-800 flex justify-between items-center"
              >
                <span>Exclusive City Partnerships</span>
                <span className="text-amber-400 font-mono">$10/100k</span>
              </button>
              <button
                onClick={() => onNavigate('membership')}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-left text-slate-300 font-semibold border border-slate-800 flex justify-between items-center"
              >
                <span>Contractor & Business Membership</span>
                <span className="text-amber-400 font-mono">$10/Year</span>
              </button>
              <button
                onClick={() => onNavigate('guest-posts')}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-left text-slate-300 font-semibold border border-slate-800 flex justify-between items-center"
              >
                <span>Guest Post Submissions</span>
                <span className="text-amber-400 font-mono">$10 Post</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Inquiry Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your message regarding <em>{formData.serviceNeeded}</em> has been logged. An email copy has been dispatched to <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-2xl font-bold text-white font-display">
                    Send Direct Message
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below and our team will get in touch.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.ca"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      City / Municipality
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Edmonton"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Subject / Topic <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  >
                    <option value="General Consumer Project Inquiry">General Consumer Project Inquiry</option>
                    <option value="Spray Foam Insulation Specs">Spray Foam Insulation Specs</option>
                    <option value="Fire Rated & Thermal Barrier Query">Fire Rated & Thermal Barrier Query</option>
                    <option value="Acoustic Soundproofing Project">Acoustic Soundproofing Project</option>
                    <option value="City Partnership Inquiry">Exclusive City Partnership Inquiry</option>
                    <option value="Directory Membership Question">Directory Membership Question</option>
                    <option value="Guest Post Editorial Submission">Guest Post Editorial Submission</option>
                    <option value="Marketing & Advertising">Marketing & Advertising Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message / Project Details <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide relevant details, square footage, building type, or partnership inquiries..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to SprayInsulations.ca</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Direct routing to <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
