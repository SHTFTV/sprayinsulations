import { InsulationService } from '../../types';
import { SPRAY_FOAM_SERVICES } from './sprayFoamServices';
import { FIBERGLASS_CELLULOSE_SERVICES } from './fiberglassCelluloseServices';
import { MINERAL_RIGID_SERVICES } from './mineralRigidServices';
import { SPECIALTY_SERVICES } from './specialtyServices';
import { BUILDING_AREA_SERVICES } from './buildingAreaServices';
import { COMMERCIAL_REPAIR_SERVICES } from './commercialRepairServices';

export * from './sprayFoamServices';
export * from './fiberglassCelluloseServices';
export * from './mineralRigidServices';
export * from './specialtyServices';
export * from './buildingAreaServices';
export * from './commercialRepairServices';

export interface ServiceCategoryGroup {
  id: 'spray-foam' | 'fiberglass-cellulose' | 'mineral-rigid' | 'specialty' | 'building-areas' | 'commercial' | 'repair-upgrade';
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  services: InsulationService[];
}

export const ALL_INSULATION_SERVICES: InsulationService[] = [
  ...SPRAY_FOAM_SERVICES,
  ...FIBERGLASS_CELLULOSE_SERVICES,
  ...MINERAL_RIGID_SERVICES,
  ...SPECIALTY_SERVICES,
  ...BUILDING_AREA_SERVICES,
  ...COMMERCIAL_REPAIR_SERVICES,
];

export const SERVICE_CATEGORIES: ServiceCategoryGroup[] = [
  {
    id: 'spray-foam',
    name: 'Spray Foam Insulation',
    tagline: 'Continuous Air & Thermal Barriers',
    description: 'High-performance closed-cell and open-cell polyurethane foam systems providing integrated air sealing, thermal resistance, and moisture management for Canadian climate zones.',
    iconName: 'Sparkles',
    services: SPRAY_FOAM_SERVICES
  },
  {
    id: 'fiberglass-cellulose',
    name: 'Fiberglass & Cellulose',
    tagline: 'Cost-Effective Thermal Envelopes',
    description: 'Economical, proven batt, loose-fill blown, and dense-pack fibrous insulation systems engineered for attics, exterior walls, and interior partitions.',
    iconName: 'Layers',
    services: FIBERGLASS_CELLULOSE_SERVICES
  },
  {
    id: 'mineral-rigid',
    name: 'Mineral Wool & Rigid Boards',
    tagline: 'Non-Combustible & Continuous Envelopes',
    description: 'High-density volcanic stone wool, engineered Hi-Bar assemblies, and rigid continuous foam boards (EPS, XPS, Polyiso) for structural building envelope resilience.',
    iconName: 'Shield',
    services: MINERAL_RIGID_SERVICES
  },
  {
    id: 'specialty',
    name: 'Specialty & Building Science',
    tagline: 'Acoustics, Fire Ratings & Air Tightness',
    description: 'Passive fire containment systems, high-STC sound isolation assemblies, whole-building thermal envelope engineering, and blower-door air sealing.',
    iconName: 'Flame',
    services: SPECIALTY_SERVICES
  },
  {
    id: 'building-areas',
    name: 'Building Area Solutions',
    tagline: 'Targeted Solutions by Architectural Zone',
    description: 'Specialized thermal insulation, moisture barriers, and encapsulation assemblies engineered for attics, crawlspaces, basements, foundations, and above-grade walls.',
    iconName: 'Home',
    services: BUILDING_AREA_SERVICES
  },
  {
    id: 'commercial',
    name: 'Commercial & Industrial',
    tagline: 'Heavy-Duty & Code-Compliant Assemblies',
    description: 'Engineered continuous insulation for steel framing, pre-engineered buildings, curtain wall firestopping, agricultural structures, and industrial process piping.',
    iconName: 'Building2',
    services: COMMERCIAL_REPAIR_SERVICES.filter(s => s.category === 'commercial')
  },
  {
    id: 'repair-upgrade',
    name: 'Remediation & Energy Upgrades',
    tagline: 'Restoration, Extraction & Rebate Retrofits',
    description: 'Turnkey attic vacuum extraction, animal damage decontamination, comprehensive air sealing remediation, and energy efficiency upgrades qualifying for Canadian rebate grants.',
    iconName: 'Hammer',
    services: COMMERCIAL_REPAIR_SERVICES.filter(s => s.category === 'repair-upgrade')
  }
];

/**
 * Finds an insulation service by slug, id, or supported alias.
 */
export function findServiceBySlug(slugOrId?: string): InsulationService | undefined {
  if (!slugOrId) return undefined;
  const normalized = slugOrId.toLowerCase().trim();
  return ALL_INSULATION_SERVICES.find(s => 
    s.slug === normalized || 
    s.id === normalized ||
    (s.aliases && s.aliases.includes(normalized))
  );
}

/**
 * Gets a safe service object, falling back to the primary spray foam service if not found.
 */
export function getServiceOrDefault(slugOrId?: string): InsulationService {
  return findServiceBySlug(slugOrId) || ALL_INSULATION_SERVICES[0];
}
