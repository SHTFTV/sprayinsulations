import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { ViewMode, CityData, Article } from '../types';
import { INSULATION_SERVICES, PROVINCES_DATA } from '../data/initialData';

interface BreadcrumbItem {
  label: string;
  view?: ViewMode;
  paramId?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  currentView: ViewMode;
  currentParamId?: string;
  onNavigate: (view: ViewMode, paramId?: string) => void;
  cities: CityData[];
  articles: Article[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentView,
  currentParamId,
  onNavigate,
  cities,
  articles
}) => {
  // Do not render breadcrumbs on the homepage
  if (currentView === 'home') {
    return null;
  }

  const items: BreadcrumbItem[] = [
    { label: 'Home', view: 'home' }
  ];

  switch (currentView) {
    case 'services':
      items.push({ label: 'Insulation Services', isCurrent: true });
      break;

    case 'service-detail': {
      items.push({ label: 'Services', view: 'services' });
      const service = INSULATION_SERVICES.find(s => s.slug === currentParamId) || INSULATION_SERVICES[0];
      items.push({ label: service ? service.title : 'Service Specifications', isCurrent: true });
      break;
    }

    case 'canada':
      items.push({ label: 'Across Canada', isCurrent: true });
      break;

    case 'province-detail': {
      items.push({ label: 'Across Canada', view: 'canada' });
      const province = PROVINCES_DATA.find(p => p.code === currentParamId);
      items.push({ label: province ? province.name : currentParamId || 'Province', isCurrent: true });
      break;
    }

    case 'city-detail': {
      items.push({ label: 'Across Canada', view: 'canada' });
      const city = cities.find(c => c.slug === currentParamId);
      if (city) {
        items.push({ 
          label: city.provinceName, 
          view: 'province-detail', 
          paramId: city.provinceCode 
        });
        items.push({ label: city.name, isCurrent: true });
      } else {
        items.push({ label: 'City Market', isCurrent: true });
      }
      break;
    }

    case 'directory':
      items.push({ label: 'Business Directory', isCurrent: true });
      break;

    case 'resources':
      items.push({ label: 'Resources & Guides', isCurrent: true });
      break;

    case 'article-detail': {
      items.push({ label: 'Resources', view: 'resources' });
      const article = articles.find(a => a.slug === currentParamId);
      items.push({ 
        label: article ? article.title : 'Technical Guide', 
        isCurrent: true 
      });
      break;
    }

    case 'compare':
      items.push({ label: 'Insulation Type Comparison', isCurrent: true });
      break;

    case 'estimator':
      items.push({ label: 'Project Estimator 2.0', isCurrent: true });
      break;

    case 'advisor':
      items.push({ label: 'What Insulation Do I Need?', isCurrent: true });
      break;

    case 'cost-guide':
      items.push({ label: 'Canadian Cost Guide', isCurrent: true });
      break;

    case 'contractors':
      items.push({ label: 'Find a Contractor', isCurrent: true });
      break;

    case 'provinces-hub':
      items.push({ label: 'Canada Province Hub', isCurrent: true });
      break;

    case 'resources-hub':
      items.push({ label: 'Resources & Technical Guides', isCurrent: true });
      break;

    case 'join':
      items.push({ label: 'Join Contractor Directory ($10/Yr)', isCurrent: true });
      break;

    case 'guest-post':
    case 'guest-posts':
      items.push({ label: 'Industry Publishing', view: 'resources' });
      items.push({ label: 'Guest Post With Us ($10)', isCurrent: true });
      break;

    case 'market-with-us':
      items.push({ label: 'B2B Marketing', isCurrent: true });
      break;

    case 'membership':
      items.push({ label: 'Industry Membership ($10/Yr)', isCurrent: true });
      break;

    case 'city-partnerships':
      items.push({ label: 'City Partnerships', isCurrent: true });
      break;

    case 'about':
      items.push({ label: 'About SprayInsulations.ca', isCurrent: true });
      break;

    case 'contact':
      items.push({ label: 'Contact Dispatch', isCurrent: true });
      break;

    case 'admin':
      items.push({ label: 'Platform Administration', isCurrent: true });
      break;

    default:
      break;
  }

  // Generate Schema.org BreadcrumbList for SEO
  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `https://sprayinsulations.ca/${item.view || ''}`
    }))
  };

  return (
    <nav 
      aria-label="Breadcrumb"
      className="bg-slate-950/70 border-b border-slate-800/80 backdrop-blur-sm sticky top-20 z-20 py-2.5 px-4 sm:px-6 lg:px-8"
    >
      {/* Structured SEO Data for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />

      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-xs text-slate-400">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <React.Fragment key={idx}>
              {idx === 0 ? (
                <button
                  onClick={() => item.view && onNavigate(item.view, item.paramId)}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 font-medium transition-colors group"
                  title="Return to Home"
                >
                  <Home className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ) : isLast ? (
                <span 
                  aria-current="page"
                  className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-md md:max-w-xl"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.view && onNavigate(item.view, item.paramId)}
                  className="text-slate-400 hover:text-amber-400 font-medium transition-colors truncate max-w-[140px] sm:max-w-xs"
                  title={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              )}

              {!isLast && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 stroke-[2.5]" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
