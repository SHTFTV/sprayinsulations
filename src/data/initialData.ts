import { InsulationService, ProvinceData, CityData, DirectoryBusiness, ResourceArticle, Testimonial, NewsItem } from '../types';
import { ALL_INSULATION_SERVICES, SERVICE_CATEGORIES, findServiceBySlug, getServiceOrDefault } from './services';

export { ALL_INSULATION_SERVICES, SERVICE_CATEGORIES, findServiceBySlug, getServiceOrDefault };
export const INSULATION_SERVICES: InsulationService[] = ALL_INSULATION_SERVICES;

export const PRIMARY_CONTACT_EMAIL = 'build@buildershaus.com';

export const BRAND_INFO = {
  name: 'SprayInsulations.ca',
  divisionOf: 'Builders Haus',
  poweredBy: 'Industry Army Marketing',
  email: PRIMARY_CONTACT_EMAIL,
  tagline: "Canada's Insulation Resource for Better Buildings",
  subheadline: 'Connect with insulation solutions, building science information, and industry resources for homes, renovations, commercial buildings, and construction projects across Canada.',
};

export const PROVINCES_DATA: ProvinceData[] = [
  {
    code: 'BC',
    slug: 'british-columbia',
    name: 'British Columbia',
    capital: 'Victoria',
    population: 5600000,
    climateZones: ['Zone 4 (Coastal)', 'Zone 5 (Interior)', 'Zone 6 (Northern)', 'Zone 7A (Sub-Arctic)'],
    degreeDaysRange: '2,600 to 5,500 HDD (<18°C)',
    buildingCodeReference: 'BC Building Code / BC Energy Step Code (Steps 1 to 5)',
    energyCodeNotes: 'The BC Energy Step Code mandates progressive performance tiers toward Net-Zero Energy Ready new construction. Step 3/4 standardizes continuous exterior insulation and airtight envelopes with tested metrics below 1.5 ACH50.',
    moistureAndVapourNotes: 'Coastal zones demand strict inward/outward vapor management with rainscreen drainage cavities. Interior vapor retarders must prevent moisture accumulation during damp coastal winters while enabling summertime drying.',
    rebatePrograms: [
      {
        name: 'CleanBC Better Homes Rebates',
        authority: 'CleanBC / BC Hydro / FortisBC',
        maxGrant: 'Up to $5,500+ CAD',
        description: 'Substantial incentives for attic insulation top-ups (R-12+ added to reach R-40/R-50), basement perimeter insulation, and exterior wall continuous insulation.',
        url: 'https://betterhomesbc.ca'
      }
    ],
    overview: 'British Columbia leads Canadian energy-efficiency regulation through the BC Energy Step Code. From mild, damp coastal climates requiring careful moisture vapor management to extreme sub-zero interior valleys, insulation strategies must balance airtightness, continuous exterior insulation, and drying potential.',
    majorCities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Kelowna', 'Victoria', 'Kamloops', 'Nanaimo', 'Prince George']
  },
  {
    code: 'AB',
    slug: 'alberta',
    name: 'Alberta',
    capital: 'Edmonton',
    population: 4800000,
    climateZones: ['Zone 6 (South & Central)', 'Zone 7A (Edmonton & Foothills)', 'Zone 7B (Northern AB)'],
    degreeDaysRange: '4,500 to 6,200 HDD (<18°C)',
    buildingCodeReference: 'National Building Code - Alberta Edition (NBC-AE Section 9.36 / NECB)',
    energyCodeNotes: 'Alberta enforces NBC-AE 9.36 energy standards requiring minimum R-50 attics, continuous exterior insulation, and rim joist air sealing to combat severe sub-zero thermal bridging.',
    moistureAndVapourNotes: 'Extreme indoor-to-outdoor temperature deltas in -40°C winter snaps create intense inward vapor pressure. Air barriers must be 100% continuous to prevent attic frost and condensation rot.',
    rebatePrograms: [
      {
        name: 'Municipal Clean Energy Improvement Program (CEIP)',
        authority: 'Alberta Municipalities / Energy Efficiency Alberta',
        maxGrant: 'Low-interest property-assessed financing up to $50,000',
        description: 'Available in Calgary, Edmonton, Canmore, and Rocky Mountain House for comprehensive spray foam and continuous insulation envelope retrofits.',
        url: 'https://myceip.ca'
      }
    ],
    overview: 'Alberta experiences deep sub-zero winter temperatures, extreme temperature swings (Chinook events in the south), and dry continental air. Building envelopes demand high effective R-values (R-50 to R-60 attics, continuous exterior insulation) and robust air barriers to prevent moisture condensation during deep winter freezes.',
    majorCities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert', 'Medicine Hat', 'Grande Prairie', 'Airdrie', 'Fort McMurray']
  },
  {
    code: 'SK',
    slug: 'saskatchewan',
    name: 'Saskatchewan',
    capital: 'Regina',
    population: 1220000,
    climateZones: ['Zone 7A (Regina / Saskatoon)', 'Zone 7B (Northern SK)'],
    degreeDaysRange: '5,400 to 7,100 HDD (<18°C)',
    buildingCodeReference: 'The Uniform Building and Accessibility Standards Act (NBC 9.36 / NECB)',
    energyCodeNotes: 'High heating-degree days require deep attic fill (R-60) and dense-pack wall assemblies to maintain conditioned temperatures.',
    moistureAndVapourNotes: 'Monolithic air barriers (CAN/ULC S705.1 closed-cell spray foam) eliminate interstitial cavity condensation during extreme Prairie winters.',
    rebatePrograms: [
      {
        name: 'SaskEnergy / SaskPower Home Efficiency Retrofit',
        authority: 'SaskEnergy Crown Corporation',
        maxGrant: 'Up to $2,000+ CAD',
        description: 'Grants and financing for attic insulation upgrades and basement continuous insulation.',
        url: 'https://saskenergy.com'
      }
    ],
    overview: 'Saskatchewan features severe heating-degree days, sustained winter frost penetration, and intense summer sun. Insulation assemblies prioritize monolithic air barriers, closed-cell spray foam rim joist seals, and deep attic insulation depths to maintain indoor comfort across seasonal temperature swings spanning -40°C to +35°C.',
    majorCities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current', 'Yorkton', 'North Battleford']
  },
  {
    code: 'MB',
    slug: 'manitoba',
    name: 'Manitoba',
    capital: 'Winnipeg',
    population: 1450000,
    climateZones: ['Zone 7A (Winnipeg / Southern MB)', 'Zone 7B (Central MB)', 'Zone 8 (Churchill / Northern MB)'],
    degreeDaysRange: '5,600 to 8,200 HDD (<18°C)',
    buildingCodeReference: 'Manitoba Building Code (incorporating NBC 9.36 energy standards)',
    energyCodeNotes: 'Requires strict prescriptive or performance compliance under Manitoba Building Code Section 9.36 with continuous air barrier verification.',
    moistureAndVapourNotes: 'Vapour diffusion and convective air exfiltration during -40°C periods require closed-cell foam or sealed 6-mil polyethylene.',
    rebatePrograms: [
      {
        name: 'Efficiency Manitoba Home Insulation Program',
        authority: 'Efficiency Manitoba',
        maxGrant: 'Up to 100% of material costs',
        description: 'Rebates for attic insulation ($0.80/sq.ft), wall insulation ($1.50/sq.ft), and basement foundation insulation ($1.20/sq.ft).',
        url: 'https://efficiency-manitoba.ca'
      }
    ],
    overview: 'With long, bitterly cold winters and humid continental summers, Manitoba building envelopes require rigorous building science attention. Closed-cell spray foam and dense continuous insulation prevent indoor winter moisture from condensing inside cold wall cavities.',
    majorCities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie', 'Winkler', 'Selkirk']
  },
  {
    code: 'ON',
    slug: 'ontario',
    name: 'Ontario',
    capital: 'Toronto',
    population: 15800000,
    climateZones: ['Zone 5 (SW Ontario / GTA)', 'Zone 6 (Central & Eastern ON)', 'Zone 7A (Northern ON)', 'Zone 7B (Far North)'],
    degreeDaysRange: '3,400 to 6,800 HDD (<18°C)',
    buildingCodeReference: 'Ontario Building Code (OBC SB-10 / SB-12 Energy Efficiency)',
    energyCodeNotes: 'OBC Supplementary Standard SB-12 mandates prescriptive compliance packages (Packages A1 to A5) requiring continuous exterior insulation or airtight spray foam assemblies.',
    moistureAndVapourNotes: 'High summer humidity paired with cold winter cycles requires careful hygrothermal wall design to allow drying in both directions.',
    rebatePrograms: [
      {
        name: 'Enbridge Home Efficiency Rebate Plus (HER+)',
        authority: 'Enbridge Gas & NRCan',
        maxGrant: 'Up to $10,000 CAD',
        description: 'Up to $2,350 for attic upgrades to R-60, $3,800 for whole-home exterior walls, and $1,600 for basement walls.',
        url: 'https://enbridgegas.com/herplus'
      }
    ],
    overview: 'Ontario encompasses Canada’s largest construction market, spanning dense urban multi-family high-rises to rural residential projects. The Ontario Building Code SB-12 mandates stringent prescriptive and performance compliance paths with high envelope airtightness and continuous insulation.',
    majorCities: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor', 'Barrie', 'Sudbury', 'Thunder Bay', 'Kingston', 'Oshawa']
  },
  {
    code: 'QC',
    slug: 'quebec',
    name: 'Quebec',
    capital: 'Quebec City',
    population: 8900000,
    climateZones: ['Zone 6 (Montreal & St. Lawrence Valley)', 'Zone 7A (Quebec City & Saguenay)', 'Zone 7B & 8 (Nord-du-Québec)'],
    degreeDaysRange: '4,200 to 7,500 HDD (<18°C)',
    buildingCodeReference: 'Code de construction du Québec, Chapitre I – Bâtiment (CNB modifié)',
    energyCodeNotes: 'Quebec mandates strict thermal cutoffs for wood framing (R-24.5 effective wall assemblies) and high-density polyurethane spray foam.',
    moistureAndVapourNotes: 'Heavy snow loads and ice dam risks require complete attic air sealing and continuous R-50+ insulation depths.',
    rebatePrograms: [
      {
        name: 'Rénoclimat & LogisVert Grants',
        authority: 'Hydro-Québec & Transition énergétique Québec',
        maxGrant: 'Up to $4,500+ CAD',
        description: 'Generous financial incentives for basement insulation, attic upgrades, and airtightness improvements verified by blower door tests.',
        url: 'https://hydroquebec.com/residential/logisvert'
      }
    ],
    overview: 'Quebec building practices place high emphasis on air tightness and continuous thermal breaks. Spray foam and mineral wool assemblies are widely deployed in residential wood framing and multi-unit construction to protect against heavy winter snow loads and cold snaps.',
    majorCities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Levis', 'Trois-Rivieres', 'Terrebonne', 'Saint-Jean-sur-Richelieu', 'Saguenay']
  },
  {
    code: 'NB',
    slug: 'new-brunswick',
    name: 'New Brunswick',
    capital: 'Fredericton',
    population: 840000,
    climateZones: ['Zone 6 (Coastal)', 'Zone 7A (Inland / Northern NB)'],
    degreeDaysRange: '4,600 to 5,800 HDD (<18°C)',
    buildingCodeReference: 'NBC 2020 / NB Building Code Standards',
    energyCodeNotes: 'Adoption of NBC Section 9.36 with strict regional maritime envelope standards.',
    moistureAndVapourNotes: 'High relative humidity and ocean storms require robust rainscreen gaps and moisture-impermeable sub-grade insulation.',
    rebatePrograms: [
      {
        name: 'NB Power Total Home Energy Savings Program',
        authority: 'NB Power',
        maxGrant: 'Up to $5,000 CAD',
        description: 'Rebates for attic R-50 top-ups, basement wall spray foam, and major air sealing improvements.',
        url: 'https://nbpower.com'
      }
    ],
    overview: 'Atlantic coastal weather in New Brunswick brings high relative humidity, freeze-thaw cycles, and coastal wind-driven rain. Insulation systems must incorporate proper rainscreen cavities, exterior continuous foam or rockwool, and resilient vapor retarders.',
    majorCities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi', 'Bathurst', 'Edmundston']
  },
  {
    code: 'NS',
    slug: 'nova-scotia',
    name: 'Nova Scotia',
    capital: 'Halifax',
    population: 1060000,
    climateZones: ['Zone 6 (Maritime Coastal)'],
    degreeDaysRange: '3,800 to 4,600 HDD (<18°C)',
    buildingCodeReference: 'Nova Scotia Building Code Regulations (NBC 9.36)',
    energyCodeNotes: 'Nova Scotia emphasizes deep energy retrofits transitioning homes from heating oil to heat pumps supported by airtight envelopes.',
    moistureAndVapourNotes: 'Closed-cell spray foam is highly effective for heritage basements and coastal crawlspaces vulnerable to humidity.',
    rebatePrograms: [
      {
        name: 'Efficiency Nova Scotia Home Energy Assessment',
        authority: 'EfficiencyOne',
        maxGrant: 'Up to $5,000 CAD',
        description: 'Rebates for attic, basement, crawlspace, and exterior wall continuous insulation upgrades.',
        url: 'https://efficiencyns.ca'
      }
    ],
    overview: 'Nova Scotia’s maritime climate is characterized by damp winter air, frequent freeze-thaw events, and ocean moisture. High-performance air sealing and moisture-resistant closed-cell spray foam are widely utilized for basements, rim joists, and exterior walls.',
    majorCities: ['Halifax', 'Dartmouth', 'Sydney', 'Truro', 'New Glasgow', 'Glace Bay', 'Kentville']
  },
  {
    code: 'PE',
    slug: 'prince-edward-island',
    name: 'Prince Edward Island',
    capital: 'Charlottetown',
    population: 175000,
    climateZones: ['Zone 6 (Island Maritime)'],
    degreeDaysRange: '4,200 to 4,700 HDD (<18°C)',
    buildingCodeReference: 'PEI Building Codes Act (NBC 9.36)',
    energyCodeNotes: 'High heating oil costs make insulation retrofits one of the highest ROI investments on the island.',
    moistureAndVapourNotes: 'Coastal salt air and moisture require corrosion-resistant fasteners and hydrophobic insulation materials.',
    rebatePrograms: [
      {
        name: 'efficiencyPEI Home Insulation Energy Rebates',
        authority: 'Government of Prince Edward Island',
        maxGrant: 'Up to $5,500 CAD',
        description: 'Up to $1,500 for attic insulation, $2,000 for basement walls, and $2,000 for exterior walls.',
        url: 'https://princeedwardisland.ca/en/information/environment-energy-and-climate-action/home-insulation-rebates'
      }
    ],
    overview: 'As an island province with maritime wind exposure and high heating oil adoption, insulation retrofits and efficient building envelopes deliver immediate reductions in seasonal heating energy consumption.',
    majorCities: ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall', 'Montague']
  },
  {
    code: 'NL',
    slug: 'newfoundland-and-labrador',
    name: 'Newfoundland and Labrador',
    capital: "St. John's",
    population: 540000,
    climateZones: ['Zone 6 (Avalon Peninsula)', 'Zone 7A (Central & Western NL)', 'Zone 7B & 8 (Labrador)'],
    degreeDaysRange: '4,400 to 7,200 HDD (<18°C)',
    buildingCodeReference: 'Buildings Accessibility and National Building Code Compliance',
    energyCodeNotes: 'High maritime winds and extreme Labrador cold demand heavy continuous air sealing and durable framing details.',
    moistureAndVapourNotes: 'Closed-cell polyurethane spray foam provides essential continuous air/vapor barrier protection against driving sea fog.',
    rebatePrograms: [
      {
        name: 'takeCHARGE Home Energy Rebates',
        authority: 'Newfoundland Power & NL Hydro',
        maxGrant: 'Up to $2,500 CAD',
        description: 'Incentives for basement wall insulation, crawlspace sealing, and attic insulation top-ups.',
        url: 'https://takechargenl.ca'
      }
    ],
    overview: 'Facing extreme Atlantic storms, high winds, and severe winter conditions in Labrador, buildings require uncompromising continuous air barriers and moisture-impermeable insulation assemblies.',
    majorCities: ["St. John's", 'Mount Pearl', 'Corner Brook', 'Conception Bay South', 'Paradise', 'Grand Falls-Windsor', 'Gander', 'Happy Valley-Goose Bay']
  },
  {
    code: 'YT',
    slug: 'yukon',
    name: 'Yukon',
    capital: 'Whitehorse',
    population: 45000,
    climateZones: ['Zone 7B (Whitehorse)', 'Zone 8 (Northern Yukon)'],
    degreeDaysRange: '6,600 to 9,500 HDD (<18°C)',
    buildingCodeReference: 'Yukon Building Standards & Energy Performance Guidelines',
    energyCodeNotes: 'Super-insulated assemblies with R-80 attics and R-40 double-stud or continuous exterior insulation are standard.',
    moistureAndVapourNotes: 'Sub-zero temperatures for 6+ months make any air leakage catastrophic; monolithic air barriers are paramount.',
    rebatePrograms: [
      {
        name: 'Good Energy Yukon Home Rebates',
        authority: 'Government of Yukon Energy Branch',
        maxGrant: 'Up to $8,000 CAD',
        description: 'Generous northern incentives for super-insulated building envelope upgrades.',
        url: 'https://yukon.ca'
      }
    ],
    overview: 'Sub-arctic and arctic climate construction where super-insulated building envelopes (R-80+ attics, R-40+ double stud or continuous exterior foam walls) are standard practice for thermal resilience.',
    majorCities: ['Whitehorse', 'Dawson City', 'Watson Lake', 'Haines Junction']
  },
  {
    code: 'NT',
    slug: 'northwest-territories',
    name: 'Northwest Territories',
    capital: 'Yellowknife',
    population: 46000,
    climateZones: ['Zone 8 (Yellowknife & Far North)'],
    degreeDaysRange: '7,800 to 11,000 HDD (<18°C)',
    buildingCodeReference: 'Good Building Practice for Northern Facilities / NBC',
    energyCodeNotes: 'Engineered for discontinuous permafrost foundations and -45°C polar cold.',
    moistureAndVapourNotes: 'Elevated space framing requires underside monolithic spray foam insulation and zero air leakage.',
    rebatePrograms: [
      {
        name: 'Arctic Energy Alliance Rebates',
        authority: 'Arctic Energy Alliance (AEA)',
        maxGrant: 'Up to $6,000 CAD',
        description: 'Financial support for high-R envelope retrofits in northern communities.',
        url: 'https://aea.nt.ca'
      }
    ],
    overview: 'Permafrost considerations, remote supply logistics, and extreme -45°C design temperatures demand specialized spray foam and continuous insulation details designed for northern building science.',
    majorCities: ['Yellowknife', 'Hay River', 'Inuvik', 'Fort Smith']
  },
  {
    code: 'NU',
    slug: 'nunavut',
    name: 'Nunavut',
    capital: 'Iqaluit',
    population: 41000,
    climateZones: ['Zone 8 (Arctic Archipelago)'],
    degreeDaysRange: '9,000 to 13,500 HDD (<18°C)',
    buildingCodeReference: 'Northern Building Regulations & Permafrost Foundation Standards',
    energyCodeNotes: 'Extreme arctic conditions require pre-fabricated super-insulated panels (SIPs) and spray foam seals.',
    moistureAndVapourNotes: 'Impermeable air/vapor assemblies prevent condensation freezing inside insulated wall cavities.',
    rebatePrograms: [
      {
        name: 'Nunavut Climate Change Rebates',
        authority: 'Government of Nunavut',
        maxGrant: 'Northern support programs',
        description: 'Energy efficiency assistance for community and residential housing envelopes.',
        url: 'https://gov.nu.ca'
      }
    ],
    overview: 'Severe arctic maritime and tundra conditions with elevated pile foundations, requiring specialized continuous underside envelope insulation and complete vapor air-tightness.',
    majorCities: ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake']
  }
];

