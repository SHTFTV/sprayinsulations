# SprayInsulations.ca — Canadian Insulation & Building Envelope Portal

**SprayInsulations.ca** is a digital platform and building science directory designed for the Canadian insulation industry. It connects property owners, general contractors, architects, and energy advisors with verified insulation professionals while providing code-compliant technical guidance across Canada's climate zones.

---

## 🚀 Key Features

### 1. Interactive Insulation Material Estimator (`src/components/InsulationEstimator.tsx`)
- **Square Footage & Cavity Inputs**: Real-time calculation based on surface area ($ft^2$ / $m^2$) and nominal depth ($0.5"$ to $20"$).
- **Multi-Material Calculations**:
  - 2.0 lb Closed-Cell Spray Polyurethane Foam (HFO) — R-6.5/inch
  - 0.5 lb Open-Cell Spray Polyurethane Foam — R-3.7/inch
  - Blown-In Virgin Fiberglass — R-3.4/inch
  - Mineral Stone Wool Batts & Boards — R-4.2/inch
  - Dense-Pack Blown Cellulose — R-3.7/inch
  - Extruded Polystyrene (XPS) Rigid Panels — R-5.0/inch
- **Output Ranges**: Gross board footage ($bd\ ft$) including safety/overspray waste, total volume ($cu\ ft$ / $m^3$), and estimated container counts (55-gallon drum sets, 30-lb bags, bundles, or 4x8 ft sheets).
- **Envelope Compliance Checks**: Evaluates minimum depths for CAN/ULC S705.1 air barrier and NBC 9.25 Class II vapor barrier (<60 ng/Pa·s·m²) compliance.

### 2. Canadian Contractor Directory (`src/components/ContractorDirectory.tsx`)
- Searchable directory of verified insulation contractors across Canadian provinces and territories (ON, BC, AB, QC, MB, SK, NS, NB, NL, PE, YT, NT, NU).
- Filter by insulation service specialization (Spray Foam, Fire-Rated, Blown-In, Acoustic, Thermal Remediation, Commercial).
- Verified badge indicators, CUFCA / Caliber certification tags, contact links, and location routing.

