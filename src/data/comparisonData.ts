import { InsulationComparisonMaterial } from '../types';

export const INSULATION_COMPARISON_MATERIALS: InsulationComparisonMaterial[] = [
  {
    id: 'closed-cell-spray-foam',
    name: '2.0 lb Closed-Cell Spray Foam (Polyurethane)',
    category: 'Spray Foam',
    shortName: 'Closed-Cell Foam',
    rValuePerInch: 'R-6.0 to R-6.8 / inch',
    costRangeSqFt: '$2.75 – $4.50+ / sq.ft (at 2")',
    boardFootCost: '$1.45 – $2.40 / board foot',
    airBarrierPerformance: 'Inherent at 1-2"',
    vapourBarrierPerformance: 'Inherent at 2" (Class II)',
    firePerformance: 'Combustible foam; MUST be protected by an approved 15-minute thermal barrier (1/2" drywall) or CAN/ULC S124 compliant intumescent coating in conditioned space.',
    acousticRatingSTC: 'Moderate (STC 34–38). Dense closed matrix transmits low-frequency structural vibrations compared to fibrous batts.',
    moistureResistance: 'Exceptional (<1% water absorption). Approved by FEMA as flood damage-resistant insulation; does not support mould growth.',
    bestApplications: [
      'Basement foundation walls & below-grade assemblies',
      'Cathedral & unvented hot-roof ceilings',
      'Cantilevers, bonus rooms over garages & rim joists',
      'Commercial exterior continuous insulation (CI)'
    ],
    renovationSuitability: 'High for exposed crawlspaces, rim joists, and gut remodels. Difficult for closed cavities without drywall removal.',
    newConstructionSuitability: 'Highest efficiency single-step air/vapour/thermal application for custom homes and commercial envelopes.',
    pros: [
      'Highest R-value per inch of any field-applied insulation',
      'Monolithic air barrier stops convection loops and drafts',
      'Acts as a code-compliant vapour retarder at 50mm (2")',
      'Adds 200–300% racking strength to timber framing assemblies',
      'Completely impervious to moisture absorption and air washing'
    ],
    cons: [
      'Higher upfront capital investment than batt or blown systems',
      'Requires certified CUFCA/CALBO master applicator with specialized rig',
      'Requires 24-hour building evacuation during application & off-gassing cure',
      'Requires 15-minute thermal barrier in living spaces'
    ],
    environmentalProfile: 'Modern 4th-gen HFO blowing agents (GWP < 1, zero ODP). Reduces lifetime heating energy by 30–50%.',
    installationMethod: 'Plural-component high-pressure heated proportioner spray application at 120–140°F.',
    relatedServiceSlug: 'closed-cell-spray-foam'
  },
  {
    id: 'open-cell-spray-foam',
    name: '0.5 lb Open-Cell Spray Foam (Polyurethane)',
    category: 'Spray Foam',
    shortName: 'Open-Cell Foam',
    rValuePerInch: 'R-3.6 to R-3.8 / inch',
    costRangeSqFt: '$1.80 – $2.90 / sq.ft (at 3.5")',
    boardFootCost: '$0.65 – $1.15 / board foot',
    airBarrierPerformance: 'Inherent at 1-2"',
    vapourBarrierPerformance: 'Vapour Permeable (Requires 6-mil poly)',
    firePerformance: 'Combustible; requires 15-minute thermal barrier or DC315 ignition coating.',
    acousticRatingSTC: 'Outstanding (STC 45–52; NRC 0.70+). Soft sponge-like cellular matrix absorbs mid & high-frequency airborne noise.',
    moistureResistance: 'Vapour permeable. Absorbs liquid water if exposed to bulk water leaks; quickly dries out once leak is resolved.',
    bestApplications: [
      'Interior partition soundproofing walls & home theatres',
      'Between-floor acoustic isolation in multi-family suites',
      'Attic rooflines & dry interior wall cavities (with vapour retarder)',
      'Deep roof rafters with ample cavity depth'
    ],
    renovationSuitability: 'Excellent for soundproofing and attic roofline conversions with full gut.',
    newConstructionSuitability: 'Cost-effective air sealing and cavity fill for residential 2x6 framing.',
    pros: [
      'Expands 100x to air-seal irregular stud bays, wiring, and plumbing',
      'Superior acoustic dampening compared to rigid foams',
      'Lower cost per board foot than closed-cell foam',
      'Flexible matrix accommodates natural building settling'
    ],
    cons: [
      'Lower R-value per inch requires deeper framing (e.g. 2x6 or 2x8)',
      'Not a vapour barrier (requires 6-mil polyethylene or vapour-retarder paint)',
      'Cannot be used in damp below-grade basements or exterior continuous assemblies',
      'Requires 24-hour jobsite evacuation'
    ],
    environmentalProfile: 'Water-blown technology; zero chemical ozone depletion, low GWP.',
    installationMethod: 'Plural-component spray foam with rapid 100:1 volumetric expansion.',
    relatedServiceSlug: 'open-cell-spray-foam'
  },
  {
    id: 'mineral-wool',
    name: 'Stone Wool / Mineral Wool (Rockwool)',
    category: 'Mineral & Rigid',
    shortName: 'Mineral Wool',
    rValuePerInch: 'R-4.0 to R-4.3 / inch',
    costRangeSqFt: '$1.60 – $2.75 / sq.ft (batt)',
    boardFootCost: '$0.80 – $1.30 / sq.ft equivalent',
    airBarrierPerformance: 'Requires Air Barrier Layer',
    vapourBarrierPerformance: 'Vapour Permeable',
    firePerformance: 'Non-combustible (CAN/ULC S114). Melting point exceeds 1,177°C (2,150°F). Zero flame spread, zero smoke development.',
    acousticRatingSTC: 'Superior (STC 48–55 in staggered stud walls). High-density fibrous structure absorbs broad-spectrum acoustic frequencies.',
    moistureResistance: 'Hydrophobic (repels liquid water). Dries completely without losing shape or R-value; naturally mould-resistant.',
    bestApplications: [
      'Zero-lot-line residential exterior walls & party separation walls',
      'Continuous exterior insulation (Comfortboard) under cladding',
      'Mechanical rooms, furnace enclosures & garage ceilings',
      'High-acoustic interior walls and ceilings'
    ],
    renovationSuitability: 'Easy DIY or professional friction-fit installation during any room renovation.',
    newConstructionSuitability: 'Preferred choice for Step Code 4/5, Passive House, and fire-separated assemblies.',
    pros: [
      'True non-combustible fire protection buys critical evacuation time',
      'Dense friction-fit batts will not sag, slump, or settle over 50+ years',
      'Impervious to rot, mould, and rodent nesting',
      'Outstanding acoustic deadening performance',
      'Vapour open allows walls to dry to the exterior'
    ],
    cons: [
      'Higher material cost than standard fiberglass batts',
      'Heavier and more abrasive to cut than standard fiberglass',
      'Does not stop air leakage by itself (requires sealed poly or smart membrane)'
    ],
    environmentalProfile: 'Manufactured from natural basalt rock and recycled blast furnace slag (70%+ recycled content).',
    installationMethod: 'Friction-fit batts between wood/steel framing or screwed exterior rigid boards.',
    relatedServiceSlug: 'mineral-wool'
  },
  {
    id: 'blown-in-cellulose',
    name: 'Dense-Pack & Blown-In Cellulose',
    category: 'Fiberglass & Cellulose',
    shortName: 'Cellulose',
    rValuePerInch: 'R-3.6 to R-3.8 / inch',
    costRangeSqFt: '$1.10 – $2.10 / sq.ft (at R-50 attic)',
    boardFootCost: '$0.40 – $0.80 / board foot',
    airBarrierPerformance: 'Requires Air Barrier Layer',
    vapourBarrierPerformance: 'Vapour Permeable',
    firePerformance: 'Treated with non-toxic borate mineral fire retardants (Class A fire rated; passes CAN/ULC S102.2).',
    acousticRatingSTC: 'Very High (STC 44–50). High density (1.5–3.5 lb/cu ft) fills gaps around wiring and pipes to reduce sound transmission.',
    moistureResistance: 'Hygroscopic (absorbs and distributes humidity without liquid degradation, but must not be exposed to standing water).',
    bestApplications: [
      'Attic retrofits & top-ups to R-50 or R-60',
      'Drill-and-fill retrofit of uninsulated existing exterior walls',
      'Dense-pack cathedral ceiling bays'
    ],
    renovationSuitability: 'The gold-standard for non-invasive retrofits (dense-pack through 2" siding holes).',
    newConstructionSuitability: 'Excellent high-speed, cost-effective attic insulation application.',
    pros: [
      'Made from 85% post-consumer recycled paper and cardboard',
      'Dense-pack inhibits air convection currents within framing cavities',
      'Borate treatment deters rodents, insects, and fungal growth',
      'Extremely economical for large open attic floor spaces'
    ],
    cons: [
      'Can settle 15–20% over initial years if not blown to correct density',
      'Sensitive to roof leaks or standing plumbing water',
      'Dusty installation requiring commercial pneumatic blower and PPE'
    ],
    environmentalProfile: 'Lowest embodied carbon of any mass-market insulation (sequesters carbon in cellulose fibers).',
    installationMethod: 'Pneumatic machine blown through flexible hose into attics or dense-packed behind netting/drywall.',
    relatedServiceSlug: 'cellulose'
  },
  {
    id: 'fiberglass-batts',
    name: 'Traditional Fiberglass Batts & Blown-In',
    category: 'Fiberglass & Cellulose',
    shortName: 'Fiberglass',
    rValuePerInch: 'R-3.0 to R-4.3 / inch (High-Density)',
    costRangeSqFt: '$0.85 – $1.75 / sq.ft',
    boardFootCost: '$0.35 – $0.70 / board foot',
    airBarrierPerformance: 'Requires Air Barrier Layer',
    vapourBarrierPerformance: 'Vapour Permeable',
    firePerformance: 'Glass fibers are non-combustible; kraft or foil facings are combustible without drywall protection.',
    acousticRatingSTC: 'Moderate (STC 36–42 in standard interior 2x4 partition walls).',
    moistureResistance: 'Inorganic glass fibers do not absorb water, but moisture trapped in batts destroys R-value and invites mold on adjacent timber.',
    bestApplications: [
      'Standard residential 2x4 and 2x6 framing walls',
      'Attic floor blown loose-fill applications (R-50/R-60)',
      'Budget-conscious residential framing packages'
    ],
    renovationSuitability: 'Simple friction-fit into open stud bays; economical for standard room renovations.',
    newConstructionSuitability: 'Most widely used mass-market residential builder insulation across North America.',
    pros: [
      'Lowest upfront material cost among batt insulation products',
      'Widely available in pre-cut standard 16" and 24" on-center dimensions',
      'Lightweight and quick to install in simple, unobstructed stud bays',
      'Formaldehyde-free modern bio-based binders'
    ],
    cons: [
      'Gaps, compressions, and voids reduce real-world effective R-value by up to 50%',
      'Permeable to air movement — allows wind-washing and convective heat loss',
      'Easily nested in by mice and rodents if building envelope is breached',
      'Fiber irritation during handling and cutting'
    ],
    environmentalProfile: 'Contains 50–70% recycled glass cullet and sand; low chemical emissions.',
    installationMethod: 'Friction-fit pre-cut batts or machine loose-fill blown attic fibers.',
    relatedServiceSlug: 'fiberglass'
  },
  {
    id: 'rigid-foam-board',
    name: 'Rigid Foam Board (XPS & Polyisocyanurate)',
    category: 'Mineral & Rigid',
    shortName: 'Rigid Board',
    rValuePerInch: 'R-5.0 (XPS) to R-6.5 (Polyiso) / inch',
    costRangeSqFt: '$1.40 – $3.20 / sq.ft (per 1–2" thickness)',
    boardFootCost: '$0.90 – $1.60 / board foot',
    airBarrierPerformance: 'Requires Air Barrier Layer',
    vapourBarrierPerformance: 'Inherent at 1-2" (Class II)',
    firePerformance: 'Combustible thermoplastic/thermoset; must be separated from interior occupied space by thermal barrier.',
    acousticRatingSTC: 'Low (STC 28–34). Rigid planar boards resonate with sound vibrations.',
    moistureResistance: 'XPS has excellent water resistance (<0.7% absorption) for below-slab ground contact. Polyiso requires moisture protection.',
    bestApplications: [
      'Continuous exterior insulation (CI) over wall sheathing to break thermal bridging',
      'Under-slab and sub-slab basement insulation (XPS 25–40 psi compressive strength)',
      'Interior basement masonry foundation retrofits (taped XPS boards)',
      'Commercial low-slope flat roof insulation (Polyiso)'
    ],
    renovationSuitability: 'Excellent for DIY basement wall retrofits and exterior siding replacements.',
    newConstructionSuitability: 'Crucial for meeting NBC 9.36 continuous exterior thermal bridging rules.',
    pros: [
      'Breaks 25–30% thermal bridging heat loss through timber/steel studs',
      'High compressive strength withstands heavy concrete floor slab loads',
      'Taped foil-faced Polyiso provides integrated radiant barrier and air barrier',
      'Uniform factory thickness ensures reliable specified R-values'
    ],
    cons: [
      'Rigid planar panels do not fill irregular framing gaps without tape/canned foam',
      'Must be covered by drywall on the interior or approved cladding on exterior',
      'Susceptible to UV degradation if left exposed on construction sites'
    ],
    environmentalProfile: 'Modern zero-ODP blowing agents; saves significant heating energy over lifetime.',
    installationMethod: 'Fastened with cap-head screws, adhesive, and air-sealed with specialized barrier tapes.',
    relatedServiceSlug: 'rigid-board'
  }
];
