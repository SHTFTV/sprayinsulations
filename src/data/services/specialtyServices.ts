import { InsulationService } from '../../types';

export const SPECIALTY_SERVICES: InsulationService[] = [
  {
    id: 'fire-rated',
    slug: 'fire-rated',
    title: 'Fire-Rated & Non-Combustible Insulation',
    category: 'specialty',
    categoryName: 'Specialty & Building Science',
    shortDesc: 'Non-combustible stone wool and tested thermal barrier systems engineered for fire separation walls, party walls, and code-mandated assemblies.',
    heroTagline: 'Passive Fire Protection & Tested Thermal Separation Assemblies',
    overview: 'Passive fire containment in Canadian construction relies on tested building assemblies designed to resist flame penetration, limit thermal transmission, and delay structural failure. Using non-combustible stone wool, fire-resistive mineral fiber boards, and verified thermal barriers, these systems help satisfy fire separation mandates across Part 9 and Part 3 buildings.',
    whatItIs: 'High-density mineral stone wool and evaluated thermal barrier systems engineered to resist extreme temperatures without contributing fuel, smoke, or toxic gases to building fires.',
    keyBenefits: [
      'Stone wool fibers are naturally non-combustible according to CAN/ULC S114 standard testing',
      'High thermal endurance with melting temperatures typically exceeding 1,150°C (2,100°F)',
      'Does not generate toxic smoke or flaming droplets when exposed to direct flame',
      'Provides dependable thermal resistance (approx. R-4.0 to R-4.2 per inch nominal) and acoustic attenuation',
      'Integral component of tested fire-resistance-rated partition and floor/ceiling assemblies'
    ],
    applications: {
      residential: [
        'Attached garage-to-dwelling separation walls and ceiling assemblies',
        'Basement secondary suite and multi-family party wall demising assemblies',
        'Zero-lot-line and spatial separation exterior wall assemblies',
        'Clearance packing around chimneys, flues, and firestop penetration collars'
      ],
      commercial: [
        'Multi-story shaft walls, stairwells, and elevator core enclosures',
        'Curtain wall perimeter fire containment (spandrel edge-of-slab joints per CAN/ULC S115)',
        'Structural steel column, beam, and deck fire protection wraps',
        'Commercial tenant demising partitions and industrial occupancy separations'
      ]
    },
    considerations: [
      'Fire-resistance ratings (e.g., 45-min, 1-hr, 2-hr) belong strictly to complete tested assemblies, never to the insulation product alone',
      'Must be installed in full compliance with specified gypsum board types (Type X), stud gauges, and fastener schedules',
      'All penetrations (pipes, wires, ducts) must be sealed with listed firestop systems matching the assembly rating',
      'Must verify local municipal building inspector and authority having jurisdiction (AHJ) requirements'
    ],
    installationProcess: [
      'Verify assembly design listing number (e.g., ULC Design or NBC prescriptive table)',
      'Install framing at specified gauge and spacing (e.g., 16" or 24" o.c.)',
      'Friction-fit non-combustible stone wool batts tightly without voids or sagging',
      'Install specified thickness of Type X gypsum board with required fastener pitch',
      'Seal all perimeter joints and mechanical penetrations with listed CAN/ULC S115 firestop sealants'
    ],
    buildingScienceNote: 'A critical principle of building fire safety is distinguishing between a non-combustible material (such as stone wool) and a complete fire-resistance-rated assembly. A 1-hour or 2-hour rating is never a property of the insulation alone; it requires a complete, tested design incorporating specific gypsum board types, stud gauges, fastener schedules, and approved joint firestopping.',
    rValueGuidance: 'Mineral wool batts and boards typically provide nominal R-4.0 to R-4.2 per inch of thickness, combining thermal performance, acoustic absorption, and high-temperature dimensional stability.',
    codeComplianceNote: 'Assemblies must comply with applicable provincial building codes and National Building Code of Canada requirements. Materials are evaluated under CAN/ULC S114 (non-combustibility), CAN/ULC S102 (surface burning characteristics), and complete assemblies are rated under CAN/ULC S101 (fire endurance tests). Confirm project-specific design numbers with your architect, engineer, or local authority having jurisdiction.',
    relatedServices: ['mineral-wool', 'acoustic', 'commercial-insulation', 'wall-insulation', 'air-sealing'],
    seoTitle: 'Fire-Rated Insulation | Non-Combustible Stone Wool Assemblies | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to fire-rated insulation assemblies in Canada: CAN/ULC S114 non-combustibility, CAN/ULC S101 fire endurance ratings, thermal barriers, and secondary suite separations.',
    faqs: [
      {
        question: 'Does installing fire-rated insulation give a wall an automatic 1-hour or 2-hour fire rating?',
        answer: 'No. Fire-resistance ratings (such as 45-minute, 1-hour, or 2-hour ratings) apply strictly to complete tested building assemblies evaluated under CAN/ULC S101 (or referenced prescriptive tables in the National Building Code of Canada / provincial codes). The assembly rating depends on the exact combination of framing material, stud spacing, type and thickness of gypsum board (e.g., Type X), fastener schedule, and specific insulation density. Installing stone wool alone does not create a fire-rated wall without the complete tested system.'
      },
      {
        question: 'What is the difference between a non-combustible material and a fire-resistance rating?',
        answer: 'A non-combustible material (such as stone wool tested to CAN/ULC S114) does not contribute fuel or ignite under standard test conditions. In contrast, a fire-resistance rating measures the time (in minutes or hours) that a complete structural assembly can maintain structural load-bearing capacity, resist flame passage, and limit heat transmission to the unexposed side during an ASTM E119 / CAN/ULC S101 fire endurance test.'
      },
      {
        question: 'What is a 15-minute thermal barrier and when is it required over foamed plastic?',
        answer: 'Under NBC 9.10.17.10 and Part 3 provisions, combustible foamed plastics (such as spray foam and rigid foam boards) must be separated from the interior of a building by an approved thermal barrier that meets CAN/ULC S124 or is prescriptively accepted (such as 12.7 mm Type X or standard gypsum board mechanically fastened). The thermal barrier prevents the foam from igniting prematurely during the initial stages of a building fire.'
      },
      {
        question: 'What temperature can stone wool insulation withstand before melting?',
        answer: 'High-density mineral stone wool insulation is manufactured from natural basalt rock and recycled slag, giving it a melting point that typically exceeds 1,150°C (2,100°F). It remains dimensionally stable during high-temperature exposure and does not emit toxic smoke or burning droplets.'
      },
      {
        question: 'Can fire-rated mineral wool also improve acoustic sound isolation between suites?',
        answer: 'Yes. Due to its high mass and open fibrous matrix, mineral stone wool absorbs airborne sound energy within framing cavities, contributing to improved Sound Transmission Class (STC) ratings when incorporated into properly sealed and decoupled wall or floor/ceiling assemblies.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'acoustic',
    slug: 'acoustic',
    title: 'Acoustic Soundproofing Insulation',
    category: 'specialty',
    categoryName: 'Specialty & Building Science',
    shortDesc: 'Specialized high-density stone wool and fiberglass sound-attenuation batts engineered for interior partitions, ceilings, and multi-family demising assemblies.',
    heroTagline: 'Sound Absorption & Noise Attenuation for Canadian Living Spaces',
    overview: 'Controlling noise transmission between living suites, bedrooms, home offices, and mechanical rooms requires an integrated building acoustics approach. Acoustic insulation uses dense open-fiber structures to absorb sound energy and dampen cavity resonance within wall and floor/ceiling assemblies.',
    whatItIs: 'High-density mineral stone wool or specialized fiberglass sound-attenuation batts engineered with optimized fiber density to maximize acoustic absorption across speech, television, and low-frequency noise bands.',
    keyBenefits: [
      'High Sound Absorption Coefficient (Noise Reduction Coefficient / NRC typically 0.90 to 1.05)',
      'Dampens cavity resonance and reduces airborne sound transmission (speech, media, mechanical noise)',
      'Key component of high-performance Sound Transmission Class (STC) partition assemblies',
      'Provides supplemental non-combustible passive fire resistance when stone wool is used',
      'Friction-fit batt installation without specialized equipment'
    ],
    applications: {
      residential: [
        'Home offices, media rooms, and home theater enclosures',
        'Bathroom, powder room, and laundry room partition walls',
        'Basement suite ceiling joist cavities below primary living areas',
        'Shared demising walls in duplexes, townhomes, and multi-generational suites'
      ],
      commercial: [
        'Medical examination rooms, therapy suites, and legal consultation offices',
        'Executive boardrooms and confidential meeting facilities',
        'Hotel guest room demising walls and corridor partitions',
        'Multi-family residential party walls and floor-ceiling systems'
      ]
    },
    considerations: [
      'Acoustic insulation alone cannot soundproof a room; sound travels as vibration through framing unless decoupled',
      'Must be combined with structural decoupling (resilient channels or sound isolation clips) for high STC ratings',
      'Air leaks (electrical outlets, door undercuts, ductwork) act as acoustic flanking paths and must be sealed with acoustical sealant',
      'Impact noise (footsteps on floors) requires underlayment membranes in addition to cavity insulation'
    ],
    installationProcess: [
      'Friction-fit high-density acoustic batts completely filling cavity depth without severe over-compression',
      'Install resilient channels (RC-1) perpendicular to studs/joists spaced 16" or 24" o.c.',
      'Fasten 5/8" Type X drywall to resilient channels using screws that do not penetrate into underlying studs (short-circuiting)',
      'Apply non-hardening acoustical sealant around all perimeter drywall edges, electrical box cutouts, and pipe penetrations',
      'Hang solid-core doors with perimeter acoustic seals and automatic door bottom drop seals'
    ],
    buildingScienceNote: 'Acoustic sound isolation depends on four fundamental principles: Mass (drywall layers), Cavity Absorption (acoustic insulation), Decoupling (resilient channels, sound isolation clips, staggered/double studs), and Airtight Sealing (acoustical sealant at perimeters and electrical penetrations). Insulation alone cannot soundproof a space if flanking paths or rigid structural connections remain unaddressed.',
    rValueGuidance: 'Acoustic stone wool and fiberglass batts provide secondary thermal resistance (approx. R-3.0 to R-4.0 per inch) while their fiber density is primarily engineered for optimal acoustic absorption across speech and low-frequency ranges.',
    codeComplianceNote: 'Multi-family dwelling separations must meet minimum Sound Transmission Class (STC) requirements under National Building Code Section 9.11 / Part 5 (typically STC 50 or higher, with Apparent Sound Transmission Class ASTC 47+). Specific acoustic performance ratings require verified assembly testing or qualified acoustical engineering review.',
    relatedServices: ['mineral-wool', 'fire-rated', 'open-cell-spray-foam', 'batt-blanket', 'wall-insulation'],
    seoTitle: 'Acoustic Soundproofing Insulation | Canadian STC & NRC Guide | SprayInsulations.ca',
    seoDescription: 'Complete guide to acoustic sound insulation: stone wool sound attenuation batts, STC wall and ceiling assemblies, resilient channels, and secondary suite soundproofing in Canada.',
    faqs: [
      {
        question: 'Will adding acoustic insulation completely soundproof a room on its own?',
        answer: 'No. Sound energy travels not only through cavity air spaces, but as structure-borne vibration directly through wooden or steel studs, floor joists, and flanking paths (HVAC ducts, electrical back-to-back boxes, and door gaps). Acoustic insulation absorbs sound within the cavity; achieving true sound isolation requires combining cavity insulation with structural decoupling (such as resilient channels), added mass (multiple drywall layers), and airtight acoustic sealant.'
      },
      {
        question: 'What is the difference between sound absorption (NRC) and sound isolation (STC)?',
        answer: 'Noise Reduction Coefficient (NRC) measures how much sound energy a material absorbs inside a room to reduce echo and reverberation (rated 0.0 to 1.0+). Sound Transmission Class (STC) measures how well an entire wall or floor/ceiling assembly prevents sound from passing through into an adjacent room. Insulation provides high NRC absorption, which contributes to, but does not solely determine, the overall STC rating of a partition.'
      },
      {
        question: 'What assembly is recommended for soundproofing a secondary basement suite ceiling?',
        answer: 'A high-performance acoustic ceiling assembly typically combines: (1) dense stone wool batts filling the floor joist cavities, (2) resilient metal channels or sound isolation clips installed perpendicular to joists, (3) two layers of 5/8" Type X drywall with damping adhesive between layers, and (4) non-hardening acoustical sealant applied along all perimeter junctions and light fixture penetrations.'
      },
      {
        question: 'What is Apparent Sound Transmission Class (ASTC) in the National Building Code?',
        answer: 'Under the National Building Code of Canada, ASTC measures the actual in-situ sound isolation between two adjacent dwelling units, including all flanking paths (floors, exterior walls, and ceiling joints). The NBC requires an ASTC rating of at least 47 between separated dwelling units.'
      },
      {
        question: 'How do you prevent electrical outlets from leaking sound between rooms?',
        answer: 'Electrical boxes in party walls should not be installed back-to-back in the same stud bay (maintain at least 24" horizontal separation). In high-performance assemblies, wrap each metal box with moldable acoustical putty pads and seal around the drywall cutout with acoustical sealant.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'thermal',
    slug: 'thermal',
    title: 'Thermal Insulation & Continuous Envelopes',
    category: 'specialty',
    categoryName: 'Specialty & Building Science',
    shortDesc: 'Building science principles, effective thermal resistance (effective R-value), continuous insulation (ci), and thermal envelope engineering for Canadian climate zones.',
    heroTagline: 'Maximizing Whole-Building Effective R-Value & Climate Resilience',
    overview: 'In Canadian construction, managing heat transfer through the building envelope requires understanding the distinction between nominal material R-values and whole-assembly effective R-values. Continuous insulation (ci) combined with high-performance cavity fills eliminates thermal bridges, controls condensation planes, and reduces annual heating demands across Climate Zones 4 through 8.',
    whatItIs: 'An engineered approach to building envelope design that integrates continuous exterior insulation, airtight cavity insulation, and high-performance thermal breaks to satisfy National Building Code 9.36 and provincial energy codes.',
    keyBenefits: [
      'Eliminates conductive heat loss through wood and steel framing thermal bridges',
      'Warms interior sheathing surfaces above dew point temperatures to prevent hidden condensation',
      'Significantly lowers winter space heating demands and utility bills across Canada',
      'Supports compliance with advanced energy codes (BC Energy Step Code, NBC 9.36, Tiered Performance)',
      'Improves interior thermal comfort by eliminating cold wall surfaces and drafty convection cycles'
    ],
    applications: {
      residential: [
        'New high-performance home construction targeting Net-Zero and Passive House standards',
        'Exterior siding replacement retrofits incorporating 1.5" to 3" continuous exterior insulation',
        'Unvented conditioned cathedral roof assemblies with continuous exterior roof insulation'
      ],
      commercial: [
        'Commercial steel-stud exterior wall assemblies with continuous rigid stone wool or Polyiso',
        'High-rise residential curtain wall and precast concrete thermal break transitions',
        'Commercial flat roof multi-layer staggered insulation packages'
      ]
    },
    considerations: [
      'Thermal bridging significantly degrades nominal R-values in standard framing (wood walls lose ~20-25%; steel walls lose ~40-60%)',
      'Continuous insulation thickness must be matched with climate zone condensation control ratios (NBC 9.25.5.2)',
      'Cladding attachment fasteners through continuous insulation must be engineered to support dead and wind loads'
    ],
    installationProcess: [
      'Calculate effective assembly R-value and required outboard-to-inboard insulation ratios',
      'Install primary weather and air barrier membrane over exterior sheathing',
      'Fasten continuous rigid stone wool or rigid foam boards with staggered vertical and horizontal joints',
      'Install vertical strapping/rainscreen furring strips with engineered structural screws',
      'Fasten exterior cladding allowing a clear, ventilated 3/8" to 3/4" drainage cavity behind siding'
    ],
    buildingScienceNote: 'Under Canadian climate conditions, the ratio of outboard continuous insulation to cavity insulation determines whether the sheathing remains warm enough to prevent condensation in winter. NBC Table 9.25.5.2 specifies the minimum outboard insulation percentage required for each Canadian climate zone to safely eliminate an interior 6-mil poly vapor barrier.',
    rValueGuidance: 'Calculated using 2D/3D thermal modeling and NBC 9.36 / ASHRAE 90.1 effective thermal resistance tables, accounting for all structural framing fractions.',
    codeComplianceNote: 'Complies with National Building Code Section 9.36 (Energy Efficiency) and National Energy Code for Buildings (NECB). Assemblies must satisfy prescriptive or performance path compliance targets for the specific Canadian climate zone.',
    relatedServices: ['rigid-board', 'mineral-wool', 'spray-foam', 'wall-insulation', 'air-sealing'],
    seoTitle: 'Thermal Insulation & Effective R-Value Guide | Canadian Codes | SprayInsulations.ca',
    seoDescription: 'Comprehensive building science guide to effective R-values, continuous insulation (ci), thermal bridging calculations, and Canadian climate zone energy code compliance.',
    faqs: [
      {
        question: 'What is the difference between nominal R-value and effective R-value?',
        answer: 'Nominal R-value is the thermal resistance of the insulation material alone in a laboratory test (e.g., an R-22 batt). Effective R-value (or assembly U-value) measures the thermal performance of the entire wall assembly, taking into account heat flow through wood or steel studs, top and bottom plates, headers, and fasteners. A 2x6 wood wall with R-22 batts typically has an effective rating of only R-17 to R-18 due to thermal bridging.'
      },
      {
        question: 'What is continuous insulation (ci) and why is it required by modern building codes?',
        answer: 'Continuous insulation is insulation that runs continuously across all structural members (such as rigid foam or stone wool boards on the outside of wall studs) without thermal bridges other than fasteners. Modern Canadian building codes require or incentivize continuous insulation because it blankets the framing and eliminates the major heat-loss pathway through studs.'
      },
      {
        question: 'How much continuous exterior insulation is needed in cold Canadian climates?',
        answer: 'In Canadian Climate Zones 5 to 7 (e.g., Toronto, Montreal, Calgary, Edmonton), building science best practice typically recommends 1.5 to 3 inches of continuous exterior insulation (R-6 to R-15), depending on the cavity insulation type and heating degree days, to control condensation and achieve effective whole-wall ratings of R-24 to R-30+.'
      },
      {
        question: 'How do steel studs impact thermal insulation performance compared to wood?',
        answer: 'Steel is a highly conductive metal that transfers heat approximately 400 times faster than wood. In a steel-framed wall, thermal bridging reduces the efficiency of cavity insulation by 40% to 60%. As a result, steel-framed exterior walls almost always require continuous exterior insulation to satisfy Canadian energy codes.'
      },
      {
        question: 'What are Canadian Climate Zones and Heating Degree Days (HDD)?',
        answer: 'Canada is divided into climate zones based on Heating Degree Days below 18°C (Zone 4 has <3000 HDD like coastal BC; Zone 5 has 3000-3999 HDD like southern Ontario; Zone 6 has 4000-4999 HDD like Ottawa/Montreal; Zone 7A/7B has 5000-6999 HDD like Calgary/Edmonton/Winnipeg; Zone 8 has ≥7000 HDD in the far North). Higher zones require progressively higher effective R-values.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'air-sealing',
    slug: 'air-sealing',
    title: 'Air Sealing & Weatherization Systems',
    category: 'specialty',
    categoryName: 'Specialty & Building Science',
    shortDesc: 'Comprehensive building envelope air barrier sealing, blower door diagnostics, attic bypass remediation, and weatherization across Canada.',
    heroTagline: 'Controlling Infiltration, Stack Effect & Uncontrolled Air Leakage',
    overview: 'Air leakage is the primary mechanism for uncontrolled heat loss, cold winter drafts, and moisture migration into structural wall and roof cavities. Professional air sealing establishes a continuous, airtight plane across all building assemblies, stopping convective heat flow and enabling thermal insulation to achieve its full rated performance.',
    whatItIs: 'Targeted application of specialized air-impermeable materials (polyurethane expanding foams, elastomeric sealants, airtight tapes, and gaskets) to eliminate air leakage paths across framing joints and service penetrations.',
    keyBenefits: [
      'Reduces total building air leakage, cutting space heating costs by 15% to 35%',
      'Stops moisture-laden warm indoor air from leaking into cold attic and wall cavities',
      'Eliminates the stack effect that drives cold basement drafts and top-floor heat loss',
      'Significantly improves indoor air quality by blocking dust, pollen, and crawlspace radon ingress',
      'Essential prerequisite for achieving high-performance blower door scores (ACH50 < 1.5–2.5)'
    ],
    applications: {
      residential: [
        'Attic floor air sealing (pot lights, plumbing stacks, electrical wires, top-plate seams)',
        'Basement rim joist and foundation sill plate air sealing and closed-cell encapsulation',
        'Window and door rough opening perimeter sealing with low-expansion foam',
        'Exterior wall electrical outlet gasket sealing and air-tight junction boxes'
      ],
      commercial: [
        'Commercial building envelope air barrier continuity testing and commissioning',
        'Curtain wall transition and parapet wall membrane air sealing',
        'Overhead door perimeter weatherstripping and loading dock seals'
      ]
    },
    considerations: [
      'A house must be built airtight and ventilated right; tightening the envelope requires balanced mechanical ventilation (HRV/ERV)',
      'Air sealing must be completed before adding loose-fill insulation into attics or enclosed cavities',
      'Combustion safety testing (backdraft verification of natural draft appliances) must be performed after deep air sealing'
    ],
    installationProcess: [
      'Conduct pre-retrofit blower door airtightness test with infrared thermal imaging to identify bypasses',
      'Clean all sealing substrates removing loose dust, fiberglass, and debris',
      'Seal major structural bypasses using rigid foam board and two-component expanding foam',
      'Seal plumbing, electrical, and duct penetrations using high-temperature or elastomeric sealants',
      'Perform post-installation depressurization test (ACH50 verification) and combustion appliance safety check'
    ],
    buildingScienceNote: 'Air leakage accounts for up to 30% to 50% of total winter heat loss in Canadian homes. In heating climates, the "stack effect" causes warm indoor air to rise and escape through upper ceiling penetrations, drawing cold outside air through foundation cracks. Air sealing the attic and basement boundaries stops this convective engine.',
    rValueGuidance: 'While sealants themselves have localized R-value, air sealing preserves the rated R-value of all fibrous and board insulations by preventing convective wind-washing and cavity airflow.',
    codeComplianceNote: 'Must conform to CAN/ULC S741 (air barrier materials) and CAN/ULC S742 (air barrier assemblies). Blower door airtightness targets are referenced in NBC 9.36, EnerGuide for Houses, and BC Step Code metrics.',
    relatedServices: ['spray-foam', 'attic-insulation', 'repairs', 'basement-insulation', 'thermal'],
    seoTitle: 'Air Sealing & Weatherization | Canadian Blower Door Guide | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to building envelope air sealing in Canada: attic bypass sealing, rim joist encapsulation, blower door testing (ACH50), and stack effect elimination.',
    faqs: [
      {
        question: 'What is the stack effect and how does air sealing stop it?',
        answer: 'The stack effect is the natural movement of air into and out of buildings driven by buoyancy. In Canadian winters, warm indoor air is lighter than cold outdoor air, so it rises and forces its way out through unsealed attic penetrations. This creates negative pressure on the lower levels, sucking cold air in through basement cracks. Air sealing the attic and basement breaks this loop.'
      },
      {
        question: 'What is a blower door test and what does ACH50 mean?',
        answer: 'A blower door test uses a powerful calibrated fan mounted in an exterior door frame to depressurize a home to 50 Pascals relative to outside. ACH50 (Air Changes per Hour at 50 Pa) measures how many times the total volume of air in the house is exchanged per hour under test pressure. Older homes often score 6–10 ACH50; modern building codes target 1.5 to 2.5 ACH50, and Passive House requires ≤0.6 ACH50.'
      },
      {
        question: 'Can a house be sealed "too tight"?',
        answer: 'No house is too tight when equipped with proper mechanical ventilation. Building science dictates: "Build tight, ventilate right." Sealing uncontrolled leaks stops drafts and moisture damage; a Heat Recovery Ventilator (HRV) or Energy Recovery Ventilator (ERV) then provides controlled, filtered fresh air with minimal energy loss.'
      },
      {
        question: 'What are the most critical areas to air seal in an attic?',
        answer: 'The most important attic bypasses to seal are: (1) interior partition top-plate gaps, (2) plumbing vent stack penetrations, (3) electrical wire penetrations, (4) recessed pot light housings, (5) chimney chases and flue clearances, and (6) the attic access hatch itself.'
      },
      {
        question: 'Is an air barrier the same thing as a vapor barrier?',
        answer: 'No. An air barrier stops the bulk movement of air (convective flow), while a vapor barrier restricts the diffusion of water vapor at the molecular level through solid materials. Some materials (like 6-mil polyethylene or closed-cell spray foam) can function as both an air barrier and a vapor barrier if all joints are sealed completely.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  }
];
