import { InsulationService } from '../../types';

export const MINERAL_RIGID_SERVICES: InsulationService[] = [
  {
    id: 'mineral-wool',
    slug: 'mineral-wool',
    title: 'Mineral Wool & Stone Wool Insulation',
    category: 'mineral-rigid',
    categoryName: 'Mineral & Rigid Insulation',
    shortDesc: 'Non-combustible stone wool batts and boards delivering high-density thermal resistance, superior acoustic absorption, and exceptional water-repellent durability.',
    heroTagline: 'Non-Combustible Stone Wool for High-Performance Building Envelopes',
    overview: 'Mineral wool (commonly known as stone wool or rock wool) is an advanced insulation material manufactured by melting natural basalt rock and recycled slag at extreme temperatures and spinning the molten lava into dense, durable fibers. Engineered for demanding Canadian residential and commercial assemblies, mineral wool combines robust thermal resistance (nominal R-4.0 to R-4.2/in) with natural non-combustibility, moisture resistance, and exceptional sound absorption.',
    whatItIs: 'Stone wool is a dense, fibrous insulation composed of inorganic volcanic basalt rock and steel slag. It is pressed into semi-rigid friction-fit batts, rigid exterior continuous insulation boards, or high-density sound attenuation slabs.',
    keyBenefits: [
      'Naturally non-combustible with melting temperatures exceeding 1,150°C (2,100°F) per CAN/ULC S114',
      'High thermal resistance (nominal R-4.0 to R-4.2 per inch) that remains dimensionally stable over time',
      'Hydrophobic and water-repellent; does not absorb water and quickly drains incidental moisture',
      'High density provides superior sound absorption (NRC 0.95–1.05) and reduces room-to-room noise transfer',
      'Vapor-permeable structure allows wall assemblies to breathe and dry outward in cold climate zones'
    ],
    applications: {
      residential: [
        'Exterior above-grade wood-framed wall cavities (2x4 and 2x6 framing)',
        'Exterior continuous insulation boards (ci) installed over exterior sheathing behind rainscreens',
        'Interior partition walls and bathroom/laundry acoustic isolation',
        'Basement suite floor/ceiling joist cavities for soundproofing and passive fire resistance',
        'Attached garage-to-house shared separation walls and ceilings'
      ],
      commercial: [
        'Steel-stud exterior and interior partition cavity friction-fit blankets',
        'Curtain wall perimeter spandrel and firestop backer boards',
        'Commercial flat roof stone wool high-density insulation boards',
        'Multi-family residential party wall demising assemblies'
      ]
    },
    considerations: [
      'Stone wool is heavier and denser than standard fiberglass, requiring a sharp serrated knife or bread knife for cutting',
      'Does not provide an air barrier on its own; must be installed with continuous air and weather barrier membranes',
      'Fire-resistance ratings apply to complete tested assemblies (CAN/ULC S101), not the insulation alone',
      'Higher material cost than fiberglass, balanced by enhanced acoustic, fire, and moisture resilience'
    ],
    installationProcess: [
      'Measure framing cavities accurately and cut batts using a dedicated serrated stone wool knife',
      'Friction-fit batts firmly into framing bays, ensuring flush contact with studs and no edge voids',
      'Cut precision notches for electrical boxes, conduit, and plumbing lines to maintain uniform density',
      'For exterior continuous boards: fasten with approved insulation screws/washers directly to exterior sheathing',
      'Install code-mandated continuous air/vapor barrier systems on the designated side of the assembly'
    ],
    buildingScienceNote: 'In exterior wall assemblies, installing vapor-permeable rigid stone wool boards on the outside of structural sheathing provides continuous insulation (ci) that eliminates thermal bridging through studs. Because stone wool is vapor-permeable (>25 perms), it allows moisture from inside the wall cavity to dry safely outward into the ventilated rainscreen cavity.',
    rValueGuidance: 'Nominal R-4.0 to R-4.2 per inch of thickness. Common batts deliver R-14 to R-15 in 2x4 cavities and R-22 to R-24 in 2x6 cavities.',
    codeComplianceNote: 'Stone wool products comply with CAN/ULC S702 (mineral fibre standard) and CAN/ULC S114 (non-combustibility). Note: A wall assembly fire rating (e.g., 1-hour or 2-hour) requires a complete listed assembly design evaluated under CAN/ULC S101 or prescriptive building code tables.',
    relatedServices: ['fire-rated', 'acoustic', 'rigid-board', 'batt-blanket', 'wall-insulation'],
    seoTitle: 'Mineral Wool & Stone Wool Insulation | Canadian Technical Specs | SprayInsulations.ca',
    seoDescription: 'Technical specifications for stone wool insulation in Canadian construction: thermal R-values, non-combustibility testing (CAN/ULC S114), acoustic NRC ratings, and exterior continuous insulation.',
    faqs: [
      {
        question: 'Does mineral wool insulation alone give a wall a 1-hour or 2-hour fire rating?',
        answer: 'No. Fire-resistance ratings (such as 45-minute, 1-hour, or 2-hour ratings) apply strictly to complete, tested building assemblies evaluated under CAN/ULC S101 (or referenced prescriptive tables in the National Building Code of Canada). The assembly rating depends on the exact combination of framing material, stud spacing, type and thickness of gypsum board (e.g., Type X), fastener schedules, and specific insulation density. Installing stone wool alone does not create a fire-rated wall without the complete tested system.'
      },
      {
        question: 'What is mineral wool made from and why is it non-combustible?',
        answer: 'Mineral wool is manufactured from natural volcanic basalt rock and recycled steel blast-furnace slag. Because its base raw materials are stone, it has a melting point exceeding 1,150°C (2,100°F) and does not contribute fuel or sustain flame when tested to CAN/ULC S114.'
      },
      {
        question: 'How does mineral wool handle water and moisture exposure?',
        answer: 'Stone wool fibers are naturally hydrophobic and water-repellent. If exposed to incidental moisture or rain during construction, it does not absorb water like a sponge; water drains off the fibers, and the material retains its dimensional stability and thermal R-value once dry. It will not rot, corrode, or promote mold growth.'
      },
      {
        question: 'Why is mineral wool widely recommended for acoustic soundproofing?',
        answer: 'Due to its high physical density (approx. 2.0 to 2.5 lb/cu.ft for standard batts, compared to approx. 0.8 lb/cu.ft for fiberglass) and random non-directional fiber orientation, stone wool excels at trapping and absorbing airborne acoustic energy, achieving Noise Reduction Coefficients (NRC) of 0.95 to 1.05.'
      },
      {
        question: 'Can mineral wool be installed on the exterior of a building?',
        answer: 'Yes. Semi-rigid and rigid stone wool boards are specifically engineered for exterior continuous insulation (ci) behind vented rainscreen claddings. Their high vapor permeance allows wall assemblies to dry outward while providing continuous thermal resistance that eliminates framing thermal bridges.'
      },
      {
        question: 'Is mineral wool easy to cut and install?',
        answer: 'Because of its dense, semi-rigid structure, mineral wool is easily and accurately cut using a standard serrated bread knife or dedicated insulation carving knife. It holds its shape firmly in stud bays without sagging over time.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'hi-bar',
    slug: 'hi-bar',
    title: 'Hi-Bar Insulation Systems',
    category: 'mineral-rigid',
    categoryName: 'Mineral & Rigid Insulation',
    shortDesc: 'Engineered thermal barrier and continuous insulation framing assemblies designed for high-performance building envelopes and specialized commercial specifications.',
    heroTagline: 'Engineered Thermal Barrier & Continuous Envelope Solutions',
    overview: 'Hi-Bar insulation systems represent specialized high-performance thermal barrier and structural envelope solutions designed for modern commercial, institutional, and advanced residential building projects. As Canadian energy codes and building science requirements evolve toward net-zero ready standards, Hi-Bar assemblies integrate robust thermal isolation, condensation control, and structural integrity across complex architectural details.',
    whatItIs: 'An engineered envelope insulation and thermal break system utilized by architects and commercial envelope specialists to achieve high effective thermal resistance while maintaining structural attachment integrity across exterior wall and roof transitions.',
    keyBenefits: [
      'Engineered thermal performance designed to mitigate structural thermal bridging',
      'Compatible with modern continuous insulation (ci) and high-performance cladding attachments',
      'Provides consistent thermal resistance across demanding climatic temperature ranges',
      'Integrates with commercial weather barrier, vapor barrier, and fire-separation assemblies',
      'Supports compliance with provincial energy standards (NECB, BC Energy Step Code, Toronto Green Standard)'
    ],
    applications: {
      residential: [
        'High-performance custom home building envelope assemblies',
        'Multi-family residential exterior continuous insulation retrofits',
        'Specialized thermal break transitions in high-efficiency residential designs'
      ],
      commercial: [
        'Commercial curtain wall and steel-stud exterior wall continuous thermal barriers',
        'Institutional building envelope retrofits and high-efficiency mechanical rooms',
        'Parapet, soffit, and structural steel thermal isolation assemblies'
      ]
    },
    considerations: [
      'Project-specific engineering and architectural review is recommended to verify assembly details',
      'Product specifications, thickness, and fastening schedules depend on the specific manufacturer listing and engineering design',
      'Applicable building code listings and laboratory test reports must be verified for the intended jurisdiction'
    ],
    installationProcess: [
      'Review project architectural drawings and verified manufacturer technical specification sheets',
      'Prepare substrate ensuring continuous air/vapor barrier membranes are properly detailed',
      'Install Hi-Bar structural clips, brackets, or insulation components per engineered fastening schedule',
      'Ensure tight joint alignment and continuous thermal envelope continuity at all transitions',
      'Perform field quality verification inspection prior to cladding or finish installation'
    ],
    buildingScienceNote: 'In high-performance building envelope design, thermal performance depends heavily on minimizing point and linear thermal bridges at structural attachments. Specialized systems like Hi-Bar are engineered to maintain high effective R-values by isolating structural supports from exterior cladding loads.',
    rValueGuidance: '[Specification dependent: Refer to verified project engineering data and manufacturer technical documentation for specific nominal and effective R-values across assembly configurations.]',
    codeComplianceNote: '[Specification dependent: Installations must comply with Part 3 or Part 9 of the National Building Code of Canada, applicable provincial building codes, and manufacturer listings for fire, structural, and thermal compliance.]',
    relatedServices: ['mineral-wool', 'rigid-board', 'commercial-insulation', 'thermal', 'air-sealing'],
    seoTitle: 'Hi-Bar Insulation Systems | Commercial & Building Science Guide | SprayInsulations.ca',
    seoDescription: 'Overview of Hi-Bar insulation assemblies: high-performance building envelope integration, thermal bridging mitigation, and Canadian commercial construction standards.',
    faqs: [
      {
        question: 'What is a Hi-Bar insulation system?',
        answer: 'Hi-Bar insulation systems refer to specialized high-performance thermal barrier and continuous envelope assemblies designed to provide superior thermal isolation and structural cladding support while minimizing thermal bridging in advanced Canadian building construction.'
      },
      {
        question: 'Where are Hi-Bar insulation systems commonly specified?',
        answer: 'Hi-Bar systems are commonly specified in commercial, institutional, and high-performance residential building envelopes, particularly in exterior wall assemblies with heavy cladding, commercial curtain walls, and assemblies requiring verified continuous insulation.'
      },
      {
        question: 'How do I obtain exact technical specifications and R-values for a Hi-Bar installation?',
        answer: 'Because Hi-Bar specifications depend on the specific project engineering, cladding weight, and manufacturer system selected, architects and contractors should consult the verified manufacturer technical data sheets and project structural/envelope engineers for certified values.'
      },
      {
        question: 'Does a Hi-Bar assembly satisfy Canadian building and energy codes?',
        answer: 'When specified in accordance with manufacturer test listings and designed to meet provincial energy code requirements (such as NECB or provincial building codes), Hi-Bar assemblies support compliance with effective assembly thermal resistance mandates.'
      },
      {
        question: 'Can Hi-Bar systems be integrated with fire-rated wall assemblies?',
        answer: 'Yes, when specified as part of a complete evaluated fire-tested assembly conforming to CAN/ULC standards. Always verify the specific assembly listing with the authority having jurisdiction (AHJ).'
      }
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rigid-board',
    slug: 'rigid-board',
    title: 'Rigid Board Insulation',
    category: 'mineral-rigid',
    categoryName: 'Mineral & Rigid Insulation',
    shortDesc: 'High-compressive-strength continuous foam boards (EPS, XPS, and Polyisocyanurate) for exterior sheathing, foundations, flat roofs, and under-slab assemblies.',
    heroTagline: 'Continuous Thermal Barriers & Below-Grade Moisture Resistance',
    overview: 'Rigid board insulation provides continuous thermal resistance across exterior walls, foundations, under concrete slabs, and flat commercial roofs. By blanketing structural framing from the exterior, rigid foam boards eliminate thermal bridging through studs and concrete, improving whole-building effective R-values and meeting modern Canadian energy codes.',
    whatItIs: 'Factory-manufactured rigid foam panels made from Expanded Polystyrene (EPS), Extruded Polystyrene (XPS), or Polyisocyanurate (Polyiso), available in various compressive strengths and thicknesses from 0.5" to 4".',
    keyBenefits: [
      'Eliminates framing thermal bridging when installed as continuous exterior insulation (ci)',
      'High compressive strength suitable for load-bearing under-slab and foundation applications',
      'XPS and EPS provide low moisture absorption for direct below-grade earth contact',
      'Polyiso delivers high thermal resistance per inch (nominal R-6.0 to R-6.5/in) for walls and roofs',
      'Tongue-and-groove or shiplap edges help reduce air infiltration and joint leakage'
    ],
    applications: {
      residential: [
        'Exterior wood-framed continuous insulation sheathing (outboard of OSB/plywood)',
        'Basement interior foundation walls and walkout perimeter insulation',
        'Under-slab basement floor insulation and radiant heating sub-floor base',
        'Exterior foundation perimeter frost walls and shallow frost-protected foundations'
      ],
      commercial: [
        'Commercial low-slope and flat roof continuous polyiso insulation packages',
        'Precast concrete sandwich panels and masonry cavity walls',
        'Heated underground parkade slab perimeters and perimeter beam thermal breaks'
      ]
    },
    considerations: [
      'Product selection depends heavily on application: Polyiso is ideal for above-grade walls and roofs; XPS/EPS are required for below-grade moisture contact',
      'Polyisocyanurate thermal performance can decline at very low sub-zero winter temperatures without proper assembly layering',
      'Combustible foamed plastic requires an approved 15-minute thermal barrier (e.g., 1/2" drywall) in occupied interior spaces',
      'Joints must be taped with manufacturer-approved acrylic flashing tape to maintain air barrier continuity'
    ],
    installationProcess: [
      'Verify substrate is smooth, plumb, and clean before board placement',
      'Fasten boards using cap screws or approved adhesives with staggered vertical joints',
      'Tape all board seams and penetrations with high-tack exterior flashing tape',
      'For below-grade under-slab: lay boards over compacted gravel before placing 6-mil poly and pouring concrete',
      'Cover interior exposed foam with approved thermal barrier per building code requirements'
    ],
    buildingScienceNote: 'In Canadian exterior wall retrofits, installing continuous rigid foam outboard of the sheathing warms the structural cavity, keeping the interior face of the sheathing above the dew point and dramatically reducing the risk of winter condensation inside the wall.',
    rValueGuidance: 'Nominal R-values vary by chemistry: EPS is approx. R-3.8 to R-4.2/in; XPS is approx. R-5.0/in; Polyisocyanurate is approx. R-6.0 to R-6.5/in at standard test temperatures.',
    codeComplianceNote: 'Foam boards must comply with CAN/ULC S701 (EPS/XPS standard) or CAN/ULC S704 (Polyiso standard). Interior installations require thermal barrier protection per NBC 9.10.17.10.',
    relatedServices: ['mineral-wool', 'spray-foam', 'foundation-insulation', 'basement-insulation', 'wall-insulation'],
    seoTitle: 'Rigid Board Insulation | EPS, XPS & Polyiso Canadian Guide | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to rigid board insulation: EPS vs XPS vs Polyiso, below-grade foundation specs, exterior continuous insulation, and Canadian code standards.',
    faqs: [
      {
        question: 'What is the difference between EPS, XPS, and Polyisocyanurate rigid foam?',
        answer: 'Expanded Polystyrene (EPS, white beadboard) is economical, vapor-permeable, and R-3.8 to R-4.2/in. Extruded Polystyrene (XPS, typically pink or blue) is denser, water-resistant, and R-5.0/in, making it ideal for below-grade foundations and under concrete slabs. Polyisocyanurate (Polyiso, foil-faced) offers the highest R-value (R-6.0 to R-6.5/in) and is predominantly used on above-grade exterior walls and commercial flat roofs.'
      },
      {
        question: 'Which rigid insulation is best for under a basement concrete slab?',
        answer: 'Extruded Polystyrene (XPS Type 4, 25 psi compressive strength) or high-density Expanded Polystyrene (EPS Type 2 or 3) are the industry standards for under-slab insulation because of their high compressive strength and low water absorption under damp soil conditions.'
      },
      {
        question: 'Does Polyiso insulation lose R-value in cold Canadian winters?',
        answer: 'Standard polyisocyanurate formulations can experience reduced thermal resistance when temperatures drop significantly below freezing (due to blowing agent condensation within the closed cells). In cold Canadian climate zones, building science best practice is to pair Polyiso with exterior mineral wool or specify cold-temperature optimized formulations.'
      },
      {
        question: 'Do rigid foam boards require a thermal barrier inside a home?',
        answer: 'Yes. Under the National Building Code of Canada, all combustible foam plastic insulations exposed to interior occupied spaces must be covered by an approved 15-minute thermal barrier, such as 12.7 mm (1/2") drywall mechanically fastened to framing.'
      },
      {
        question: 'Can rigid foam board act as an air barrier and weather barrier?',
        answer: 'Yes, provided the boards are installed with all joints, penetrations, and perimeter transitions sealed with compatible code-approved acrylic flashing tape, and the foam brand is evaluated as an air barrier material conforming to CAN/ULC S741/S742.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'batt-blanket',
    slug: 'batt-blanket',
    title: 'Batt & Blanket Insulation',
    category: 'mineral-rigid',
    categoryName: 'Mineral & Rigid Insulation',
    shortDesc: 'Comprehensive guide to friction-fit batt and flexible blanket insulation systems in fiberglass and stone wool for walls, floors, and ceilings.',
    heroTagline: 'Standardized Cavity Thermal & Acoustic Friction-Fit Solutions',
    overview: 'Batt and blanket insulation systems are the most widely installed cavity insulation format across Canadian residential and commercial construction. Available in pre-cut batts (typically 48" lengths) and continuous rolled blankets in both fiberglass and stone wool, batt systems provide reliable, cost-effective thermal resistance and sound attenuation when fitted with precision and paired with airtight envelope detailing.',
    whatItIs: 'Flexible, fibrous insulation manufactured from spun glass or volcanic stone fibers, sized to fit standard 16" and 24" on-center wood and steel framing cavities.',
    keyBenefits: [
      'Wide availability across all Canadian building supply channels in standard dimensions',
      'Versatile applications for 2x4, 2x6, 2x8, 2x10, and 2x12 framing cavity depths',
      'Available in both economical fiberglass and high-density, non-combustible stone wool options',
      'Straightforward manual installation without heavy specialized machinery',
      'Predictable nominal thermal ratings from R-12 to R-40'
    ],
    applications: {
      residential: [
        'Exterior framed wall cavities (2x4 and 2x6 framing)',
        'Interior sound-attenuation partition walls and laundry rooms',
        'Basement perimeter wood-stud framing over moisture protection',
        'Floor joist cavities above unconditioned garages and crawlspaces'
      ],
      commercial: [
        'Commercial steel stud partitions with friction-fit acoustic blankets',
        'Demising wall fire-separation and sound-dampening assemblies'
      ]
    },
    considerations: [
      'Craftsmanship during installation directly impacts thermal performance; avoiding compression and gaps is critical',
      'Must be paired with a continuous air barrier and code-approved vapor barrier on the warm side of exterior walls',
      'Not designed for exterior continuous insulation or direct below-grade earth contact'
    ],
    installationProcess: [
      'Inspect stud bays for protruding fasteners, drywall debris, and dry framing conditions',
      'Cut batts slightly oversized (1/2") with a sharp utility knife or serrated stone wool knife',
      'Carefully slit batts around wiring and pipes rather than crushing the insulation behind obstructions',
      'Press batts into corners with square edges, ensuring no gaps along top and bottom plates',
      'Install continuous 6-mil polyethylene vapor barrier sealed with acoustical sealant per code'
    ],
    buildingScienceNote: 'The thermal resistance of batt insulation is entirely based on trapped still air within the fiber matrix. When a batt is compressed or has voids around edges, convective air currents develop within the cavity, reducing the effective R-value of the wall. Proper fitting without compression is essential to maintain rated performance.',
    rValueGuidance: 'Nominal R-12 to R-15 for 3.5" (2x4) cavities; R-19 to R-24 for 5.5" (2x6) cavities; R-28 to R-31 for 2x8 cavities; and R-35 to R-40 for 2x10/2x12 joist bays.',
    codeComplianceNote: 'Batts must conform to CAN/ULC S702 and be installed with vapor barriers conforming to CAN/CGSB 51.34-M86 and NBC 9.25.',
    relatedServices: ['fiberglass-batt', 'mineral-wool', 'fiberglass', 'wall-insulation', 'air-sealing'],
    seoTitle: 'Batt & Blanket Insulation | Fiberglass & Stone Wool Guide | SprayInsulations.ca',
    seoDescription: 'Complete guide to batt and blanket insulation: fiberglass vs stone wool, friction-fit best practices, R-value ratings, and vapor barrier installation in Canada.',
    faqs: [
      {
        question: 'What is the main difference between batt and blanket insulation?',
        answer: 'Batts are pre-cut rectangular pieces (typically 48 inches long) designed for fast friction-fit placement between standard studs. Blankets come in long continuous rolls (typically 20 to 40 feet long) that can be cut to custom lengths or used for long floor joist spans and continuous steel-stud runs.'
      },
      {
        question: 'Should I choose fiberglass batts or mineral wool batts?',
        answer: 'Fiberglass batts are more economical, lightweight, and widely available. Mineral wool batts are denser, naturally non-combustible (withstands >1,150°C), highly water-repellent, and provide superior acoustic sound damping. For exterior walls and soundproofing partitions, mineral wool is often preferred, while fiberglass is cost-effective for general cavity applications.'
      },
      {
        question: 'Why do batts need a continuous vapor barrier in Canadian homes?',
        answer: 'Because fibrous batts allow warm, moist indoor air to migrate through the cavity, in cold Canadian winters this moisture would reach the cold exterior plywood/OSB sheathing and condense. A continuous warm-side vapor barrier (like 6-mil poly) prevents indoor moisture from entering the wall cavity.'
      },
      {
        question: 'What happens if batt insulation gets wet?',
        answer: 'Fiberglass batts will lose their loft and thermal resistance when soaked with water, and water trapped inside can lead to mold on surrounding wood framing. Mineral wool is hydrophobic and sheds water, but the source of moisture must always be eliminated and the cavity thoroughly dried.'
      },
      {
        question: 'Can you double up batt insulation in an attic?',
        answer: 'Yes. If adding batts to an existing attic, the second layer of batts should be laid perpendicular (at a 90-degree angle) to the first layer to cover the tops of the ceiling joists and eliminate thermal bridging. Ensure any second layer is unfaced (no vapor barrier between insulation layers).'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  }
];
