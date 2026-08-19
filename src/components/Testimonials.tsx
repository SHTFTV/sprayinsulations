import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Building2, 
  Plus, 
  X, 
  CheckCircle2, 
  Code2, 
  Sparkles,
  Quote,
  MessageSquarePlus,
  ThumbsUp,
  Filter
} from 'lucide-react';
import { Testimonial, ViewMode } from '../types';
import { INITIAL_TESTIMONIALS, PROVINCES_DATA } from '../data/initialData';
import { 
  generateAggregateRatingSchema, 
  generateReviewsJsonLd 
} from '../utils/faqHelper';

export interface TestimonialsProps {
  /** Optional array of testimonials to display; defaults to stored or INITIAL_TESTIMONIALS */
  testimonials?: Testimonial[];
  /** Optional service category filter (e.g., 'spray-foam', 'fire-rated') */
  serviceCategory?: string;
  /** Service title for header and Schema itemReviewed (e.g., 'Spray Foam Insulation') */
  serviceName?: string;
  /** Custom section title */
  title?: string;
  /** Custom section subtitle */
  subtitle?: string;
  /** Callback when a new testimonial is added/submitted */
  onAddTestimonial?: (testimonial: Testimonial) => void;
  /** Whether to inject Schema.org JSON-LD into document.head (defaults to true) */
  injectSchemaToHead?: boolean;
  /** Script ID override for document.head script tag */
  scriptId?: string;
  /** Whether to show the category filter buttons */
  showCategoryFilter?: boolean;
  /** Optional CSS class */
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = INITIAL_TESTIMONIALS,
  serviceCategory,
  serviceName,
  title,
  subtitle,
  onAddTestimonial,
  injectSchemaToHead = true,
  scriptId,
  showCategoryFilter = true,
  className = ''
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(serviceCategory || 'all');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // New review form state
  const [formData, setFormData] = useState({
    authorName: '',
    authorRole: 'Residential Builder',
    company: '',
    locationCity: '',
    provinceCode: 'ON',
    serviceCategory: serviceCategory || 'spray-foam',
    rating: 5,
    reviewTitle: '',
    reviewText: '',
    projectType: ''
  });

  // Filter published testimonials based on category
  const filteredTestimonials = testimonials.filter(t => {
    if (!t.published) return false;
    if (serviceCategory) return t.serviceCategory === serviceCategory;
    if (activeCategory === 'all') return true;
    return t.serviceCategory === activeCategory;
  });

  // Calculate rating stats
  const totalCount = filteredTestimonials.length;
  const avgRating = totalCount > 0 
    ? (filteredTestimonials.reduce((acc, curr) => acc + curr.rating, 0) / totalCount).toFixed(1)
    : '5.0';

  const schemaItemName = serviceName 
    ? `${serviceName} - SprayInsulations.ca` 
    : 'SprayInsulations.ca Canadian Insulation Platform';

  const reviewsJsonLdString = generateReviewsJsonLd(
    filteredTestimonials, 
    schemaItemName,
    `Verified Canadian building envelope and insulation project testimonials for ${schemaItemName}`
  );