export const INITIAL_CITIES: CityData[] = [
  {
    id: 'toronto-on',
    slug: 'toronto',
    name: 'Toronto',
    provinceCode: 'ON',
    provinceName: 'Ontario',
    population: 2930000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 5 / 6',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Canada’s largest municipal construction and renovation market',
      'High density of Victorian/Edwardian century home retrofits and modern mid-rise infill',
      'Strict Toronto Green Standard (TGS) energy efficiency requirements'
    ],
    commonInsulationNeeds: [
      'Basement foundation wall closed-cell spray foam retrofits',
      'Attic top-ups to R-60 to eliminate winter ice damming',
      'Sound attenuation assemblies for multi-family party walls and laneway suites'
    ]
  },
  {
    id: 'montreal-qc',
    slug: 'montreal',
    name: 'Montreal',
    provinceCode: 'QC',
    provinceName: 'Quebec',
    population: 1780000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 6',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Vast triplex and multi-family residential building stock requiring acoustic & thermal upgrades',
      'Rigorous hydro-electric efficiency initiatives and harsh sub-zero winter temperatures',
      'Active commercial and heritage masonry renovation market'
    ],
    commonInsulationNeeds: [
      'Masonry exterior wall air-sealing and continuous interior insulation',
      'Flat roof crawlspace / ceiling thermal isolation',
      'Acoustic insulation between rental units and duplex floor joists'
    ]
  },
  {
    id: 'calgary-ab',
    slug: 'calgary',
    name: 'Calgary',
    provinceCode: 'AB',
    provinceName: 'Alberta',
    population: 1390000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 7A',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Rapid suburban expansion and master-planned residential communities',
      'Frequent winter Chinooks causing sudden 30°C temperature shifts and severe freeze-thaw cycles',
      'Energy-focused custom home builders and net-zero projects'
    ],
    commonInsulationNeeds: [
      'Under-slab basement thermal barriers and spray foam rim joist sealing',
      'High-performance R-60 attic blow-in insulation packages',
      'Continuous exterior wall sheathing to meet NBC Alberta 9.36 standards'
    ]
  },
  {
    id: 'ottawa-on',
    slug: 'ottawa',
    name: 'Ottawa',
    provinceCode: 'ON',
    provinceName: 'Ontario',
    population: 1020000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 6',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'National capital region with extreme winter lows and humid summer conditions',
      'Strong federal and institutional green building initiatives',
      'Substantial suburban new-home construction in Kanata, Orleans, and Barrhaven'
    ],
    commonInsulationNeeds: [
      'Closed-cell spray foam for new residential basements and additions',
      'Fire-rated mineral wool separations for attached garage ceilings',
      'Attic air-sealing and high-density blown fiberglass upgrades'
    ]
  },
  {
    id: 'edmonton-ab',
    slug: 'edmonton',
    name: 'Edmonton',
    provinceCode: 'AB',
    provinceName: 'Alberta',
    population: 1010000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 7A / 7B',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Northernmost major metropolitan city in North America',
      'Deep sustained winter freezing periods requiring robust building envelope integrity',
      'Active commercial industrial and modular building sectors'
    ],
    commonInsulationNeeds: [
      'Monolithic air-tight spray foam envelopes for industrial and residential builds',
      'Attic insulation depths exceeding 20 inches (R-60+)',
      'Frost-protected shallow foundation sub-slab insulation'
    ]
  },
  {
    id: 'vancouver-bc',
    slug: 'vancouver',
    name: 'Vancouver',
    provinceCode: 'BC',
    provinceName: 'British Columbia',
    population: 675000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 4 / 5',
    partnershipStatus: 'PARTNERED',
    partnerName: 'Performance Spray Insulation',
    partnerWebsite: '/vancouver.html',
    partnerDescription: '5.0★ Google Review insulation contractor in Vancouver, BC. Specializing in high-performance spray foam insulation, thermal barriers, ULC fire separations, acoustic insulation, and steel stud framing per the Vancouver Building By-law (VBBL). Direct dispatch: 4214B Miller St, Vancouver, BC V5N 3Z8 | (778) 779-4353.',
    marketHighlights: [
      'Strict Vancouver Building By-law (VBBL) and Step Code carbon emissions standards',
      'High rainfall climate requiring exceptional exterior rainscreen water shedding and drying potential',
      'Premium custom residential and passive house construction'
    ],
    commonInsulationNeeds: [
      'Continuous mineral wool exterior continuous insulation (ci)',
      'Acoustic insulation in high-density duplex and triplex partitions',
      'High-performance unvented cathedral ceiling spray foam applications'
    ]
  },
  {
    id: 'winnipeg-mb',
    slug: 'winnipeg',
    name: 'Winnipeg',
    provinceCode: 'MB',
    provinceName: 'Manitoba',
    population: 750000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 7A',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Challenging winter design temperatures (-35°C to -40°C windchills)',
      'High heating degree days necessitating rapid return on insulation investments',
      'Significant heritage home renovation market in River Heights and Wolseley'
    ],
    commonInsulationNeeds: [
      'Rim joist closed-cell spray foam insulation to stop cold drafts',
      'Attic vacuum removal of degraded material and R-60 re-blows',
      'Vapor barrier remediation and basement wall thermal upgrades'
    ]
  },
  {
    id: 'halifax-ns',
    slug: 'halifax',
    name: 'Halifax',
    provinceCode: 'NS',
    provinceName: 'Nova Scotia',
    population: 460000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 6',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Rapidly expanding Atlantic Canadian hub with new multi-family and subdivision builds',
      'Maritime dampness, nor’easters, and coastal wind-driven moisture challenges',
      'High transition from heating oil to heat pumps requiring tighter envelopes'
    ],
    commonInsulationNeeds: [
      'Basement and crawlspace closed-cell encapsulation',
      'Attic air-sealing and insulation upgrades to maximize heat pump efficiency',
      'Acoustic mineral wool in multi-unit condominium demising walls'
    ]
  },
  {
    id: 'quebec-city-qc',
    slug: 'quebec-city',
    name: 'Quebec City',
    provinceCode: 'QC',
    provinceName: 'Quebec',
    population: 550000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 7A',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Heavy winter snowfall and cold temperatures requiring superior attic ventilation & thermal breaks',
      'Active residential new construction in Beauport, Sainte-Foy, and Lévis',
      'High adoption of Canadian-manufactured closed-cell polyurethane foam'
    ],
    commonInsulationNeeds: [
      'Attic air barrier sealing to prevent severe ice damming',
      'Spray foam applied to foundation exterior/interior walls',
      'Fire-rated thermal barrier installations over exposed plastic foam'
    ]
  },
  {
    id: 'kelowna-bc',
    slug: 'kelowna',
    name: 'Kelowna',
    provinceCode: 'BC',
    provinceName: 'British Columbia',
    population: 155000,
    populationYear: 'Census Estimate',
    climateZone: 'Zone 5',
    partnershipStatus: 'AVAILABLE',
    marketHighlights: [
      'Okanagan Valley climate with hot, dry summers and cold winter frost',
      'High demand for high-performance luxury homes and winery building envelopes',
      'Adoption of BC Energy Step Code Step 3 and 4 requirements'
    ],
    commonInsulationNeeds: [
      'Whole-home spray foam envelope packages for year-round temperature stability',
      'Acoustic insulation in vacation rental suites and multi-family buildings',
      'Attic blown insulation top-ups for summer heat mitigation'
    ]
  }
];

