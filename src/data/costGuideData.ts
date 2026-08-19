import { CostGuideItem } from '../types';

export const CANADIAN_COST_BENCHMARKS: CostGuideItem[] = [
  // Material Benchmarks
  {
    id: 'spray-foam-closed-cell',
    materialOrArea: 'Closed-Cell Spray Foam (2.0 lb HFO)',
    category: 'Material Cost per Sq Ft',
    typicalRValue: 'R-6.5 / inch (R-13 to R-20 typical)',
    lowPrice: 2.50,
    midPrice: 3.40,
    highPrice: 4.75,
    unit: 'sq. ft (at 2" thickness / R-13)',
    description: 'High-density monolithic barrier providing continuous thermal insulation, air sealing, and vapour barrier in one installation step.',
    costDrivers: [
      'Accessibility of cavity (open stud vs crawlspace vs overhead ceiling)',
      'Total square footage (minimum rig mobilization charge of $1,500 – $2,500 applies on small jobs)',
      'Substrate temperature requiring pre-heating in sub-zero Canadian winter conditions',
      'Masking & plastic prep for finished living spaces'
    ],
    serviceSlug: 'closed-cell-spray-foam'
  },
  {
    id: 'spray-foam-open-cell',
    materialOrArea: 'Open-Cell Spray Foam (0.5 lb)',
    category: 'Material Cost per Sq Ft',
    typicalRValue: 'R-3.7 / inch (R-13 to R-22 typical)',
    lowPrice: 1.70,
    midPrice: 2.30,
    highPrice: 3.10,
    unit: 'sq. ft (at 3.5" thickness / R-13)',
    description: 'Flexible acoustic-dampening foam expanding 100x to air seal irregular cavities. Ideal for interior soundproofing and deep roof rafters.',
    costDrivers: [
      'Framing cavity depth (2x4 vs 2x6 vs 2x10)',
      'Trimming and scraping labor to prepare studs flush for drywall',
      'Site accessibility and ventilation equipment setup'
    ],
    serviceSlug: 'open-cell-spray-foam'
  },
  {
    id: 'mineral-wool-batts',
    materialOrArea: 'Mineral Stone Wool Batts (Rockwool Comfortbatt)',
    category: 'Material Cost per Sq Ft',
    typicalRValue: 'R-4.2 / inch (R-14 to R-24 typical)',
    lowPrice: 1.40,
    midPrice: 1.95,
    highPrice: 2.70,
    unit: 'sq. ft installed',
    description: 'Non-combustible stone wool friction-fit batts engineered for superior fire protection, acoustic isolation, and long-term dimensional stability.',
    costDrivers: [
      'Wood framing vs light-gauge steel stud framing',
      'Amount of mechanical and electrical cutting / notching',
      'Vapour barrier membrane (6-mil poly or smart membrane) installation labor'
    ],
    serviceSlug: 'mineral-wool'
  },
  {
    id: 'blown-in-cellulose',
    materialOrArea: 'Blown-In Treated Cellulose (Attic R-50 / R-60)',
    category: 'Material Cost per Sq Ft',
    typicalRValue: 'R-3.7 / inch (R-50 = 13.5" to 15" blown depth)',
    lowPrice: 1.10,
    midPrice: 1.55,
    highPrice: 2.20,
    unit: 'sq. ft (at full R-50 depth)',
    description: 'Treated recycled cellulose fibers pneumatically installed across attic floors or dense-packed into closed wall cavities.',
    costDrivers: [
      'Attic clearance height and roof pitch complexity',
      'Cardboard or plastic rafter ventilation baffles (propervents) at soffit eaves',
      'Attic hatch weatherstripping and insulation dam building'
    ],
    serviceSlug: 'cellulose'
  },
  {
    id: 'blown-in-fiberglass',
    materialOrArea: 'Blown-In Virgin Fiberglass (Attic R-50 / R-60)',
    category: 'Material Cost per Sq Ft',
    typicalRValue: 'R-3.4 / inch (R-50 = 14" to 16" blown depth)',
    lowPrice: 0.95,
    midPrice: 1.40,
    highPrice: 1.90,
    unit: 'sq. ft (at full R-50 depth)',
    description: 'Lightweight, non-combustible spun glass fibers blown loose-fill across attic decks without settling.',
    costDrivers: [
      'Attic access hatch location (second-floor closet vs garage)',
      'Hose run distance from truck parking to attic opening',
      'Air sealing prep (canned foam sealing of top-plates and wire penetrations)'
    ],
    serviceSlug: 'blown-in-fiberglass'
  },
  {
    id: 'rigid-board-xps-polyiso',
    materialOrArea: 'Rigid Foam Board (XPS / Polyisocyanurate Continuous CI)',
    category: 'Material Cost per Sq Ft',
    typicalRValue: 'R-5.0 (XPS) to R-6.5 (Polyiso) / inch',
    lowPrice: 1.60,
    midPrice: 2.45,
    highPrice: 3.60,
    unit: 'sq. ft (at 1.5" thickness)',
    description: 'High-compressive exterior or sub-slab continuous insulation panels eliminating thermal bridging through timber or steel framing studs.',
    costDrivers: [
      'Thickness (1", 1.5", 2", or 3" boards)',
      'Seam taping and flashing transition detailing around window openings',
      'Fastener system (strapping / furring strips vs brick ties vs masonry anchors)'
    ],
    serviceSlug: 'rigid-board'
  },

  // Building Area Benchmarks
  {
    id: 'area-attic-retrofit',
    materialOrArea: 'Attic Retrofit & Air Sealing Package (1,000 – 1,500 sq ft)',
    category: 'Building Area Installation Cost',
    typicalRValue: 'Air Sealing + R-50 to R-60 Top-Up',
    lowPrice: 1800,
    midPrice: 2750,
    highPrice: 4200,
    unit: 'complete project package',
    description: 'Comprehensive attic upgrade including comprehensive attic bypass air sealing, ventilation baffle installation, and blown insulation top-up to modern NBC 9.36 standard.',
    costDrivers: [
      'Need for old contaminated / rodent-infested insulation removal',
      'Number of recessed light fixtures (IC-rated vs non-IC boxes requiring airtight covers)',
      'Attic roof slope and head height'
    ],
    serviceSlug: 'attic-insulation'
  },
  {
    id: 'area-basement-walls',
    materialOrArea: 'Basement Foundation Wall Insulation (800 – 1,200 sq ft wall area)',
    category: 'Building Area Installation Cost',
    typicalRValue: 'R-15 to R-24 Continuous / Cavity',
    lowPrice: 2200,
    midPrice: 3600,
    highPrice: 5800,
    unit: 'complete project package',
    description: 'Moisture-safe basement envelope insulation using closed-cell spray foam or 2" taped XPS rigid board plus 2x4 stud framing.',
    costDrivers: [
      'Moisture infiltration requiring masonry sealant prep',
      'Obstructions (electrical panels, water heaters, plumbing stacks)',
      'Spray foam vs rigid board + fiberglass batts hybrid approach'
    ],
    serviceSlug: 'basement-insulation'
  },
  {
    id: 'area-crawlspace-encapsulation',
    materialOrArea: 'Crawlspace Sealed Encapsulation System (600 – 1,000 sq ft)',
    category: 'Building Area Installation Cost',
    typicalRValue: 'R-15 Walls + 20-mil Sealed Ground Vapour Retarder',
    lowPrice: 2800,
    midPrice: 4500,
    highPrice: 7500,
    unit: 'complete project package',
    description: 'Full crawlspace conditioning with heavy-duty reinforced ground vapour barrier, perimeter closed-cell foam wall insulation, and rim joist air sealing.',
    costDrivers: [
      'Head height clearance (under 3 feet increases labor time significantly)',
      'Subfloor debris and soil leveling requirements',
      'Need for sump pump or interior perimeter drain integration'
    ],
    serviceSlug: 'crawlspace-insulation'
  },
  {
    id: 'area-rim-joists',
    materialOrArea: 'Rim Joist & Header Air Sealing (Whole Home 150 – 250 linear ft)',
    category: 'Building Area Installation Cost',
    typicalRValue: '2.5" – 3" Closed-Cell Spray Foam (R-16 to R-20)',
    lowPrice: 950,
    midPrice: 1650,
    highPrice: 2400,
    unit: 'complete basement / perimeter package',
    description: 'Targeted closed-cell polyurethane spray foam application into individual basement floor joist pockets to stop cold air leakage and condensation rot.',
    costDrivers: [
      'Finished drywall or drop ceiling removal along perimeter',
      'Piping, ducting, and wiring congestion in joist cavities'
    ],
    serviceSlug: 'air-sealing'
  },
  {
    id: 'area-old-removal',
    materialOrArea: 'Existing Attic Insulation Vacuum Removal & Decontamination',
    category: 'Specialty & Removal',
    typicalRValue: 'Complete Extraction to Bare Drywall',
    lowPrice: 1.20,
    midPrice: 1.85,
    highPrice: 2.60,
    unit: 'sq. ft attic footprint',
    description: 'High-powered gas vacuum extraction of contaminated, water-damaged, or rodent-infested old insulation to outdoor disposal bags, with antimicrobial sanitization.',
    costDrivers: [
      'Rodent droppings and biological hazard protocol level',
      'Mould remediation spraying',
      'Disposal fees at local municipal transfer stations'
    ],
    serviceSlug: 'insulation-removal'
  }
];

