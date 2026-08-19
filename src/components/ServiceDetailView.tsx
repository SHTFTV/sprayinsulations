import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Flame, 
  Layers, 
  Volume2, 
  Hammer, 
  Building2, 
  Home, 
  Building,
  ChevronRight,
  FileCheck,
  Thermometer,
  Wind,
  Trash2,
  RefreshCw,
  TrendingUp,
  Info,
  ListChecks
} from 'lucide-react';
import { ViewMode, Testimonial, InsulationService } from '../types';
import { ALL_INSULATION_SERVICES, findServiceBySlug, getServiceOrDefault } from '../data/services';
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from '../utils/faqHelper';
import { FAQSection } from './FAQSection';
import { Testimonials } from './Testimonials';
import { InsulationEstimator } from './InsulationEstimator';
import { CodeDisclaimer } from './CodeDisclaimer';

interface ServiceDetailViewProps {
  serviceSlug?: string;
  faqs?: { question: string; answer: string }[];
  testimonials?: Testimonial[];
  onAddTestimonial?: (testimonial: Testimonial) => void;
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ 
  serviceSlug, 
  faqs,
  testimonials,
  onAddTestimonial,
  onNavigate, 
  onOpenGetHelp 
}) => {
  const service = getServiceOrDefault(serviceSlug);
  const [selectedProvinceCode, setSelectedProvinceCode] = useState<string>('');

  // Determine active list of FAQs (custom prop or default service FAQs)
  const activeFaqs = faqs && faqs.length > 0 ? faqs : (service.faqs || []);

  const getServiceIcon = (slugOrId: string) => {
    switch (slugOrId) {
      case 'spray-foam':
      case 'closed-cell-spray-foam':
      case 'open-cell-spray-foam':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'fire-rated':
        return <Flame className="w-6 h-6 text-orange-500" />;
      case 'fiberglass':
      case 'fiberglass-batt':
      case 'blown-in-fiberglass':
      case 'cellulose':
      case 'blown-in':
        return <Layers className="w-6 h-6 text-yellow-400" />;
      case 'acoustic':
        return <Volume2 className="w-6 h-6 text-cyan-400" />;
      case 'mineral-wool':
      case 'hi-bar':
      case 'rigid-board':
      case 'batt-blanket':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'thermal':
        return <Thermometer className="w-6 h-6 text-rose-400" />;
      case 'air-sealing':
        return <Wind className="w-6 h-6 text-sky-400" />;
      case 'attic-insulation':
      case 'crawlspace-insulation':
      case 'basement-insulation':
      case 'foundation-insulation':
      case 'wall-insulation':
        return <Home className="w-6 h-6 text-amber-400" />;
      case 'commercial':
      case 'commercial-insulation':
      case 'industrial-insulation':
        return <Building2 className="w-6 h-6 text-indigo-400" />;
      case 'repairs':
      case 'insulation-repairs':
        return <Hammer className="w-6 h-6 text-emerald-400" />;
      case 'insulation-removal':
        return <Trash2 className="w-6 h-6 text-red-400" />;
      case 'insulation-replacement':
        return <RefreshCw className="w-6 h-6 text-blue-400" />;
      case 'insulation-upgrades':
        return <TrendingUp className="w-6 h-6 text-green-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  // Breadcrumbs data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://sprayinsulations.ca/' },
    { name: 'Insulation Services', url: 'https://sprayinsulations.ca/#services' },
    { name: service.title, url: `https://sprayinsulations.ca/services/${service.slug}` }
  ];

  // Structured schemas
  const serviceSchemaObj = generateServiceSchema(service);
  const serviceJsonLd = JSON.stringify(serviceSchemaObj);
  const breadcrumbSchemaObj = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbJsonLd = JSON.stringify(breadcrumbSchemaObj);

  // Dynamic document metadata and schema injection into document head
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${service.title} | Technical Guidelines & Canadian Code Standards | SprayInsulations.ca`;

    // Manage meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    let createdMetaDesc = false;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
      createdMetaDesc = true;
    }
    const previousDesc = metaDesc.content;
    metaDesc.content = service.seoDescription || `${service.shortDesc} Explore Canadian building science guidelines, R-value targets, and code compliance notes.`;

    // Manage canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    let createdCanonical = false;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
      createdCanonical = true;
    }
    const previousCanonical = canonicalLink.href;
    canonicalLink.href = `https://sprayinsulations.ca/services/${service.slug}`;

    // Manage Service Schema script
    const serviceScriptId = `jsonld-service-${service.slug}`;
    let serviceScriptElem = document.getElementById(serviceScriptId) as HTMLScriptElement | null;
    if (!serviceScriptElem) {
      serviceScriptElem = document.createElement('script');
      serviceScriptElem.id = serviceScriptId;
      serviceScriptElem.type = 'application/ld+json';
      document.head.appendChild(serviceScriptElem);
    }
    serviceScriptElem.text = serviceJsonLd;

    // Manage Breadcrumb Schema script
    const breadcrumbScriptId = `jsonld-breadcrumb-${service.slug}`;
    let breadcrumbScriptElem = document.getElementById(breadcrumbScriptId) as HTMLScriptElement | null;
    if (!breadcrumbScriptElem) {
      breadcrumbScriptElem = document.createElement('script');
      breadcrumbScriptElem.id = breadcrumbScriptId;
      breadcrumbScriptElem.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScriptElem);
    }
    breadcrumbScriptElem.text = breadcrumbJsonLd;

    return () => {
      document.title = originalTitle;
      if (metaDesc) {
        if (createdMetaDesc) metaDesc.remove();
        else metaDesc.content = previousDesc;
      }
      if (canonicalLink) {
        if (createdCanonical) canonicalLink.remove();
        else canonicalLink.href = previousCanonical;
      }
      const existingServiceScript = document.getElementById(serviceScriptId);
      if (existingServiceScript) existingServiceScript.remove();
      const existingBreadcrumbScript = document.getElementById(breadcrumbScriptId);
      if (existingBreadcrumbScript) existingBreadcrumbScript.remove();
    };
  }, [service.slug, service.title, service.shortDesc, service.seoDescription, serviceJsonLd, breadcrumbJsonLd]);

  // Contextual related services resolution
  const relatedServices = React.useMemo(() => {
    if (service.relatedServices && service.relatedServices.length > 0) {
      return service.relatedServices
        .map(slug => findServiceBySlug(slug))
        .filter((s): s is InsulationService => Boolean(s));
    }
    // Fallback: return 4 other services
    return ALL_INSULATION_SERVICES.filter(s => s.id !== service.id).slice(0, 4);
  }, [service]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* In-Body Structured Data for Search Engine Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />

      {/* Accessible Breadcrumbs Navigation Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-800/80 pb-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
          <li>
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-amber-400 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          </li>
          <li>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-amber-400 transition-colors"
            >
              Insulation Services
            </button>
          </li>
          {service.categoryName && (
            <>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              </li>
              <li className="text-slate-400">
                {service.categoryName}
              </li>
            </>
          )}
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          </li>
          <li className="font-semibold text-amber-400" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-amber-400">
            {getServiceIcon(service.id)}
            <span>{service.categoryName || 'Canadian Building Science Category'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-lg text-amber-400/90 font-medium leading-snug">
            {service.heroTagline}
          </p>

          <p className="text-base text-slate-300 leading-relaxed">
            {service.overview}
          </p>

          {service.whatItIs && (
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-amber-400 uppercase tracking-wider block text-[10px]">Specification Definition:</span>
              <p className="leading-relaxed">{service.whatItIs}</p>
            </div>
          )}

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenGetHelp}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2"
            >
              <span>Consult an Insulation Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('canada')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all flex items-center gap-2"
            >
              <span>Explore Provincial Requirements</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
            <img
              src={service.image}
              alt={`${service.title} in Canadian building construction`}
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs space-y-1">
              <div className="text-amber-400 font-bold">Standard Reference & Thermal Target:</div>
              <div className="text-slate-300 leading-relaxed">{service.rValueGuidance}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Building Code Notice & Jurisdiction Selector */}
      <CodeDisclaimer
        selectedProvinceCode={selectedProvinceCode}
        onProvinceChange={setSelectedProvinceCode}
      />

      {/* Key Performance Benefits */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-bold text-white font-display">
          Key Performance & Technical Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.keyBenefits.map((benefit, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-300 leading-snug">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Residential vs Commercial Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Residential Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-amber-400 font-display font-bold text-xl">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <Home className="w-5 h-5" />
            </div>
            <span>Residential Applications</span>
          </div>
          <p className="text-xs text-slate-400">
            Engineered for single-family homes, retrofits, basements, attics, and multi-generational suites:
          </p>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {service.applications.residential.map((app, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Commercial Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-indigo-400 font-display font-bold text-xl">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <Building className="w-5 h-5" />
            </div>
            <span>Commercial & Multi-Unit Applications</span>
          </div>
          <p className="text-xs text-slate-400">
            Designed for commercial developments, multi-family mid-rises, industrial shops, and institutional facilities:
          </p>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {service.applications.commercial.map((app, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Considerations & Installation Steps (when available) */}
      {(service.considerations || service.installationProcess) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.considerations && (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-lg">
                <Info className="w-5 h-5 text-amber-400" />
                <span>Critical Specification Considerations</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {service.considerations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.installationProcess && (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-lg">
                <ListChecks className="w-5 h-5 text-emerald-400" />
                <span>Standard Installation & Verification Steps</span>
              </div>
              <ol className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {service.installationProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-slate-950 border border-slate-800 text-emerald-400 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {/* Building Science & Code Compliance Disclaimers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Building Science Note */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Canadian Climate Building Science</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {service.buildingScienceNote}
          </p>
        </div>

        {/* Code & Safety Compliance */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-400">
            <AlertTriangle className="w-4 h-4" />
            <span>Building Code Compliance Note</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {service.codeComplianceNote}
          </p>
          <p className="text-[11px] text-slate-400 italic">
            *Always verify specific assemblies with your local municipal building official, engineer, or certified architect.
          </p>
        </div>

      </div>

      {/* Interactive Material & Thickness Project Estimator */}
      <InsulationEstimator
        initialServiceId={service.id}
        onOpenGetHelp={onOpenGetHelp}
        onNavigate={onNavigate}
      />

      {/* Frequently Asked Questions Section with JSON-LD Schema */}
      <FAQSection
        faqs={activeFaqs}
        serviceName={service.title}
        scriptId={service.slug}
        injectSchemaToHead={true}
      />

      {/* Contextual Related Services Section */}
      {relatedServices.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-slate-800/80">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Complementary Assemblies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Related Insulation Services & Building Envelopes
            </h2>
            <p className="text-sm text-slate-400">
              High-performance Canadian buildings frequently combine complementary insulation materials to meet fire, thermal, and acoustic code standards:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((rel) => (
              <div 
                key={rel.id}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group space-y-4 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                      {getServiceIcon(rel.id)}
                    </div>
                    <span className="text-[10px] text-amber-400/80 font-mono">
                      {rel.categoryName || rel.slug}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {rel.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('service-detail', rel.slug)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-amber-500 text-slate-300 hover:text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-800"
                >
                  <span>Explore {rel.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Verified Project Testimonials & Schema.org Review Data */}
      <Testimonials
        testimonials={testimonials}
        serviceCategory={service.slug}
        serviceName={service.title}
        onAddTestimonial={onAddTestimonial}
        showCategoryFilter={false}
        scriptId={service.slug}
        title={`Verified Client Reviews: ${service.title}`}
        subtitle={`Real project feedback and performance results for ${service.title.toLowerCase()} assemblies across Canada.`}
      />

      {/* Bottom Consultation CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Have a project requiring {service.title}?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
            Connect with technical advisors to discuss project specifications, code compliance, R-value targets, and certified contractor requirements across Canada.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={onOpenGetHelp}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all"
          >
            REQUEST ASSISTANCE
          </button>
        </div>
      </div>

    </div>
  );
};
