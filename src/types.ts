export type AppTheme = 'deep-navy' | 'light-professional';

export type ViewMode = 
  // B2C / Consumer & Builder Discovery Views:
  | 'home'
  | 'services'
  | 'service-detail'
  | 'compare'
  | 'estimator'
  | 'advisor'
  | 'cost-guide'
  | 'canada'
  | 'provinces-hub'
  | 'province-detail'
  | 'city-detail'
  | 'contractors'
  | 'contractor-detail'
  | 'resources'
  | 'resources-hub'
  | 'article-detail'
  | 'about'
  | 'contact'
  // B2B / Industry Division Views ($10 Ecosystem):
  | 'guest-post'
  | 'guest-posts'
  | 'market-with-us'
  | 'membership'
  | 'join'
  | 'city-partnerships'
  | 'directory'
  | 'admin';

export interface InsulationService {
  id: string;
  slug: string;
  title: string;
  category?: 'spray-foam' | 'fiberglass-cellulose' | 'mineral-rigid' | 'specialty' | 'building-areas' | 'commercial' | 'repair-upgrade';
  categoryName?: string;
  shortDesc: string;
  heroTagline: string;
  overview: string;
  whatItIs?: string;
  keyBenefits: string[];
  applications: {
    residential: string[];
    commercial: string[];
  };
  considerations?: string[];
  installationProcess?: string[];
  buildingScienceNote: string;
  rValueGuidance: string;
  codeComplianceNote: string;
  relatedServices?: string[];
  seoTitle?: string;
  seoDescription?: string;
  aliases?: string[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export type PartnershipStatus = 'AVAILABLE' | 'PENDING' | 'PARTNERED';

export interface CityData {
  id: string;
  slug: string;
  name: string;
  provinceCode: string;
  provinceName: string;
  population: number;
  populationYear?: string;
  climateZone: string;
  partnershipStatus: PartnershipStatus;
  partnerName?: string;
  partnerWebsite?: string;
  partnerDescription?: string;
  marketHighlights: string[];
  commonInsulationNeeds: string[];
}

export interface ProvinceData {
  code: string;
  slug: string;
  name: string;
  capital: string;
  population: number;
  climateZones: string[];
  degreeDaysRange: string;
  buildingCodeReference: string;
  energyCodeNotes: string;
  moistureAndVapourNotes: string;
  rebatePrograms: {
    name: string;
    authority: string;
    maxGrant: string;
    description: string;
    url?: string;
  }[];
  overview: string;
  majorCities: string[];
}

export interface DirectoryBusiness {
  id: string;
  name: string;
  category: 
    | 'Insulation Contractor'
    | 'Spray Foam Contractor'
    | 'General Contractor'
    | 'Builder'
    | 'Renovation Company'
    | 'Manufacturer / Supplier'
    | 'Architect / Engineer';
  provinceCode: string;
  city: string;
  servesResidential: boolean;
  servesCommercial: boolean;
  servesIndustrial: boolean;
  isVerified: boolean;
  isMember: boolean;
  description: string;
  website?: string;
  joinedYear: string;
}

export interface ContractorVerificationDetails {
  businessRegistryVerified: boolean;
  registrationNumber?: string;
  liabilityInsuranceVerified: boolean;
  insuranceCoverageAmount?: string;
  physicalAddressVerified: boolean;
  certifiedApplicatorTraining?: string[]; // e.g. 'CUFCA Certified', 'CALBO Certified', 'Manufacturer Master Installer'
  verifiedDate: string;
  status: 'Verified Business' | 'Unverified Community Listing';
}

export interface ContractorProfile {
  id: string;
  slug: string;
  name: string;
  companyName: string;
  tagline: string;
  logo?: string;
  coverImage?: string;
  rating: number; // 1 to 5
  reviewCount: number;
  isVerified: boolean;
  verification: ContractorVerificationDetails;
  verificationDetails?: ContractorVerificationDetails;
  phone: string;
  email: string;
  website?: string;
  address: string;
  city: string;
  provinceCode: string;
  provinceName: string;
  postalCode: string;
  serviceRadiusKm: number;
  serviceAreas: string[]; // cities or regions served
  servicesOffered: string[]; // service names
  services?: string[];
  specializations?: string[];
  insulationMaterials: ('spray-foam' | 'fiberglass' | 'mineral-wool' | 'cellulose' | 'rigid-board')[];
  projectTypes: ('Residential New Build' | 'Residential Retrofit' | 'Commercial' | 'Industrial' | 'Agricultural')[];
  yearEstablished: number;
  about: string;
  description?: string;
  features: string[];
  equipment?: string[];
  photos: { url: string; caption: string }[];
  customerReviews?: {
    id: string;
    author: string;
    date: string;
    rating: number;
    title: string;
    comment: string;
    verifiedProject: boolean;
  }[];
}

export interface InsulationComparisonMaterial {
  id: string;
  name: string;
  category: string;
  shortName: string;
  rValuePerInch: string;
  costRangeSqFt: string;
  boardFootCost?: string;
  airBarrierPerformance: 'Inherent at 1-2"' | 'Requires Exterior Sheathing Air Barrier' | 'Requires Air Barrier Layer';
  vapourBarrierPerformance: 'Inherent at 1-2" (Class II)' | 'Inherent at 2" (Class II)' | 'Vapour Permeable (Requires 6-mil poly)' | 'Vapour Permeable';
  firePerformance: string;
  acousticRatingSTC: string;
  moistureResistance: string;
  bestApplications: string[];
  renovationSuitability: string;
  newConstructionSuitability: string;
  pros: string[];
  cons: string[];
  environmentalProfile: string;
  installationMethod: string;
  relatedServiceSlug: string;
}

export interface CostGuideItem {
  id: string;
  materialOrArea: string;
  category: 'Material Cost per Sq Ft' | 'Building Area Installation Cost' | 'Specialty & Removal';
  typicalRValue: string;
  lowPrice: number;
  midPrice: number;
  highPrice: number;
  unit: string;
  description: string;
  costDrivers: string[];
  serviceSlug?: string;
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole?: string;
  date?: string;
  datePublished?: string;
  publishedDate?: string;
  readTime: string;
  readingTime?: string;
  summary?: string;
  excerpt?: string;
  content?: string;
  contentMarkdown?: string;
  image?: string;
  isGuestPost?: boolean;
  sponsorName?: string;
  relatedServiceId?: string;
  relatedServiceSlug?: string;
  tags?: string[];
  provinceCode?: string;
}

export type Article = ResourceArticle;

export interface ConsumerLead {
  id: string;
  date: string;
  fullName: string;
  email: string;
  phone?: string;
  province: string;
  city?: string;
  projectType: string;
  serviceNeeded?: string;
  serviceCategory?: string;
  insulationType?: string;
  areaSquareFeet?: number;
  budget?: string;
  timeline?: string;
  projectDetails?: string;
  details?: string;
  targetContractorId?: string;
  status: 'New' | 'Reviewed' | 'Dispatched';
}

export type ConsumerInquiry = ConsumerLead;

export interface GuestPostSubmission {
  id: string;
  date: string;
  authorName: string;
  companyName: string;
  email: string;
  websiteUrl: string;
  industryCategory: string;
  articleTitle: string;
  articleTopic: string;
  content: string;
  authorBio: string;
  feeAcknowledged: boolean; // $10 CAD
  status: string;
}

export interface CityPartnershipApplication {
  id: string;
  date: string;
  businessName: string;
  contactName: string;
  email: string;
  website: string;
  phone?: string;
  city: string;
  province: string;
  industry: string;
  estimatedPopulation: number;
  calculatedAnnualFee: number;
  interestReason?: string;
  desiredStartDate?: string;
  status: string;
}

export interface MembershipInquiry {
  id: string;
  date: string;
  businessName: string;
  contactName: string;
  email: string;
  website?: string;
  industry: string;
  province: string;
  city: string;
  selectedPlan: string;
  status: string;
}

export interface MarketingInquiry {
  id: string;
  date: string;
  companyName: string;
  contactName: string;
  email: string;
  website?: string;
  interestAreas: string[];
  message?: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  company?: string;
  location: string;
  provinceCode: string;
  serviceCategory: string;
  rating: number; // 1 to 5
  reviewTitle: string;
  reviewText: string;
  date: string;
  projectType: string;
  verified: boolean;
  published: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Codes & Standards' | 'Rebates & Grants' | 'Building Science' | 'Industry Trends' | 'Technology & Materials';
  source: string;
  sourceUrl?: string;
  date: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  impactArea: string;
  tags: string[];
  isBreaking?: boolean;
}
