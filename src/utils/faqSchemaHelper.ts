/**
 * FAQ & Service Schema.org JSON-LD Helper
 * Generates valid structured data for Google Rich Snippets & Search Engine Visibility
 */

import { InsulationService } from '../types';
import { INSULATION_SERVICES, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

export interface SchemaAnswer {
  '@type': 'Answer';
  text: string;
}

export interface SchemaQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: SchemaAnswer;
}

export interface SchemaFAQPage {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: SchemaQuestion[];
}

export interface SchemaService {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  serviceType: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
    email: string;
    areaServed: {
      '@type': 'Country';
      name: 'Canada';
    };
  };
  areaServed: {
    '@type': 'Country';
    name: 'Canada';
  };
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
      };
    }>;
  };
}

/**
 * Maps an array of question/answer pairs to a valid Schema.org FAQPage object
 */
export function generateFaqSchema(faqs: Array<{ question: string; answer: string }>): SchemaFAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Returns tailored FAQ schema for a specific service slug (e.g. 'spray-foam', 'fire-rated')
 */
export function getServiceFaqSchema(serviceSlug?: string): SchemaFAQPage {
  const service = INSULATION_SERVICES.find(s => s.slug === serviceSlug) || INSULATION_SERVICES[0];
  return generateFaqSchema(service.faqs || []);
}

/**
 * Returns comprehensive Schema.org Service metadata for a specific service
 */
export function getServiceSchema(service: InsulationService): SchemaService {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} - SprayInsulations.ca`,
    description: `${service.shortDesc} ${service.overview}`,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'SprayInsulations.ca (A Division of Builders Has)',
      url: 'https://sprayinsulations.ca',
      email: PRIMARY_CONTACT_EMAIL,
      areaServed: {
        '@type': 'Country',
        name: 'Canada'
      }
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Key Assemblies`,
      itemListElement: service.keyBenefits.map((benefit) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: benefit,
          description: `Canadian building code compliant insulation assembly (${service.codeComplianceNote})`
        }
      }))
    }
  };
}

/**
 * Dedicated helper to generate both FAQ and Service JSON-LD schemas
 */
export function getServiceStructuredData(service: InsulationService) {
  return {
    faqJsonLd: JSON.stringify(generateFaqSchema(service.faqs || [])),
    serviceJsonLd: JSON.stringify(getServiceSchema(service))
  };
}
