import { InsulationService } from '../../types';

export const FIBERGLASS_CELLULOSE_SERVICES: InsulationService[] = [
  {
    id: 'fiberglass',
    slug: 'fiberglass',
    title: 'Fiberglass Insulation',
    category: 'fiberglass-cellulose',
    categoryName: 'Fiberglass & Cellulose',
    shortDesc: 'Economical, versatile batt and loose-fill blown fiberglass systems for attics, exterior walls, and interior partition assemblies across Canada.',
    heroTagline: 'Cost-Effective Thermal Performance for Canadian Building Envelopes',
    overview: 'Fiberglass insulation remains a foundational thermal insulation material for Canadian residential and light-commercial construction. Available in pre-cut friction-fit batts and loose-fill blown fibers for attic flats, modern low-dust, formaldehyde-free fiberglass delivers predictable thermal resistance when paired with continuous air and vapor barrier systems.',
    whatItIs: 'Fiberglass insulation is manufactured from molten glass spun into micro-fibers, bound with organic thermosetting binders. It works by trapping microscopic pockets of still air, resisting conductive heat flow through building envelope assemblies.',
    keyBenefits: [
      'Economical thermal envelope performance for new construction and retrofit projects',
      'Blown-in attic loose-fill conforms around framing obstacles and trusses to minimize voids',
      'Non-combustible glass fibers that will not sustain flame propagation (CAN/ULC S102)',
      'Lightweight formulation with established settling factors when installed to manufacturer coverage charts',
      'Readily available across all Canadian building supply networks'
    ],
    applications: {
      residential: [
        'Attic floor loose-fill blow-ins targeting modern code levels (R-50 to R-60)',
        '2x4 and 2x6 exterior wood-framed wall cavity friction-fit batts',
        'Interior partition wall sound attenuation blankets',
        'Cathedral ceiling rafter cavities with proper ventilation baffles'
      ],
      commercial: [
        'Light-gauge steel stud wall cavity insulation blankets',
        'Acoustic drop-ceiling lay-in thermal and sound attenuation pads',
        'Corridor wall and multi-unit residential partition cavities'
      ]
    },
    considerations: [
      'Fiberglass is air-permeable; it does not stop airflow on its own and requires comprehensive air sealing',
      'Must not be compressed during installation, as compression reduces thermal R-value',
      'Requires continuous 6-mil polyethylene or approved vapor barrier on the warm-in-winter interior side',
      'Loses thermal performance if subjected to moisture or bulk water leaks'
    ],
    installationProcess: [
      'Pre-installation sealing of all electrical penetrations, top plates, and plumbing stacks',
      'Friction-fit placement of batts without gaps, folds, or excessive compression',
      'Splitting batts around electrical wiring and plumbing pipes for uniform density',
      'Installation of continuous 6-mil poly vapor barrier sealed with acoustical sealant',
      'Blowing loose-fill in attics with calibrated blowing machines to target settled depth'
    ],
    buildingScienceNote: 'Fiberglass is an air-permeable fibrous material that provides thermal resistance by trapping still air. It does not stop air movement on its own. In Canadian heating climates, fiberglass must always be installed in conjunction with an airtight exterior/interior air barrier system and a code-compliant vapor barrier on the warm-in-winter side to prevent convective airflow, wind-washing, and condensation.',
    rValueGuidance: 'High-density batts provide approximately nominal R-3.5 to R-3.8 per inch (e.g., R-14 in 2x4 framing, R-22 to R-24 in 2x6 framing). Blown loose-fill attic insulation delivers approximately R-2.8 to R-3.2 per inch of settled thickness.',
    codeComplianceNote: 'Manufactured to conform with CAN/ULC S702 (Standard for Mineral Fibre Thermal Insulation). In Canadian heating climates, interior cavity installations typically require a continuous 6-mil polyethylene vapor barrier (CAN/CGSB 51.34-M86) sealed at all penetrations and perimeter junctions, or an approved smart vapor retarder per NBC 9.25.',
    relatedServices: ['fiberglass-batt', 'blown-in-fiberglass', 'cellulose', 'attic-insulation', 'air-sealing'],
    seoTitle: 'Fiberglass Insulation | Canadian Batt & Blown Specs | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to fiberglass batt and blown-in insulation for Canadian homes: R-value ratings, CAN/ULC S702 standards, air barrier pairing, and attic installations.',
    faqs: [
      {
        question: 'Why is air sealing necessary before adding blown-in fiberglass to an attic?',
        answer: 'Fiberglass allows air to pass through its fibrous structure. Without prior air sealing of ceiling penetrations (pot lights, plumbing vents, chimney chases, top plates), warm moist indoor air will bypass the insulation via stack effect, leading to moisture condensation, mold on roof sheathing, and winter ice dam formation.'
      },
      {
        question: 'How much blown fiberglass is needed to achieve an R-60 attic in Canada?',
        answer: 'Depending on the manufacturer’s specification and settled density chart, achieving an R-60 (RSI 10.56) rating typically requires between 19 and 22 inches of settled blown fiberglass. Always refer to the manufacturer attic ruler and bag count chart posted at the attic hatch.'
      },
      {
        question: 'What is the difference between nominal batt R-value and effective wall R-value?',
        answer: 'Nominal R-value refers strictly to the thermal resistance of the insulation material itself (e.g., an R-22 batt). The effective R-value accounts for thermal bridging through wood or steel studs, top/bottom plates, and headers. In a standard 2x6 wood-framed wall with 16" stud spacing, an R-22 batt typically yields an effective assembly rating of approximately R-17 to R-19.'
      },
      {
        question: 'Can fiberglass insulation cause mold growth?',
        answer: 'Fiberglass fibers themselves are inorganic and do not support mold growth. However, if dirt and organic dust accumulate on the fibers, and high humidity or air leakage introduces moisture, mold can grow on the trapped organic particles. Maintaining an airtight building envelope prevents this moisture accumulation.'
      },
      {
        question: 'How does high-density fiberglass batt compare to standard batt insulation?',
        answer: 'High-density batts use finer, more tightly packed glass fibers to deliver higher thermal resistance within a fixed stud depth—such as R-15 in a 2x4 cavity (compared to standard R-12/R-13) or R-22/R-24 in a 2x6 cavity (compared to standard R-19/R-20).'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'fiberglass-batt',
    slug: 'fiberglass-batt',
    title: 'Fiberglass Batt Insulation',
    category: 'fiberglass-cellulose',
    categoryName: 'Fiberglass & Cellulose',
    shortDesc: 'Pre-cut friction-fit fiberglass batts engineered for standard 16" and 24" on-center framing cavities in walls, floors, and ceilings.',
    heroTagline: 'Precision Pre-Cut Batts for Wood & Steel Stud Framing',
    overview: 'Fiberglass batts are pre-formed, flexible insulation blankets manufactured to fit standard stud and joist spacing (16" and 24" o.c.). Widely utilized in Canadian new construction and residential renovations, batt insulation provides clean, predictable thermal and acoustic separation when carefully installed without compression or perimeter voids.',
    whatItIs: 'Pre-manufactured blankets of bound glass fibers sized specifically for 2x4 (3.5" depth), 2x6 (5.5" depth), 2x8, 2x10, and 2x12 cavity depths, offering standardized nominal R-values from R-12 to R-40.',
    keyBenefits: [
      'Standardized dimensions for fast friction-fit installation in standard framing bays',
      'Available in low-dust, formaldehyde-free, bio-based binder formulations',
      'Non-combustible core fibers meeting CAN/ULC S102 flame-spread requirements',
      'Cost-efficient solution for straightforward rectangular framing cavities',
      'High recyclability with high post-consumer recycled glass content'
    ],
    applications: {
      residential: [
        'Exterior wood-framed wall cavities (2x4 and 2x6 framing)',
        'Interior partition wall sound attenuation batts',
        'Basement framed perimeter walls over poly or rigid foam',
        'Floor joists over unconditioned crawlspaces and garages'
      ],
      commercial: [
        'Commercial steel stud partitions with acoustic sound attenuation blankets',
        'Corridor demising walls and drop ceiling overlay pads'
      ]
    },
    considerations: [
      'Gaps, voids, and compression around wires and pipes significantly reduce thermal effectiveness',
      'Must be paired with a continuous air barrier and 6-mil poly vapor barrier in exterior assemblies',
      'Not suitable for unvented roof assemblies or direct contact with concrete foundation walls'
    ],
    installationProcess: [
      'Verify framing is clean and drywall backing is secure',
      'Cut batts 1/2" wider and longer than cavity to ensure snug friction-fit without sagging',
      'Carefully split batts around electrical wiring and notch around junction boxes',
      'Tuck edges smoothly into corners without rounding or compressing the front face',
      'Apply continuous 6-mil polyethylene sheet with acoustic sealant along top/bottom plates'
    ],
    buildingScienceNote: 'Batt performance is highly dependent on installation quality. Research shows that a 5% void in batt coverage can reduce effective assembly thermal resistance by up to 20% to 30% due to convective looping within the cavity. Ensuring split cuts around wires and snug corner contact is vital.',
    rValueGuidance: 'Nominal R-12 to R-15 for 2x4 framing (3.5"), nominal R-19 to R-24 for 2x6 framing (5.5"), and R-28 to R-38 for floor joist depths.',
    codeComplianceNote: 'Batts must comply with CAN/ULC S702 and be installed with vapor barriers meeting NBC 9.25 / CAN/CGSB 51.34-M86 standards.',
    relatedServices: ['fiberglass', 'blown-in-fiberglass', 'mineral-wool', 'batt-blanket', 'wall-insulation'],
    seoTitle: 'Fiberglass Batt Insulation | 2x4 & 2x6 Canadian Wall Specs | SprayInsulations.ca',
    seoDescription: 'Technical guide to fiberglass batt insulation installation, friction-fit sizing, R-value ratings, and vapor barrier requirements in Canadian home construction.',
    faqs: [
      {
        question: 'How do you prevent fiberglass batts from sagging over time?',
        answer: 'Batts should be cut approximately 1/2" larger than the framing cavity to ensure a firm friction fit against the studs. In ceiling or horizontal floor joist applications, mechanical supports such as wire insulation hangers, strapping, or netting must be installed per NBC requirements.'
      },
      {
        question: 'Why must fiberglass batts be split around electrical wiring?',
        answer: 'Compressing a whole batt over electrical cables creates air gaps behind the wire and crushes the glass fibers, drastically reducing thermal resistance and allowing convective air currents. Splitting the batt allows half the thickness to sit behind the wire and half in front, maintaining uniform density.'
      },
      {
        question: 'Can you compress an R-22 batt into a 2x4 wall?',
        answer: 'No. Compressing a 5.5" R-22 batt into a 3.5" 2x4 cavity crushes the trapped air pockets and reduces its thermal performance to approximately R-13, while bulging the studs and making drywall installation difficult. Use high-density R-14 or R-15 batts specifically engineered for 2x4 cavities.'
      },
      {
        question: 'Are modern fiberglass batts safe for indoor air quality?',
        answer: 'Modern fiberglass batts manufactured for the Canadian market use bio-based, formaldehyde-free binders that generate minimal VOC emissions, achieving GREENGUARD Gold and low-emission indoor air quality certifications.'
      },
      {
        question: 'What is the required vapor barrier over fiberglass batts?',
        answer: 'In Canadian heating climates, exterior wall batts must be covered on the warm interior side with a continuous 6-mil polyethylene vapor barrier (CAN/CGSB 51.34-M86) or an approved smart vapor retarder membrane sealed at all joints and perimeter edges.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'blown-in-fiberglass',
    slug: 'blown-in-fiberglass',
    title: 'Blown-In Fiberglass Insulation',
    category: 'fiberglass-cellulose',
    categoryName: 'Fiberglass & Cellulose',
    shortDesc: 'Seamless loose-fill fiberglass pneumatic blowing systems for attics, cathedral retrofits, and dense-pack wall cavities.',
    heroTagline: 'Seamless Pneumatic Coverage for Attics & Hard-to-Reach Enclosures',
    overview: 'Blown-in fiberglass insulation utilizes pneumatic blowing machines to disperse virgin glass fibers across open attic flats or dense-pack closed wall cavities. Conforming seamlessly around ceiling joists, plumbing stacks, electrical conduits, and truss web members, loose-fill fiberglass eliminates the joint voids common with pre-cut batts.',
    whatItIs: 'Specially milled loose glass fiber nodules packaged in compressed bags and blown through flexible hoses using pressurized air to achieve uniform coverage and density.',
    keyBenefits: [
      'Seamless monolithic coverage over complex attic truss configurations and framing',
      'Does not settle significantly over time when installed to manufacturer bag-count charts',
      'Naturally non-combustible glass fibers with zero chemical fire retardant wash-off',
      'Extremely lightweight, making it safe for 1/2" ceiling drywall spans without sag',
      'Fast, efficient installation for attic upgrades up to modern R-60 code levels'
    ],
    applications: {
      residential: [
        'Open attic flat blow-ins in new construction and residential top-ups',
        'Dense-pack wall retrofits (Blow-In-Blanket System / BIBS behind netting)',
        'Sloped cathedral roof cavities with proper ventilation baffles'
      ],
      commercial: [
        'Commercial attic flats and wide-span pre-engineered building roof trusses',
        'Acoustic ceiling sound attenuation fills'
      ]
    },
    considerations: [
      'Comprehensive air sealing of all ceiling bypasses is mandatory prior to blowing',
      'Eaves baffles (vent chutes) must be installed at every rafter bay to preserve soffit airflow',
      'Attic rulers and manufacturer bag count charts must be strictly verified on site'
    ],
    installationProcess: [
      'Thorough air sealing of pot lights, top plates, plumbing stacks, and chimney chases',
      'Installation of rigid ventilation baffles at eaves to prevent soffit wind-washing',
      'Attic depth rulers fastened to roof trusses throughout the attic space',
      'Pneumatic machine calibration for correct air-to-material ratio and density',
      'Blowing to target depth and posting verified attic certificate card at hatch'
    ],
    buildingScienceNote: 'In attic loose-fill applications, maintaining clear ventilation paths from soffit to ridge is critical. High-velocity winds entering soffit vents can displace loose fibers (wind-washing), exposing perimeter top plates. Rigid rafter baffles must extend beyond the finished insulation height to direct airflow upward into the attic headspace.',
    rValueGuidance: 'Blown fiberglass typically provides nominal R-2.5 to R-3.2 per inch depending on installed density and settled thickness specifications.',
    codeComplianceNote: 'Installation must satisfy CAN/ULC S702 and NBC 9.36 attic thermal resistance minimums (typically R-50 to R-60 across Canadian climate zones). Attic coverage charts must be posted at the attic access hatch per code.',
    relatedServices: ['fiberglass', 'blown-in', 'cellulose', 'attic-insulation', 'insulation-upgrades'],
    seoTitle: 'Blown-In Fiberglass Insulation | Canadian Attic R-60 Specs | SprayInsulations.ca',
    seoDescription: 'Explore blown-in loose-fill fiberglass insulation for attics and walls: settling factors, R-value per inch, eave baffling, and air sealing prerequisites in Canada.',
    faqs: [
      {
        question: 'Does blown-in fiberglass settle over time in an attic?',
        answer: 'Virgin blown fiberglass experiences minimal settling—typically less than 1% to 3% over its lifespan when blown to manufacturer density specifications. Attic depth markers and bag-count charts account for this nominal settling factor.'
      },
      {
        question: 'How many bags of blown fiberglass are needed for an R-60 attic?',
        answer: 'The exact bag count depends on the attic square footage and the manufacturer’s coverage chart (printed on every bag). For a 1,000 sq ft attic, achieving R-60 typically requires approximately 40 to 45 bags of premium blowing wool.'
      },
      {
        question: 'What is the BIBS (Blow-In-Blanket) system?',
        answer: 'BIBS is a dense-pack fiberglass installation method where a specialized permeable fabric netting is stapled across wall framing, and loose-fill fiberglass is blown under pressure into the cavities, creating a dense, gap-free thermal and acoustic blanket.'
      },
      {
        question: 'Can blown fiberglass be added on top of existing cellulose or batt insulation?',
        answer: 'Yes, provided the existing insulation is dry, mold-free, and in good condition, and comprehensive ceiling air sealing has been completed first. Blown fiberglass can be layered directly over existing batts or cellulose.'
      },
      {
        question: 'How do you protect attic ventilation when blowing fiberglass?',
        answer: 'Rigid plastic or cardboard ventilation baffles (rafter vents) must be installed at every rafter bay along exterior eaves prior to blowing. These baffles ensure an unobstructed 1" to 2" air channel from soffit vents into the attic while preventing insulation from spilling into the soffits.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cellulose',
    slug: 'cellulose',
    title: 'Cellulose Insulation',
    category: 'fiberglass-cellulose',
    categoryName: 'Fiberglass & Cellulose',
    shortDesc: 'Eco-friendly blown-in and dense-pack cellulose insulation manufactured from recycled paper fibers treated with non-toxic borate fire retardants.',
    heroTagline: 'High-Density Recycled Fiber Thermal & Acoustic Performance',
    overview: 'Cellulose insulation is a high-density, eco-friendly thermal insulation material manufactured from post-consumer recycled paper and cardboard treated with mineral borate compounds. Known for its ability to reduce air movement through high-density packing and provide excellent sound damping, cellulose is widely used for attic blow-ins, drill-and-fill wall retrofits, and dense-pack acoustic partitions.',
    whatItIs: 'Cellulose insulation consists of finely shredded recycled newsprint and paper fiber (typically 80-85% by weight) infused with mineral borate salts (boric acid and ammonium sulfate) that provide fire resistance and pest deterrence.',
    keyBenefits: [
      'High post-consumer recycled content (>80%) with low embodied carbon footprint',
      'Dense packing (3.0–3.5 lb/cu.ft) restricts convective airflow and air filtration through cavities',
      'Exceptional acoustic sound absorption and sound transmission reduction in walls and ceilings',
      'Treated with non-toxic mineral borates that provide flame retardancy and insect resistance',
      'Excellent flowability around framing obstructions, electrical boxes, and older irregular framing'
    ],
    applications: {
      residential: [
        'Open attic flat loose-fill blow-ins targeting R-50 to R-60 thermal targets',
        'Dense-pack drill-and-fill retrofits for uninsulated older exterior walls (pre-1980 homes)',
        'Dense-pack floor joists between secondary basement suites and living areas',
        'Interior partition walls for privacy and acoustic soundproofing'
      ],
      commercial: [
        'Acoustic cavity damping in multi-family demising walls and party partitions',
        'Commercial roof truss loose-fill thermal blankets'
      ]
    },
    considerations: [
      'Cellulose experiences initial settling in open attics (typically 15% to 20%); installers must blow to specified initial depth to achieve required settled R-value',
      'Must be protected from bulk moisture and roof leaks; wet cellulose can lose R-value and dry slowly',
      'Dense-pack wall installations require skilled technicians with proper pressure-monitoring equipment to prevent cavity voids or drywall bowing',
      'Always requires prior air sealing of ceiling penetrations and proper rafter baffle installation in attics'
    ],
    installationProcess: [
      'Perform detailed attic air sealing around top plates, chimneys, and electrical bypasses',
      'Install rigid rafter baffles at all exterior soffits to preserve intake ventilation',
      'Calibrate commercial blowing machine for loose-fill attic density or high-pressure dense-pack walls',
      'Blow material to target initial thickness using attic rulers to compensate for settled density',
      'Post certified job card at attic entrance documenting bag count, coverage, and installed R-value'
    ],
    buildingScienceNote: 'Due to its high density and fibrous structure, dense-pack cellulose significantly restricts air movement compared to low-density fibrous batts. However, cellulose is an air-permeable material and is not a code-compliant air barrier or vapor barrier on its own. In Canadian heating climates, assemblies must include appropriate air sealing and vapor control strategies in accordance with NBC 9.25 and 9.36.',
    rValueGuidance: 'Cellulose insulation typically provides a nominal thermal resistance of approximately R-3.4 to R-3.8 per inch of settled thickness depending on manufacturer specifications and compaction density.',
    codeComplianceNote: 'Cellulose insulation manufactured for the Canadian market must comply with CAN/ULC S703 (Standard for Cellulose Fibre Thermal Insulation). It must be evaluated for flame resistance, corrosiveness, moisture absorption, and settling under standardized Canadian test methods.',
    relatedServices: ['blown-in', 'fiberglass', 'attic-insulation', 'wall-insulation', 'air-sealing'],
    seoTitle: 'Cellulose Insulation | Canadian Blown-In & Dense Pack Specs | SprayInsulations.ca',
    seoDescription: 'Complete guide to cellulose insulation: attic loose-fill, dense-pack wall retrofits, settled R-value, CAN/ULC S703 standards, and moisture considerations in Canada.',
    faqs: [
      {
        question: 'What is cellulose insulation made of?',
        answer: 'Cellulose insulation is manufactured primarily from post-consumer recycled newsprint and paper fiber (typically 80% to 85% by weight) that has been shredded and treated with natural mineral borate compounds to provide fire retardancy, mold resistance, and pest deterrence.'
      },
      {
        question: 'Where is cellulose insulation commonly installed in Canadian homes?',
        answer: 'Cellulose is most commonly installed as loose-fill in open attics to achieve modern energy code targets (R-50 to R-60) and as high-pressure dense-pack insulation in exterior walls of older homes (drill-and-fill retrofits), cathedral ceilings, and interior acoustic party walls.'
      },
      {
        question: 'Does cellulose insulation settle in an attic over time?',
        answer: 'Yes. Loose-fill attic cellulose typically settles by 15% to 20% within the first few months after installation. Canadian standard CAN/ULC S703 requires manufacturers to provide settled thickness charts, and certified installers blow to an initial extra depth to ensure the final settled thickness meets the design R-value.'
      },
      {
        question: 'How does cellulose compare with fiberglass for thermal and acoustic performance?',
        answer: 'Cellulose is denser than standard fiberglass loose-fill, which gives it superior cavity air-flow resistance and excellent sound-damping properties across low-to-mid speech frequencies. Fiberglass is lighter, has lower settling rates, and uses inorganic glass fibers. Both perform reliably when installed to verified code specifications.'
      },
      {
        question: 'How is dense-pack cellulose installed into existing closed walls?',
        answer: 'For retrofit walls without removing drywall or exterior siding, small 2-inch access holes are drilled into each stud bay (from the exterior siding or interior drywall). A flexible hose is inserted to the bottom of the cavity, and cellulose is packed under pressure to a density of 3.0 to 3.5 lb/cu.ft before plugging and sealing the holes.'
      },
      {
        question: 'What moisture considerations apply to cellulose insulation?',
        answer: 'Cellulose can absorb and release ambient hygroscopic moisture without loss of performance, but it must never be exposed to bulk water, roof leaks, or standing moisture. If cellulose becomes soaked, it can mat down, lose thermal resistance, and take extended time to dry. Roof leaks and plumbing issues must be resolved before installation.'
      },
      {
        question: 'Is cellulose insulation fire resistant?',
        answer: 'Yes. Cellulose is treated with mineral borate fire retardants during manufacturing, enabling it to meet CAN/ULC S703 and CAN/ULC S102 surface burning standards (Class 1 / Class A flame spread). While the underlying paper is organic, the borate treatment creates a protective char layer when exposed to heat, resisting flame propagation.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'blown-in',
    slug: 'blown-in',
    title: 'Blown-In & Loose-Fill Insulation',
    category: 'fiberglass-cellulose',
    categoryName: 'Fiberglass & Cellulose',
    shortDesc: 'Pneumatic loose-fill insulation systems utilizing advanced fiberglass or cellulose fibers for seamless attic and cavity retrofits across Canada.',
    heroTagline: 'Pneumatic Seamless Cavity & Attic Coverage for Maximum Energy Savings',
    overview: 'Blown-in (loose-fill) insulation is the premier method for achieving uniform, gap-free thermal resistance across open attic floors, irregular truss cavities, and closed retrofit wall systems. By using pneumatic blowing equipment, installers create a continuous thermal blanket that covers joists and conforms around ceiling penetrations to eliminate thermal short-circuits.',
    whatItIs: 'Pneumatically applied loose fiber insulation (fiberglass or cellulose) expanded and distributed through specialized delivery hoses into attics, floors, and enclosed cavities.',
    keyBenefits: [
      'Fills voids, gaps, and awkward angles around roof trusses, wiring, and ductwork',
      'Provides uniform R-value coverage without the seams and joints inherent to batt insulation',
      'Cost-effective and rapid installation for attic top-ups from legacy R-12/R-20 to modern R-50/R-60',
      'Significantly reduces seasonal heating loss and helps mitigate winter ice damming',
      'Can be installed as high-density dense-pack in walls without tearing down interior drywall'
    ],
    applications: {
      residential: [
        'Attic floor top-ups and complete attic re-insulation projects',
        'New home construction attic flat blown blankets (R-50 to R-60)',
        'Exterior wall drill-and-fill retrofits for older uninsulated homes',
        'Cantilevered floor bays and bonus room ceiling cavities'
      ],
      commercial: [
        'Commercial roof truss loose-fill thermal barriers',
        'Acoustic ceiling sound attenuation fills over commercial drop ceilings'
      ]
    },
    considerations: [
      'Comprehensive air sealing of all attic penetrations must precede loose-fill installation',
      'Soffit baffles are required at every rafter bay to prevent wind displacement and maintain roof ventilation',
      'Installers must strictly verify bag count against manufacturer coverage charts for target R-values'
    ],
    installationProcess: [
      'Inspect attic space and seal all electrical, plumbing, chimney, and top-plate bypasses',
      'Install ventilation chutes/baffles at every soffit intake bay and dams around the attic hatch',
      'Position depth markers throughout the attic space at regular intervals',
      'Pneumatically blow insulation evenly to the required thickness based on settled density tables',
      'Secure insulated and weatherstripped attic hatch cover and post compliance certificate'
    ],
    buildingScienceNote: 'In cold Canadian heating climates, thermal performance of blown-in attics relies on two paired building science elements: (1) an airtight ceiling plane preventing indoor moisture from rising into the attic, and (2) unobstructed attic ventilation allowing outside air to flush any incidental moisture before it can condense on cold roof sheathing.',
    rValueGuidance: 'Typically nominal R-2.8 to R-3.2 per inch for blown fiberglass and R-3.4 to R-3.8 per inch for blown cellulose at settled thickness.',
    codeComplianceNote: 'Must conform to CAN/ULC S702 (mineral fibre) or CAN/ULC S703 (cellulose). Installations must satisfy NBC 9.36 / provincial energy codes and attic ventilation ratios (NBC 9.19).',
    aliases: ['loose-fill'],
    relatedServices: ['cellulose', 'blown-in-fiberglass', 'attic-insulation', 'air-sealing', 'insulation-upgrades'],
    seoTitle: 'Blown-In & Loose-Fill Insulation | Canadian Attic Specialists | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to pneumatic blown-in and loose-fill insulation for Canadian attics and walls: fiberglass vs cellulose, settled depth, R-60 standards, and air sealing.',
    faqs: [
      {
        question: 'What is the main advantage of blown-in insulation over batts in an attic?',
        answer: 'Blown-in insulation creates a seamless, monolithic blanket across the entire attic floor, filling all gaps, odd-angled corners, and spaces around plumbing pipes, electrical wiring, and truss webbing. In contrast, batts must be cut and fitted around every obstacle, creating numerous seams and potential thermal bypasses.'
      },
      {
        question: 'How do I know if my attic needs more blown-in insulation?',
        answer: 'If you can see the tops of your ceiling floor joists (typically 2x4 or 2x6 framing, meaning 3.5" to 5.5" of insulation, or R-12 to R-20), your attic is under-insulated by modern Canadian building standards (which call for R-50 to R-60, or 16" to 22" of material). Uneven room temperatures and winter ice dams are also common indicators.'
      },
      {
        question: 'Should I choose blown fiberglass or blown cellulose?',
        answer: 'Both materials provide excellent thermal performance when installed properly. Blown cellulose has higher density and slightly higher R-value per inch (R-3.4 to R-3.8/in vs R-2.8 to R-3.2/in for fiberglass) and superior airflow resistance. Blown fiberglass is lighter, does not settle significantly, and is naturally non-combustible. A certified contractor can recommend the optimal material for your specific roof structure and budget.'
      },
      {
        question: 'Can blown-in insulation cover recessed pot lights in the ceiling?',
        answer: 'Only if the recessed light fixtures are rated "IC" (Insulation Contact) and airtight (ASTM E283). Non-IC rated fixtures must be protected with a non-combustible cover or replaced before insulation is blown over them to prevent fire hazards.'
      },
      {
        question: 'What is an attic card/certificate?',
        answer: 'Under Canadian building codes, professional insulation contractors must post an attic card near the access hatch stating the insulation brand, type, initial installed thickness, minimum settled thickness, number of bags installed, and the final certified R-value.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  }
];
