import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  PenTool, 
  Award, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Trash2, 
  Download, 
  RefreshCw,
  Search,
  Building2,
  TrendingUp,
  Star,
  MessageSquare,
  Eye,
  EyeOff,
  Plus
} from 'lucide-react';
import { 
  ConsumerLead, 
  GuestPostSubmission, 
  MembershipInquiry, 
  CityPartnershipApplication, 
  CityData,
  MarketingInquiry,
  Testimonial 
} from '../types';
import { PRIMARY_CONTACT_EMAIL } from '../data/initialData';

interface AdminViewProps {
  leads: ConsumerLead[];
  guestPosts: GuestPostSubmission[];
  memberships: MembershipInquiry[];
  cityPartnerships: CityPartnershipApplication[];
  marketingInquiries: MarketingInquiry[];
  cities: CityData[];
  testimonials: Testimonial[];
  onAddTestimonial: (testimonial: Testimonial) => void;
  onToggleTestimonialPublished: (id: string) => void;
  onDeleteTestimonial: (id: string) => void;
  onUpdateCityStatus: (cityId: string, status: 'AVAILABLE' | 'PENDING' | 'PARTNERED') => void;
  onClearData: () => void;
}

export const AdminView: React.FC<AdminViewProps> = ({
  leads,
  guestPosts,
  memberships,
  cityPartnerships,
  marketingInquiries,
  cities,
  testimonials,
  onAddTestimonial,
  onToggleTestimonialPublished,
  onDeleteTestimonial,
  onUpdateCityStatus,
  onClearData
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'testimonials' | 'partnerships' | 'memberships' | 'guestposts' | 'cities'>('leads');
  const [searchFilter, setSearchFilter] = useState('');

  const exportDataAsJson = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      leads,
      testimonials,
      guestPosts,
      memberships,
      cityPartnerships,
      marketingInquiries,
      cities
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sprayinsulations-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Platform Control Desk
          </div>
          <h1 className="text-3xl font-black text-white font-display tracking-tight mt-1">
            SprayInsulations.ca Administration
          </h1>
          <p className="text-xs text-slate-400">
            Centrally manage consumer leads, B2B membership signups, $10 guest post submissions, and exclusive city market partnerships.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={exportDataAsJson}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Export Submissions</span>
          </button>
        </div>
      </div>

      {/* Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div 
          onClick={() => setActiveTab('leads')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'leads' ? 'bg-slate-900 border-amber-500 shadow-lg' : 'bg-slate-950 border-slate-800 hover:bg-slate-900'
          }`}
        >
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Consumer Leads</span>
            <Users className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white font-display mt-1">{leads.length}</div>
        </div>

        <div 
          onClick={() => setActiveTab('testimonials')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'testimonials' ? 'bg-slate-900 border-amber-500 shadow-lg' : 'bg-slate-950 border-slate-800 hover:bg-slate-900'
          }`}
        >
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Testimonials</span>
            <Star className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white font-display mt-1">{testimonials.length}</div>
        </div>

        <div 
          onClick={() => setActiveTab('partnerships')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'partnerships' ? 'bg-slate-900 border-amber-500 shadow-lg' : 'bg-slate-950 border-slate-800 hover:bg-slate-900'
          }`}
        >
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>City Partners</span>
            <MapPin className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black text-white font-display mt-1">{cityPartnerships.length}</div>
        </div>

        <div 
          onClick={() => setActiveTab('memberships')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'memberships' ? 'bg-slate-900 border-amber-500 shadow-lg' : 'bg-slate-950 border-slate-800 hover:bg-slate-900'
          }`}
        >
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>$10 Memberships</span>
            <Award className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-black text-white font-display mt-1">{memberships.length}</div>
        </div>

        <div 
          onClick={() => setActiveTab('guestposts')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'guestposts' ? 'bg-slate-900 border-amber-500 shadow-lg' : 'bg-slate-950 border-slate-800 hover:bg-slate-900'
          }`}
        >
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>$10 Guest Posts</span>
            <PenTool className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-white font-display mt-1">{guestPosts.length}</div>
        </div>

        <div 
          onClick={() => setActiveTab('cities')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'cities' ? 'bg-slate-900 border-amber-500 shadow-lg' : 'bg-slate-950 border-slate-800 hover:bg-slate-900'
          }`}
        >
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>City Territories</span>
            <Building2 className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-black text-white font-display mt-1">{cities.length}</div>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        
        {/* LEADS TAB */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white font-display">
              Consumer Project Inquiries ({leads.length})
            </h2>
            {leads.length === 0 ? (
              <p className="text-xs text-slate-400 py-8 text-center">No consumer project leads recorded yet.</p>
            ) : (
              <div className="space-y-3">
                {leads.map(lead => (
                  <div key={lead.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{lead.fullName}</span>
                        <span className="text-slate-400">({lead.email} {lead.phone && `• ${lead.phone}`})</span>
                      </div>
                      <span className="font-mono text-amber-400">{lead.date}</span>
                    </div>
                    <div className="text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div><strong>Location:</strong> {lead.city || 'N/A'}, {lead.province}</div>
                      <div><strong>Service:</strong> {lead.serviceNeeded}</div>
                      <div><strong>Project Type:</strong> {lead.projectType} ({lead.timeline})</div>
                    </div>
                    {lead.projectDetails && (
                      <div className="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-850">
                        {lead.projectDetails}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TESTIMONIALS TAB */}
        {activeTab === 'testimonials' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white font-display">
                  Verified Testimonials & Reviews ({testimonials.length})
                </h2>
                <p className="text-xs text-slate-400">
                  Manage trust-building project reviews, star ratings, and Schema.org JSON-LD visibility.
                </p>
              </div>
            </div>

            {testimonials.length === 0 ? (
              <p className="text-xs text-slate-400 py-8 text-center">No testimonials recorded yet.</p>
            ) : (
              <div className="space-y-3">
                {testimonials.map(item => (
                  <div key={item.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < item.rating ? 'fill-amber-400' : 'text-slate-700'}`} 
                            />
                          ))}
                        </div>
                        <span className="font-bold text-white text-sm">"{item.reviewTitle}"</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onToggleTestimonialPublished(item.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                            item.published 
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                              : 'bg-slate-900 text-slate-400 border border-slate-800'
                          }`}
                        >
                          {item.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                          <span>{item.published ? 'Published' : 'Hidden'}</span>
                        </button>

                        <button
                          onClick={() => onDeleteTestimonial(item.id)}
                          className="p-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900/60 border border-red-900/40 transition-colors"
                          title="Delete Review"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 italic">
                      "{item.reviewText}"
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-850 text-xs text-slate-400">
                      <div>
                        <strong className="text-slate-200">{item.authorName}</strong> ({item.authorRole}{item.company ? ` • ${item.company}` : ''}) • <span className="text-amber-400">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">{item.serviceCategory}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CITY PARTNERSHIPS TAB */}
        {activeTab === 'partnerships' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white font-display">
              Exclusive City Partnership Applications ({cityPartnerships.length})
            </h2>
            {cityPartnerships.length === 0 ? (
              <p className="text-xs text-slate-400 py-8 text-center">No city partnership applications received yet.</p>
            ) : (
              <div className="space-y-3">
                {cityPartnerships.map(app => (
                  <div key={app.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{app.businessName}</span>
                        <span className="text-slate-400">({app.contactName} • {app.email})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-400 font-mono">${app.calculatedAnnualFee} CAD/yr</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px] border border-amber-500/20">{app.status}</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div><strong>Territory:</strong> {app.city}, {app.province}</div>
                      <div><strong>Population:</strong> {app.estimatedPopulation.toLocaleString()}</div>
                      <div><strong>Industry:</strong> {app.industry} ({app.desiredStartDate})</div>
                    </div>
                    {app.interestReason && (
                      <div className="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-850">
                        <strong>Notes:</strong> {app.interestReason}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MEMBERSHIPS TAB */}
        {activeTab === 'memberships' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white font-display">
              $10/Year Membership Signups ({memberships.length})
            </h2>
            {memberships.length === 0 ? (
              <p className="text-xs text-slate-400 py-8 text-center">No membership registrations logged yet.</p>
            ) : (
              <div className="space-y-3">
                {memberships.map(mem => (
                  <div key={mem.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{mem.businessName}</span>
                        <span className="text-slate-400">({mem.contactName} • {mem.email})</span>
                      </div>
                      <span className="font-mono text-emerald-400 font-bold">$10 CAD/yr</span>
                    </div>
                    <div className="text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div><strong>Role:</strong> {mem.industry}</div>
                      <div><strong>Location:</strong> {mem.city}, {mem.province}</div>
                      <div><strong>Website:</strong> {mem.website || 'None'}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* GUEST POSTS TAB */}
        {activeTab === 'guestposts' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white font-display">
              Guest Post Submissions ($10 Editorial Review) ({guestPosts.length})
            </h2>
            {guestPosts.length === 0 ? (
              <p className="text-xs text-slate-400 py-8 text-center">No guest post submissions yet.</p>
            ) : (
              <div className="space-y-4">
                {guestPosts.map(post => (
                  <div key={post.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-white font-display">{post.articleTitle}</h3>
                        <div className="text-xs text-slate-400">
                          By <strong>{post.authorName}</strong> ({post.companyName}) • {post.email}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 text-xs border border-yellow-500/20">
                        {post.status} ($10 Fee)
                      </span>
                    </div>
                    <div className="text-xs text-amber-400 font-mono">Topic: {post.articleTopic}</div>
                    <div className="text-xs text-slate-300 p-3 rounded-xl bg-slate-900 border border-slate-850 whitespace-pre-wrap max-h-48 overflow-y-auto">
                      {post.content}
                    </div>
                    <div className="text-xs text-slate-400 italic">
                      <strong>Bio:</strong> {post.authorBio}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CITIES TERRITORY MANAGER TAB */}
        {activeTab === 'cities' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white font-display">
                  City Exclusivity Territory Manager ({cities.length} Municipalities)
                </h2>
                <p className="text-xs text-slate-400">
                  Toggle market exclusivity live across Canadian cities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map(city => (
                <div key={city.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">{city.provinceCode}</span>
                    <span className="text-xs text-amber-400 font-mono">Pop: {city.population.toLocaleString()}</span>
                  </div>
                  <div className="text-base font-bold text-white font-display">{city.name}</div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 uppercase font-mono block">Status Control:</label>
                    <select
                      value={city.partnershipStatus}
                      onChange={(e) => onUpdateCityStatus(city.id, e.target.value as any)}
                      className={`w-full px-2.5 py-1.5 rounded-lg text-xs font-bold font-mono border focus:outline-none ${
                        city.partnershipStatus === 'AVAILABLE'
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                          : city.partnershipStatus === 'PENDING'
                          ? 'bg-yellow-950 text-yellow-300 border-yellow-700'
                          : 'bg-indigo-950 text-indigo-300 border-indigo-700'
                      }`}
                    >
                      <option value="AVAILABLE">AVAILABLE (Open Territory)</option>
                      <option value="PENDING">PENDING (Application Under Review)</option>
                      <option value="PARTNERED">PARTNERED (Exclusive Partner Assigned)</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
