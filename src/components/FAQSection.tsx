import React, { useState, useEffect, useId } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search,
  Code2
} from 'lucide-react';
import { generateFaqSchema } from '../utils/faqHelper';

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQSectionProps {
  /** Array of question and answer objects */
  faqs?: FAQItem[];
  items?: FAQItem[];
  questions?: FAQItem[];
  /** Optional header title override */
  title?: string;
  /** Optional subtitle or descriptive context */
  description?: string;
  subtitle?: string;
  /** Name of the related insulation service (e.g. 'Spray Foam Insulation', 'Fire-Rated Insulation') */
  serviceName?: string;
  /** Identifier used to manage the injected script tag in document.head */
  scriptId?: string;
  /** Whether to inject the JSON-LD schema into document.head (defaults to true) */
  injectSchemaToHead?: boolean;
  schemaEnabled?: boolean;
  /** Whether to show the search filter input */
  searchEnabled?: boolean;
  /** Whether to show expand all / collapse all buttons */
  showExpandControls?: boolean;
  /** Optional extra CSS classes */
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  items,
  questions,
  title,
  description,
  subtitle,
  serviceName,
  scriptId,
  injectSchemaToHead = true,
  schemaEnabled = true,
  searchEnabled,
  showExpandControls = true,
  className = ''
}) => {
  const baseId = useId();
  // Support faqs, items, or questions prop interchangeably
  const rawList: FAQItem[] = faqs || items || questions || [];
  
  // Standardize items with clean id, question, answer
  const faqList: FAQItem[] = rawList
    .filter(item => item && item.question && item.answer)
    .map((item, idx) => ({
      id: item.id || `faq-item-${idx}`,
      question: item.question.trim(),
      answer: item.answer.trim(),
      category: item.category
    }));

  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First FAQ opened by default
  const [searchQuery, setSearchQuery] = useState('');

  const shouldEnableSchema = injectSchemaToHead && schemaEnabled;

  // Generate standardized Schema objects based on active visible FAQs
  const faqSchemaObj = generateFaqSchema(
    faqList.map(f => ({ question: f.question, answer: f.answer }))
  );
  const faqJsonLdString = JSON.stringify(faqSchemaObj);

  // Dynamically inject & synchronize JSON-LD FAQ Schema in document head for search engines
  useEffect(() => {
    if (!shouldEnableSchema || faqList.length === 0) return;

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
  }, [faqList, faqJsonLdString, scriptId, serviceName, shouldEnableSchema]);

  const toggleFaq = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleExpandAll = () => {
    setOpenIndexes(faqList.map((_, i) => i));
  };

  const handleCollapseAll = () => {
    setOpenIndexes([]);
  };

  // Filter FAQs based on query
  const filteredFaqs = faqList.filter(
    faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayTitle = title || (serviceName ? `Frequently Asked Questions: ${serviceName}` : 'Frequently Asked Questions');
  const displaySubtitle = description || subtitle || 'Verified Canadian building science answers, code standards, and practical installation guidance.';

  // Enable search by default if there are more than 3 FAQs, unless explicitly set
  const isSearchActive = searchEnabled !== undefined ? searchEnabled : faqList.length > 3;

  if (faqList.length === 0) return null;

  return (
    <section 
      id={`faq-section-${(serviceName || 'insulation').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
      className={`space-y-6 ${className}`}
      aria-label={displayTitle}
    >
      {/* In-Body JSON-LD Script for Search Crawlers */}
      {shouldEnableSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
        />
      )}

      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-800/60">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Building Science Q&A</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
              <Code2 className="w-3 h-3" />
              JSON-LD Schema Active
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {displayTitle}
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        {/* Controls: Expand/Collapse All */}
        {showExpandControls && faqList.length > 1 && (
          <div className="flex items-center gap-2 self-start md:self-end text-xs">
            <button
              type="button"
              onClick={handleExpandAll}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={handleCollapseAll}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
            >
              Collapse All
            </button>
          </div>
        )}
      </div>

      {/* Search Filter */}
      {isSearchActive && (
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${serviceName || 'insulation'} questions...`}
            aria-label={`Search questions for ${serviceName || 'insulation'}`}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      )}

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-xs">
            No questions matching "{searchQuery}". Try a different keyword or contact our building science team.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const originalIndex = faqList.findIndex(f => f.question === faq.question);
            const isOpen = openIndexes.includes(originalIndex);
            const buttonId = `${baseId}-faq-btn-${originalIndex}`;
            const panelId = `${baseId}-faq-panel-${originalIndex}`;

            return (
              <div 
                key={faq.id || faq.question}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900/90 border-amber-500/30 shadow-md shadow-amber-500/5' 
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFaq(originalIndex)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isOpen ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      Q
                    </span>
                    <span className={`text-base font-semibold transition-colors ${
                      isOpen ? 'text-amber-400' : 'text-slate-200'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-lg transition-transform ${
                    isOpen ? 'text-amber-400 rotate-180' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 pt-1 text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed space-y-2"
                  >
                    <div className="flex items-start gap-3 pt-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        A
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