export const INITIAL_DIRECTORY_BUSINESSES: DirectoryBusiness[] = [
  {
    id: 'dir-performance-spray',
    name: 'Performance Spray Insulation',
    category: 'Insulation Contractor',
    provinceCode: 'BC',
    city: 'Vancouver',
    servesResidential: true,
    servesCommercial: true,
    servesIndustrial: true,
    isVerified: true,
    isMember: true,
    description: '5.0★ Google Review insulation contractor in Vancouver, BC. Specializing in high-performance spray foam insulation, thermal barriers, ULC fire-rated partitions, acoustic soundproofing, and steel stud framing per the Vancouver Building By-law (VBBL). Located at 4214B Miller St, Vancouver, BC V5N 3Z8. Direct: (778) 779-4353.',
    website: '/vancouver.html',
    joinedYear: '2026'
  },
  {
    id: 'dir-01',
    name: 'Apex Foam & Thermal Systems',
    category: 'Spray Foam Contractor',
    provinceCode: 'ON',
    city: 'Toronto',
    servesResidential: true,
    servesCommercial: true,
    servesIndustrial: false,
    isVerified: true,
    isMember: true,
    description: 'Specializing in residential closed-cell spray foam insulation, attic conversions, and basement rim joist air sealing across the Greater Toronto Area.',
    website: 'https://example-insulation-pros.ca',
    joinedYear: '2025'
  },
  {
    id: 'dir-02',
    name: 'Prairie Shield Insulation Ltd.',
    category: 'Insulation Contractor',
    provinceCode: 'AB',
    city: 'Calgary',
    servesResidential: true,
    servesCommercial: true,
    servesIndustrial: true,
    isVerified: true,
    isMember: true,
    description: 'Full-service insulation solutions including blown-in fiberglass, fire-rated mineral wool assemblies, and complete attic insulation remediation.',
    website: 'https://example-prairie-insulation.ca',
    joinedYear: '2025'
  },
  {
    id: 'dir-03',
    name: 'Pacific Building Science Contracting',
    category: 'General Contractor',
    provinceCode: 'BC',
    city: 'Vancouver',
    servesResidential: true,
    servesCommercial: true,
    servesIndustrial: false,
    isVerified: true,
    isMember: true,
    description: 'High-performance residential builders focused on BC Energy Step Code compliance, airtight building envelopes, and exterior continuous insulation.',
    joinedYear: '2026'
  },
  {
    id: 'dir-04',
    name: 'Nordic Fire & Acoustic Assemblies',
    category: 'Insulation Contractor',
    provinceCode: 'QC',
    city: 'Montreal',
    servesResidential: false,
    servesCommercial: true,
    servesIndustrial: true,
    isVerified: true,
    isMember: false,
    description: 'Commercial fire-stopping, mineral wool high-temperature partitions, and acoustic wall dampening assemblies for multi-family developments.',
    joinedYear: '2026'
  }
];

