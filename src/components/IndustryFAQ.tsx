import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  BookOpen, 
  Search, 
  Sparkles, 
  Flame, 
  FileText, 
  Scale, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { generateFaqSchema } from '../utils/faqHelper';

export interface IndustryFAQItem {
  id: string;
  category: 'codes' | 'fire' | 'spray-foam' | 'moisture' | 'step-code';
  categoryLabel: string;
  question: string;
  answer: string;
  codeReference?: string;
  standards?: string[];
}

export const CANADIAN_INDUSTRY_FAQS: IndustryFAQItem[] = [
  {
    id: 'nbc-9-36-compliance',
    category: 'codes',
    categoryLabel: 'National Building Code (NBC 9.36)',
    question: 'What are the minimum prescriptive insulation R-values required under National Building Code (NBC) 9.36 across Canadian Climate Zones?',
    answer: 'Under Section 9.36 of the National Building Code of Canada (Energy Efficiency in Housing and Small Buildings), minimum thermal resistance values are dictated by Heating Degree Day (HDD) climate zones (Zone 4 through Zone 8). For Zone 5 (3,000–3,999 HDD, e.g., Southern Ontario/BC Interior), attics require R-50 (RSI 8.81), above-grade walls require nominal R-22 or effective R-17.5, and foundation walls require R-17 continuous (RSI 2.98). In Zone 7A/7B (5,000+ HDD, e.g., Edmonton, Winnipeg, Northern Ontario), attics scale to R-60 (RSI 10.56) and exterior walls require R-28+ effective assemblies to mitigate severe perimeter thermal bridging.',
    codeReference: 'NBC 2020 Division B, Article 9.36.2.6 (Thermal Characteristics of Above-Ground Building Assemblies)',
    standards: ['NBC 9.36', 'CSA A440.2', 'CAN/CSA C814']
  },
  {
    id: 'thermal-barrier-drywall',
    category: 'fire',
    categoryLabel: 'Thermal Barriers & Fire Safety',
    question: 'When does the Canadian Building Code require a 15-minute thermal barrier (such as 1/2" drywall) over spray foam insulation?',
    answer: 'Under NBC 9.10.17.10 and 3.1.5.12, foamed plastics (both open-cell and closed-cell spray polyurethane foam) must be protected from the interior living space by an approved 15-minute thermal barrier or index rating meeting CAN/ULC S124 (Classification of Protective Coverings for Foamed Plastics). Acceptable standard prescriptive coverings include 12.7 mm (1/2") gypsum board (drywall), 11 mm (7/16") OSB/plywood, or a CAN/ULC S124 compliant intumescent coating tested over the specific brand and thickness of spray foam. In unoccupied crawlspaces or non-storage attic spaces, specific ignition barriers (meeting CAN/ULC S102/S124 Appendix B) may be accepted by local municipal authorities.',
    codeReference: 'NBC 2020 Article 9.10.17.10 (Protection of Foamed Plastics in Residential Occupancies)',
    standards: ['CAN/ULC S124', 'CAN/ULC S102', 'CAN/ULC S101']
  },
  {
    id: 'can-ulc-s705-standard',
    category: 'spray-foam',
    categoryLabel: 'Spray Foam Certification Standards',
    question: 'What is the CAN/ULC S705.1 product standard and CAN/ULC S705.2 installation standard for medium-density closed-cell spray foam?',
    answer: 'In Canada, closed-cell polyurethane foam is strictly regulated under a two-part National Standard of Canada: CAN/ULC S705.1 defines mandatory manufacturer material performance (including thermal resistance stability, core density of 30–35 kg/m³, dimensional stability, and water vapor permeance), while CAN/ULC S705.2 dictates mandatory on-site installer certification and daily quality assurance logging. Certified applicators must possess a valid Caliber, Morrison Hershfield, or CUFCA certification card, verify ambient and substrate moisture before spraying, document daily density cup tests and pass thicknesses, and affix physical manufacturer job-site compliance decals to the electrical panel upon completion.',
    codeReference: 'NBC Division B, Sentence 9.25.2.2.(1) & CAN/ULC S705.2 Clause 5',
    standards: ['CAN/ULC S705.1', 'CAN/ULC S705.2', 'CUFCA / Caliber QA']
  },
  {
    id: 'vapor-barrier-rules',
    category: 'moisture',
    categoryLabel: 'Moisture, Air & Vapor Retarders',
    question: 'Can 2.0 lb closed-cell spray foam act as both the air barrier and the vapor barrier without 6-mil polyethylene sheet?',
    answer: 'Yes. Under NBC 9.25.3 (Air Barrier Systems) and NBC 9.25.4 (Vapour Barriers), medium-density closed-cell spray foam (CAN/ULC S705.1) acts as a high-performance continuous air barrier when applied at a minimum thickness of 25.4 mm (1.0"). Furthermore, when applied at or above 50 mm (2.0"), closed-cell foam achieves a water vapor permeance of less than 60 ng/(Pa·s·m²), satisfying the National Building Code requirement for a Class II vapor retarder. In below-grade foundation walls or hybrid exterior flash-and-batt assemblies, eliminating separate interior poly sheet allows bidirectional drying while preventing interstitial summer condensation traps.',
    codeReference: 'NBC 2020 Part 9, Articles 9.25.3.2 & 9.25.4.2',
    standards: ['ASTM E96 (Water Vapor Transmission)', 'ASTM E2178 (Air Permeance)']
  },
  {
    id: 'provincial-step-codes',
    category: 'step-code',
    categoryLabel: 'Energy Step Codes & Net-Zero',
    question: 'How do BC Energy Step Code and Toronto Green Standard (TGS v4) affect insulation specification compared to prescriptive codes?',
    answer: 'Performance-based municipal bylaws like the BC Energy Step Code (Steps 1–5), the Toronto Green Standard (TGS Version 4), and Quebec Regulation for the Energy Efficiency of Buildings (RPEB) shift the compliance target from prescriptive individual R-values to whole-building metrics: Thermal Energy Demand Intensity (TEDI in kWh/m²/year), Total Energy Use Intensity (TEUI), and Airtightness (Air Changes per Hour @ 50 Pa). Achieving upper steps (e.g., TGS Tier 2/3 or BC Step 4/5 net-zero ready) requires unbroken continuous exterior insulation (eliminating balcony and floor slab thermal bridges), airtightness below 1.0–1.5 ACH50, and comprehensive 2D/3D thermal modeling under CSA A440.2 / ISO 10211.',
    codeReference: 'BC Building Code Section 9.36.6 / Toronto Green Standard v4 Core Metrics',
    standards: ['BC Energy Step Code', 'Toronto Green Standard v4', 'Passive House / PHIUS']
  },
  {
    id: 'radon-gas-crawlspace',
    category: 'moisture',
    categoryLabel: 'Moisture, Air & Vapor Retarders',
    question: 'What are the Canadian requirements for radon soil gas control and unvented conditioned crawlspace insulation?',
    answer: 'Under NBC 9.13.4 (Soil Gas Control), all new Canadian residential foundations must include rough-in provisions for radon extraction and an airtight air barrier across ground-contact floors. In unvented (conditioned) crawlspaces, the building envelope is brought to the perimeter concrete walls rather than the floor above. Applying 2" to 3" of monolithic closed-cell spray foam or taped continuous XPS rigid foam along foundation walls down to the interior footing, combined with a 6-mil poly ground cover sealed directly to the foam perimeter, prevents sub-slab moisture entry, stops convective cold-floor drafts, and prevents radon gas infiltration into the breathing envelope.',
    codeReference: 'NBC 2020 Subsection 9.13.4 (Soil Gas Control) & Article 9.25.2.3',
    standards: ['CAN/CGSB 51.34-M86', 'Health Canada Radon Guidelines']
  },
  {
    id: 'curtain-wall-spandrel',
    category: 'fire',
    categoryLabel: 'Thermal Barriers & Fire Safety',
    question: 'What non-combustible insulation standards apply to commercial spandrel glass and perimeter fire containment in multi-story buildings?',
    answer: 'In Part 3 high-rise and commercial buildings (non-combustible construction under NBC 3.1.5), perimeter curtain wall assemblies and perimeter slab edge joints must be protected with non-combustible insulation meeting CAN/ULC S114. High-density stone wool (mineral wool) boards rated for fire endurance exceeding 1,175°C (2,150°F) are specified along with firestop elastomeric mastics tested to CAN/ULC S115 to prevent the vertical propagation of fire, toxic smoke, and superheated gases between exterior spandrel cavities and occupied interior floor plates.',
    codeReference: 'NBC 2020 Part 3, Subsection 3.1.5 (Non-combustible Construction) & CAN/ULC S115',
    standards: ['CAN/ULC S114', 'CAN/ULC S115', 'ASTM E2307 (Perimeter Fire Barrier Tests)']
  }
];

