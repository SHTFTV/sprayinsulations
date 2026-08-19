import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Building, Home, Hammer, Factory } from 'lucide-react';
import { ConsumerInquiry } from '../types';
import { PROVINCES_DATA, INSULATION_SERVICES, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface GetHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveInquiry: (inquiry: ConsumerInquiry) => void;
  initialService?: string;
  initialProvince?: string;
  initialCity?: string;
}

export const GetHelpModal: React.FC<GetHelpModalProps> = ({
  isOpen,
  onClose,
  onSaveInquiry,
  initialService,
  initialProvince,
  initialCity
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: initialProvince || 'ON',
    city: initialCity || '',
    projectType: 'Residential Home' as ConsumerInquiry['projectType'],
    serviceCategory: initialService || 'Spray Foam Insulation',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInquiry: ConsumerInquiry = {
      id: `lead-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      province: formData.province,
      city: formData.city,
      projectType: formData.projectType,
      serviceCategory: formData.serviceCategory,
      details: formData.details,
      status: 'New'
    };

    onSaveInquiry(newInquiry);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">
                Request Insulation Information & Help
              </h2>
              <p className="text-xs text-slate-400">
                Canada-wide building envelope and contractor resource connection
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Inquiry Received</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your project details for <strong>{formData.city || formData.province}</strong> have been logged. Official confirmation has been dispatched to <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                <div><strong>Service:</strong> {formData.serviceCategory}</div>
                <div><strong>Project Type:</strong> {formData.projectType}</div>
                <div><strong>Region:</strong> {formData.city ? `${formData.city}, ` : ''}{formData.province}</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David MacLeod"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Province / Territory <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {PROVINCES_DATA.map((p) => (
                      <option key={p.code} value={p.code}>
                        {p.name} ({p.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City / Municipality
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Toronto, Calgary, Surrey"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Residential Home">Residential Home (Owner/Occupant)</option>
                    <option value="Renovation / Retrofit">Renovation / Retrofit / Attic Upgrade</option>
                    <option value="New Construction">New Home Construction (Builder / GC)</option>
                    <option value="Commercial Building">Commercial / Industrial Property</option>
                    <option value="Multi-Family / Strata">Multi-Family / Strata / Condo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {INSULATION_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multiple / Unsure">General Building Envelope Assessment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Description or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your property, areas of concern (e.g., cold floors, ice damming, sound transmission, basement remodel), or specific timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Insulation Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Inquiries are directed to <span className="text-amber-400/90">{PRIMARY_CONTACT_EMAIL}</span>. No phone spam or fake telemarketing.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