### 3. Industry Building Code FAQ & Authority Engine (`src/components/IndustryFAQ.tsx`)
- Comprehensive Q&A covering:
  - **NBC 9.36**: Prescriptive and performance compliance across Climate Zones 4–8.
  - **CAN/ULC S124 & NBC 9.10.17.10**: 15-minute thermal barrier (1/2" drywall / intumescent coating) requirements over foamed plastics.
  - **CAN/ULC S705.1 / S705.2**: Medium-density closed-cell material specs and certified applicator logging.
  - **NBC 9.25**: Vapor barrier permeance standards and air barrier continuity.
  - **Step Codes & Net-Zero**: BC Energy Step Code (Steps 1–5), Toronto Green Standard v4, and TEDI/TEUI metrics.
- Search filter, category switcher, code citation copy tools, and direct inquiry link.

### 4. Search Engine Optimization (SEO) & Schema.org JSON-LD (`src/utils/faqHelper.ts`)
- **`generateFaqSchema`**: Converts question/answer data into Schema.org `FAQPage` structured JSON-LD.
- **`generateServiceSchema`**: Creates Schema.org `Service` and `LocalBusiness` structures.
- **`generateReviewSchema`**: Injects Schema.org `Review` and `AggregateRating` data for verified testimonials.
- Dynamic `<head>` tag injection and cleanup across service and technical detail pages.

### 5. Services Hub & Technical Assembly Specs (`src/components/ServicesHubView.tsx`, `src/components/ServiceDetailView.tsx`)
- Specialized landing pages for all major insulation types:
  - Medium-Density Closed-Cell Spray Foam
  - 15-Minute Thermal Barrier & Fire-Rated Coatings
  - Spun Fiberglass Batts & Blown-In Attic Systems
  - Soundproofing & Acoustic Stone Wool
  - Old Insulation Removal & Mold Remediation
  - Commercial & Industrial Envelope Assemblies

### 6. Educational Knowledge Hub & Guest Post Submission (`src/components/ResourcesView.tsx`, `src/components/GuestPostView.tsx`)
- Technical building science articles, case studies, and provincial rebate navigation (Canada Greener Homes, Enbridge HER+, CleanBC).
- Guest posting submission workflow with standard $10 editorial review processing.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Structured Data**: Schema.org JSON-LD (FAQPage, Service, Review, AggregateRating)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── ContractorDirectory.tsx      # Canadian contractor directory & city filters
│   ├── ContractorDetailModal.tsx    # Contractor profile modal with review submissions
│   ├── FAQSection.tsx               # General dynamic FAQ accordion with schema injection
│   ├── GetHelpModal.tsx             # Contractor quote & technical consultation modal
│   ├── GuestPostView.tsx            # Guest article contribution portal ($10 submission)
│   ├── Header.tsx                   # Top navigation bar, search, and province picker
│   ├── IndustryFAQ.tsx              # Canadian building code & regulatory Q&A module
│   ├── InsulationEstimator.tsx      # Insulation material, depth & volume calculator
│   ├── NewsSection.tsx              # Building science updates & Canadian code changes
│   ├── ResourcesView.tsx            # Educational articles & building science hub
│   ├── ServiceDetailView.tsx        # Individual service technical specification view
│   ├── ServicesHubView.tsx          # Central service categories & estimator portal
│   ├── SubmitPostModal.tsx          # Guest article publishing modal
│   └── Testimonials.tsx             # Verified client reviews & aggregate rating schema
├── data/
│   └── initialData.ts               # Core database: services, contractors, articles, cities
├── utils/
│   └── faqHelper.ts                 # Schema.org JSON-LD generation utilities
├── types.ts                         # Shared TypeScript interfaces & types
├── App.tsx                          # Main application routing and state management
└── main.tsx                         # React entry point
```

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+ (or Node 20 LTS recommended)
- npm or yarn

### Installation
```bash
# Install project dependencies
npm install
```

### Running Development Server
```bash
# Start local Vite development server on port 3000
npm run dev
```

### Production Build
```bash
# Build optimized production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

### Linting & Type Checking
```bash
# Run TypeScript compilation check
npm run lint
```

---

## 🇨🇦 Canadian Code Compliance References

| Standard / Code | Title & Authority | Key Application |
|---|---|---|
| **NBC Part 9.36** | Energy Efficiency in Housing & Small Buildings | Minimum nominal and effective R-values by Heating Degree Day (HDD) Climate Zones 4–8 |
| **CAN/ULC S705.1** | Standard for Thermal Insulation — Spray Applied Rigid Polyurethane Foam | Manufacturer material formulation, density (30–35 kg/m³), and thermal stability |
| **CAN/ULC S705.2** | Standard for Installation of Spray Polyurethane Foam | On-site daily QA logging, pass thickness limits, and certified applicator licensing |
| **CAN/ULC S124** | Standard Test for Protective Coverings for Foamed Plastics | 15-minute thermal barrier test (1/2" Type X/regular gypsum board, intumescent coatings) |
| **NBC 9.25.3 / 9.25.4** | Air Barrier Systems & Vapour Barriers | Air permeance < 0.02 L/(s·m²) and water vapor permeance < 60 ng/(Pa·s·m²) |
| **BC Energy Step Code** | British Columbia Performance Energy Framework | Steps 1–5 whole-building airtightness (ACH50) and Thermal Energy Demand Intensity (TEDI) |
| **Toronto Green Standard (TGS v4)** | City of Toronto Sustainable Design Performance | Tier 1–3 greenhouse gas intensity (GHGI) and continuous exterior insulation mandates |

---

## 📄 License & Ownership
Copyright © 2026 **SprayInsulations.ca**. All rights reserved. Designed for Canadian building envelope professionals, contractors, and homeowners.
