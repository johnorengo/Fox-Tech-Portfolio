import React, { useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, ExternalLink, Globe } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number>(0);
  const selectorRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      id: 'sebbylogistics',
      shortLabel: 'Sebby Logistics',
      client: 'Sebby Logistics Ltd',
      projectType: 'Commercial Project',
      industry: 'Kenyan Flowers & Global Airfreight',
      timeframe: 'Completed & Live Website',
      externalUrl: 'https://sebbylogistics.com/',
      urlLabel: 'Visit Sebby Logistics',
      isLiveSite: true,
      headline: 'Premium Kenyan Flowers, Direct from Farms to the World',
      summary: 'Fox Tech built the completed Sebby Logistics Ltd website to connect international flower buyers with Kenyan growers and its JKIA dispatch team. The responsive site presents farm-direct sourcing, quality assurance, procurement management and worldwide cold-chain airfreight in one clear journey. Wholesalers, distributors, florists, supermarket chains and importers can explore the service, understand the farm network and submit a detailed sourcing and freight enquiry.',
      highlights: [
        { label: 'Complete service story', detail: 'Dedicated sections explain farm selection, purchasing, quality control, documentation and international airfreight from JKIA.' },
        { label: 'Kenya-wide farm network', detail: 'A growing-region overview introduces 10 sourcing areas, including Naivasha, Nakuru, Nanyuki & Timau, Mount Elgon and Kajiado.' },
        { label: 'Detailed quotation journey', detail: 'Buyers specify destination country and airport, flower varieties, quantity, order frequency and target arrival date.' },
        { label: 'Direct contact routes', detail: 'WhatsApp, phone and dedicated sales, support and invoice email contacts connect buyers with the right team.' },
        { label: 'Responsive brand experience', detail: 'Full-width flower photography, clear navigation and a mobile-friendly layout carry the brand across screen sizes.' },
        { label: 'Search-ready business presence', detail: 'Service and organization structured data, social sharing metadata and location details describe the business for search engines.' },
      ],
      stack: ['Responsive website', 'Detailed quote enquiries', 'WhatsApp contact', 'Structured data & SEO'],
      previewTitle: 'From Kenyan growers to a worldwide buyer enquiry',
      previewPoints: ['Explore sourcing & airfreight services', 'Discover 10 Kenyan growing areas', 'Specify flowers, destination & arrival', 'Contact the JKIA dispatch team'],
    },
    {
      id: 'citymart',
      shortLabel: 'Citymart Electricals',
      client: 'Citymart Electricals',
      projectType: 'Commercial Project',
      industry: 'Electrical Supplies & E-Commerce',
      timeframe: 'Live Commercial Storefront',
      externalUrl: 'https://citymartelectricals.com/',
      urlLabel: 'Visit Citymart Electricals',
      isLiveSite: true,
      headline: "From Lighting Inspiration to a Project-Ready Quotation",
      summary: "A digital showroom and product-discovery website for City Mart Electricals & General Hardware in Kisumu. Homeowners, electricians, contractors, architects, interior designers and institutions can explore lighting and power supplies, compare product information and see installation examples before contacting the team. The experience connects a broad catalog with practical service guidance, product-specific quotation requests and direct WhatsApp enquiries, helping customers move from an initial idea to a clearer discussion about fittings, quantities and project requirements.",
      highlights: [
        {"label": "Lighting & electrical catalog", "detail": "Search and browse chandeliers, ceiling lights, LED bulbs, switches, sockets, outdoor fittings, solar products and electrical accessories."},
        {"label": "Product-level discovery", "detail": "Individual product pages bring together product information, related items and a direct request-for-quotation action."},
        {"label": "Solutions for different projects", "detail": "Service pages explain residential, commercial and institutional lighting, electrical supply, design consultation and bulk project supply."},
        {"label": "Installation inspiration", "detail": "A project gallery shows lighting applications across homes, commercial buildings and hospitality spaces, with category-based browsing."},
        {"label": "Enquiries with context", "detail": "Product quotation links, WhatsApp contact and an enquiry form give customers several ways to discuss pricing and project needs."},
        {"label": "Local business, wider reach", "detail": "Store location, contact details, customer feedback and nationwide supply information connect the online showroom to the Kisumu business."},
      ],
      stack: ["Searchable product catalog", "Product quotation journeys", "Installation gallery", "Service & contact pages"],
      previewTitle: "Explore the fitting. See the possibilities. Start the enquiry.",
      previewPoints: ["Browse lighting & power categories", "Review products & related fittings", "Explore installation examples", "Request pricing or project advice"],

    },
    {
      id: 'learner-verification',
      shortLabel: 'School Data Verification System',
      client: 'School Data Verification System',
      projectType: 'Government Project',
      industry: 'School Administration & Learner Verification',
      timeframe: 'Government Education Platform',
      externalUrl: 'https://dataverifications.education.go.ke/',
      urlLabel: 'Visit Verification Portal',
      isLiveSite: true,
      headline: "Reliable Learner Records, from Schools to Education Oversight",
      summary: "A Ministry of Education platform supporting the verification of learners already held in school records. Its purpose is to help schools check that recorded enrolment reflects actual learners and address unverified or nonexistent entries that can distort education planning and funding. The public gateway separates Heads of Institution, Sub-County Directors and County Directors, giving school-level users and education oversight officers distinct entry points. Schools sign in with their UIC code, while director accounts use official email credentials.",
      highlights: [
        {"label": "School-level record verification", "detail": "Focuses on checking existing learner records against actual enrolment, supporting more dependable school data."},
        {"label": "Three clear user pathways", "detail": "A role-selection gateway directs institution heads, sub-county directors and county directors to their respective sign-in pages."},
        {"label": "Institution-linked access", "detail": "The school login requests a UIC code and password, linking the entry journey to the institution using the system."},
        {"label": "Education oversight access", "detail": "Separate director sign-in pages use official email addresses, reflecting the sub-county and county oversight structure."},
        {"label": "Enrolment & funding integrity", "detail": "Verifying recorded learners helps address ghost entries and provides a stronger basis for education resource decisions."},
        {"label": "Clear, responsive entry experience", "detail": "Ministry branding, role-selection validation and layouts for different screen sizes make the public access journey easier to follow."},
      ],
      stack: ["Learner record verification", "Institution & director roles", "UIC-based school login", "Enrolment data quality"],
      previewTitle: "A clearer path from school records to accountable oversight",
      previewPoints: ["Choose institution or director access", "Sign in with role-specific credentials", "Verify learners already on record", "Support dependable enrolment figures"],

    },
    {
      id: 'eems',
      shortLabel: 'Education Emergency Management System',
      client: 'Education Emergency Management System',
      projectType: 'Government Project',
      industry: 'School Safety & Emergency Management',
      timeframe: 'Government Project in Kenya',
      externalUrl: 'https://kplp.education.go.ke/',
      urlLabel: 'Visit EEMS Platform',
      isLiveSite: true,
      headline: "School Safety from Early Warning to Coordinated Response",
      summary: "The Education Emergency Management System brings school safety monitoring, preparedness and response into one platform for Kenya. It connects Heads of Institution, Sub-County Directors, County Directors and Ministry headquarters administrators around school risk, hazard alerts and incident follow-up. The platform presents nationwide protection across all 47 counties, combining hazard information and school profiles with reporting, child-protection workflows, preparedness assessments and official guidance. Its focus is practical coordination: helping education teams understand exposure, identify priorities and organize action when learning is disrupted.",
      highlights: [
        {"label": "Hazards & school exposure", "detail": "Monitoring covers flood, drought, storm and fire risks, with alerts and school exposure information to guide safety priorities."},
        {"label": "Risk profiles & preparedness", "detail": "Color-coded school risk levels and preparedness surveys help teams review vulnerability and readiness before emergencies escalate."},
        {"label": "Incident reporting & review", "detail": "School incident reports feed oversight workflows, including sub-county verification, rejection and follow-up views."},
        {"label": "Multi-level coordination", "detail": "Role-specific workspaces support school leadership, sub-county and county directors, and Ministry headquarters administration."},
        {"label": "Safeguarding & continuity", "detail": "Child-protection workflows and Education in Emergency checklists bring student welfare and learning-continuity reporting into the platform."},
        {"label": "Guidance & operational insight", "detail": "Downloadable policies, preparedness and response resources sit alongside analytics for school risk and incident status."},
      ],
      stack: ["Hazard & school risk monitoring", "Incident review workflows", "Preparedness assessments", "Safeguarding & policy resources"],
      previewTitle: "Understand the risk. Prepare schools. Coordinate the response.",
      previewPoints: ["Monitor hazards & school exposure", "Assess readiness & risk levels", "Report incidents for review", "Coordinate protection across education levels"],

    },
  ];

  const current = cases[activeCase];

  const selectCase = (index: number) => {
    if (index === activeCase) return;
    setActiveCase(index);
    requestAnimationFrame(() => {
      const details = detailsRef.current;
      const selector = selectorRef.current;
      if (!details || !selector) return;
      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 144;
      const top = window.scrollY + details.getBoundingClientRect().top
        - headerHeight - selector.getBoundingClientRect().height - 24;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    });
  };

  return (
    <section id="case-studies" className="pt-4 pb-6 bg-[#140905] border-t border-[#3d2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div data-reveal="rise" className="min-w-0 md:flex-1">
            <div className="text-xs font-semibold text-[#ff6a00] tracking-wide uppercase mb-2">
              Commercial & Government Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Proven Systems in Action
            </h2>
            <p className="text-[#d6c7be] text-sm sm:text-base mt-2 max-w-xl">
              Explore four live platforms across flower logistics, commerce, learner verification, and school protection.
            </p>
          </div>
        </div>

          {/* Interactive Case Selector Tabs */}
          <div ref={selectorRef} role="group" aria-label="Choose a case study" className="sticky top-[calc(var(--header-height,144px)+8px)] z-30 mb-4 grid w-full min-w-0 grid-flow-col grid-cols-2 grid-rows-2 gap-1.5 p-1 bg-[#1e100a] rounded-lg border border-[#3d2216] shadow-lg">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => selectCase(idx)}
                aria-pressed={activeCase === idx}
                className={`min-w-0 max-w-full px-3 py-2.5 text-left text-xs font-medium leading-snug rounded-md transition-colors flex items-center gap-1.5 sm:px-4 ${
                  activeCase === idx
                    ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                    : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
                }`}
              >
                <span className="min-w-0 break-words">{c.shortLabel}</span>
                {c.isLiveSite && (
                  <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#00d2b4]" />
                )}
              </button>
            ))}
          </div>

        {/* Featured Case Study Card */}
        <div ref={detailsRef} className="rounded-2xl border border-[#3d2216] bg-[#1a0d07] overflow-hidden shadow-2xl">
          
          {/* Top Metadata Header with Clean Unboxed Typography (NO PILLS) */}
          <div className="flex flex-col items-start gap-3 border-b border-[#3d2216] px-4 py-4 text-xs text-[#d6c7be] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8 sm:py-5">
            <div className="flex min-w-0 flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
              <span className="max-w-full break-words text-white font-semibold">{current.client}</span>
              {current.projectType === 'Government Project' && (
                <span className="inline-flex max-w-full whitespace-normal rounded-full border border-[#00d2b4]/40 bg-[#00d2b4]/15 px-2.5 py-1 text-[10px] font-semibold uppercase leading-tight tracking-wide text-[#7af5df]">
                  Government Project
                </span>
              )}
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="max-w-full break-words">{current.industry}</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="max-w-full break-words font-mono font-medium text-[#7af5df]">{current.timeframe}</span>
            </div>

            {/* Direct Project External Link */}
            {current.externalUrl && (
              <a
                href={current.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-full items-center gap-1.5 text-xs font-semibold text-[#ff6a00] transition-colors hover:text-[#00d2b4]"
              >
                <span>{current.urlLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="p-4 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Story & Metrics */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4 [text-wrap:balance]">
                  {current.headline}
                </h3>
                
                <p className="text-[#e5d8cf] text-sm sm:text-base leading-relaxed mb-8">
                  {current.summary}
                </p>

                <div className="mb-8 grid grid-cols-1 gap-3 rounded-xl border border-[#3d2216] bg-[#140905] p-4 sm:grid-cols-2 sm:p-5">
                  <div className="col-span-full mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a89587]">Project Highlights</div>
                  {current.highlights.map((item, index) => (
                    <div key={item.label} className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] p-3">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${index % 2 === 0 ? 'bg-[#ff6a00]' : 'bg-[#00d2b4]'}`} />
                      <div>
                        <div className="text-xs font-semibold text-white">{item.label}</div>
                        <div className="mt-1 text-[11px] leading-relaxed text-[#a89587]">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Unboxed Tags */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#d6c7be] mb-8">
                  <span className="text-white font-medium mr-1">Systems:</span>
                  {current.stack.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span className="font-mono text-[11px] text-[#fdf8f5]">{item}</span>
                      {idx < current.stack.length - 1 && <span className="text-[#6b422e]">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex flex-col gap-4 border-t border-[#3d2216] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a89587]">Project Type</div>
                    <div className={`mt-1 text-sm font-semibold ${current.projectType === 'Government Project' ? 'text-[#5eead4]' : 'text-white'}`}>
                      {current.projectType}
                    </div>
                  </div>
                  {current.externalUrl && (
                    <a
                      href={current.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#f25c05] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#ff6a00]/20 transition hover:from-[#ff7a1a] hover:to-[#ff6a00]"
                    >
                      <span>{current.urlLabel}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

              </div>

              <div className="lg:col-span-5">
                <div className="group relative isolate flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#251329] via-[#101722] to-[#0a1717] p-6 shadow-xl sm:p-7">
                  <div className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full bg-[#ff6a00]/20 blur-3xl transition duration-500 group-hover:scale-125" />
                  <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[#00d2b4]/15 blur-3xl" />
                  <div className="relative flex h-full flex-1 flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a89587]">Platform Overview</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Live
                      </span>
                    </div>

                    <div className="my-auto py-8">
                      {current.projectType === 'Government Project' && (
                        <div className="mb-3 inline-flex max-w-full whitespace-normal rounded-md border border-[#00d2b4]/40 bg-[#00d2b4]/15 px-2.5 py-1 text-[10px] font-bold uppercase leading-tight tracking-wide text-[#7af5df] sm:text-[9px] sm:tracking-[0.16em]">
                          Government Project
                        </div>
                      )}
                      <h4 className="max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">{current.previewTitle}</h4>
                      <div className="mt-6 space-y-3">
                        {current.previewPoints.map((point, index) => (
                          <div key={point} className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-black/20 px-3.5 py-3">
                            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${index % 2 === 0 ? 'bg-[#ff6a00]/15 text-[#ff9a57]' : 'bg-[#00d2b4]/15 text-[#5eead4]'}`}>
                              <CheckCircle2 className="h-4 w-4" />
                            </span>
                            <span className="text-xs font-medium leading-snug text-white/85">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-[10px] text-white/55">
                      <Globe className="h-3.5 w-3.5 shrink-0 text-[#00d2b4]" />
                      <span className="truncate font-mono">{current.externalUrl?.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>


      </div>
    </section>
  );
};
