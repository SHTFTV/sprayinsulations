/**
 * FAQ & Dynamic Schema Generator Utility
 * Path: src/utils/faqHelper.ts
 * 
 * Standardizes Schema.org JSON-LD FAQ and structured data generation 
 * across all service pages, resource guides, and Canadian building science articles.
 */

import { InsulationService, Article, Testimonial } from '../types';
import { INSULATION_SERVICES, PRIMARY_CONTACT_EMAIL } from '../data/initialData';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SchemaAnswer {
  '@type': 'Answer';
  text: string;
}

export interface SchemaQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: SchemaAnswer;
}

export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: SchemaQuestion[];
}

export interface SchemaReview {
  '@type': 'Review';
  itemReviewed: {
    '@type': 'Service' | 'Organization';
    name: string;
    description?: string;
  };
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: '5';
    worstRating: '1';
  };
  author: {
    '@type': 'Person';
    name: string;
    jobTitle?: string;
  };
  reviewBody: string;
  datePublished: string;
  publisher?: {
    '@type': 'Organization';
    name: 'SprayInsulations.ca';
  };
}

export interface AggregateRatingSchema {
  '@context': 'https://schema.org';
  '@type': 'Service' | 'Organization';
  name: string;
  description: string;
  aggregateRating: {
    '@type': 'AggregateRating';
    ratingValue: string;
    reviewCount: number;
    bestRating: '5';
    worstRating: '1';
  };
  review: SchemaReview[];
}

export interface ServiceSchema {
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

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'TechArticle';
  headline: string;
  description: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: 'SprayInsulations.ca';
    url: 'https://sprayinsulations.ca';
    logo: {
      '@type': 'ImageObject';
      url: 'https://sprayinsulations.ca/favicon.ico';
    };
  };
  datePublished: string;
  inLanguage: 'en-CA';
  about: {
    '@type': 'Thing';
    name: string;
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Generates Schema.org BreadcrumbList metadata for navigation hierarchy and rich search results.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generates a standard Schema.org FAQPage object or formatted JSON-LD string dynamically from an array of questions and answers.
 * Standardizes JSON-LD FAQ Schema implementation across all service and resource pages for SEO optimization.
 * 
 * @param questions Array of { question, answer } objects
 * @param asString Optional flag; if true, returns formatted JSON-LD string ready for script tags
 * @returns Standardized Schema.org FAQPage object or JSON-LD string
 */
export function generateFaqSchema(questions: { question: string; answer: string }[]): FAQPageSchema;
export function generateFaqSchema(questions: { question: string; answer: string }[], asString: true): string;
export function generateFaqSchema(questions: { question: string; answer: string }[], asString: false): FAQPageSchema;
export function generateFaqSchema(questions: { question: string; answer: string }[], asString?: boolean): FAQPageSchema | string {
  const schema: FAQPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (!questions || questions.length === 0)
      ? []
      : questions
          .filter(item => item && item.question && item.answer)
          .map(item => ({
            '@type': 'Question',
            name: item.question.trim(),
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer.trim()
            }
          }))
  };

  return asString ? JSON.stringify(schema, null, 2) : schema;
}

/**
 * Generates stringified JSON-LD ready for direct injection into a <script type="application/ld+json"> tag.
 * 
 * @param questions Array of { question, answer } objects
 * @returns Formatted JSON string
 */
export function generateFaqJsonLd(questions: { question: string; answer: string }[]): string {
  return JSON.stringify(generateFaqSchema(questions));
}

/**
 * Retrieves and generates FAQ schema for any registered service slug (e.g., 'spray-foam', 'fire-rated').
 * 
 * @param serviceSlug Service identifier slug
 * @returns FAQPageSchema object
 */
export function getServiceFaqSchema(serviceSlug?: string): FAQPageSchema {
  const service = INSULATION_SERVICES.find(s => s.slug === serviceSlug) || INSULATION_SERVICES[0];
  return generateFaqSchema(service.faqs || []);
}

/**
 * Generates Schema.org Service metadata for a specific Canadian insulation service.
 * 
 * @param service InsulationService object
 * @returns ServiceSchema object
 */