export interface CanadianRebateProgram {
  id: string;
  provinceCode: string;
  provinceName: string;
  programName: string;
  authority: string;
  maxIncentive: string;
  highlights: string[];
  qualifyingMeasures: string[];
  websiteUrl: string;
}

export const CANADIAN_REBATE_PROGRAMS: CanadianRebateProgram[] = [
  {
    id: 'clean-bc-better-homes',
    provinceCode: 'BC',
    provinceName: 'British Columbia',
    programName: 'CleanBC Better Homes and Home Renovation Rebate',
    authority: 'Government of British Columbia & BC Hydro / FortisBC',
    maxIncentive: 'Up to $5,500+ CAD for insulation upgrades',
    highlights: [
      'Up to $1,200 for attic insulation upgrades (minimum R-12 added)',
      'Up to $2,000 for exterior wall cavity or continuous insulation',
      'Up to $1,000 for basement & crawlspace wall insulation',
      'Bonus $2,000 for completing 2+ eligible envelope/heat pump measures'
    ],
    qualifyingMeasures: ['Attic R-12+ addition to R-40+', 'Exterior wall R-12+ added', 'Basement & crawlspace R-10+ added'],
    websiteUrl: 'https://betterhomesbc.ca'
  },
  {
    id: 'enbridge-her-plus',
    provinceCode: 'ON',
    provinceName: 'Ontario',
    programName: 'Enbridge Home Efficiency Rebate Plus (HER+)',
    authority: 'Enbridge Gas in partnership with Natural Resources Canada',
    maxIncentive: 'Up to $10,000 CAD total grant eligibility',
    highlights: [
      'Up to $2,350 for attic insulation upgrades (minimum R-20 added to reach R-60)',
      'Up to $3,800 for whole-home exterior wall insulation',
      'Up to $1,600 for basement wall insulation (minimum R-20 added)',
      'Up to $800 for 100% crawlspace wall insulation'
    ],
    qualifyingMeasures: ['Attic top-ups to R-60', 'Exterior wall continuous CI or cavity', 'Basement wall R-20+'],
    websiteUrl: 'https://enbridgegas.com/herplus'
  },
  {
    id: 'efficiency-manitoba-home-rebates',
    provinceCode: 'MB',
    provinceName: 'Manitoba',
    programName: 'Efficiency Manitoba Home Insulation Program',
    authority: 'Efficiency Manitoba Crown Corporation',
    maxIncentive: 'Rebates covering up to 100% of material costs',
    highlights: [
      'Up to $0.80 / sq.ft for attic insulation upgrades',
      'Up to $1.50 / sq.ft for exterior wall insulation',
      'Up to $1.20 / sq.ft for basement wall insulation',
      'Income-qualified Energy Efficiency Assistance Program provides free insulation'
    ],
    qualifyingMeasures: ['Attics to R-50', 'Walls to R-20+', 'Basements to R-20+'],
    websiteUrl: 'https://efficiency-manitoba.ca'
  },
  {
    id: 'efficiency-nova-scotia-home-energy',
    provinceCode: 'NS',
    provinceName: 'Nova Scotia',
    programName: 'Efficiency Nova Scotia Home Energy Assessment',
    authority: 'EfficiencyOne / Government of Nova Scotia',
    maxIncentive: 'Up to $5,000 CAD in envelope incentives',
    highlights: [
      'Up to $1,000 for attic and flat roof insulation',
      'Up to $2,500 for exterior wall insulation',
      'Up to $1,500 for basement & crawlspace insulation',
      'Zero-interest Clean Energy financing options available'
    ],
    qualifyingMeasures: ['Attic R-50 upgrade', 'Basement perimeter insulation', 'Air leakage reduction bonus'],
    websiteUrl: 'https://efficiencyns.ca'
  },
  {
    id: 'hydro-quebec-logisvert',
    provinceCode: 'QC',
    provinceName: 'Quebec',
    programName: 'LogisVert & Rénoclimat Efficiency Grants',
    authority: 'Hydro-Québec & Transition énergétique Québec',
    maxIncentive: 'Up to $4,500+ CAD for thermal building envelope',
    highlights: [
      'Financial assistance calculated per square meter of added R-value',
      'Generous incentives for basement wall spray foam and exterior rigid board',
      'Incentives for air leakage reduction verified by blower door test'
    ],
    qualifyingMeasures: ['Attic R-41 to R-50', 'Foundation walls R-17 minimum', 'Comprehensive air sealing'],
    websiteUrl: 'https://hydroquebec.com/residential/logisvert'
  },
  {
    id: 'saskpower-home-efficiency',
    provinceCode: 'SK',
    provinceName: 'Saskatchewan',
    programName: 'SaskEnergy / SaskPower Home Efficiency Retrofit',
    authority: 'SaskEnergy & SaskPower',
    maxIncentive: 'Up to $2,000 – $4,000 CAD',
    highlights: [
      'Up to $800 for attic insulation upgrades in extreme cold climate',
      'Up to $1,500 for basement wall insulation upgrades to R-20+',
      'Financing through municipal property-assessed clean energy (PACE) in select cities'
    ],
    qualifyingMeasures: ['Attics to R-60', 'Basement perimeter to R-20+'],
    websiteUrl: 'https://saskenergy.com'
  }
];