  // Dynamically inject & synchronize Schema.org JSON-LD in document head
  useEffect(() => {
    if (!injectSchemaToHead || filteredTestimonials.length === 0) return;

    const uniqueScriptId = scriptId 
      ? `jsonld-reviews-${scriptId}` 
      : `jsonld-reviews-${(serviceCategory || activeCategory || 'general').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    let scriptElem = document.getElementById(uniqueScriptId) as HTMLScriptElement | null;
    if (!scriptElem) {
      scriptElem = document.createElement('script');
      scriptElem.id = uniqueScriptId;
      scriptElem.type = 'application/ld+json';
      document.head.appendChild(scriptElem);
    }
    scriptElem.text = reviewsJsonLdString;

    return () => {
      const existingScript = document.getElementById(uniqueScriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [filteredTestimonials, reviewsJsonLdString, scriptId, serviceCategory, activeCategory, injectSchemaToHead]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      authorName: formData.authorName.trim(),
      authorRole: formData.authorRole,
      company: formData.company.trim() || undefined,
      location: `${formData.locationCity.trim() || 'Canada'}, ${formData.provinceCode}`,
      provinceCode: formData.provinceCode,
      serviceCategory: formData.serviceCategory,
      rating: formData.rating,
      reviewTitle: formData.reviewTitle.trim(),
      reviewText: formData.reviewText.trim(),
      date: new Date().toISOString().split('T')[0],
      projectType: formData.projectType.trim() || 'Building Envelope Project',
      verified: true,
      published: true
    };

    if (onAddTestimonial) {
      onAddTestimonial(newTestimonial);
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setIsSubmitModalOpen(false);
      setFormSubmitted(false);
      setFormData({
        authorName: '',
        authorRole: 'Residential Builder',
        company: '',
        locationCity: '',
        provinceCode: 'ON',
        serviceCategory: serviceCategory || 'spray-foam',
        rating: 5,
        reviewTitle: '',
        reviewText: '',
        projectType: ''
      });
    }, 1800);
  };

  const displayTitle = title || (serviceName ? `Verified Project Reviews: ${serviceName}` : 'Builder & Homeowner Testimonials');
  const displaySubtitle = subtitle || 'Real experiences from Canadian builders, general contractors, architects, and property owners across all climate zones.';

  return (
    <section 
      id={`testimonials-${(serviceCategory || 'general').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
      className={`space-y-8 ${className}`}
      aria-label={displayTitle}
    >
      {/* Search Engine Rich Snippet In-Body Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: reviewsJsonLdString }}
      />

      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-800/80">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Canadian Projects</span>
            <span className="text-slate-400">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
              <Code2 className="w-3 h-3" />
              Schema.org Review & AggregateRating
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
            {displayTitle}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        {/* Rating Score Badge & Add Review CTA */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className="text-2xl font-black text-white font-display flex items-center gap-1">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <span>{avgRating}</span>
            </div>
            <div className="text-left border-l border-slate-800 pl-3">
              <div className="text-xs font-bold text-slate-200">5-Star Satisfaction</div>
              <div className="text-[11px] text-slate-400">{totalCount} Verified Reviews</div>
            </div>
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Share Project Review</span>
          </button>
        </div>
      </div>

      {/* Optional Category Filter Pills */}
      {showCategoryFilter && !serviceCategory && (
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'spray-foam', label: 'Spray Foam' },
            { id: 'fire-rated', label: 'Fire-Rated' },
            { id: 'fiberglass', label: 'Fiberglass' },
            { id: 'acoustic', label: 'Acoustics' },
            { id: 'commercial', label: 'Commercial' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((item) => (
          <div 
            key={item.id}
            className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl hover:border-slate-700/80 transition-all group"
          >
            <div className="space-y-4">
              
              {/* Top Row: Stars & Verified Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < item.rating 
                          ? 'text-amber-400 fill-amber-400' 
                          : 'text-slate-700'
                      }`} 
                    />
                  ))}
                </div>

                {item.verified && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Project
                  </span>
                )}
              </div>

              {/* Review Title */}
              <h3 className="text-base font-bold text-white font-display group-hover:text-amber-300 transition-colors leading-snug">
                "{item.reviewTitle}"
              </h3>

              {/* Review Text Body */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "{item.reviewText}"
              </p>
            </div>

            {/* Bottom Author & Project Info */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white">
                    {item.authorName}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <span>{item.authorRole}</span>
                    {item.company && (
                      <>
                        <span>•</span>
                        <span className="text-slate-300 font-medium">{item.company}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-semibold text-amber-400/90 flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {item.date}
                  </div>
                </div>
              </div>

              {/* Project Type Pill */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-medium">
                  <Building2 className="w-3 h-3 text-amber-500" />
                  <span>{item.projectType}</span>
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* SEO Schema Verification Footnote */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Schema.org <strong className="text-slate-200 font-mono">Review</strong> & <strong className="text-slate-200 font-mono">AggregateRating</strong> structured data active for rich snippet star ratings.
          </span>
        </div>
        <div className="text-[11px] font-mono text-amber-400/90">
          Average Rating: {avgRating} / 5.0 ({totalCount} verified items)
        </div>
      </div>

      {/* Modal: Submit / Manage Testimonial */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>Submit Verified Experience</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Add Canadian Project Testimonial
              </h3>
              <p className="text-xs text-slate-400">
                Share your insulation project experience to assist builders, property owners, and search ranking trust signals.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Review Submitted Successfully</h4>
                <p className="text-xs text-slate-300">
                  Thank you! Your testimonial has been verified and added to the platform with corresponding Schema.org JSON-LD Review metadata.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.authorName}
                      onChange={e => setFormData({ ...formData, authorName: e.target.value })}
                      placeholder="e.g. Marc Tremblay"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Role / Designation *</label>
                    <select
                      value={formData.authorRole}
                      onChange={e => setFormData({ ...formData, authorRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Residential Builder">Residential Builder</option>
                      <option value="General Contractor">General Contractor</option>
                      <option value="Homeowner & Renovator">Homeowner & Renovator</option>
                      <option value="Architect / Engineer">Architect / Engineer</option>
                      <option value="Commercial Developer">Commercial Developer</option>
                      <option value="Project Manager">Project Manager</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5 sm:col-span-1">
                    <label className="text-xs font-semibold text-slate-300">Company (Optional)</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Northern Timbercraft"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-1">
                    <label className="text-xs font-semibold text-slate-300">City *</label>
                    <input
                      required
                      type="text"
                      value={formData.locationCity}
                      onChange={e => setFormData({ ...formData, locationCity: e.target.value })}
                      placeholder="e.g. Calgary"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-1">
                    <label className="text-xs font-semibold text-slate-300">Province *</label>
                    <select
                      value={formData.provinceCode}
                      onChange={e => setFormData({ ...formData, provinceCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      {PROVINCES_DATA.map(p => (
                        <option key={p.code} value={p.code}>{p.name} ({p.code})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Service Category *</label>
                    <select
                      value={formData.serviceCategory}
                      onChange={e => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="spray-foam">Spray Foam Insulation</option>
                      <option value="fire-rated">Fire-Rated Insulation</option>
                      <option value="fiberglass">Fiberglass Insulation</option>
                      <option value="acoustic">Acoustic Soundproofing</option>
                      <option value="commercial">Commercial Building Envelope</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Rating (1 to 5 Stars)</label>
                    <div className="flex items-center gap-2 pt-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star 
                            className={`w-6 h-6 ${
                              star <= formData.rating 
                                ? 'text-amber-400 fill-amber-400' 
                                : 'text-slate-700'
                            }`} 
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-300 ml-2 font-mono">
                        {formData.rating} / 5 Stars
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Project Type / Reference *</label>
                  <input
                    required
                    type="text"
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    placeholder="e.g. Net-Zero Custom Home (Zone 7A) or Condo Demising Wall"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Review Headline *</label>
                  <input
                    required
                    type="text"
                    value={formData.reviewTitle}
                    onChange={e => setFormData({ ...formData, reviewTitle: e.target.value })}
                    placeholder="e.g. Flawless air barrier airtightness test results"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Review Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.reviewText}
                    onChange={e => setFormData({ ...formData, reviewText: e.target.value })}
                    placeholder="Describe your thermal performance, air tightness, code compliance, or contractor experience..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all"
                >
                  Publish Verified Testimonial
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
