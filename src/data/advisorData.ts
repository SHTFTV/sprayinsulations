export interface AdvisorQuestionOption {
  id: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface AdvisorStep {
  id: string;
  number: number;
  title: string;
  description: string;
  options: AdvisorQuestionOption[];
}

export interface AdvisorRecommendation {
  primaryServiceSlug: string;
  primaryTitle: string;
  primaryCategory: string;
  primaryMaterial: string;
  rValueTarget: string;
  rationale: string;
  keyBenefits: string[];
  codeComplianceWarning: string;
  alternativeServiceSlug: string;
  alternativeTitle: string;
  alternativeRationale: string;
  nextSteps: string[];
}

export const ADVISOR_STEPS: AdvisorStep[] = [
  {
    id: 'building-area',
    number: 1,
    title: 'What area of the building are you insulating?',
    description: 'Select the primary building envelope assembly or room location.',
    options: [
      {
        id: 'attic',
        label: 'Attic or Roofline',
        sublabel: 'Open attic floor, cathedral ceiling, or unvented hot roof assembly',
        iconName: 'Home'
      },
      {
        id: 'exterior-walls',
        label: 'Exterior Above-Grade Walls',
        sublabel: '2x4 / 2x6 timber or steel framing, or continuous exterior sheathing',
        iconName: 'Building2'
      },
      {
        id: 'basement-foundation',
        label: 'Basement or Foundation Walls',
        sublabel: 'Interior concrete/masonry foundation walls below frost line',
        iconName: 'ShieldCheck'
      },
      {
        id: 'crawlspace',
        label: 'Crawlspace & Dirt Floor',
        sublabel: 'Vented or unvented crawlspace, perimeter wall and ground moisture barrier',
        iconName: 'Layers'
      },
      {
        id: 'interior-soundproofing',
        label: 'Interior Walls or Between Floors',
        sublabel: 'Acoustic sound isolation between suites, bedrooms, home theatres, or mechanical rooms',
        iconName: 'Volume2'
      },
      {
        id: 'rim-joist',
        label: 'Rim Joists & Floor Headers',
        sublabel: 'Perimeter basement/subfloor joist pockets with severe air leakage',
        iconName: 'Flame'
      },
      {
        id: 'commercial-building',
        label: 'Commercial, Warehouse or Steel Building',
        sublabel: 'Steel-stud, pre-engineered metal building, commercial roof, or industrial shop',
        iconName: 'Building'
      }
    ]
  },
  {
    id: 'primary-goal',
    number: 2,
    title: 'What is your primary performance goal?',
    description: 'Help us prioritize thermal efficiency, acoustic privacy, moisture control, or budget.',
    options: [
      {
        id: 'max-energy-air-sealing',
        label: 'Maximum Energy Efficiency & Air Sealing',
        sublabel: 'Eliminate drafts, reduce heating bills by up to 50%, stop convection loops',
        iconName: 'Sparkles'
      },
      {
        id: 'sound-reduction',
        label: 'Acoustic Soundproofing & Quiet Living',
        sublabel: 'Block airborne speech, TV, plumbing noise, and impact vibrations',
        iconName: 'Volume2'
      },
      {
        id: 'fire-safety',
        label: 'Fire Performance & Non-Combustibility',
        sublabel: 'Zero-flame spread, zero-smoke stone wool for party walls and multi-family codes',
        iconName: 'Flame'
      },
      {
        id: 'moisture-mould',
        label: 'Moisture Control & Vapour Barrier',
        sublabel: 'Prevent below-grade condensation, mould growth, and flood vulnerability',
        iconName: 'ShieldCheck'
      },
      {
        id: 'budget-retrofit',
        label: 'Cost-Effective Energy Retrofit',
        sublabel: 'High ROI top-up meeting provincial building codes on a reasonable budget',
        iconName: 'Hammer'
      }
    ]
  },
  {
    id: 'building-type',
    number: 3,
    title: 'What is the building structure type?',
    description: 'Identifies structural cavity dimensions and Canadian building code applicability.',
    options: [
      {
        id: 'single-family',
        label: 'Single-Family Detached Home',
        sublabel: 'Standalone residential home, bungalow, 2-storey, or custom build',
        iconName: 'Home'
      },
      {
        id: 'townhouse-condo',
        label: 'Townhouse, Semi or Multi-Family Suite',
        sublabel: 'Party walls, basement secondary suite, or duplex/triplex conversion',
        iconName: 'Building2'
      },
      {
        id: 'commercial-retail',
        label: 'Commercial or Retail Building',
        sublabel: 'Offices, retail plazas, light-gauge steel framing, Part 3 / NECB code',
        iconName: 'Building'
      },
      {
        id: 'industrial-agricultural',
        label: 'Industrial, Quonset or Agricultural Shop',
        sublabel: 'Pole barns, cold storage, manufacturing plants, pre-fab steel structures',
        iconName: 'Building2'
      }
    ]
  },
  {
    id: 'project-nature',
    number: 4,
    title: 'What is the construction status?',
    description: 'Determines whether cavities are open or if non-invasive injection is needed.',
    options: [
      {
        id: 'new-construction',
        label: 'New Construction (Open Studs / Framing)',
        sublabel: 'Framing is fully accessible with no drywall installed yet',
        iconName: 'Hammer'
      },
      {
        id: 'retrofit-open-gut',
        label: 'Full Gut Renovation (Exposed Framing)',
        sublabel: 'Existing interior finishes removed to bare studs/joists',
        iconName: 'RefreshCw'
      },
      {
        id: 'retrofit-closed-walls',
        label: 'Existing Finished Home (Closed Drywall)',
        sublabel: 'Walls/ceilings are finished; need drill-and-fill or top-up without gutting',
        iconName: 'Home'
      }
    ]
  }
];

export const getAdvisorRecommendation = (
  answers: Record<string, string>
): AdvisorRecommendation => {
  const area = answers['building-area'] || 'attic';
  const goal = answers['primary-goal'] || 'max-energy-air-sealing';
  const nature = answers['project-nature'] || 'new-construction';

  // Logic Matrix
  if (area === 'attic') {
    if (goal === 'max-energy-air-sealing' && nature !== 'retrofit-closed-walls') {
      return {
        primaryServiceSlug: 'closed-cell-spray-foam',
        primaryTitle: '2.0 lb Closed-Cell Spray Foam Roof Deck (Hot Roof Assembly)',
        primaryCategory: 'Spray Foam Systems',
        primaryMaterial: 'High-Density Closed-Cell Polyurethane Foam',
        rValueTarget: 'R-40 to R-60 (NBC 9.36 compliant)',
        rationale: 'Applying closed-cell spray foam directly to the underside of roof rafters creates an airtight unvented hot roof assembly. It brings HVAC equipment inside the conditioned envelope and completely eliminates ice dams.',
        keyBenefits: [
          'Permanent air barrier prevents all attic warm air bypasses',
          'Eliminates need for soffit/ridge ventilation in complex roofs',
          'Prevents condensation and attic mould growth'
        ],
        codeComplianceWarning: 'Combustible foam exposed in accessible attics requires an approved ignition barrier (such as DC315 intumescent coating or 1/2" drywall) under NBC 9.10.17.10.',
        alternativeServiceSlug: 'cellulose',
        alternativeTitle: 'Blown-In Cellulose Attic Top-Up (R-50/R-60)',
        alternativeRationale: 'If your attic floor is flat and well-ventilated, comprehensive canned-foam bypass air sealing followed by 15" of blown cellulose is a highly economical, eco-friendly alternative.',
        nextSteps: [
          'Verify attic roof ventilation status and calculate square footage',
          'Inspect for active roof leaks or recessed light bypasses before installation',
          'Request a certified Canadian spray foam contractor quote'
        ]
      };
    }

    return {
      primaryServiceSlug: 'cellulose',
      primaryTitle: 'Air Sealing & Blown-In Cellulose Attic Upgrade (R-50 / R-60)',
      primaryCategory: 'Fiberglass & Cellulose',
      primaryMaterial: 'Borate-Treated Recycled Cellulose + Polyurethane Air Seal',
      rValueTarget: 'R-50 (13.5" depth) to R-60 (16.5" depth)',
      rationale: 'Blown-in cellulose over a dedicated air-sealed ceiling plane is Canada’s most cost-effective and energy-dense attic insulation strategy. Dense fibers prevent convective heat loss in extreme winter sub-zero temperatures.',
      keyBenefits: [
        'High return on investment (qualifies for CleanBC, Enbridge HER+, and provincial grants)',
        'Borate treatment deters rodents, insects, and flame spread',
        '85% post-consumer recycled paper content with low embodied carbon'
      ],
      codeComplianceWarning: 'Must maintain a minimum 2" clearance above insulation at eaves using propervent baffles to allow continuous soffit airflow under NBC 9.19.1.',
      alternativeServiceSlug: 'blown-in-fiberglass',
      alternativeTitle: 'Blown-In Virgin Fiberglass Attic System',
      alternativeRationale: 'Virgin blown fiberglass provides a clean, non-settling, non-combustible alternative with minimal dust during installation.',
      nextSteps: [
        'Measure current attic insulation depth to calculate required R-value top-up',
        'Check provincial rebate eligibility before proceeding',
        'Seal all attic hatch doors with closed-cell weatherstripping'
      ]
    };
  }

  if (area === 'basement-foundation' || area === 'crawlspace') {
    return {
      primaryServiceSlug: 'closed-cell-spray-foam',
      primaryTitle: '2.0 lb Closed-Cell Polyurethane Spray Foam Foundation System',
      primaryCategory: 'Spray Foam Systems',
      primaryMaterial: '2.0 lb High-Density Polyurethane Foam',
      rValueTarget: 'R-15 to R-22 Continuous',
      rationale: 'Concrete foundation walls naturally transmit moisture and ground cold from outside. Closed-cell spray foam forms a seamless, monolithic bond against concrete that acts as thermal insulation, air barrier, and Class II vapour retarder in a single step.',
      keyBenefits: [
        '100% moisture impermeable (<1% water absorption) — will not support mould',
        'Stops basement musty odors, cold convection drafts, and concrete weeping',
        'Eliminates the cold moisture condensation trap behind timber framing'
      ],
      codeComplianceWarning: 'Foam applied in residential basements MUST be protected by a 15-minute thermal barrier (1/2" drywall or approved thermal coating) once finished for occupancy.',
      alternativeServiceSlug: 'rigid-board',
      alternativeTitle: 'Taped XPS Rigid Foam Board + Stud Wall Assembly',
      alternativeRationale: 'Installing 2 inches of taped XPS rigid board against concrete followed by 2x4 framing and mineral wool batts offers a proven continuous insulation assembly.',
      nextSteps: [
        'Inspect foundation walls for active hydrostatic water leaks or cracks',
        'Measure linear perimeter feet and height of foundation walls',
        'Connect with a certified applicator for moisture testing and quote'
      ]
    };
  }

  if (area === 'interior-soundproofing' || goal === 'sound-reduction') {
    return {
      primaryServiceSlug: 'mineral-wool',
      primaryTitle: 'High-Density Mineral Wool Acoustic Batts (Rockwool Safe’n’Sound)',
      primaryCategory: 'Mineral & Rigid',
      primaryMaterial: 'High-Density Basalt Stone Wool Fibers',
      rValueTarget: 'STC 48 – 55 (Acoustic Isolation Assembly)',
      rationale: 'Non-combustible high-density stone wool batts absorb broad-spectrum acoustic frequencies far superior to lightweight fiberglass. Combined with resilient sound channels and 5/8" Type X drywall, it provides commercial-grade privacy.',
      keyBenefits: [
        'Exceptional STC sound deadening between bathrooms, bedrooms, and suites',
        'True non-combustible fire protection (withstands 1,177°C / 2,150°F)',
        'Dense friction-fit will never sag, slump, or settle inside the wall cavity'
      ],
      codeComplianceWarning: 'Ensure penetrations (pot lights, electrical junction boxes, ductwork) are sound-sealed with acoustic sealant to avoid sound flanking bypasses.',
      alternativeServiceSlug: 'open-cell-spray-foam',
      alternativeTitle: '0.5 lb Open-Cell Acoustic Spray Foam Cavity Fill',
      alternativeRationale: 'Open-cell spray foam completely seals air voids and pipes in complex multi-room renovations, absorbing sound reverberations.',
      nextSteps: [
        'Identify target partition walls and between-floor joist cavities',
        'Consider pairing with resilient metal channels for decoupled sound isolation',
        'Request supply or installation quote'
      ]
    };
  }

  if (goal === 'fire-safety') {
    return {
      primaryServiceSlug: 'fire-rated',
      primaryTitle: 'CAN/ULC S114 Non-Combustible Mineral Wool & Fire-Rated Assemblies',
      primaryCategory: 'Specialty & Building Science',
      primaryMaterial: 'Basalt Stone Wool & CAN/ULC S101 Certified Assemblies',
      rValueTarget: '1-Hour to 2-Hour Fire Resistance Rating + R-22+',
      rationale: 'Engineered for zero-lot-line residential developments, multi-family separation party walls, commercial shaft walls, and furnace rooms where building codes mandate non-combustible materials.',
      keyBenefits: [
        'Non-combustible stone wool melting point exceeds 1,177°C (2,150°F)',
        'Zero toxic smoke development, buying crucial building evacuation time',
        'Meets NBC 9.10 fire separation codes for multi-family suites'
      ],
      codeComplianceWarning: 'Must follow approved listed design assemblies (e.g. ULC W400 / W300 series) including specified drywall layers and fastener spacing.',
      alternativeServiceSlug: 'mineral-wool',
      alternativeTitle: 'Rockwool Comfortbatt Thermal & Fire Assemblies',
      alternativeRationale: 'Standard mineral wool batts provide inherent non-combustibility while delivering exceptional thermal performance.',
      nextSteps: [
        'Review municipal architectural plans for required fire rating (45 min, 1 hr, 2 hr)',
        'Verify required UL/ULC listed assembly drawings',
        'Consult with a certified technical building envelope advisor'
      ]
    };
  }

  // Default: Exterior Walls / High Performance
  return {
    primaryServiceSlug: 'closed-cell-spray-foam',
    primaryTitle: '2.0 lb Closed-Cell Polyurethane Spray Foam Exterior Wall System',
    primaryCategory: 'Spray Foam Systems',
    primaryMaterial: '2.0 lb HFO Eco-Blown Polyurethane Foam',
    rValueTarget: 'R-22 to R-30 (Step Code 4/5 & Net Zero Compliant)',
    rationale: 'Provides maximum R-value per inch (R-6.5/inch) in standard 2x6 framing. Fills every irregular gap around wiring and plumbing, creates an impermeable air barrier, and acts as an integral vapour barrier.',
    keyBenefits: [
      'Stops 30–40% of whole-home energy loss caused by air leakage',
      'Adds 200–300% racking shear strength to timber wall framing',
      'Impervious to wind-washing and moisture absorption'
    ],
    codeComplianceWarning: 'Must be installed by a CUFCA-certified applicator in compliance with CAN/ULC S705.2 standard, followed by approved interior 1/2" drywall.',
    alternativeServiceSlug: 'mineral-wool',
    alternativeTitle: 'Mineral Wool Batts + Exterior Continuous Rigid Board (CI)',
    alternativeRationale: 'Combining interior mineral wool batts in stud bays with 1.5" exterior continuous stone wool boards breaks thermal bridging through studs.',
    nextSteps: [
      'Measure total exterior wall square footage minus window/door openings',
      'Check provincial building code Step Code / SB-12 thermal targets',
      'Submit inquiry for certified contractor project pricing'
    ]
  };
};
