import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ExternalLink, Globe } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases = [
    {
      id: 'sebbylogistics',
      shortLabel: 'Sebby Logistics',
      client: 'Sebby Logistics',
      projectType: 'Commercial Project',
      industry: 'Kenyan Flowers & Global Airfreight',
      timeframe: 'Farm-to-Destination Platform',
      externalUrl: 'https://sebbylogistics.com/',
      urlLabel: 'Visit Sebby Logistics',
      isLiveSite: true,
      headline: 'Premium Kenyan Flowers, Direct from Farms to the World',
      summary: 'Buy premium Kenyan flowers directly from good farms at competitive prices. Sebby coordinates the entire purchase process and logistics, including airfreight to destinations worldwide. By combining local efforts, the service aims to make sourcing smoother and more affordable than traditional suppliers.',
      highlights: [
        { label: 'Farm-direct sourcing', detail: 'Premium flowers purchased directly from Kenyan farms.' },
        { label: 'Purchase coordination', detail: 'Support throughout the end-to-end buying process.' },
        { label: 'Complete logistics', detail: 'One coordinated flow from farm purchase to dispatch.' },
        { label: 'Worldwide airfreight', detail: 'Shipments arranged for destinations around the world.' },
      ],
      stack: ['Farm-direct flowers', 'Purchase coordination', 'Airfreight logistics', 'Worldwide delivery'],
      previewTitle: 'Flowers from Kenyan farms, delivered worldwide',
      previewPoints: ['Direct farm sourcing', 'Purchase & logistics coordination', 'International airfreight'],
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
      headline: 'Electrical Supplies Catalog & Trade Quotation Portal',
      summary: 'An online storefront for electrical supplies that helps commercial buyers browse products, review technical details, and request quotations through a direct WhatsApp contact flow.',
      highlights: [
        { label: 'Product catalog', detail: 'Organized browsing for electrical supplies.' },
        { label: 'Technical details', detail: 'Product information presented for trade buyers.' },
        { label: 'Quote requests', detail: 'Direct WhatsApp path for pricing and availability.' },
        { label: 'Mobile storefront', detail: 'Responsive shopping experience across devices.' },
      ],
      stack: ['E-commerce catalog', 'Product discovery', 'WhatsApp quotations', 'Technical SEO'],
      previewTitle: 'A clearer way to find electrical supplies',
      previewPoints: ['Browse product categories', 'Review product details', 'Request a trade quotation'],
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
      headline: 'Verify Learners. Protect Education Funding.',
      summary: 'A school-administration platform for verifying learners who already exist in school records. It helps identify ghost learners, including nonexistent or unverified records that can inflate enrollment figures and lead to funding being allocated for learners who are not actually present.',
      highlights: [
        { label: 'Existing learner checks', detail: 'School administrators verify learners already on record.' },
        { label: 'Ghost learner detection', detail: 'Helps flag records that do not reflect actual learners.' },
        { label: 'Enrollment validation', detail: 'Supports more reliable school enrollment information.' },
        { label: 'Funding integrity', detail: 'Helps reduce inflated counts linked to ghost learners.' },
      ],
      stack: ['School administration', 'Learner verification', 'Enrollment records', 'Funding integrity'],
      previewTitle: 'Learner records schools can verify',
      previewPoints: ['Review existing school records', 'Flag ghost learner entries', 'Support accurate enrollment'],
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
      headline: 'Comprehensive School Protection System',
      summary: 'A comprehensive disaster-management platform designed for schools in Kenya. EEMS supports school protection across all 47 counties with real-time hazard monitoring, school risk profiles, instant emergency alerts, and dedicated child-protection workflows.',
      highlights: [
        { label: 'Real-time hazard monitoring', detail: 'Tracks floods, droughts, storms, and conflicts with live updates.' },
        { label: 'School risk profiling', detail: 'Color-coded risk levels support proactive preparedness.' },
        { label: 'Instant alerts', detail: 'Notifications support rapid response to emergencies.' },
        { label: 'Child protection', detail: 'Dedicated workflows help coordinate student safeguarding.' },
      ],
      stack: ['Hazard monitoring', 'School risk profiles', 'Emergency notifications', 'Child protection workflows'],
      previewTitle: 'Helping schools prepare and respond',
      previewPoints: ['Monitor hazards across Kenya', 'Profile school-level risks', 'Coordinate alerts and protection'],
    },
  ];

  const current = cases[activeCase];

  return (
    <section id="case-studies" className="pt-8 pb-24 bg-[#140905] border-t border-[#3d2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div data-reveal="rise">
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

          {/* Interactive Case Selector Tabs */}
          <div data-reveal="rise" data-reveal-delay="2" className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1e100a] rounded-lg border border-[#3d2216]">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(idx)}
                aria-pressed={activeCase === idx}
                className={`min-w-0 max-w-full px-3 py-2 text-left text-xs font-medium leading-tight rounded-md transition-colors flex flex-wrap items-center gap-1.5 sm:px-4 ${
                  activeCase === idx
                    ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                    : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
                }`}
              >
                <span className="min-w-0 break-words">{c.shortLabel}</span>
                {c.isLiveSite && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d2b4]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div data-reveal="soft" className="rounded-2xl border border-[#3d2216] bg-[#1a0d07] overflow-hidden shadow-2xl">
          
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