export const INITIAL_BUSINESSES: DirectoryBusiness[] = INITIAL_DIRECTORY_BUSINESSES;

export const INITIAL_ARTICLES: ResourceArticle[] = [
  {
    id: 'art-01',
    slug: 'understanding-canadian-climate-zones-insulation',
    title: 'Understanding Canadian Climate Zones: How to Target the Right R-Value',
    category: 'Building Science',
    author: 'Editorial Team',
    authorRole: 'Building Science Desk',
    date: 'February 2026',
    readTime: '6 min read',
    excerpt: 'A comprehensive breakdown of Canadian Climate Zones 4 through 8, National Building Code 9.36 prescriptive targets, and how effective R-values prevent condensation in sub-zero weather.',
    relatedServiceId: 'spray-foam',
    contentMarkdown: `
### The Canadian Climate Spectrum
Canada spans five primary climate zones defined by heating degree days (HDD below 18°C), ranging from Zone 4 (lower coastal BC, HDD < 3,000) to Zone 8 (far northern territories, HDD > 7,000).

When designing an insulation envelope in Canada, nominal R-value (the rating printed on the product package) does not tell the whole story. **Effective R-value** accounts for thermal bridging through structural wood or steel studs, framing intersections, and rim joists.

### Why Air Sealing Outweighs Pure Thickness
In cold climates, warm indoor air holds significant water vapor. During winter, stack effect drives this warm moist air upward through unsealed ceiling penetrations (pot lights, attic hatches, plumbing stacks). As the air reaches cold roof sheathing, it hits the dew point, causing frost build-up that melts into structural rot when spring arrives.

Applying closed-cell spray foam or meticulously detailing a continuous interior vapor retarder halts this convective air flow completely.
    `
  },
  {
    id: 'art-02',
    slug: 'closed-cell-vs-open-cell-spray-foam-guide',
    title: 'Closed-Cell vs. Open-Cell Spray Foam: Making the Right Selection in Cold Climates',
    category: 'Spray Foam',
    author: 'Editorial Team',
    authorRole: 'Technical Contributor',
    date: 'January 2026',
    readTime: '8 min read',
    excerpt: 'Detailed comparison of polyurethane foam densities, vapor permeance ratings (CAN/ULC S705.1), and why closed-cell is standard for Canadian exterior foundations and rim joists.',
    relatedServiceId: 'spray-foam',
    contentMarkdown: `
### Density and Physical Characteristics
- **Closed-Cell Foam (2.0 lb/cu.ft):** Rigid, high density, with tiny closed air cells filled with an engineered blowing gas. Delivers roughly R-6.0 to R-6.8 per inch of thickness.
- **Open-Cell Foam (0.5 lb/cu.ft):** Soft, sponge-like matrix filled with atmospheric air. Delivers approximately R-3.5 to R-3.8 per inch of thickness.

### Moisture and Vapor Retarder Function
Under the National Building Code of Canada, insulation placed directly against cold exterior surfaces (like concrete basement foundation walls or rim joists) must not allow indoor moisture to pass through and condense against the cold masonry. 

Closed-cell spray foam at a thickness of 2 inches (50 mm) or greater acts as a code-compliant vapor barrier under CAN/ULC S705.1, eliminating the need for a separate plastic polyethylene sheet against the concrete.
    `
  },
  {
    id: 'art-03',
    slug: 'fire-rated-assemblies-canadian-building-code',
    title: 'Fire Separation Walls & Thermal Barriers: What Builders Must Know',
    category: 'Fire Safety',
    author: 'Editorial Team',
    authorRole: 'Code & Compliance',
    date: 'December 2025',
    readTime: '5 min read',
    excerpt: 'Navigating NBC Part 9 fire separation requirements, mineral wool non-combustibility standards (CAN/ULC S114), and prescriptive 15-minute thermal barriers for foam plastics.',
    relatedServiceId: 'fire-rated',
    contentMarkdown: `
### The 15-Minute Thermal Barrier Requirement
All foam plastic insulations (polyurethane spray foam, extruded polystyrene XPS, expanded polystyrene EPS) are combustible organic polymers. The National Building Code mandates that whenever foam plastic is used on the interior of a residential building, it must be protected by an approved thermal barrier.

The standard prescriptive thermal barrier is 12.7 mm (1/2 in) Type X or regular gypsum drywall securely fastened to framing. In unoccupied crawlspaces or attics with limited access, tested intumescent fire-protective coatings or mineral fiber barriers may be approved by the local authority having jurisdiction.

### Non-Combustible Stone Wool
For party walls between townhouse units or garage-to-living-space separations, stone wool (mineral wool) is manufactured by melting basalt rock and slag at over 1,500°C. It does not burn, will not develop toxic smoke, and serves as an integral component in fire-resistance-rated assemblies under CAN/ULC S101.
    `
  },
  {
    id: 'art-04',
    slug: 'soundproofing-assemblies-demising-walls',
    title: 'Acoustic Insulation & Noise Decoupling in Multi-Family Residential Construction',
    category: 'Acoustics',
    author: 'Editorial Team',
    authorRole: 'Acoustic Systems',
    date: 'November 2025',
    readTime: '7 min read',
    excerpt: 'How mass, cavity absorption, and mechanical decoupling work together to achieve STC 50+ sound ratings between Canadian secondary suites and condo units.',
    relatedServiceId: 'acoustic',
    contentMarkdown: `
### The Four Pillars of Acoustic Sound Control
1. **Cavity Absorption:** Installing high-density mineral wool or acoustic fiberglass batts inside stud bays absorbs reverberant airborne energy.
2. **Mass:** Using double layers of 5/8" Type X drywall adds heavy physical mass that resists sound wave vibration.
3. **Decoupling:** Installing resilient metal channels (RC-1) or staggered double stud walls breaks the mechanical connection, preventing sound vibrations from conducting from one drywall face to the other.
4. **Damping & Flanking Seals:** Applying flexible acoustic sealant along all perimeter tracks, electrical cutouts, and duct penetrations stops sound leaks.
    `
  }
];

