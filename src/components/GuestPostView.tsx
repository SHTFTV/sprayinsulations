import React, { useState } from 'react';
import { 
  PenTool, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  FileText, 
  Send, 
  DollarSign, 
  Eye 
} from 'lucide-react';
import { GuestPostSubmission, ViewMode } from '../types';
import { PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface GuestPostViewProps {
  onSaveSubmission: (submission: GuestPostSubmission) => void;
  onNavigate: (view: ViewMode) => void;
}

export const GuestPostView: React.FC<GuestPostViewProps> = ({ onSaveSubmission, onNavigate }) => {
  const [formData, setFormData] = useState({
    authorName: '',
    companyName: '',
    email: '',
    websiteUrl: '',
    industryCategory: 'Insulation & Building Envelope',
    articleTitle: '',
    articleTopic: 'Insulation Education',
    content: '',
    authorBio: '',
    feeAcknowledged: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission: GuestPostSubmission = {
      id: `gp-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      authorName: formData.authorName,
      companyName: formData.companyName,
      email: formData.email,
      websiteUrl: formData.websiteUrl,
      industryCategory: formData.industryCategory,
      articleTitle: formData.articleTitle,
      articleTopic: formData.articleTopic,
      content: formData.content,
      authorBio: formData.authorBio,
      feeAcknowledged: formData.feeAcknowledged,
      status: 'Submitted'
    };

    onSaveSubmission(submission);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <PenTool className="w-3.5 h-3.5" />
          Industry Publishing Program
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          Guest Post With Us
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 font-mono font-bold text-lg">
          $10 CAD per Guest Post Submission
        </div>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Share your building science knowledge, contractor case studies, energy efficiency methods, and product expertise with Canada's building envelope audience.
        </p>
      </div>

      {/* Guidelines & Editorial Standards (Strict Trust Rules) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="text-base font-bold text-white font-display">
            Legitimate Educational Value
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Submissions must provide useful, actionable knowledge for Canadian homeowners, builders, or insulation contractors. Thin promotional filler will not pass review.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="text-base font-bold text-white font-display">
            Editorial Review & Transparency
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            All submitted articles undergo human editorial review for technical accuracy. Guest contributions are transparently labeled as guest industry articles.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="text-base font-bold text-white font-display">
            Transparent Pricing ($10 CAD)
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            A simple $10 CAD editorial processing fee per approved submission. We do not make false guarantees regarding Google rankings, search positions, or backlinks.
          </p>
        </div>
      </div>

      {/* Approved Content Topics */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
          Accepted Article Topics
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            'Insulation Education',
            'Construction Technology',
            'Cold Climate Building Science',
            'Energy Efficiency & Step Codes',
            'Renovation Best Practices',
            'Contractor Technical Education',
            'Product Materials & Standards',
            'Canadian Industry News & Code Updates'
          ].map((topic, i) => (
            <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
              ✓ {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Submission Form */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white font-display">
                Guest Post Submission Received
              </h2>
              <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.authorName}</strong> ({formData.companyName}). Your submission <em>"{formData.articleTitle}"</em> has been logged for editorial review. Editorial notices will be sent to <strong>{formData.email}</strong> and dispatched to <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                <div><strong>Submission Fee:</strong> $10 CAD (Billed upon editorial acceptance)</div>
                <div><strong>Topic:</strong> {formData.articleTopic}</div>
                <div><strong>Author:</strong> {formData.authorName} • {formData.companyName}</div>
              </div>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
                >
                  Submit Another Article
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-white font-display">
                  Guest Post Submission Portal
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details, draft content, and author bio. All submissions are processed through our editorial team.
                </p>
              </div>

              {/* Author & Company Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Author Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins, P.Eng"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Organization Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arctic Building Systems Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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
                    placeholder="author@company.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Website URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://company.ca"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Industry Category
                  </label>
                  <select
                    value={formData.industryCategory}
                    onChange={(e) => setFormData({ ...formData, industryCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Insulation & Building Envelope">Insulation & Building Envelope</option>
                    <option value="General Contracting / Building">General Contracting / Building</option>
                    <option value="Architecture & Engineering">Architecture & Engineering</option>
                    <option value="Manufacturing & Building Products">Manufacturing & Building Products</option>
                    <option value="Energy Auditing / Consulting">Energy Auditing / Consulting</option>
                  </select>
                </div>
              </div>

              {/* Article Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Article Title <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Preventing Rim Joist Condensation in Zone 6 Climates"
                    value={formData.articleTitle}
                    onChange={(e) => setFormData({ ...formData, articleTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Topic Category <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={formData.articleTopic}
                    onChange={(e) => setFormData({ ...formData, articleTopic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Insulation Education">Insulation Education</option>
                    <option value="Building Science">Building Science & Dew Points</option>
                    <option value="Spray Foam Technology">Spray Foam Technology</option>
                    <option value="Fire Safety & Codes">Fire Safety & Code Assemblies</option>
                    <option value="Acoustic Systems">Acoustic Soundproofing</option>
                    <option value="Energy Efficiency">Energy Efficiency & Retrofits</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-semibold text-slate-300">
                    Article Content / Submission Draft <span className="text-amber-400">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{showPreview ? 'Hide Preview' : 'Show Live Preview'}</span>
                  </button>
                </div>
                <textarea
                  rows={8}
                  required
                  placeholder="Paste or write your article content here. Markdown formatting is supported (headings with ##, bullet points with -, bold text with **)..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none font-sans leading-relaxed"
                ></textarea>
              </div>

              {/* Preview Drawer */}
              {showPreview && formData.content && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="text-xs uppercase font-bold text-amber-400 font-mono">
                    Article Preview: {formData.articleTitle || 'Untitled Draft'}
                  </div>
                  <div className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {formData.content}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Author Bio (2-3 sentences) <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins is a certified building envelope specialist with 15 years experience in Canadian commercial insulation retrofits."
                  value={formData.authorBio}
                  onChange={(e) => setFormData({ ...formData, authorBio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Fee & Terms acknowledgment */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.feeAcknowledged}
                    onChange={(e) => setFormData({ ...formData, feeAcknowledged: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500"
                  />
                  <span className="text-xs text-slate-300 leading-snug">
                    I understand there is a <strong>$10 CAD editorial processing fee</strong> for guest post publication upon editorial review approval. I acknowledge that SprayInsulations.ca does not guarantee search engine rankings or traffic.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!formData.feeAcknowledged}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Guest Post for Editorial Review ($10 CAD)</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Official correspondence routed to <span className="text-amber-400">{PRIMARY_CONTACT_EMAIL}</span>.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};
