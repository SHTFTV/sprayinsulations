import { InsulationService } from '../../types';

export const BUILDING_AREA_SERVICES: InsulationService[] = [
  {
    id: 'attic-insulation',
    slug: 'attic-insulation',
    title: 'Attic Insulation Systems',
    category: 'building-areas',
    categoryName: 'Building Area Solutions',
    shortDesc: 'Complete attic thermal upgrades, ceiling air sealing, eave ventilation baffling, and blown insulation systems to R-50/R-60 standards across Canada.',
    heroTagline: 'Comprehensive Attic Air Sealing, Ventilation & High R-Value Systems',
    overview: 'The attic is the single largest zone of thermal energy loss and moisture risk in a Canadian home. In winter, warm interior air rises via stack effect, leaking heat and moisture into the roof space; in summer, solar radiation heats the attic to extreme temperatures. Upgrading attic insulation to modern code levels (R-50 to R-60) combined with meticulous air sealing and balanced soffit-to-ridge ventilation delivers the highest return on energy investment.',
    whatItIs: 'An integrated attic thermal envelope system comprising ceiling air barrier sealing, rafter ventilation baffles, insulated access dams, and deep loose-fill blown fiberglass or cellulose insulation.',
    keyBenefits: [
      'Reduces winter heating costs by up to 20% to 30% by stopping upper-level heat loss',
      'Mitigates chronic winter ice damming along roof eaves and gutters',
      'Stops indoor humidity from condensing on cold roof sheathing, preventing winter frost and mold',
      'Keeps upper living floors significantly cooler and more comfortable during hot summer months',
      'Achieves modern Canadian building code targets (R-50 to R-60 / RSI 8.8 to 10.6)'
    ],
    applications: {
      residential: [
        'Open attic floor top-ups over existing insulation to modern R-50/R-60 levels',
        'Complete attic decontamination, extraction, and fresh re-insulation',
        'Cathedral ceiling, scissor truss, and flat roof unvented spray foam conversions',
        'Knee-wall and bonus room attic boundary encapsulation'
      ],
      commercial: [
        'Commercial timber truss roof attic insulation blow-ins',
        'Light-commercial ceiling thermal envelope upgrades'
      ]
    },
    considerations: [
      'Air sealing MUST precede adding new insulation; blowing insulation over unsealed ceiling bypasses can worsen moisture problems',
      'Continuous ventilation baffles must be installed at every rafter bay to prevent soffit air blockages',
      'Attic access hatch must be insulated to the same R-value as the attic floor and fully weatherstripped',
      'Bathroom and kitchen exhaust fan ducts must vent directly through the roof/soffit to the outdoors, never into the attic'
    ],
    installationProcess: [
      'Comprehensive pre-inspection identifying roof leaks, mold, electrical hazards, and bypass locations',
      'Meticulous air sealing of all ceiling penetrations, top plates, chimney chases, and pot lights',
      'Installation of rigid ventilation baffles at every soffit bay and a perimeter dam around the attic hatch',
      'Pneumatically blowing loose-fill fiberglass or cellulose to target settled depth markers',
      'Insulating and weatherstripping the access hatch and posting the certified compliance attic card'
    ],
    buildingScienceNote: 'In Canadian winters, ice dams occur when heat escaping through an uninsulated or air-leaking ceiling melts snow on the upper roof deck. The meltwater runs down to the cold eave overhang and refreezes, creating an ice dam that forces water under shingles. Combining attic air sealing, adequate R-50+ insulation, and clear soffit-to-ridge ventilation keeps the entire roof deck cold, preventing ice dams entirely.',
    rValueGuidance: 'Modern Canadian energy codes (NBC 9.36 / provincial codes) mandate attic thermal resistance between R-50 and R-60 (RSI 8.8 to 10.6), requiring approximately 16" to 22" of settled loose-fill material.',
    codeComplianceNote: 'Installation must comply with NBC 9.36 (Energy Efficiency) and NBC 9.19 (Roof Space Ventilation), maintaining a minimum 1:300 (or 1:150) net free ventilation area ratio evenly distributed between soffits and ridge.',
    relatedServices: ['blown-in', 'cellulose', 'air-sealing', 'fiberglass', 'insulation-upgrades'],
    seoTitle: 'Attic Insulation Systems | R-50/R-60 Canadian Standards | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to Canadian attic insulation upgrades: air sealing, eave baffling, ice dam prevention, blown cellulose vs fiberglass, and R-50/R-60 requirements.',
    faqs: [
      {
        question: 'Why is air sealing the attic ceiling more important than just adding insulation?',
        answer: 'Insulation slows conductive heat transfer, but air-permeable insulations (like fiberglass and loose cellulose) do not stop convective air movement. If warm, moist indoor air leaks through unsealed ceiling penetrations into a cold attic, it carries moisture that condenses on cold roof sheathing, causing frost, mold, and rot. Air sealing stops this moisture transport and allows the insulation to perform at its full rated R-value.'
      },
      {
        question: 'What causes ice dams on roof eaves and how does attic insulation prevent them?',
        answer: 'Ice dams occur when heat escaping from living spaces warms the upper roof deck, melting the snow above. The meltwater flows down until it reaches the cold unheated eave over the soffit, where it refreezes into an ice barrier. Trapped water then backs up beneath roof shingles and leaks into walls and ceilings. Upgrading attic insulation to R-50+ and air sealing ceiling penetrations keeps the roof deck cold, stopping snowmelt at the source.'
      },
      {
        question: 'How thick is R-50 or R-60 attic insulation?',
        answer: 'Depending on the material and manufacturer settled density charts, R-50 requires approximately 14 to 17 inches of blown cellulose or 16 to 19 inches of blown fiberglass. R-60 requires approximately 17 to 20 inches of cellulose or 19 to 22 inches of blown fiberglass.'
      },
      {
        question: 'What is a soffit baffle (vent chute) and why is it mandatory?',
        answer: 'A soffit baffle is a rigid plastic or cardboard channel fastened between roof rafters at the exterior eaves. It creates an unobstructed air pathway from the soffit intake vents into the upper attic space while acting as a barrier that prevents blown insulation from spilling into and blocking the soffits.'
      },
      {
        question: 'Can bathroom exhaust fans vent into the attic?',
        answer: 'No. Under Canadian building codes (NBC 9.32), all bathroom and kitchen exhaust ducts must be insulated (minimum R-4) and vented directly to the exterior through a dedicated roof or wall cap equipped with a backdraft damper. Venting warm, moist air into an attic causes severe mold and structural wood rot.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'crawlspace-insulation',
    slug: 'crawlspace-insulation',
    title: 'Crawlspace Insulation & Encapsulation',
    category: 'building-areas',
    categoryName: 'Building Area Solutions',
    shortDesc: 'Conditioned crawlspace encapsulation, ground vapor barriers, foundation perimeter closed-cell foam, and sub-floor thermal isolation.',
    heroTagline: 'Controlling Moisture, Cold Floors & Radon Ingress from Below',
    overview: 'Unconditioned, vented crawlspaces in Canadian climates are notorious for freezing pipes, frigid main-floor living spaces, high indoor humidity, and ground moisture migration. Modern building science strongly favors conditioned crawlspace encapsulation—sealing the ground with a heavy-duty vapor retarder and insulating the foundation perimeter walls with closed-cell spray foam or rigid boards.',
    whatItIs: 'A complete crawlspace remediation and thermal encapsulation system combining 15-to-20 mil reinforced polyethylene ground vapor barriers with continuous closed-cell spray foam or rigid insulation along perimeter foundation walls.',
    keyBenefits: [
      'Transforms damp, cold crawlspaces into clean, dry, conditioned building envelope zones',
      'Eliminates icy-cold winter floors above the crawlspace',
      'Prevents ground moisture evaporation that fuels wood rot, mold, and musty odors',
      'Significantly reduces soil radon gas and moisture vapor ingress into living areas',
      'Protects sub-floor plumbing and heating ductwork from freezing and convective heat loss'
    ],
    applications: {
      residential: [
        'Full conditioned crawlspace encapsulation with reinforced vapor retarder and closed-cell foam',
        'Sub-floor joist cavity insulation and air sealing for unconditioned open pier crawlspaces',
        'Radon mitigation sub-membrane depressurization integration',
        'Post-and-beam cottage and heritage home foundation winterization'
      ],
      commercial: [
        'Commercial modular building crawlspace and foundation perimeter insulation',
        'Below-slab vapor retarder and crawlspace air sealing'
      ]
    },
    considerations: [
      'In conditioned crawlspace encapsulation, exterior wall vents must be sealed and conditioned air supplied to maintain low humidity',
      'Ground vapor barrier must be sealed airtight to the perimeter concrete walls with approved mastic/sealant',
      'Combustible foam on interior foundation walls must be protected by an approved thermal or ignition barrier where required by code',
      'Active water intrusion (sump pump requirements) must be resolved prior to membrane installation'
    ],
    installationProcess: [
      'Remove debris, rocks, and old contaminated materials; grade and level crawlspace dirt floor',
      'Install heavy-duty 15-to-20 mil reinforced polyethylene membrane across dirt floor with taped seams',
      'Mechanically fasten and seal the membrane 6" to 12" up foundation concrete walls with polyurethane mastic',
      'Apply 2" to 3" of medium-density closed-cell spray foam directly onto foundation walls and rim joists',
      'Seal all crawlspace access hatches, foundation vents, and mechanical penetrations'
    ],
    buildingScienceNote: 'Venting crawlspaces in humid summer weather introduces warm, moisture-laden outdoor air that condenses upon contacting cold sub-floor framing and concrete walls. In winter, vents draw in freezing air that chills floors and freezes pipes. Encapsulating the crawlspace inside the home’s thermal and air barrier envelope eliminates condensation and stabilizes temperatures year-round.',
    rValueGuidance: 'NBC 9.36 / provincial codes typically require foundation perimeter wall insulation of nominal R-15 to R-24 depending on Canadian climate zone.',
    codeComplianceNote: 'Complies with NBC 9.25 (Heat Transfer, Air Leakage and Condensation Control) and NBC 9.18 (Crawl Spaces). Ground cover membranes must conform to CAN/CGSB 51.34-M86.',
    relatedServices: ['basement-insulation', 'spray-foam', 'foundation-insulation', 'air-sealing', 'repairs'],
    seoTitle: 'Crawlspace Insulation & Encapsulation | Canadian Guide | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to crawlspace insulation and encapsulation in Canada: conditioned crawlspaces, closed-cell spray foam walls, vapor barriers, and radon mitigation.',
    faqs: [
      {
        question: 'Why is an encapsulated (unvented) crawlspace better than a vented crawlspace?',
        answer: 'In Canadian winters, open crawlspace vents allow freezing air to chill floor joists, freeze plumbing, and create cold living room floors. In summer, humid outdoor air enters the cool crawlspace and condenses, causing wood rot and mold. Encapsulating the crawlspace by sealing vents, laying a thick ground vapor barrier, and insulating the foundation walls brings the space inside the thermal envelope, keeping it dry and energy-efficient.'
      },
      {
        question: 'What type of vapor barrier is required for a crawlspace dirt floor?',
        answer: 'A heavy-duty reinforced polyethylene vapor retarder (typically 12 to 20 mil thick) is recommended for dirt floors. All seams must be overlapped by at least 12 inches, taped with vapor-proof seam tape, and sealed continuously to the perimeter concrete foundation walls.'
      },
      {
        question: 'Should I insulate the crawlspace floor joists or the perimeter foundation walls?',
        answer: 'Building science strongly recommends insulating the perimeter foundation walls and encapsulating the crawlspace, especially if mechanical equipment, HVAC ducts, or plumbing pipes are located in the crawlspace. Insulating the sub-floor joists is only appropriate for open, unconditioned pier-and-beam structures.'
      },
      {
        question: 'Does crawlspace encapsulation help reduce radon gas?',
        answer: 'Yes. Soil gases, including radon, enter homes through exposed crawlspace earth. Sealing the ground with a continuous heavy-duty vapor barrier that is caulked and taped to perimeter walls significantly blocks soil gas entry and provides a sealed plenum for active sub-membrane radon mitigation if needed.'
      },
      {
        question: 'What insulation material is best for crawlspace foundation walls?',
        answer: 'Closed-cell spray polyurethane foam is the gold standard for crawlspace foundation walls. It adheres directly to irregular concrete, stone, or block surfaces, creating an airtight, moisture-impermeable thermal barrier that seals rim joists and wall surfaces in a single application.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'basement-insulation',
    slug: 'basement-insulation',
    title: 'Basement & Foundation Wall Insulation',
    category: 'building-areas',
    categoryName: 'Building Area Solutions',
    shortDesc: 'Interior and exterior basement wall insulation systems, closed-cell spray foam encapsulation, rigid XPS boards, and rim joist air sealing across Canada.',
    heroTagline: 'Eliminating Cold Basements, Condensation & Rim Joist Air Infiltration',
    overview: 'Basement walls account for approximately 20% to 30% of total space heating loss in older Canadian homes. Because concrete is porous and conducts heat rapidly into surrounding cold soil, improperly insulated basements suffer from condensation, musty odors, and cold drafts. Modern building science integrates moisture management, continuous thermal breaks, and airtight rim joist sealing to deliver warm, dry, code-compliant lower living levels.',
    whatItIs: 'Engineered basement thermal systems combining continuous closed-cell spray foam, rigid XPS/mineral wool boards, wood/steel stud framing, and sealed rim joist assemblies.',
    keyBenefits: [
      'Transforms cold, unusable basements into warm, comfortable, habitable living spaces',
      'Stops condensation and mold growth behind finished basement drywall',
      'Air seals critical rim joist and sill plate transitions where major air leakage occurs',
      'Significantly lowers winter heating costs and enhances overall whole-home comfort',
      'Meets National Building Code 9.36 basement effective R-value requirements (R-17 to R-24+)'
    ],
    applications: {
      residential: [
        'Finished basement renovation framing and continuous insulation upgrades',
        'Direct-to-concrete closed-cell spray foam foundation wall encapsulation',
        'Rim joist, band joist, and sill plate air sealing and thermal insulation',
        'Secondary rental suite basement perimeter and ceiling sound/fire separations'
      ],
      commercial: [
        'Commercial below-grade foundation wall continuous rigid insulation',
        'Underground parking garage perimeter foundation insulation'
      ]
    },
    considerations: [
      'Never install a 6-mil poly vapor barrier directly against bare concrete; moisture can become trapped behind it',
      'Bulk water issues (foundation cracks, weeping tile failure, exterior grading) must be resolved before insulating',
      'Combustible foam insulations must be covered by an approved thermal barrier (e.g., 1/2" drywall) in occupied basements',
      'A continuous thermal break (minimum 1" rigid foam or 2" spray foam) should separate framing studs from concrete'
    ],
    installationProcess: [
      'Inspect concrete foundation walls for moisture intrusion, cracks, or efflorescence and repair',
      'Apply 2" to 3" of medium-density closed-cell spray foam directly to concrete and rim joists, OR fasten continuous rigid XPS/mineral wool boards to concrete',
      'Frame 2x4 wood or steel stud walls directly against the rigid insulation (or stand-off from concrete)',
      'Install supplemental friction-fit cavity batts if required to achieve target R-value',
      'Install mechanically fastened 1/2" drywall thermal barrier'
    ],
    buildingScienceNote: 'Concrete foundation walls absorb moisture from surrounding soil and slowly release it inward. If wood framing and fiberglass batts are installed directly against bare cold concrete with a polyethylene vapor barrier on the warm side, subterranean moisture condenses on the cold concrete inside the wall cavity, rotting wood studs and growing hidden mold. Installing moisture-impermeable continuous insulation (closed-cell foam or XPS) against the concrete warms the surface and stops inward vapor drive.',
    rValueGuidance: 'NBC 9.36 / provincial codes typically require basement wall nominal insulation of R-17 to R-24 depending on climate zone, or an effective assembly rating of R-15 to R-20.',
    codeComplianceNote: 'Complies with NBC 9.25 (Vapor Barriers & Moisture Control) and NBC 9.36.2.8 (Thermal Characteristics of Below-Grade Walls). Foam plastics must be protected by an approved thermal barrier (NBC 9.10.17.10).',
    relatedServices: ['spray-foam', 'rigid-board', 'crawlspace-insulation', 'foundation-insulation', 'air-sealing'],
    seoTitle: 'Basement & Foundation Wall Insulation | Canadian Building Science | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to basement wall insulation in Canada: direct-to-concrete spray foam, rigid XPS boards, rim joist air sealing, and condensation prevention.',
    faqs: [
      {
        question: 'Why shouldn’t you put a 6-mil poly vapor barrier directly against a concrete basement wall?',
        answer: 'Concrete walls constantly absorb moisture from the surrounding damp soil. If you install a polyethylene vapor barrier against the concrete (or on the interior studs of an improperly detailed wall), moisture becomes trapped within the framing cavity with no ability to dry inward. This trapped moisture rapidly rots wood studs and fuels mold growth. Continuous closed-cell foam or rigid XPS provides moisture control without trapping water.'
      },
      {
        question: 'What is the best way to insulate a basement rim joist (header)?',
        answer: 'The gold standard for rim joists is applying 2 to 3 inches of medium-density closed-cell spray foam. The rim joist is where wood framing sits atop the concrete foundation, making it one of the largest air leakage points in a home. Closed-cell foam creates an airtight, moisture-impermeable seal that bonds directly to wood and concrete, preventing cold drafts and condensation.'
      },
      {
        question: 'How do you prevent mold behind finished basement drywall?',
        answer: 'To prevent mold, you must ensure that warm, humid indoor air cannot reach the cold concrete foundation wall. This is achieved by installing a continuous layer of moisture-resistant insulation (such as 1.5" to 2" of XPS rigid foam or 2" of closed-cell spray foam) directly against the concrete before framing interior stud walls.'
      },
      {
        question: 'Is interior or exterior basement insulation better?',
        answer: 'Exterior insulation is theoretically ideal from a pure building science standpoint because it keeps the concrete foundation at indoor temperature and completely protects it from freeze-thaw cycles. However, on existing homes, exterior excavation is extremely costly and invasive, making interior continuous insulation (closed-cell foam or rigid boards) the preferred and highly effective standard for retrofit construction.'
      },
      {
        question: 'Do I need a thermal barrier over basement spray foam or rigid foam?',
        answer: 'Yes. Under the National Building Code of Canada, all foamed plastic insulations in occupied spaces must be protected from premature ignition by an approved 15-minute thermal barrier, typically 12.7 mm (1/2") drywall mechanically fastened to wood or steel framing.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'foundation-insulation',
    slug: 'foundation-insulation',
    title: 'Foundation & Below-Grade Insulation',
    category: 'building-areas',
    categoryName: 'Building Area Solutions',
    shortDesc: 'Exterior and interior foundation insulation, under-slab thermal barriers, frost-protected shallow foundations, and slab-on-grade systems.',
    heroTagline: 'Continuous Below-Grade Thermal Envelopes & Moisture Protection',
    overview: 'In cold Canadian climates, deep frost penetration and damp soil create continuous thermal and moisture stresses on below-grade building components. Foundation insulation blankets concrete foundation walls, footings, and floor slabs, preventing subterranean heat loss, reducing freeze-thaw damage to concrete, and mitigating moisture transmission into the structure.',
    whatItIs: 'Specialized high-compressive-strength, water-resistant insulation systems (Extruded Polystyrene XPS, semi-rigid drainage stone wool boards, or closed-cell spray foam) engineered for direct earth contact and under-slab applications.',
    keyBenefits: [
      'Protects structural concrete foundations from severe freeze-thaw thermal stress',
      'Keeps concrete foundation walls warm, moving the condensation dew point outside the structure',
      'Provides continuous thermal resistance under concrete basement and garage slabs (nominal R-5 to R-10+)',
      'Enables Frost-Protected Shallow Foundation (FPSF) designs, reducing excavation depth in cold climates',
      'Enhances comfort and efficiency for radiant in-floor hydronic heating systems'
    ],
    applications: {
      residential: [
        'Exterior foundation wall continuous rigid insulation paired with dimpled drainage membranes',
        'Under-slab basement floor insulation and hydronic radiant heating sub-slab boards',
        'Slab-on-grade thickened edge and frost skirt perimeter insulation',
        'Walkout basement frost wall and foundation step transitions'
      ],
      commercial: [
        'Commercial building foundation perimeter frost protection',
        'Cold storage warehouse insulated floor slabs with sub-slab ventilation'
      ]
    },
    considerations: [
      'Only water-resistant insulations rated for below-grade earth contact (XPS Type 4, high-density EPS, or heavy stone wool drainage boards) may be used on exterior foundations',
      'Exterior foam above grade must be protected from UV degradation and mechanical damage with stucco, metal flashing, or cementitious coatings',
      'Under-slab insulation must have adequate compressive strength (e.g., 25+ psi) to support live and dead slab loads'
    ],
    installationProcess: [
      'Apply foundation waterproofing or dampproofing membrane to cured concrete walls',
      'Install rigid XPS or exterior drainage stone wool boards tightly against foundation wall',
      'Install dimpled drainage sheet over insulation to channel ground water down to footing weeping tile',
      'For under-slab: level compacted gravel base, place interlocking XPS boards, lay 6-mil poly, and pour concrete slab',
      'Apply protective parging or flashing to above-grade exposed insulation sections'
    ],
    buildingScienceNote: 'Soil temperature below the frost line in Canada remains between 4°C and 10°C year-round. Because indoor living temperatures are 20°C to 22°C, there is a continuous temperature differential driving heat outward into the earth 365 days a year. Insulating beneath slabs and outside foundation walls stops this steady, continuous heat drain.',
    rValueGuidance: 'Typically nominal R-10 to R-15 for exterior foundation walls and R-5 to R-10 under basement floor slabs (R-10 to R-15 for radiant heated slabs).',
    codeComplianceNote: 'Must conform to CAN/ULC S701 (thermal insulation) and NBC 9.36 / 9.13 (Dampproofing, Waterproofing and Soil Gas Control).',
    relatedServices: ['basement-insulation', 'rigid-board', 'crawlspace-insulation', 'spray-foam', 'thermal'],
    seoTitle: 'Foundation & Below-Grade Insulation | Canadian Code Specs | SprayInsulations.ca',
    seoDescription: 'Complete technical guide to below-grade foundation insulation in Canada: exterior foundation XPS, under-slab radiant heating boards, and frost-protected shallow foundations.',
    faqs: [
      {
        question: 'Which insulation materials can be installed in direct contact with damp soil?',
        answer: 'Extruded Polystyrene (XPS Type 4, 25 psi compressive strength), high-density Expanded Polystyrene (EPS Type 2 or 3), and rigid drainage-grade stone wool boards are tested and approved for below-grade burial in direct contact with soil. Standard fiberglass or low-density open-cell foams must never be buried in earth.'
      },
      {
        question: 'Is insulation required under a basement concrete floor slab in Canada?',
        answer: 'Under the National Building Code 9.36, full under-slab insulation is required whenever in-floor radiant heating pipes are embedded in the slab (typically minimum R-10 to R-12). For unheated slabs, building codes frequently require perimeter slab insulation (e.g., R-5 to R-10 extending 4 feet inward or around the perimeter), though full under-slab insulation is strongly recommended for comfort.'
      },
      {
        question: 'How do you protect exposed exterior foundation insulation above the groundline?',
        answer: 'Any rigid foam extending above the soil line up to the siding must be protected from sunlight (UV rays) and mechanical impacts (weed trimmers, pets). Common code-compliant protective coatings include cementitious acrylic parging applied over wire mesh, pre-finished metal flashing, or fiber-cement cover boards.'
      },
      {
        question: 'What is a Frost-Protected Shallow Foundation (FPSF)?',
        answer: 'A Frost-Protected Shallow Foundation uses strategically placed horizontal and vertical rigid insulation skirts around a building’s perimeter to trap building heat loss and geothermal ground warmth. This raises the frost line around the foundation, allowing footings to be placed at shallower depths (as shallow as 16–24 inches) even in severe cold climate zones.'
      },
      {
        question: 'How does exterior foundation insulation help drainage?',
        answer: 'When paired with a dimpled drainage sheet (such as Delta-MS) or when using specialized porous stone wool drainage boards, exterior foundation insulation helps create a free-draining capillary break that directs ground water straight down to the footing weeping tile, keeping foundation walls dry.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'wall-insulation',
    slug: 'wall-insulation',
    title: 'Exterior & Interior Wall Insulation',
    category: 'building-areas',
    categoryName: 'Building Area Solutions',
    shortDesc: 'High-performance wall cavity insulation, continuous exterior insulation (ci), smart vapor retarders, and acoustic interior partition systems.',
    heroTagline: 'Optimizing Thermal Comfort, Air Barrier Continuity & Wall Durability',
    overview: 'Exterior walls represent the largest above-grade surface area of the building envelope. In Canada’s extreme climate, wall assemblies must manage severe thermal gradients (-30°C exterior to +22°C interior), solar vapor drive, wind-driven rain, and indoor humidity. Modern wall insulation strategies combine cavity friction-fit materials with continuous exterior insulation to maximize effective thermal resistance and ensure long-term structural durability.',
    whatItIs: 'Integrated wall thermal systems encompassing stud cavity insulation (batt, spray foam, or dense-pack), continuous exterior rigid insulation boards, airtight weather barriers, and code-mandated vapor control layers.',
    keyBenefits: [
      'Maintains comfortable, consistent interior wall surface temperatures across all seasons',
      'Significantly lowers annual winter heating costs and summer air conditioning loads',
      'Continuous exterior insulation eliminates cold framing thermal bridges through studs and headers',
      'Controls moisture condensation planes within the wall cavity, preventing rot and mold',
      'Provides superior acoustic privacy from outdoor street and environmental traffic noise'
    ],
    applications: {
      residential: [
        'New construction 2x6 wood-framed wall assemblies with cavity batts and continuous exterior insulation',
        'Exterior siding replacement retrofits incorporating 1.5" to 2" continuous stone wool or foam sheathing',
        'Retrofit drill-and-fill dense-pack cellulose/fiberglass for older uninsulated 2x4 walls',
        'Interior sound-attenuation partitions for bedrooms, home offices, and laundry rooms'
      ],
      commercial: [
        'Light-gauge steel stud exterior walls with continuous exterior insulation (ci)',
        'Commercial multi-unit residential party walls and demising partitions'
      ]
    },
    considerations: [
      'In Canadian heating climates, interior vapor barriers must be continuous and sealed at all electrical boxes and framing junctions',
      'Exterior continuous insulation thickness must satisfy climate-specific condensation control rules (NBC Table 9.25.5.2)',
      'Cladding attachment over exterior continuous insulation requires proper structural strapping and screw fasteners',
      'Rainscreen ventilation gap (3/8" to 3/4") must be maintained behind exterior siding for drainage and drying'
    ],
    installationProcess: [
      'Inspect framing for plumb alignment, backing, and moisture content (<18%)',
      'Install cavity insulation (friction-fit batts, dense-pack, or spray foam) without voids or compression',
      'Install continuous 6-mil polyethylene vapor barrier or smart vapor retarder sealed with acoustical sealant on interior',
      'Install continuous exterior rigid insulation over structural sheathing with staggered seams',
      'Fasten rainscreen strapping with structural screws and attach exterior cladding'
    ],
    buildingScienceNote: 'In a standard 2x6 wall with wood studs spaced 16" o.c., framing members represent approximately 23% to 25% of the total wall surface. Because wood has a much lower R-value than insulation (approx. R-1.2/in vs R-3.8/in), heat flows rapidly through the studs (thermal bridging). Adding continuous insulation on the outside of the studs blankets the entire wall and raises the effective R-value from ~R-17 to R-25+.',
    rValueGuidance: 'NBC 9.36 / provincial energy codes typically require whole-wall effective thermal resistance of R-18 to R-24+ for residential construction across Canadian climate zones.',
    codeComplianceNote: 'Wall assemblies must comply with NBC 9.25 (Heat, Air and Moisture Transfer) and NBC 9.36 (Energy Efficiency). Flammability and fire separation requirements apply per NBC 9.10 and Part 3.',
    relatedServices: ['batt-blanket', 'mineral-wool', 'spray-foam', 'rigid-board', 'thermal'],
    seoTitle: 'Exterior & Interior Wall Insulation | Canadian Codes | SprayInsulations.ca',
    seoDescription: 'Complete technical guide to Canadian exterior and interior wall insulation: cavity batts, continuous exterior insulation (ci), smart vapor retarders, and thermal bridging solutions.',
    faqs: [
      {
        question: 'What is the most effective way to insulate exterior walls in Canada?',
        answer: 'Building science research demonstrates that a "split-insulation" assembly is the most robust: pairing cavity insulation (such as R-22 stone wool or high-density fiberglass in 2x6 studs) with 1.5 to 2.5 inches of continuous exterior insulation (such as rigid stone wool or XPS) installed outboard of the sheathing. This eliminates stud thermal bridging and keeps the structural sheathing warm and dry.'
      },
      {
        question: 'How do you insulate older exterior walls without tearing down drywall?',
        answer: 'For existing uninsulated or poorly insulated 2x4 walls, contractors use the "drill-and-fill" method. Small 2-inch holes are drilled into each stud bay from either the exterior siding or interior drywall. A flexible hose is inserted to the bottom of the cavity, and high-density dense-pack cellulose or fiberglass is blown in under pressure before the holes are plugged and finished.'
      },
      {
        question: 'What is a "smart" vapor retarder and how does it compare to 6-mil poly?',
        answer: 'Standard 6-mil polyethylene is a rigid vapor barrier that permanently blocks vapor transmission in both directions. A "smart" vapor retarder membrane (such as polyamide membranes) adapts its molecular permeability: in winter, when relative humidity inside the wall is low, it acts as a vapor barrier; in summer, if humidity inside the cavity rises, its pores open to allow the wall to dry toward the interior.'
      },
      {
        question: 'How does thermal bridging affect wall insulation performance?',
        answer: 'Wood framing members (studs, plates, headers) conduct heat much faster than insulation. In a typical wood-framed home, framing accounts for ~25% of the total wall area. This thermal bridging reduces an R-22 cavity batt’s effective whole-wall performance to approximately R-17. Adding continuous exterior insulation blankets these studs and restores full thermal performance.'
      },
      {
        question: 'What is a rainscreen cavity and why is it important for insulated walls?',
        answer: 'A rainscreen is a 3/8" to 3/4" ventilated air space created by vertical furring strips (strapping) between the exterior insulation/sheathing membrane and the siding. It allows any incidental wind-driven rainwater that penetrates the siding to drain harmlessly downward and provides ventilation that quickly dries the back of the cladding.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  }
];
