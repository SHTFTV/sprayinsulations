import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles, 
  Search,
  Code2
} from 'lucide-react';
import { generateFaqSchema, generateFaqJsonLd, FAQItem } from '../utils/faqHelper';

export interface FAQsProps {
  /** Array of question and answer objects */
  faqs: FAQItem[];
  /** Optional header title override */
  title?: string;
  /** Optional subtitle or descriptive context */
  subtitle?: string;
  /** Name of the related insulation service (e.g. 'Spray Foam Insulation', 'Fire-Rated Insulation') */
  serviceName?: string;
  /** Identifier used to manage the injected script tag in document.head */
  scriptId?: string;
  /** Whether to inject the JSON-LD schema into document.head (defaults to true) */
  injectSchemaToHead?: boolean;
  /** Optional extra CSS classes */
  className?: string;
}

export const FAQs: React.FC<FAQsProps> = ({
  faqs,
  title,
  subtitle,
  serviceName,
  scriptId,
  injectSchemaToHead = true,
  className = ''
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First FAQ opened by default
  const [searchQuery, setSearchQuery] = useState('');

  // Generate dynamic Schema objects using standardized helper
  const faqSchemaObj = generateFaqSchema(faqs);
  const faqJsonLdString = generateFaqJsonLd(faqs);

  // Dynamically inject & synchronize JSON-LD FAQ Schema in document head for SEO
  useEffect(() => {
    if (!injectSchemaToHead || !faqs || faqs.length === 0) return;

    const uniqueScriptId = scriptId 
      ? `jsonld-faq-${scriptId}` 
      : `jsonld-faq-${(serviceName || 'general').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    let scriptElem = document.getElementById(uniqueScriptId) as HTMLScriptElement | null;
    if (!scriptElem) {
      scriptElem = document.createElement('script');
      scriptElem.id = uniqueScriptId;
      scriptElem.type = 'application/ld+json';
      document.head.appendChild(scriptElem);
    }
    scriptElem.text = faqJsonLdString;

    return () => {
      const existingScript = document.getElementById(uniqueScriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqs, faqJsonLdString, scriptId, serviceName, injectSchemaToHead]);

  const toggleFaq = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleExpandAll = () => {
    setOpenIndexes(faqs.map((_, i) => i));
  };

  const handleCollapseAll = () => {
    setOpenIndexes([]);
  };

  // Filter FAQs based on query
  const filteredFaqs = faqs.filter(
    faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayTitle = title || (serviceName ? `Frequently Asked Questions: ${serviceName}` : 'Frequently Asked Questions');
  const displaySubtitle = subtitle || 'Verified Canadian building science answers, code standards, and practical installation guidance.';

  return (
    <section 
      id={`faq-section-${(serviceName || 'insulation').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
      className={`space-y-6 ${className}`}
      aria-label={displayTitle}
    >
      {/* In-Body JSON-LD Script for Search Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
      />

      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-800/60">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Building Science Q&A</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
              <Code2 className="w-3 h-3" />
              JSON-LD Schema Active
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {displayTitle}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            {displaySubtitle}
          </p>
        </div>

        {/* Controls: Expand/Collapse All */}
        {faqs.length > 1 && (
          <div className="flex items-center gap-2 self-start md:self-end text-xs">
            <button
              onClick={handleExpandAll}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={handleCollapseAll}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
            >
              Collapse All
            </button>
          </div>
        )}
      </div>

      {/* Search Filter (if more than 3 FAQs) */}
      {faqs.length > 3 && (
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${serviceName || 'insulation'} questions...`}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      )}

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-sm text-slate-400">
            No questions matched your search term "{searchQuery}".
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const originalIndex = faqs.indexOf(faq);
            const isOpen = openIndexes.includes(originalIndex >= 0 ? originalIndex : idx);
            const faqId = `faq-${(serviceName || 'service').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`;

            return (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  id={`btn-${faqId}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${faqId}`}
                  onClick={() => toggleFaq(originalIndex >= 0 ? originalIndex : idx)}
                  className="w-full px-6 py-4.5 text-left font-semibold text-slate-100 flex items-center justify-between gap-4 hover:bg-slate-850 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      Q
                    </span>
                    <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  </div>
                  <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`panel-${faqId}`}
                    role="region"
                    aria-labelledby={`btn-${faqId}`}
                    className="px-6 pb-6 pt-3 text-sm text-slate-300 leading-relaxed border-t border-slate-800/70 bg-slate-950/40"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                        A
                      </span>
                      <div className="space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* SEO Schema Verification Footnote */}
      <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Schema.org <strong className="text-slate-300 font-mono">FAQPage</strong> JSON-LD structured data generated for Google rich results.</span>
        </div>
        <span className="hidden sm:inline font-mono text-[11px] text-amber-400/80">
          {faqs.length} FAQ entities mapped
        </span>
      </div>
    </section>
  );
};

export { FAQSection } from './FAQSection';