export const MEMBERSHIP_BENEFITS = [
  {
    title: 'Verified Business Directory Profile',
    desc: 'Official inclusion in the Canada-wide SprayInsulations.ca verified contractor and supplier directory with province, city, and service category tagging.'
  },
  {
    title: 'Official Industry Member Badge',
    desc: 'Digital badge assets for your website, estimates, and marketing materials showing verified standing on Canada’s insulation resource platform.'
  },
  {
    title: 'Canada-Wide Industry Inquiries',
    desc: 'Direct visibility to homeowners, general contractors, developers, and property managers searching for qualified insulation professionals.'
  },
  {
    title: 'Platform Editorial & Feature Access',
    desc: 'Priority review on industry news, technical submissions, and member spotlight opportunities.'
  },
  {
    title: 'City Partnership Program Eligibility',
    desc: 'Exclusive eligibility to apply for sole market exclusivity in your designated Canadian metropolitan region or municipality.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    authorName: 'Marc Tremblay',
    authorRole: 'Passive House Custom Builder',
    company: 'Northern Timbercraft Ltd.',
    location: 'Calgary, AB',
    provinceCode: 'AB',
    serviceCategory: 'spray-foam',
    rating: 5,
    reviewTitle: 'Exceptional Air Tightness & Zone 7 Thermal Performance',
    reviewText: 'Achieving 0.45 ACH50 on our net-zero custom build in Calgary required absolute precision. The 2 lb closed-cell polyurethane foam application across rim joists and cathedral roof assemblies delivered an impenetrable continuous air barrier and unmatched moisture control through winter freeze-thaw cycles.',
    date: '2026-01-14',
    projectType: 'Net-Zero Residential Build (Zone 7A)',
    verified: true,
    published: true
  },
  {
    id: 'test-02',
    authorName: 'David Kowalski',
    authorRole: 'Senior Project Manager',
    company: 'Apex Urban Developments',
    location: 'Toronto, ON',
    provinceCode: 'ON',
    serviceCategory: 'fire-rated',
    rating: 5,
    reviewTitle: 'Complied Seamlessly with OBC Fire Separation Standards',
    reviewText: 'On our 36-unit multi-family project in Toronto, verifying tested CAN/ULC S101 1-hour and 2-hour party wall assemblies was critical for municipal occupancy sign-off. The mineral wool fire-rated insulation exceeded acoustic STC and thermal specs with zero inspection delays.',
    date: '2025-11-20',
    projectType: 'Multi-Family Demising Wall Fire Separation',
    verified: true,
    published: true
  },
  {
    id: 'test-03',
    authorName: 'Sarah MacLeod',
    authorRole: 'Heritage Homeowner & Renovator',
    location: 'Halifax, NS',
    provinceCode: 'NS',
    serviceCategory: 'spray-foam',
    rating: 5,
    reviewTitle: 'Completely Eliminated Basement Moisture & Drafts',
    reviewText: 'Our 1920s stone foundation in Halifax suffered from dampness and cold drafts every winter. Spray foam applied directly to the interior stone perimeter completely transformed the space into dry, conditioned storage while cutting our heating bills by over 32%.',
    date: '2025-12-05',
    projectType: 'Heritage Basement Deep Energy Retrofit',
    verified: true,
    published: true
  },
  {
    id: 'test-04',
    authorName: 'Jason Chen, P.Eng',
    authorRole: 'Commercial General Contractor',
    company: 'Pacific Apex Construction',
    location: 'Vancouver, BC',
    provinceCode: 'BC',
    serviceCategory: 'acoustic',
    rating: 5,
    reviewTitle: 'Exceeded STC 55 Acoustic Specs for Medical Suites',
    reviewText: 'For a multi-tenant medical clinic in Vancouver requiring strict patient confidentiality, combining high-density acoustic mineral wool batts with resilient decoupling channels achieved superior STC 57 ratings across interior consultation partitions.',
    date: '2026-02-02',
    projectType: 'Commercial Healthcare Acoustic Partitions',
    verified: true,
    published: true
  },
  {
    id: 'test-05',
    authorName: 'Robert Gagnon',
    authorRole: 'Industrial Facility Engineer',
    company: 'St. Laurent Logistics Corp',
    location: 'Montreal, QC',
    provinceCode: 'QC',
    serviceCategory: 'commercial',
    rating: 5,
    reviewTitle: 'Superior Monolithic Insulation for Cold Storage Facility',
    reviewText: 'Managing a 40,000 sq ft sub-zero refrigerated distribution centre in Quebec requires zero thermal bridging. The commercial spray foam envelope delivered an airtight vapor seal that prevents condensation along the roof deck and maintains steady refrigeration efficiency.',
    date: '2025-10-18',
    projectType: 'Cold Storage Industrial Thermal Envelope',
    verified: true,
    published: true
  },
  {
    id: 'test-06',
    authorName: 'Elena Rostova',
    authorRole: 'Residential General Contractor',
    company: 'Prairie Core Contracting',
    location: 'Edmonton, AB',
    provinceCode: 'AB',
    serviceCategory: 'fiberglass',
    rating: 5,
    reviewTitle: 'Flawless R-60 Attic Blow-In with Proper Baffling',
    reviewText: 'We upgraded an existing post-war bungalow attic from R-12 to R-60 using high-density blown fiberglass combined with soffit airflow baffles. The homeowner reported zero ice dams for the first time in 15 years through the coldest winter stretch.',
    date: '2026-01-29',
    projectType: 'Residential Attic Energy Retrofit (R-60)',
    verified: true,
    published: true
  }
];