export interface IndustryFAQProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const IndustryFAQ: React.FC<IndustryFAQProps> = ({
  title = 'Canadian Building Code & Technical Regulations FAQ',
  subtitle = 'Verified building science answers regarding National Building Code (NBC 9.36), CAN/ULC S705 spray foam standards, 15-minute thermal barriers, and provincial Step Code compliance.',
  className = ''
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'nbc-9-36-compliance': true,
    'thermal-barrier-drywall': true
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Code & Science Topics' },
    { id: 'codes', label: 'NBC 9.36 Prescriptive Codes' },
    { id: 'fire', label: 'Thermal Barriers & Fire (CAN/ULC S124)' },
    { id: 'spray-foam', label: 'Spray Foam Standards (S705.1/2)' },
    { id: 'moisture', label: 'Air & Vapor Retarders (NBC 9.25)' },
    { id: 'step-code', label: 'Step Codes & Net-Zero Targets' }
  ];

  const filteredFaqs = CANADIAN_INDUSTRY_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.codeReference && faq.codeReference.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyFaq = (faq: IndustryFAQItem) => {
    const text = `Q: ${faq.question}\n\nA: ${faq.answer}\n\nCode Reference: ${faq.codeReference || 'N/A'}\nSource: SprayInsulations.ca Canadian Building Science FAQ`;
    navigator.clipboard.writeText(text);
    setCopiedId(faq.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  // Generate structured FAQ JSON-LD schema
  const schemaPayload = generateFaqSchema(
    CANADIAN_INDUSTRY_FAQS.map(f => ({ question: f.question, answer: f.answer }))
  );

  return (
    <section 
      id="canadian-industry-faq-section"
      className={`rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8 ${className}`}
    >
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5" />
          <span>Building Science & Regulatory Authority</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Canadian building code clauses, CAN/ULC standards, drywall rules..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Category Pills (Scrollable on small screens) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-slate-950/60 rounded-2xl border border-slate-800/80 text-slate-400 text-xs">
            No building code questions matched your query. Try keywords like "drywall", "S705", "R-60", "vapor", or "Step Code".
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openFaqIds[faq.id];
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? 'bg-slate-950 border-amber-500/40 shadow-lg shadow-amber-500/5' 
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 group"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 font-bold uppercase">
                        {faq.categoryLabel}
                      </span>
                      {faq.standards && faq.standards.map((std, i) => (
                        <span key={i} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                          {std}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors font-display leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white shrink-0 mt-0.5">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 space-y-4 border-t border-slate-800/80 mt-1 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    <p className="pt-4 text-slate-300">
                      {faq.answer}
                    </p>

                    {/* Official Code Citation Box */}
                    {faq.codeReference && (
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                          <span><strong>Code Reference:</strong> {faq.codeReference}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopyFaq(faq)}
                          className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-850 border border-slate-700 text-[11px] text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
                          title="Copy question and citation to clipboard"
                        >
                          {copiedId === faq.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                              <span>Copy Citation</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Building Code Disclaimer Notice */}
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-1">
        <span className="font-semibold text-slate-300 block">General Educational Disclaimer:</span>
        <p>
          Building-code requirements vary by province, territory, building type and application. The information provided here is general educational information and is not a substitute for project-specific code review, professional advice or the applicable authority having jurisdiction.
        </p>
      </div>

      {/* Footer Support Callout */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-950 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="space-y-0.5 text-center sm:text-left">
          <span className="font-bold text-white block">
            Have a Specific Municipal Code or Architectural Assembly Question?
          </span>
          <p className="text-slate-400">
            Our building science network cross-references regional building officials, CCMC evaluation listings, and certified installers.
          </p>
        </div>

        <a
          href="mailto:contact@sprayinsulations.ca?subject=Building%20Code%20Technical%20Question"
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold whitespace-nowrap transition-colors flex items-center gap-1.5"
        >
          <span>Ask Building Science Team</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
};
