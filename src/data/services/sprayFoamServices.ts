import { InsulationService } from '../../types';

export const SPRAY_FOAM_SERVICES: InsulationService[] = [
  {
    id: 'spray-foam',
    slug: 'spray-foam',
    title: 'Spray Foam Insulation',
    category: 'spray-foam',
    categoryName: 'Spray Polyurethane Foam',
    shortDesc: 'High-performance closed-cell and open-cell polyurethane spray foam delivering integrated air sealing, thermal resistance, and moisture management.',
    heroTagline: 'Continuous Air & Thermal Barrier for Canadian Climate Zones',
    overview: 'Spray polyurethane foam (SPF) expands upon installation to fill framing cavities, irregular geometries, and structural junctions. By combining insulation and continuous air sealing into an adhered monolithic layer, spray foam helps control convective heat loss, minimize air leakage, and reduce moisture migration when properly specified and installed in Canadian building assemblies.',
    whatItIs: 'Spray polyurethane foam is a two-component chemical system (isocyanates and polyol resin) blended on site using high-pressure proportioners. Upon exiting the spray gun, the mixture reacts and expands within seconds to create a seamless, adhered cellular foam matrix that fills gaps, penetrations, and framing cavities.',
    keyBenefits: [
      'Continuous air barrier when installed at verified manufacturer minimum depths (CAN/ULC S705.1 standard)',
      'Closed-cell foam provides low water vapor permeance, functioning as a Class II vapor retarder at qualified thicknesses',
      'High thermal resistance per unit thickness (typically nominal R-5.5 to R-6.8 per inch depending on formulation and blowing agent)',
      'Helps mitigate attic condensation and air-leakage-driven ice damming when part of a complete assembly design',
      'Improves structural racking resistance in wood-framed shear wall configurations'
    ],
    applications: {
      residential: [
        'Basement rim joists and foundation sill plate transitions (critical air leakage paths)',
        'Cathedral ceilings, unvented conditioned roof assemblies, and scissor trusses',
        'Exterior stud cavity fills and exterior continuous insulation sheathing',
        'Cantilevered floor overhangs and bonus rooms above unheated garages',
        'Crawlspace foundation walls and perimeter below-grade assemblies'
      ],
      commercial: [
        'Light-gauge steel stud exterior wall assemblies with continuous exterior insulation',
        'Commercial flat roof assemblies and parapet thermal transitions',
        'Pre-engineered metal building walls and roof deck retrofits',
        'Cold storage distribution facilities and controlled-atmosphere rooms',
        'Heated underground parkade soffits and mechanical room thermal isolation'
      ]
    },
    considerations: [
      'Must be installed by certified applicators adhering to CAN/ULC S705.2 field quality control standards',
      'Requires strict adherence to job-site evacuation, active ventilation, and 24-hour curing protocols',
      'Must be covered by an approved thermal barrier (e.g., 1/2" gypsum) in occupied interior spaces',
      'Substrate temperature, wood moisture content (<18%), and ambient humidity must be verified prior to application'
    ],
    installationProcess: [
      'Comprehensive pre-installation site inspection verifying substrate dryness and framing readiness',
      'Masking of windows, mechanical units, electrical boxes, and finished surfaces',
      'Active mechanical cross-ventilation setup exhausting to exterior during application and cure',
      'High-pressure dual-component application by certified spray technicians at controlled pass thicknesses',
      'Daily quality control recording core density, adhesion tests, ambient conditions, and job-site logs'
    ],
    buildingScienceNote: 'In cold Canadian climates (Climate Zones 4 through 8), indoor conditioned air carries water vapor that can condense upon contacting cold exterior sheathing. Closed-cell spray foam installed on the inner surface of exterior sheathing raises the condensing surface temperature above the indoor dew point, mitigating moisture accumulation when designed in accordance with applicable energy and building codes.',
    rValueGuidance: 'Nominal material ratings typically range from R-5.5 to R-6.8 per inch for medium-density closed-cell foam and R-3.5 to R-3.8 per inch for light-density open-cell foam. Whole-assembly effective R-values will be lower due to thermal bridging through structural framing members.',
    codeComplianceNote: 'Installation of medium-density closed-cell spray polyurethane foam must comply with CAN/ULC S705.1 (material specification) and CAN/ULC S705.2 (installation standard), as referenced in the National Building Code of Canada and provincial building codes. In occupied interior spaces, combustible foamed plastics must be protected by an approved thermal barrier (such as 12.7 mm gypsum board or an approved listed intumescent coating meeting CAN/ULC S124) unless specifically evaluated otherwise for the designated assembly.',
    relatedServices: ['closed-cell-spray-foam', 'open-cell-spray-foam', 'air-sealing', 'attic-insulation', 'basement-insulation'],
    seoTitle: 'Spray Foam Insulation | Canadian Building Science & Code Guidelines | SprayInsulations.ca',
    seoDescription: 'Explore open-cell and closed-cell spray polyurethane foam insulation specifications, CAN/ULC S705 standards, thermal barrier requirements, and Canadian building code compliance.',
    faqs: [
      {
        question: 'What is the functional difference between closed-cell and open-cell spray foam?',
        answer: 'Medium-density closed-cell spray foam (approx. 2.0 lb/cu.ft) is a rigid, dense formulation that provides high thermal resistance per inch (nominally R-5.5 to R-6.8/in), acts as an air barrier at qualified thicknesses, and provides low water vapor permeance (<60 ng/(Pa·s·m²) at 50 mm / 2 inches) to serve as a vapor retarder. Light-density open-cell foam (approx. 0.5 lb/cu.ft) is flexible and vapor-permeable (approx. R-3.5 to R-3.8/in); while it creates an effective air barrier and sound-absorbing cavity fill, it requires a separate code-compliant vapor barrier on the warm-in-winter side in Canadian heating climates.'
      },
      {
        question: 'What thermal barrier is required over spray foam inside Canadian homes?',
        answer: 'Under the National Building Code of Canada (e.g., NBC 9.10.17.10 / 3.1.5.12) and provincial building codes, foamed plastics exposed to interior conditioned spaces must generally be protected by an approved thermal barrier. Common prescriptive protection includes 12.7 mm (1/2 in) gypsum drywall mechanically fastened to framing, or an intumescent coating tested and listed under CAN/ULC S124 for the specific brand and thickness of spray foam. In non-habitable, non-storage attic or crawlspace areas, alternate ignition barriers may be permitted subject to local authority approval.'
      },
      {
        question: 'How long must an area be evacuated during and after spray foam installation?',
        answer: 'Re-occupancy and re-entry times vary by product formulation, applied volume, ambient conditions, and active mechanical ventilation rates. Under CAN/ULC S705.2 installer guidelines and product technical data sheets, certified contractors establish active cross-ventilation during application and enforce a mandatory curing period—often 24 hours for residential retrofit applications, though some low-emission systems permit shorter or longer intervals. Always confirm specific re-entry requirements with your certified applicator and the manufacturer documentation.'
      },
      {
        question: 'Can spray foam insulation be installed during Canadian winter temperatures?',
        answer: 'Yes, provided application protocols are strictly followed. Certified spray foam applicators use seasonal chemical formulations (winter-grade resins), substrate pre-heating equipment, and temperature-controlled delivery hoses to ensure substrate temperatures and ambient moisture levels satisfy CAN/ULC S705.2 criteria before spraying, ensuring proper adhesion and chemical reaction.'
      },
      {
        question: 'How does spray foam help prevent attic moisture accumulation and ice dams?',
        answer: 'Ice damming and winter attic condensation are primarily driven by warm, moist indoor air leaking into the unconditioned attic space through ceiling bypasses (pot lights, plumbing stacks, attic hatches, top plates). Applying spray foam creates an airtight seal at these penetration points, keeping the roof deck cold and preventing heat loss from melting snow prematurely.'
      },
      {
        question: 'What effective R-value does spray foam provide in a standard 2x6 wall assembly?',
        answer: 'While 5.5 inches of closed-cell foam provides a nominal insulation value of approximately R-30 to R-35 within the cavity, the effective whole-wall thermal performance of the assembly will be lower (typically around R-20 to R-24) due to thermal bridging through standard wood framing members spaced 16" or 24" on center, in accordance with NBC 9.36 / NECB calculation methodologies.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'open-cell-spray-foam',
    slug: 'open-cell-spray-foam',
    title: 'Open-Cell Spray Foam Insulation',
    category: 'spray-foam',
    categoryName: 'Spray Polyurethane Foam',
    shortDesc: 'Lightweight, flexible 0.5 lb/cu.ft polyurethane spray foam engineered for interior cavity fills, acoustic attenuation, and seamless air sealing.',
    heroTagline: 'Flexible Air Sealing & Acoustic Cavity Insulation',
    overview: 'Open-cell spray polyurethane foam (ocSPF) is a low-density (approx. 0.5 lb/cu.ft) thermal and acoustic insulation material. Featuring an interconnected microscopic cell structure, open-cell foam expands up to 100 times its liquid volume to conform tightly to framing cavities, sealing complex air leakage paths while allowing water vapor to dry through the assembly when permitted by code.',
    whatItIs: 'Open-cell spray foam uses water as a primary blowing agent to create an open, spongy micro-cellular structure. It expands rapidly to fill full 2x4, 2x6, or timber framing depths in a single pass, providing cost-effective interior air sealing and sound absorption.',
    keyBenefits: [
      'Seamless interior air barrier that expands into irregular framing pockets and wiring chases',
      'Effective sound dampening (NRC 0.70+) for interior partitions, media rooms, and floor joists',
      'Cost-effective high-yield expansion for deep framing cavities and unvented roof assemblies',
      'Vapor-permeable structure allows moisture to dry in assemblies designed for bidirectional drying',
      'Lightweight formulation adds negligible dead load to roof trusses and long-span framing'
    ],
    applications: {
      residential: [
        'Interior partition walls for acoustic privacy between bedrooms and bathrooms',
        'Floor joist cavities between multi-level living areas and basement suites',
        'Above-grade exterior wall stud cavities (with code-mandated warm-side vapor barrier)',
        'Unvented conditioned attic roof decks in moderate climate zones with proper vapor management'
      ],
      commercial: [
        'Sound transmission dampening in commercial office demising walls',
        'Hotel guest room partitions and theater/auditorium interior wall cavities',
        'Light-gauge steel framing cavity fills in interior conditioned spaces'
      ]
    },
    considerations: [
      'Open-cell foam is vapor-permeable and is not a vapor retarder; heating climates require an approved vapor barrier',
      'Must never be installed in wet areas, exterior below-grade foundations, or direct contact with bulk water',
      'Requires thermal barrier protection (such as 1/2" drywall) in all occupied interior spaces',
      'Requires careful building science review when used on roof decks in severe cold Canadian climate zones'
    ],
    installationProcess: [
      'Site preparation, window masking, and electrical box protection',
      'Active mechanical cross-ventilation established per CAN/ULC standards',
      'Single-pass full cavity spray application allowing natural rapid expansion',
      'Planer trimming flush with framing studs to allow direct drywall installation',
      'Installation of code-mandated 6-mil polyethylene or smart vapor retarder on the warm-in-winter side'
    ],
    buildingScienceNote: 'Because open-cell foam is vapor-open (typically >10 perms at 3 inches), water vapor from conditioned indoor air can pass through the foam. In Canadian heating climates (NBC Part 9), a continuous vapor barrier (such as 6-mil poly or vapor-retarding primer) must be installed on the interior side of the assembly to prevent winter vapor condensation on cold exterior sheathing.',
    rValueGuidance: 'Open-cell foam typically provides nominal thermal resistance of R-3.5 to R-3.8 per inch of thickness.',
    codeComplianceNote: 'Open-cell SPF must comply with CAN/ULC S712.1 (material standard) and CAN/ULC S712.2 (installation standard). Like all foamed plastics, it must be separated from occupied spaces by an approved 15-minute thermal barrier per NBC 9.10.17.10.',
    relatedServices: ['spray-foam', 'closed-cell-spray-foam', 'acoustic', 'wall-insulation', 'air-sealing'],
    seoTitle: 'Open-Cell Spray Foam Insulation | Canadian Code & Specifications | SprayInsulations.ca',
    seoDescription: 'Learn about open-cell 0.5 lb spray polyurethane foam: thermal performance, acoustic absorption, vapor permeance, and Canadian building code requirements.',
    faqs: [
      {
        question: 'Is open-cell spray foam a vapor barrier?',
        answer: 'No. Open-cell spray foam has an open, porous cell structure that is permeable to water vapor. In Canadian heating climates, building codes require an approved Class I or II vapor barrier (such as 6-mil polyethylene sheet or smart vapor retarder membrane) installed on the warm-in-winter interior side of exterior wall assemblies.'
      },
      {
        question: 'How does open-cell spray foam perform for acoustic soundproofing?',
        answer: 'Open-cell spray foam is an excellent sound absorption material within cavities. Its flexible, open-cell matrix dampens mid-to-high frequency airborne sound transmission (such as speech and television audio), achieving Noise Reduction Coefficients (NRC) of 0.70 or higher.'
      },
      {
        question: 'Can open-cell spray foam be used in basements or rim joists?',
        answer: 'Open-cell foam is generally not recommended for direct contact with concrete basement foundation walls or rim joists in cold Canadian climates because it allows moisture vapor to reach the cold concrete or rim joist, where it can condense. Closed-cell spray foam is the preferred material for below-grade and rim joist applications.'
      },
      {
        question: 'What is the expansion rate of open-cell spray foam?',
        answer: 'Open-cell foam expands approximately 80 to 100 times its liquid volume upon application, rapidly filling full 3.5" to 5.5" framing cavities in a single pass. Excess foam is trimmed flush with studs using specialized trimming saws.'
      },
      {
        question: 'Does open-cell spray foam require a thermal barrier?',
        answer: 'Yes. Under the National Building Code of Canada, all foamed plastics installed in interior occupied spaces must be protected by an approved thermal barrier, typically 12.7 mm (1/2") gypsum board or an approved listed intumescent coating.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'closed-cell-spray-foam',
    slug: 'closed-cell-spray-foam',
    title: 'Closed-Cell Spray Foam Insulation',
    category: 'spray-foam',
    categoryName: 'Spray Polyurethane Foam',
    shortDesc: 'High-density 2.0 lb/cu.ft polyurethane spray foam delivering maximum R-value per inch, monolithic air barrier, and Class II vapor retarder performance.',
    heroTagline: 'Maximum Thermal Density, Air Sealing & Vapor Retarder in One Step',
    overview: 'Medium-density closed-cell spray polyurethane foam (2.0 lb/cu.ft) is a rigid, moisture-impermeable insulation system. Each microscopic cell is fully sealed and encapsulated with high-performance low-GWP blowing agents, delivering exceptional thermal resistance (R-5.5 to R-6.8/in), integral air sealing, and low vapor permeance for demanding Canadian climate zones.',
    whatItIs: 'Closed-cell foam is formulated with high structural cross-linking that creates a dense, rigid foam plastic matrix. At thicknesses of 50 mm (2 inches) or greater, certified closed-cell foams meet Canadian standard CAN/ULC S705.1 requirements for both air barrier and vapor barrier performance.',
    keyBenefits: [
      'Highest R-value per inch of any field-applied residential insulation (nominal R-5.5 to R-6.8/in)',
      'Acts as a seamless air barrier and Class II vapor retarder at 50 mm (2 inches) thickness',
      'Impermeable to bulk water absorption; flood-damage resistant (FEMA Class 5 material)',
      'Adds significant structural rigidity and racking strength to framed wall assemblies',
      'Ideal for moisture-critical assemblies: rim joists, basement foundation walls, and cathedral roofs'
    ],
    applications: {
      residential: [
        'Basement foundation walls (direct adhesion to concrete) and walkout slabs',
        'Rim joists, sill plates, and band board transitions across floor levels',
        'Cathedral ceilings, scissor trusses, and flat roof joist bays',
        'Cantilevered floor projections, bonus rooms over unheated garages, and bay windows',
        'Underside of exterior porch ceilings and walk-out decks'
      ],
      commercial: [
        'Exterior continuous insulation (ci) outboard of commercial steel framing or exterior gypsum',
        'Underground heated parkade concrete slab ceilings and transfer soffits',
        'Cold-storage warehouses, walk-in coolers, and pharmaceutical containment facilities',
        'Pre-engineered steel building wall and roof condensation control'
      ]
    },
    considerations: [
      'Must be sprayed in maximum pass thicknesses (typically 2 inches / 50 mm per pass) to prevent exothermic heat build-up',
      'Requires certified applicators licensed under CAN/ULC S705.2 quality assurance programs',
      'Higher material cost compared to fibrous insulations, balanced by multi-functional performance (3-in-1)',
      'Requires thermal barrier protection (such as 1/2" drywall or approved intumescent coating) in occupied spaces'
    ],
    installationProcess: [
      'Substrate inspection: verifying surface cleanliness, dryness (<18% moisture), and temperature',
      'Masking adjacent finishes, HVAC equipment, and electrical boxes',
      'Setting up calibrated mobile proportioner equipment with heated hoses (110-130°F)',
      'Applying foam in controlled passes up to manufacturer-specified maximum lift thickness',
      'Conducting quality control adhesion, density (1.8-2.2 lb/cu.ft), and core sampling checks'
    ],
    buildingScienceNote: 'In Canadian basements and rim joists, warm indoor air easily leaks toward cold foundation concrete or exterior header boards. Closed-cell foam adheres directly to the substrate, eliminating the air gap where condensation could occur, while providing the required continuous vapor resistance without needing separate polyethylene sheeting.',
    rValueGuidance: 'Medium-density closed-cell spray foam provides nominal thermal performance of R-5.5 to R-6.8 per inch of thickness depending on blowing agent generation (HFO / HFC).',
    codeComplianceNote: 'Closed-cell foam must be tested and labeled under CAN/ULC S705.1 and installed by certified applicators under CAN/ULC S705.2. In Canadian homes, it must be separated from occupied spaces by an approved thermal barrier (NBC 9.10.17.10).',
    relatedServices: ['spray-foam', 'open-cell-spray-foam', 'basement-insulation', 'crawlspace-insulation', 'air-sealing'],
    seoTitle: 'Closed-Cell Spray Foam Insulation | 2lb Polyurethane Canadian Specs | SprayInsulations.ca',
    seoDescription: 'Complete technical specifications for 2.0 lb closed-cell spray polyurethane foam: R-value per inch, CAN/ULC S705 compliance, air/vapor barrier dual functionality, and basement application.',
    faqs: [
      {
        question: 'Does closed-cell spray foam eliminate the need for a 6-mil poly vapor barrier?',
        answer: 'Yes, in most exterior wall and basement assemblies. At a qualified thickness (typically 50 mm / 2 inches or greater, conforming to CAN/ULC S705.1), closed-cell spray foam exhibits a water vapor permeance of less than 60 ng/(Pa·s·m²), satisfying the National Building Code requirement for a Class II vapor retarder without supplementary polyethylene.'
      },
      {
        question: 'Can closed-cell spray foam be sprayed directly onto concrete basement walls?',
        answer: 'Yes. Closed-cell foam adheres tightly to clean, cured concrete foundation walls. It insulates the cold concrete from warm indoor air, preventing subterranean moisture migration and interior condensation without needing an air space behind framing.'
      },
      {
        question: 'How does closed-cell spray foam strengthen a home’s structural framing?',
        answer: 'Because closed-cell foam cures into a dense, rigid thermoset plastic bonded directly to studs and exterior sheathing, structural racking tests demonstrate that it increases wall shear strength and resistance to wind uplift by up to 200% to 300% compared to standard fibrous batt assemblies.'
      },
      {
        question: 'What is the maximum thickness of closed-cell foam that can be sprayed in one pass?',
        answer: 'Due to the exothermic heat generated during chemical reaction, manufacturers typically specify a maximum pass thickness of 50 mm (2.0 inches). When deeper thicknesses are specified (e.g., 4 to 6 inches for high R-value roofs), multiple passes must be applied with adequate cooling intervals between lifts.'
      },
      {
        question: 'Is closed-cell spray foam affected by bulk water or flooding?',
        answer: 'Closed-cell foam is water-resistant and does not absorb significant moisture. FEMA classifies closed-cell spray polyurethane foam as a Class 5 flood-damage-resistant material capable of surviving direct floodwater contact.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  }
];