export const INITIAL_NEWS_TRENDS: NewsItem[] = [
  {
    id: 'news-01',
    slug: 'nbc-2020-tiered-energy-codes-provincial-rollout',
    title: 'Tiered National Energy Codes (NBC 9.36) Accelerate Adoption Across Canadian Provinces',
    category: 'Codes & Standards',
    source: 'National Research Council Canada (NRC) / Canadian Codes Centre',
    sourceUrl: 'https://nrc.canada.ca',
    date: '2026-02-12',
    readTime: '4 min read',
    summary: 'Provincial jurisdictions are formalizing timelines to adopt higher tiers of the National Building Code Section 9.36 (Energy Efficiency). Builders are transitioning from prescriptive cavity fills to continuous exterior insulation assemblies (CI) to achieve 20% to 40% thermal performance gains required for Tier 3 and Net-Zero Ready Tier 5 compliance.',
    keyTakeaways: [
      'Tier 3 and Tier 4 energy performance mandates continuous exterior insulation to eliminate stud thermal bridging.',
      'Airtightness testing (blower door metrics below 1.5 ACH50) becomes standard for municipal occupancy permits.',
      'Spray foam and dense mineral wool continuous sheathing are emerging as standard assemblies for compliance.'
    ],
    impactArea: 'Residential Home Builders, Framers & Municipal Building Inspectors',
    tags: ['Building Codes', 'NBC 9.36', 'Tiered Codes', 'Continuous Insulation', 'Net-Zero Ready'],
    isBreaking: true
  },
  {
    id: 'news-02',
    slug: 'nrcan-canada-greener-homes-affordability-retrofit-grants',
    title: 'NRCan Updates Deep Energy Retrofit Incentives for High-Performance Insulation Upgrades',
    category: 'Rebates & Grants',
    source: 'Natural Resources Canada (NRCan) Office of Energy Efficiency',
    sourceUrl: 'https://natural-resources.canada.ca',
    date: '2026-02-04',
    readTime: '3 min read',
    summary: 'Natural Resources Canada announced expanded federal grant pathways supporting building envelope insulation upgrades. The updated framework prioritizes low-to-moderate income households and high-carbon heating zones with enhanced funding for attic insulation up to R-60, basement continuous wall insulation, and critical rim joist spray foam air sealing.',
    keyTakeaways: [
      'Attic retrofits boosting insulation from R-12/R-20 to R-60 qualify for maximum tiered rebates.',
      'Mandatory pre- and post-retrofit EnerGuide blower door assessments confirm envelope leakage reductions.',
      'Rim joist closed-cell foam sealing recognized as one of the highest cost-to-benefit energy efficiency interventions.'
    ],
    impactArea: 'Homeowners, Insulation Retrofit Contractors & EnerGuide Energy Advisors',
    tags: ['NRCan', 'Rebates', 'Grants', 'Attic Retrofits', 'Air Sealing', 'EnerGuide'],
    isBreaking: false
  },
  {
    id: 'news-03',
    slug: 'fourth-gen-hfo-spray-foam-blowing-agents-gwp-mandates',
    title: 'Canadian Transition to Ultra-Low GWP HFO Blowing Agents in Closed-Cell Spray Foam Completed',
    category: 'Building Science',
    source: 'Canadian Urethane Foam Contractors Association (CUFCA) & Environment and Climate Change Canada',
    sourceUrl: 'https://cufca.ca',
    date: '2026-01-20',
    readTime: '5 min read',
    summary: 'Under Canadian ozone and climate regulations, 100% of commercial and residential closed-cell polyurethane spray foam formulations in Canada now employ fourth-generation hydrofluoroolefin (HFO) blowing agents. These cutting-edge formulations boast a Global Warming Potential (GWP) of less than 1 while increasing long-term thermal resistance up to R-6.8 per inch.',
    keyTakeaways: [
      'HFO blowing agents offer 99.9% lower greenhouse gas footprint compared to legacy HFC chemicals.',
      'Delivers higher initial and aged R-values (~R-6.5 to R-6.8/inch) with enhanced low-temperature substrate adhesion.',
      'Full compliance with CAN/ULC S705.1 material standards across all Canadian manufacturing facilities.'
    ],
    impactArea: 'Spray Foam Applicators, Environmental Consultants & Green Building Certifiers',
    tags: ['HFO Blowing Agents', 'CAN/ULC S705.1', 'Environmental Standards', 'LEED v4.1', 'Closed-Cell SPF'],
    isBreaking: false
  },
  {
    id: 'news-04',
    slug: 'mass-timber-mineral-wool-fire-acoustic-separations',
    title: 'Mineral Wool Continuous Insulation Surges in Canadian Mass Timber & Tall Wood High-Rises',
    category: 'Industry Trends',
    source: 'Canadian Wood Council & Building Science Magazine',
    sourceUrl: 'https://cwc.ca',
    date: '2026-01-14',
    readTime: '4 min read',
    summary: 'With the National Building Code of Canada allowing encapsulated mass timber construction up to 18 storeys, demand for non-combustible stone wool exterior insulation has reached unprecedented levels. Stone wool delivers high acoustic dampening (STC 55+) alongside extreme fire endurance (>1,175°C), resolving both thermal bridging and acoustic concerns in urban multi-family towers.',
    keyTakeaways: [
      'Non-combustible continuous exterior sheathing satisfies strict CAN/ULC S114 and S101 non-combustibility criteria.',
      'High-density fibrous structure provides superior acoustic isolation between living units and external traffic corridors.',
      'Hydrophobic binder technologies prevent moisture retention in freeze-thaw maritime and prairie environments.'
    ],
    impactArea: 'Architects, Structural Engineers & Multi-Family Commercial Developers',
    tags: ['Mass Timber', 'Fire Safety', 'CAN/ULC S114', 'Acoustics', 'Mineral Wool', 'High-Rise Construction'],
    isBreaking: false
  },
  {
    id: 'news-05',
    slug: 'cold-climate-vapor-drive-hygrothermal-modeling-nrc',
    title: 'NRC Publishes Advanced Hygrothermal Research on Inward Vapor Drive in Canadian Wall Assemblies',
    category: 'Technology & Materials',
    source: 'NRC Institute for Research in Construction (NRC-IRC)',
    sourceUrl: 'https://nrc.canada.ca',
    date: '2025-12-18',
    readTime: '6 min read',
    summary: 'The National Research Council has released extensive field data evaluating smart vapor retarders versus interior closed-cell insulation in Canadian Climate Zones 6 through 8. The study highlights the critical necessity of calculating outward drying potential in summer months and preventing condensation on interior vapor barriers during extreme polar vortex cold snaps.',
    keyTakeaways: [
      'Outward summer vapor drive can cause moisture entrapment behind traditional polyethylene vapor barriers if air conditioned.',
      'Smart vapor-permeable membranes (variable perm rating 0.8 to >5.0) allow seasonal bidirectional wall drying.',
      'Closed-cell spray foam on exterior sheathing keeps stud cavities warm and permanently above the winter dew point.'
    ],
    impactArea: 'Building Envelope Consultants, Specifying Architects & Forensic Engineers',
    tags: ['Hygrothermal Modeling', 'Vapor Retarders', 'Building Science', 'NRC Research', 'Cold Climate Envelopes'],
    isBreaking: false
  }
];


