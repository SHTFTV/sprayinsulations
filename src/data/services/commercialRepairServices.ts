import { InsulationService } from '../../types';

export const COMMERCIAL_REPAIR_SERVICES: InsulationService[] = [
  {
    id: 'commercial-insulation',
    slug: 'commercial-insulation',
    title: 'Commercial Building Insulation',
    category: 'commercial',
    categoryName: 'Commercial & Industrial',
    shortDesc: 'Engineered thermal, condensation control, and continuous exterior insulation systems for commercial developments, agricultural facilities, and multi-unit residential structures.',
    heroTagline: 'Engineered Thermal Envelopes & Energy Management Assemblies',
    overview: 'Commercial, industrial, and agricultural buildings face rigorous thermal envelope demands, including large open interior volumes, high structural steel thermal conductivity, strict non-combustibility fire codes, and high interior humidity loads. We provide technical insights for engineers, general contractors, and facility managers across Canada.',
    whatItIs: 'Heavy-commercial building envelope assemblies incorporating continuous exterior insulation (rigid stone wool, polyiso, or spray foam), non-combustible curtain wall firestopping, and structural steel thermal breaks designed to satisfy the National Energy Code for Buildings (NECB).',
    keyBenefits: [
      'Mitigates structural steel thermal bridging through continuous exterior insulation (ci)',
      'Provides high-performance condensation control in cold-storage and high-humidity facilities',
      'Supports compliance with National Energy Code for Buildings (NECB) and provincial energy codes (e.g., OBC SB-10, BC Step Code, TGS v4)',
      'Durable assemblies engineered for mechanical zones, high traffic, and washdown environments',
      'Thermal isolation for industrial process piping, chillers, and HVAC distribution'
    ],
    applications: {
      residential: [
        'Multi-unit mid-rise and high-rise residential continuous exterior wall assemblies',
        'Underground heated parkade soffits and suspended slab ceiling insulation'
      ],
      commercial: [
        'Pre-engineered metal building (PEMB) roof and wall retrofits',
        'Agricultural barns, riding arenas, and food processing facilities',
        'Curtain wall spandrel panels and precast concrete sandwich panel assemblies',
        'Distribution warehouses and refrigerated cold storage facilities',
        'Mechanical rooms, process piping, and district energy thermal isolation'
      ]
    },
    considerations: [
      'Steel framing conducts heat rapidly; commercial code compliance must be calculated using effective assembly U-values rather than cavity nominal R-values',
      'Exterior combustible insulation claddings on Part 3 buildings over 3 storeys must satisfy CAN/ULC S134 full-scale fire testing',
      'Perimeter curtain wall slab edge joints must be protected with listed fire containment systems tested to CAN/ULC S115 / ASTM E2307'
    ],
    installationProcess: [
      'Perform engineering thermal modeling and review of NECB / ASHRAE 90.1 energy compliance pathways',
      'Install primary air/vapor weather barrier membrane across exterior sheathing substrate',
      'Fasten continuous rigid stone wool or rigid foam panels using thermally broken cladding brackets',
      'Install high-density non-combustible mineral wool curtain wall spandrel and perimeter firestop seals',
      'Perform airtightness testing and thermal imaging envelope commissioning before project handover'
    ],
    buildingScienceNote: 'In steel-framed construction, structural steel studs conduct heat approximately 400 times faster than wood, reducing cavity insulation thermal efficiency by 40% to 60% due to thermal bridging. Modern Canadian energy codes mandate continuous exterior insulation (ci) or high-performance thermal breaks to satisfy effective assembly R-value targets.',
    rValueGuidance: 'NECB and provincial energy standards specify stringent overall thermal transmittance (U-values) for building envelopes, requiring verified continuous insulation and airtight assembly detailing.',
    codeComplianceNote: 'Commercial assemblies must satisfy Part 3 of the National Building Code of Canada, applicable provincial building codes, CAN/ULC S134 full-scale fire tests for exterior combustible cladding assemblies, and energy compliance standards (NECB / ASHRAE 90.1).',
    aliases: ['commercial'],
    relatedServices: ['industrial-insulation', 'hi-bar', 'mineral-wool', 'rigid-board', 'thermal'],
    seoTitle: 'Commercial Building Insulation | Canadian NECB & Part 3 Specs | SprayInsulations.ca',
    seoDescription: 'Technical guide to commercial building envelope insulation in Canada: steel stud continuous insulation (ci), NECB energy codes, curtain wall firestopping, and parkade soffit insulation.',
    faqs: [
      {
        question: 'How do Canadian energy codes evaluate steel-framed commercial exterior walls?',
        answer: 'Under the National Energy Code for Buildings (NECB) and NBC 9.36, compliance calculations must be based on overall "effective thermal resistance" (effective R-value or overall U-value) rather than nominal cavity insulation values. Because steel studs cause significant thermal bridging, commercial walls almost always require continuous exterior insulation (such as rigid stone wool or foam board) installed outboard of the framing.'
      },
      {
        question: 'What thermal solutions prevent condensation in pre-engineered metal buildings (PEMB)?',
        answer: 'Pre-engineered metal buildings often suffer from interior condensation when warm interior humidity contacts cold corrugated metal cladding. Applying medium-density closed-cell spray foam directly to the clean metal substrate creates a seamless, adhered air and vapor barrier that eliminates air gaps and maintains the condensing surface temperature above the indoor dew point.'
      },
      {
        question: 'What fire containment standards apply to commercial curtain wall spandrel panels?',
        answer: 'In Part 3 commercial buildings, the junction between exterior curtain wall spandrel panels and interior floor slabs must be protected by perimeter fire barrier systems evaluated under CAN/ULC S115 / ASTM E2307, typically using high-density non-combustible mineral stone wool and firestop elastomeric sealants to prevent vertical fire propagation between floors.'
      },
      {
        question: 'What is CAN/ULC S134 full-scale fire testing for exterior walls?',
        answer: 'CAN/ULC S134 is a standardized full-scale multi-story fire test evaluated by the National Building Code of Canada for non-combustible exterior wall assemblies incorporating combustible components (such as rigid foam or composite cladding). It measures vertical flame spread and heat release to ensure the exterior facade does not propagate fire to upper levels.'
      },
      {
        question: 'How are underground parkade concrete slab ceilings insulated?',
        answer: 'Underground parkades located beneath heated residential or commercial spaces require high-performance insulation to prevent heat loss from the floors above. Common solutions include high-density stone wool boards mechanically fastened with insulation anchors or medium-density spray polyurethane foam protected by an approved thermal/ignition barrier.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'industrial-insulation',
    slug: 'industrial-insulation',
    title: 'Industrial & High-Temperature Insulation',
    category: 'commercial',
    categoryName: 'Commercial & Industrial',
    shortDesc: 'Thermal isolation, condensation control, process piping, mechanical vessel, and high-temperature acoustic blankets for industrial and manufacturing facilities across Canada.',
    heroTagline: 'Thermal Process Efficiency & Extreme Environment Isolation',
    overview: 'Industrial manufacturing facilities, process plants, mechanical penthouses, and district energy networks require heavy-duty thermal insulation engineered for extreme temperatures (-40°C cryogenic to +650°C high-temperature process piping). Industrial insulation systems protect operating personnel from burns, prevent process thermal degradation, stop piping condensation and Corrosion Under Insulation (CUI), and reduce plant operating costs.',
    whatItIs: 'Engineered high-density mineral fiber, cellular glass, calcium silicate, and elastomeric insulation systems clad with aluminum or stainless steel jacketing for industrial vessels, piping, and mechanical plant infrastructure.',
    keyBenefits: [
      'Conserves thermal energy across steam lines, hot water distribution, and process loops',
      'Provides personnel burn protection on operating equipment exceeding 60°C (140°F)',
      'Prevents pipe sweating and condensation on chilled water lines and refrigeration systems',
      'Mitigates dangerous Corrosion Under Insulation (CUI) with hydrophobic materials and sealed metal jacketing',
      'Provides high-decibel acoustic dampening around high-pressure pumps, compressors, and blowers'
    ],
    applications: {
      residential: [
        'High-rise residential mechanical penthouse boilers, pumps, and central chiller distribution lines',
        'District energy substation heat exchanger insulation blankets'
      ],
      commercial: [
        'Industrial processing plants, breweries, and food manufacturing facilities',
        'High-temperature steam distribution piping, valves, and condensate return loops',
        'Cold ammonia refrigeration piping and cryogenic gas distribution networks',
        'Removable custom insulation thermal jackets for valves, flanges, and pumps requiring routine maintenance'
      ]
    },
    considerations: [
      'High-temperature applications require non-combustible materials (calcium silicate, stone wool) rated for operating temperatures up to 650°C+',
      'Chilled water and refrigeration lines require 100% vapor-tight closed-cell or cellular glass insulation with zero vapor permeability to prevent icing',
      'Corrosion Under Insulation (CUI) inspection protocols must be integrated into facility maintenance planning'
    ],
    installationProcess: [
      'Clean and apply high-temperature protective coatings to steel pipe/vessel substrates',
      'Precision-fit pre-formed pipe sections or high-density stone wool/calcium silicate blocks',
      'Stagger all longitudinal and butt joints and secure with stainless steel bands or tie wire',
      'For cold/chilled systems: apply continuous vapor retarder mastic and glass fabric reinforcing',
      'Install custom-rolled aluminum (0.016" to 0.024") or stainless steel weather-protective jacketing with silicone-sealed overlaps'
    ],
    buildingScienceNote: 'On chilled process piping operating below the ambient dew point, moisture vapor travels inward toward the cold pipe surface. If the vapor retarder is breached, moisture condenses on the pipe, creating water pooling, dripping, and rapid Corrosion Under Insulation (CUI). Vapor-tight cellular insulation with impermeable metal jacketing is essential.',
    rValueGuidance: 'Industrial insulation thickness is calculated per ASTM C680 (Standard Practice for Determination of Heat Gain or Loss and the Surface Temperatures of Insulated Systems) to satisfy specific surface temperature or heat loss limits.',
    codeComplianceNote: 'Complies with CSA standards, National Energy Code for Buildings (NECB 5.2.2 Service Water and Piping), and TIAC (Thermal Insulation Association of Canada) Best Practices.',
    relatedServices: ['commercial-insulation', 'mineral-wool', 'fire-rated', 'thermal', 'acoustic'],
    seoTitle: 'Industrial Insulation | Process Piping & Mechanical Specs | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to industrial and mechanical insulation in Canada: high-temperature steam pipe insulation, CUI prevention, TIAC standards, and removable thermal blankets.',
    faqs: [
      {
        question: 'What is Corrosion Under Insulation (CUI) and how is it prevented?',
        answer: 'Corrosion Under Insulation (CUI) is severe localized rusting and pitting of steel pipes and vessels caused by water becoming trapped beneath the insulation. It is prevented by applying high-performance epoxy coatings to the pipe before insulating, using hydrophobic (water-repellent) stone wool or cellular glass insulation, and installing sealed, weather-tight aluminum or stainless steel jacketing with moisture drains.'
      },
      {
        question: 'What materials are used for high-temperature steam pipe insulation?',
        answer: 'High-temperature industrial piping (operating between 150°C and 650°C) is insulated using high-density pre-formed mineral stone wool pipe sections or calcium silicate blocks, protected by an outer aluminum or stainless steel jacket secured with stainless steel banding.'
      },
      {
        question: 'What are removable insulation blankets and where are they used?',
        answer: 'Removable insulation blankets (thermal jackets) are custom-tailored flexible pads manufactured with silicone-coated fiberglass cloth and non-combustible stone wool or aerogel cores. They are fastened with stainless steel hooks or Velcro around valves, flanges, pumps, and heat exchangers that require frequent mechanical inspection and maintenance.'
      },
      {
        question: 'Why does chilled water and refrigeration piping require special vapor barriers?',
        answer: 'Because cold chilled lines operate well below indoor dew point temperatures, moisture vapor is constantly driven from the warm room toward the cold pipe. Without a continuous, zero-perm vapor barrier (such as closed-cell elastomeric foam or cellular glass with vapor retarder mastic), moisture will condense on the pipe, creating water damage, ice build-up, and severe rust.'
      },
      {
        question: 'What standards govern industrial mechanical insulation in Canada?',
        answer: 'The Thermal Insulation Association of Canada (TIAC) publishes the National Commercial and Industrial Insulation Standards (The TIAC Best Practices Guide), which specifies material selection, thickness tables, jacketing details, and installation methods across Canadian industries.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'insulation-repairs',
    slug: 'insulation-repairs',
    title: 'Insulation Repairs & Remediation',
    category: 'repair-upgrade',
    categoryName: 'Remediation & Upgrades',
    shortDesc: 'Comprehensive remediation, attic vacuum removal, damaged insulation replacement, air sealing retrofits, and energy efficiency restoration.',
    heroTagline: 'Restoring Thermal Integrity, Air Sealing, and Indoor Air Quality',
    overview: 'Aged, damaged, or poorly installed insulation compromises comfort, leads to cold drafts, increases winter heating costs, and can contribute to hidden roof moisture damage. Professional remediation includes selective extraction of contaminated materials, comprehensive air barrier sealing, and modern re-insulation aligned with current Canadian building standards.',
    whatItIs: 'Systematic inspection, selective removal of compromised insulation, professional air sealing remediation, and modern thermal restoration for residential and commercial envelopes.',
    keyBenefits: [
      'Eliminates major thermal bypasses and draft sources through targeted air sealing',
      'Removes contaminated or wet insulation resulting from pest activity, roof leaks, or mold',
      'Helps prevent damaging winter ice dams along residential roof eaves',
      'Significantly improves seasonal heating and cooling energy efficiency',
      'Enhances indoor air quality by extracting degraded fibers, rodent droppings, and dust allergens'
    ],
    applications: {
      residential: [
        'Attic insulation top-ups from legacy R-12/R-20 levels to current R-50/R-60 standards',
        'Extraction of rodent-contaminated, water-damaged, or compressed insulation',
        'Basement rim joist air sealing and closed-cell spray foam encapsulation',
        'Knee-wall, bonus room, and cantilevered floor thermal boundary corrections',
        'Crawlspace vapor barrier replacement and foundation wall encapsulation'
      ],
      commercial: [
        'Tenant fit-out retrofits and building envelope remediation projects',
        'Commercial roof underside insulation repairs and condensation corrections',
        'Mechanical room, pipe, and ductwork thermal re-insulation'
      ]
    },
    considerations: [
      'Homes built before 1990 may contain vermiculite insulation that may contain asbestos; vermiculite must be tested prior to disturbance',
      'Roof leaks and active plumbing leaks must be permanently repaired before new insulation is installed',
      'Thorough air sealing must be executed after old insulation removal and before blowing new material'
    ],
    installationProcess: [
      'Perform visual inspection, thermal imaging assessment, and hazardous material sampling (vermiculite check)',
      'Set up high-powered HEPA vacuum extraction equipment outside the home to safely remove contaminated material',
      'Decontaminate and sanitize the attic floor space with antimicrobial misting if pest debris was present',
      'Execute meticulous air sealing of all ceiling penetrations with two-component foam and fire-rated sealants',
      'Install fresh high-efficiency loose-fill or batt insulation to modern R-50/R-60 Canadian code standards'
    ],
    buildingScienceNote: 'Before adding new insulation on top of an existing attic, comprehensive air sealing of all ceiling penetrations is essential. Adding new insulation over unsealed penetrations can trap warm moist air against cold exterior surfaces, accelerating hidden condensation and structural wood rot.',
    rValueGuidance: 'Retrofit projects aim to upgrade older building assemblies toward current National Building Code 9.36 / provincial targets (e.g., R-50 to R-60 in attics, R-20 to R-24 in framed walls, and R-15 to R-20 in basements).',
    codeComplianceNote: 'Homes constructed prior to 1990 may contain vermiculite insulation that could contain amphibole asbestos fibers. Vermiculite must never be disturbed without certified laboratory testing and, if positive, professional remediation following provincial occupational health and safety regulations.',
    aliases: ['repairs'],
    relatedServices: ['insulation-removal', 'insulation-replacement', 'insulation-upgrades', 'air-sealing', 'attic-insulation'],
    seoTitle: 'Insulation Repairs & Remediation | Canadian Home Guide | SprayInsulations.ca',
    seoDescription: 'Comprehensive guide to insulation repairs in Canada: damaged attic insulation remediation, rodent decontamination, ceiling air sealing, and vermiculite testing.',
    faqs: [
      {
        question: 'Should old attic insulation be removed before adding new material?',
        answer: 'If the existing insulation is dry, clean, and free of mold, pest droppings, or vermiculite, new blown-in insulation can often be added directly on top after thoroughly air-sealing the ceiling plane. However, if the old insulation is contaminated, water-damaged, compressed, or contains rodent debris, full vacuum extraction and sanitation is recommended prior to re-insulation.'
      },
      {
        question: 'What precautions are required if an attic contains vermiculite insulation?',
        answer: 'Some historical vermiculite insulation (notably Libby mine Zonolite) may contain asbestos. Vermiculite must not be disturbed, swept, or vacuumed with standard equipment. A representative sample must be tested by an accredited laboratory. If asbestos is detected, removal must be performed by certified hazardous materials abatement professionals following provincial occupational health and safety regulations.'
      },
      {
        question: 'What are the common indicators that existing insulation needs inspection or repair?',
        answer: 'Key warning signs include noticeable temperature differences between rooms, recurring winter ice dams along roof eaves, cold drafty floors above unconditioned spaces, unexplained spikes in heating bills, rodent activity in the attic, or dark moisture staining on roof sheathing.'
      },
      {
        question: 'How do rodents damage attic insulation?',
        answer: 'Rodents (mice, squirrels, raccoons) tunnel through fiberglass and cellulose, compacting the fibers and destroying the air pockets that create R-value. Furthermore, urine and feces create biological contamination, odours, and potential airborne pathogens (such as Hantavirus), necessitating HEPA extraction and sanitation.'
      },
      {
        question: 'How long does a typical attic insulation repair and upgrade take?',
        answer: 'A standard residential attic extraction, air sealing, and fresh re-insulation to R-50/R-60 is typically completed in 1 to 2 days by a professional crew using high-powered exterior vacuum equipment and pneumatic blowing trucks.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'insulation-removal',
    slug: 'insulation-removal',
    title: 'Insulation Removal & Extraction',
    category: 'repair-upgrade',
    categoryName: 'Remediation & Upgrades',
    shortDesc: 'Dust-free, high-powered HEPA vacuum extraction of contaminated, rodent-damaged, water-damaged, or compressed attic and cavity insulation across Canada.',
    heroTagline: 'Safe, Clean & Comprehensive Decontamination Extraction',
    overview: 'When insulation has suffered severe animal infestation, mold contamination from roof leaks, smoke damage after a fire, or severe settling and age-related degradation, full removal is necessary. Utilizing commercial high-volume vacuum systems stationed outside the home, technicians safely extract old insulation directly into sealed waste bags without contaminating indoor living spaces.',
    whatItIs: 'High-powered pneumatic vacuum extraction of old fiberglass, cellulose, or rock wool directly from attic spaces and framing cavities into heavy-duty disposal bags located outside the building.',
    keyBenefits: [
      'Removes biohazards (rodent urine, feces, pheromone trails) that attract future pests',
      'Eliminates mold spores and moisture-damaged material that compromise indoor air quality',
      'Exposes the entire bare ceiling drywall plane for 100% comprehensive air sealing and electrical repairs',
      'Keeps the home interior clean by creating continuous negative pressure through exterior vacuum hoses',
      'Prepares the attic for modern high-performance R-50 to R-60 insulation systems'
    ],
    applications: {
      residential: [
        'Attic extraction following raccoon, squirrel, or rodent infestations',
        'Water-damaged insulation removal following roof leaks, pipe bursts, or ice dam backup',
        'Pre-renovation attic vacuuming for structural modifications or pot light installations',
        'Fire and smoke-damaged insulation extraction and odor remediation'
      ],
      commercial: [
        'Commercial ceiling and roof truss insulation extraction during tenant build-outs',
        'Industrial plant mechanical room insulation removal and remediation'
      ]
    },
    considerations: [
      'Pre-testing for asbestos-containing vermiculite (Zonolite) is mandatory prior to any disturbance in pre-1990 homes',
      'Technicians must wear proper Personal Protective Equipment (PPE) including P100/HEPA respirators and disposable coveralls',
      'Attic floor joists must be navigated safely with specialized walking planks to avoid stepping through drywall ceilings'
    ],
    installationProcess: [
      'Conduct pre-removal inspection and hazardous materials asbestos sampling if applicable',
      'Route heavy-duty 4" to 6" vacuum hoses from exterior vacuum truck directly into attic hatch',
      'Vacuum all loose-fill and batt insulation down to the bare ceiling drywall substrate',
      'Hand-bag larger debris and dispose of all materials at licensed provincial waste facilities',
      'Sanitize the attic floor with EPA-approved antimicrobial botanical disinfectant misting'
    ],
    buildingScienceNote: 'Removing contaminated or wet insulation is not just an aesthetic upgrade—it directly protects indoor air quality. Because the stack effect draws air upward through ceiling penetrations, negative pressure during summer or wind gusts can push attic dust, mold spores, and rodent allergens back down into living spaces.',
    rValueGuidance: 'Full removal restores the attic to an empty baseline, allowing installers to establish an airtight ceiling barrier and install a fresh, calibrated R-50 to R-60 thermal blanket.',
    codeComplianceNote: 'Disposal must conform to provincial environmental regulations and municipal waste guidelines. Asbestos remediation (if vermiculite tests positive) must strictly comply with provincial occupational health and safety abatement standards.',
    relatedServices: ['insulation-repairs', 'insulation-replacement', 'attic-insulation', 'air-sealing', 'insulation-upgrades'],
    seoTitle: 'Insulation Removal & Extraction | Clean Vacuum Services | SprayInsulations.ca',
    seoDescription: 'Professional attic insulation removal in Canada: HEPA vacuum extraction, rodent decontamination, water damage remediation, and safe vermiculite testing.',
    faqs: [
      {
        question: 'How is old attic insulation removed without making a mess inside the house?',
        answer: 'Professional contractors position a high-powered 20-to-30 horsepower gas vacuum outside the home and run a continuous 4-to-6-inch flexible hose directly through the attic access. The vacuum pulls material under heavy negative pressure directly into exterior containment bags, ensuring zero dust, fiber, or pest debris enters the living areas.'
      },
      {
        question: 'When is complete insulation removal absolutely necessary?',
        answer: 'Removal is necessary when: (1) rodents or wildlife have nested and left extensive droppings/urine, (2) roof leaks or plumbing failures have soaked the insulation and caused mold, (3) a home fire has left lingering smoke odors trapped in the fibers, or (4) major electrical wiring or structural ceiling framing repairs are required.'
      },
      {
        question: 'How do you sanitize an attic after rodent-infested insulation is removed?',
        answer: 'After all insulation and physical debris are vacuumed out, technicians apply a non-toxic, hospital-grade antimicrobial disinfectant mist across all ceiling joists, plates, and sheathing. This neutralizes bacteria, mold spores, and pest pheromone trails that would otherwise attract new pests.'
      },
      {
        question: 'What happens if vermiculite insulation is found during the inspection?',
        answer: 'If vermiculite is observed, work is immediately paused and a representative sample is sent to an accredited testing laboratory for polarized light microscopy / transmission electron microscopy. If asbestos is confirmed, a certified Level 3 asbestos abatement team must perform removal under full containment regulations.'
      },
      {
        question: 'How much does professional attic insulation removal typically cost?',
        answer: 'Cost depends on attic square footage, insulation depth, material type (blown cellulose, fiberglass batts, or rock wool), attic accessibility, and whether decontamination sanitization is required. Contact a local certified professional for an exact site evaluation.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'insulation-replacement',
    slug: 'insulation-replacement',
    title: 'Insulation Replacement & Restoration',
    category: 'repair-upgrade',
    categoryName: 'Remediation & Upgrades',
    shortDesc: 'Turnkey removal, advanced ceiling air barrier sealing, and fresh installation of high-efficiency insulation for older and compromised Canadian building envelopes.',
    heroTagline: 'Complete Envelope Restoration for Peak Comfort & Energy Savings',
    overview: 'Insulation replacement combines the removal of old, degraded, or contaminated materials with modern building science upgrades. By clearing the framing cavities, contractors can meticulously seal all air leakage bypasses, install rafter ventilation chutes, and install modern high-density insulation, achieving dramatic energy savings and restoring comfort.',
    whatItIs: 'A full-cycle building envelope retrofit combining safe insulation extraction, comprehensive air sealing, structural substrate inspection, and fresh high-R-value insulation installation.',
    keyBenefits: [
      'Replaces degraded, low-R-value material with modern high-performance insulation systems',
      'Provides a clean canvas to air-seal 100% of hidden bypasses and top-plate junctions',
      'Eliminates chronic drafts, temperature imbalances between rooms, and high heating bills',
      'Guarantees compliance with modern National Building Code 9.36 thermal standards',
      'Significantly increases home resale value and qualifies for provincial energy efficiency grants'
    ],
    applications: {
      residential: [
        'Full attic replacement packages (removal + air sealing + R-50/R-60 blown insulation)',
        'Basement framing insulation replacement following flood restoration',
        'Exterior wall insulation replacement during whole-home siding or drywall renovations'
      ],
      commercial: [
        'Commercial tenant improvement insulation replacement and acoustic upgrades',
        'Multi-family residential building envelope restoration projects'
      ]
    },
    considerations: [
      'Combining extraction and re-insulation into a single turnkey project saves time and labor costs',
      'Always inspect roof flashing, plumbing stacks, and electrical wiring while framing is exposed',
      'Verify eligibility for Canadian provincial and federal home energy retrofits and rebate programs'
    ],
    installationProcess: [
      'Extract old insulation using exterior HEPA vacuum equipment down to bare framing',
      'Inspect roof sheathing, framing members, and electrical wiring for hidden defects',
      'Execute complete air sealing of all ceiling and framing bypasses with polyurethane expanding foam',
      'Install rigid ventilation baffles and insulation dams at all exterior eaves and access hatches',
      'Install fresh high-density blown-in or batt insulation to verified R-50/R-60 Canadian standards'
    ],
    buildingScienceNote: 'Replacing insulation without performing comprehensive air sealing misses over 50% of the energy-saving opportunity. Air leakage moves more heat and moisture through building envelopes than conduction through uninsulated materials. A complete replacement project must treat air sealing and insulation as an indivisible single system.',
    rValueGuidance: 'Attic replacements target R-50 to R-60 (RSI 8.8 to 10.6); wall cavity replacements target R-14 to R-24+; basement replacements target R-17 to R-24.',
    codeComplianceNote: 'Complies with NBC 9.36 Energy Efficiency and provincial building codes. All newly installed materials must conform to CAN/ULC S702 (mineral fibre), CAN/ULC S703 (cellulose), or CAN/ULC S705 (spray foam).',
    relatedServices: ['insulation-removal', 'insulation-repairs', 'attic-insulation', 'air-sealing', 'insulation-upgrades'],
    seoTitle: 'Insulation Replacement & Restoration | Turnkey Canadian Retrofits | SprayInsulations.ca',
    seoDescription: 'Complete insulation replacement guide: vacuum extraction, whole-house air sealing, fresh R-60 attic installation, and energy rebate eligibility in Canada.',
    faqs: [
      {
        question: 'What is the step-by-step process of a complete attic insulation replacement?',
        answer: 'A turnkey attic replacement involves 5 key steps: (1) complete vacuum extraction of old insulation to the bare ceiling drywall, (2) sanitization and inspection of wiring and roof sheathing, (3) airtight sealing of all ceiling penetrations and top plates with foam, (4) installation of rafter ventilation baffles at eaves, and (5) blowing in new cellulose or fiberglass to modern R-50 to R-60 code depth.'
      },
      {
        question: 'How much can I save on heating bills by replacing old attic insulation?',
        answer: 'Homeowners typically experience a 15% to 30% reduction in annual space heating and cooling costs when replacing legacy R-12/R-20 insulation with a properly air-sealed R-50 to R-60 system, depending on climate zone, home size, and primary heating fuel.'
      },
      {
        question: 'Are there government rebates available for replacing insulation in Canada?',
        answer: 'Yes. Various provincial and municipal energy efficiency programs (such as CleanBC Better Homes in British Columbia, Enbridge Home Efficiency Plus in Ontario, and Efficiency Manitoba) offer substantial financial rebates for attic, wall, and basement insulation retrofits when verified by an EnerGuide home energy advisor.'
      },
      {
        question: 'How long does fresh new insulation last after replacement?',
        answer: 'High-quality fiberglass, cellulose, stone wool, and spray foam insulations are engineered to last the lifetime of the building (30 to 50+ years), provided the roof remains watertight and no animal infestations occur.'
      },
      {
        question: 'Can I stay in my home during an attic insulation replacement project?',
        answer: 'Yes. Because the vacuum extraction hoses and blowing hoses enter through an attic hatch or exterior window/soffit, the living spaces remain clean and undisturbed. Work is generally completed within 1 to 2 business days.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'insulation-upgrades',
    slug: 'insulation-upgrades',
    title: 'Energy Efficiency Insulation Upgrades',
    category: 'repair-upgrade',
    categoryName: 'Remediation & Upgrades',
    shortDesc: 'Strategic home and building envelope thermal upgrades designed to cut utility bills, improve year-round comfort, and qualify for Canadian energy efficiency rebate programs.',
    heroTagline: 'Lowering Energy Bills & Modernizing Canadian Building Envelopes',
    overview: 'Many Canadian homes built before the adoption of modern energy codes (pre-2012) feature inadequate insulation levels (such as R-12 in walls and R-20 in attics). Upgrading building envelope insulation is the most cost-effective and permanent strategy to reduce carbon emissions, lower peak heating bills, and future-proof residential properties against rising energy costs.',
    whatItIs: 'Targeted building envelope thermal and air-barrier enhancement strategies encompassing attic top-ups, rim joist spray foam encapsulation, basement wall continuous insulation, and exterior continuous sheathing retrofits.',
    keyBenefits: [
      'Cuts annual winter heating bills by up to 25% to 40% across Canadian climate zones',
      'Eliminates drafty rooms, cold interior walls, and uncomfortably hot upper floors in summer',
      'Helps homes qualify for maximum provincial and municipal energy efficiency rebate grants',
      'Substantially reduces residential carbon footprint and greenhouse gas emissions',
      'Reduces the heating load on HVAC systems, extending furnace and heat pump equipment life'
    ],
    applications: {
      residential: [
        'Attic insulation top-ups from legacy R-12/R-20 to modern R-50/R-60 standards',
        'Basement rim joist and crawlspace perimeter air sealing and closed-cell spray foam upgrades',
        'Exterior wall continuous insulation upgrades during window or siding replacements',
        'Conversion of cold uninsulated attached garages or bonus room floors'
      ],
      commercial: [
        'Commercial building envelope energy retrofits to meet corporate ESG and decarbonization targets',
        'Agricultural building and warehouse thermal envelope modernization'
      ]
    },
    considerations: [
      'Prioritize envelope upgrades before downsizing or replacing heating systems to properly size heat pumps',
      'Pre-upgrade and post-upgrade EnerGuide blower door assessments are typically required to claim provincial rebates',
      'Always combine thermal upgrades with balanced mechanical ventilation (HRV/ERV) to ensure healthy indoor air quality'
    ],
    installationProcess: [
      'Perform preliminary energy audit and infrared thermal imaging to identify highest heat-loss areas',
      'Execute targeted attic air sealing of all top plates, bypasses, and chimney chases',
      'Install rafter ventilation chutes and blow additional insulation to achieve R-50/R-60 target',
      'Insulate and air seal basement rim joists and unconditioned basement walls',
      'Complete post-retrofit blower door verification and submit documentation for rebate processing'
    ],
    buildingScienceNote: 'Energy efficiency is governed by the "House as a System" concept: changing insulation and airtightness alters heat and air flows, which in turn impacts moisture drying dynamics and indoor air exchange. Implementing high-efficiency insulation upgrades alongside proper mechanical ventilation guarantees comfort, structural durability, and energy savings.',
    rValueGuidance: 'Upgrades bring older homes into alignment with modern NBC 9.36 / provincial energy codes: Attic R-50 to R-60, Exterior Walls R-20 to R-28 effective, Basements R-17 to R-24.',
    codeComplianceNote: 'Retrofit assemblies must satisfy local provincial building codes, NBC 9.36 standards, and EnerGuide for Houses technical verification guidelines.',
    relatedServices: ['attic-insulation', 'air-sealing', 'insulation-replacement', 'basement-insulation', 'thermal'],
    seoTitle: 'Energy Efficiency Insulation Upgrades | Canadian Rebates | SprayInsulations.ca',
    seoDescription: 'Guide to energy efficiency insulation upgrades in Canada: attic top-ups, rim joist sealing, EnerGuide rebates, heat pump readiness, and building envelope retrofits.',
    faqs: [
      {
        question: 'Which insulation upgrade gives the highest return on investment?',
        answer: 'Attic air sealing and insulation top-up to R-50/R-60 consistently delivers the highest return on investment of any home energy upgrade. Because heat naturally rises and attics are easily accessible, upgrading from legacy R-12/R-20 to R-50/R-60 typically pays for itself within a few heating seasons through energy bill reductions.'
      },
      {
        question: 'Should I upgrade insulation before installing a heat pump?',
        answer: 'Yes! Building science professionals strongly recommend upgrading your insulation and air sealing BEFORE selecting and sizing a heat pump. A well-insulated, airtight home requires a smaller, less expensive heat pump unit, operates at higher seasonal efficiency, and keeps heating costs minimal during cold winter extremes.'
      },
      {
        question: 'Can you just add more insulation on top of old attic insulation?',
        answer: 'Yes, if the existing insulation is dry, mold-free, and clean, new blown-in cellulose or fiberglass can be added directly on top. However, to achieve true energy savings, you must first air-seal the ceiling penetrations below the existing insulation and ensure soffit ventilation is maintained with rafter baffles.'
      },
      {
        question: 'What is an EnerGuide home energy evaluation?',
        answer: 'An EnerGuide evaluation is a comprehensive energy audit performed by a licensed Canadian energy advisor. The advisor conducts a blower door airtightness test, inspects insulation levels, and generates an EnerGuide rating (gigajoules per year) and customized recommendations required to unlock provincial energy efficiency rebate grants.'
      },
      {
        question: 'What other areas of the house should be upgraded after the attic?',
        answer: 'After the attic, the next most cost-effective upgrade areas are the basement rim joists (which are major sources of cold air infiltration) and uninsulated basement foundation walls, followed by exterior wall cavity dense-pack retrofits.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  }
];