export function generateServiceSchema(service: InsulationService): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} - Canadian Building Science`,
    description: `${service.shortDesc} ${service.overview}`,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'SprayInsulations.ca (A Division of Builders Haus)',
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
      name: `${service.title} Technical Assemblies`,
      itemListElement: service.keyBenefits.map((benefit) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: benefit,
          description: `Code-compliant insulation system conforming to Canadian standards (${service.codeComplianceNote})`
        }
      }))
    }
  };
}

/**
 * Generates a Schema.org Review entity for a verified Canadian insulation testimonial.
 * 
 * @param testimonial Testimonial object
 * @param defaultServiceName Optional default service or organization name
 * @returns SchemaReview object
 */
export function generateReviewSchema(testimonial: Testimonial, defaultServiceName?: string): SchemaReview {
  const serviceName = defaultServiceName || (
    testimonial.serviceCategory === 'spray-foam' ? 'Spray Foam Insulation' :
    testimonial.serviceCategory === 'fire-rated' ? 'Fire-Rated Insulation' :
    testimonial.serviceCategory === 'fiberglass' ? 'Fiberglass Insulation' :
    testimonial.serviceCategory === 'acoustic' ? 'Acoustic Soundproofing Insulation' :
    testimonial.serviceCategory === 'commercial' ? 'Commercial Building Envelope Solutions' :
    'Canadian Insulation Solutions'
  );

  return {
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: `${serviceName} - SprayInsulations.ca`,
      description: `Canadian building envelope and insulation project in ${testimonial.location}`
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating || 5,
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Person',
      name: testimonial.authorName,
      jobTitle: `${testimonial.authorRole}${testimonial.company ? ` at ${testimonial.company}` : ''} (${testimonial.location})`
    },
    reviewBody: testimonial.reviewText,
    datePublished: testimonial.date || new Date().toISOString().split('T')[0],
    publisher: {
      '@type': 'Organization',
      name: 'SprayInsulations.ca'
    }
  };
}

/**
 * Generates an AggregateRating and multi-Review Schema.org JSON-LD object.
 * 
 * @param testimonials Array of published testimonials
 * @param itemReviewedName Name of the item being reviewed (e.g. 'Spray Foam Insulation Services')
 * @param description Brief description for structured data
 * @returns AggregateRatingSchema object
 */
export function generateAggregateRatingSchema(
  testimonials: Testimonial[], 
  itemReviewedName: string = 'SprayInsulations.ca National Insulation Platform',
  description: string = 'Canada-wide building envelope, spray foam, fire separation, and thermal insulation services.'
): AggregateRatingSchema {
  const validTestimonials = testimonials.filter(t => t.published !== false);
  const count = validTestimonials.length || 1;
  const totalScore = validTestimonials.reduce((acc, curr) => acc + (curr.rating || 5), 0);
  const averageRating = (totalScore / count).toFixed(1);

  const reviews = validTestimonials.map(t => generateReviewSchema(t, itemReviewedName));

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: itemReviewedName,
    description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: count,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews
  };
}

/**
 * Generates stringified JSON-LD for Review / AggregateRating schema ready for direct injection.
 * 
 * @param testimonials Array of Testimonials
 * @param itemReviewedName Name of the reviewed item or service
 * @param description Description
 * @returns Formatted JSON string
 */
export function generateReviewsJsonLd(
  testimonials: Testimonial[], 
  itemReviewedName?: string, 
  description?: string
): string {
  return JSON.stringify(generateAggregateRatingSchema(testimonials, itemReviewedName, description));
}

/**
 * Generates Schema.org TechArticle metadata for resources and guide pages.
 * 
 * @param article Article object
 * @returns ArticleSchema object
 */
export function generateArticleSchema(article: Article): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.summary || article.excerpt || article.title,
    author: {
      '@type': 'Person',
      name: article.author || 'Building Science Editorial Staff'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SprayInsulations.ca',
      url: 'https://sprayinsulations.ca',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sprayinsulations.ca/favicon.ico'
      }
    },
    datePublished: article.date || new Date().toISOString().split('T')[0],
    inLanguage: 'en-CA',
    about: {
      '@type': 'Thing',
      name: article.category || 'Canadian Insulation Building Science'
    }
  };
}

/**
 * Unified helper returning both FAQ and Service JSON-LD script strings for service detail views.
 * 
 * @param service InsulationService object
 * @returns { faqJsonLd: string, serviceJsonLd: string }
 */
export function getServiceStructuredData(service: InsulationService) {
  return {
    faqJsonLd: JSON.stringify(generateFaqSchema(service.faqs || [])),
    serviceJsonLd: JSON.stringify(generateServiceSchema(service))
  };
}
