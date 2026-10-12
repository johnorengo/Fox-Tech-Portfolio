import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';
import logisticsImage from '../assets/images/case_study_logistics_1791693854957.jpg';

export const CaseStudies: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases = [
    {
      id: 'sebbylogistics',
      client: 'Sebby Logistics',
      industry: 'Freight Forwarding & Supply Chain Logistics',
      timeframe: 'Proposed Production Architecture',
      externalUrl: null,
      urlLabel: 'Explore Proposed Design',
      isLiveSite: false,
      headline: 'Modern Digital Freight Platform & Real-Time Consignment Tracking Interface',
      summary: 'A bespoke digital freight operations platform engineered for Sebby Logistics. Connects shippers, dispatchers, and carriers with instantaneous consignment status tracking, automated freight rate calculations, and responsive mobile-first workflows designed for East Africa and regional transit corridors.',
      metrics: [
        { label: 'Tracking Latency', value: '< 1.2s', detail: 'Instant milestone lookups' },
        { label: 'Consignment Visibility', value: '100%', detail: 'End-to-end shipment audit trail' },
        { label: 'Dispatch Speed', value: '3.4x', detail: 'Automated booking pipelines' },
        { label: 'Interface Design', value: 'Figma ➔ Code', detail: 'Zero style drift implementation' }
      ],
      stack: ['Interactive Tracking UI', 'React & Next.js', 'Design Token Architecture', 'Tailwind CSS', 'Fleet Routing APIs'],
      quote: {
        text: 'The proposed design provides Sebby Logistics with an international-grade digital presence—combining rapid load times with effortless tracking for our cargo clients.',
        author: 'Sebby Logistics Operations',
        role: 'Proposed Client Architecture'
      },
      image: logisticsImage
    },
    {
      id: 'citymart',
      client: 'Citymart Electricals',
      industry: 'Commercial Electrical Supplies & E-Commerce',
      timeframe: 'Live Production Platform',
      externalUrl: 'https://citymartelectricals.com',
      urlLabel: 'Visit citymartelectricals.com',
      isLiveSite: true,
      headline: 'High-Performance E-Commerce Catalog & Automated Trade Quotation Portal',
      summary: 'Engineered a high-speed digital storefront and wholesale product catalog for Citymart Electricals (citymartelectricals.com). Eliminates customer friction with sub-second categorized SKU browsing, clear technical specifications, and a direct WhatsApp quotation and checkout pipeline.',
      metrics: [
        { label: 'Mobile Page Speed', value: '1.1s', detail: 'Accelerated time-to-interactive' },
        { label: 'Product Discovery', value: '+85%', detail: 'Instant categorized SKU search' },
        { label: 'Catalog Capacity', value: '2,500+ SKUs', detail: 'Structured product schema' },
        { label: 'Storefront Uptime', value: '99.98%', detail: 'Managed platform availability' }
      ],
      stack: ['Live Commercial Storefront', 'Categorized SKU Engine', 'WhatsApp Checkout Bridge', 'Technical SEO', 'Cloud Edge Caching'],
      quote: {
        text: 'Fox Tech Solutions built citymartelectricals.com into a clean, intuitive storefront that allows our electrical contractors and commercial clients to find equipment and request quotes effortlessly.',
        author: 'Citymart Management',
        role: 'Commercial Electrical Retail & Wholesale'
      },
      image: null
    }
  ];

  const educationPlatforms = [
    {
      number: '01',
      name: 'Education Document Verification',
      category: 'EDUCATION  /  VERIFICATION',
      description: 'An online platform for education document verification.',
      domain: 'dataverifications.education.go.ke',
      url: 'https://dataverifications.education.go.ke/',
      Icon: ShieldCheck,
      theme: 'from-[#ff6a00]/25 via-[#7c2d12]/10 to-[#1a0d07]',
      glow: 'bg-[#ff6a00]/20',
      iconColor: 'text-[#ff9a57]',
    },
    {
      number: '02',
      name: 'Kenya Primary Learning Portal',
      category: 'EDUCATION  /  DIGITAL LEARNING',
      description: 'A digital learning portal for primary education.',
      domain: 'kplp.education.go.ke',
      url: 'https://kplp.education.go.ke/',
      Icon: GraduationCap,
      theme: 'from-[#00d2b4]/25 via-[#155e75]/10 to-[#071a1a]',
      glow: 'bg-[#00d2b4]/20',
      iconColor: 'text-[#5eead4]',
    },
  ];

  const current = cases[activeCase];

  return (
    <section id="case-studies" className="py-24 bg-[#140905] border-t border-[#3d2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-[#ff6a00] tracking-wide uppercase mb-2">
              Featured Client Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Proven Systems in Action
            </h2>
            <p className="text-[#d6c7be] text-sm sm:text-base mt-2 max-w-xl">
              Real-world digital platforms designed and engineered by Fox Tech Solutions for logistics, trade, and commercial enterprises.
            </p>
          </div>

          {/* Interactive Case Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1e100a] rounded-lg border border-[#3d2216]">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(idx)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  activeCase === idx
                    ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                    : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
                }`}
              >
                <span>{c.client}</span>
                {c.isLiveSite && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d2b4]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="rounded-2xl border border-[#3d2216] bg-[#1a0d07] overflow-hidden shadow-2xl">
          
          {/* Top Metadata Header with Clean Unboxed Typography (NO PILLS) */}
          <div className="px-6 sm:px-8 py-5 border-b border-[#3d2216] flex flex-wrap items-center justify-between gap-4 text-xs text-[#d6c7be]">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">{current.client}</span>
              <span aria-hidden="true">·</span>
              <span>{current.industry}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#00d2b4] font-mono font-medium">{current.timeframe}</span>
            </div>

            {/* Direct Project External Link */}
            {current.externalUrl && (
              <a
                href={current.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6a00] hover:text-[#00d2b4] transition-colors"
              >
                <span>{current.urlLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Story & Metrics */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4 [text-wrap:balance]">
                  {current.headline}
                </h3>
                
                <p className="text-[#e5d8cf] text-sm sm:text-base leading-relaxed mb-8">
                  {current.summary}
                </p>

                {/* Quantitative Metric Grid with Tabular Numerals */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 p-5 rounded-xl bg-[#140905] border border-[#3d2216]">
                  {current.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-xs text-[#d6c7be] font-medium">
                        {m.label}
                      </div>
                      <div className={`text-2xl sm:text-3xl font-bold font-mono tabular-nums tracking-tight mt-1 ${
                        mIdx % 2 === 0 ? 'text-[#ff6a00]' : 'text-[#00d2b4]'
                      }`}>
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#a89587] mt-1">
                        {m.detail}
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

                {/* Link Action & Attributable Quote */}
                <div className="pt-6 border-t border-[#3d2216] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <blockquote className="text-xs sm:text-sm text-[#e5d8cf] italic leading-relaxed">
                      "{current.quote.text}"
                    </blockquote>
                    <div className="mt-2 text-xs font-medium text-white">
                      {current.quote.author} <span className="text-[#d6c7be] font-normal">· {current.quote.role}</span>
                    </div>
                  </div>

                  {current.externalUrl && (
                    <a
                      href={current.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#f25c05] hover:from-[#ff7a1a] hover:to-[#ff6a00] transition-all shadow-md shadow-[#ff6a00]/20"
                    >
                      <span>{current.urlLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: Visual Preview Card */}
              <div className="lg:col-span-5">
                {current.image && !imageError ? (
                  <div className="rounded-xl overflow-hidden border border-[#3d2216] bg-[#140905] shadow-xl group">
                    <img 
                      src={current.image} 
                      alt={current.headline} 
                      className="w-full h-72 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                    <div className="p-3 bg-[#140905] border-t border-[#3d2216] text-[11px] text-[#d6c7be] flex items-center justify-between font-mono">
                      <span>Sebby Logistics Freight UI</span>
                      <span className="text-[#00d2b4]">Concept preview</span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-[#3d2216] bg-[#140905] p-6 flex flex-col justify-between h-full min-h-[340px]">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-[#00d2b4] uppercase tracking-wider">
                          Live Client Storefront
                        </span>
                        <span className="text-[11px] font-mono text-[#ff6a00]">citymartelectricals.com</span>
                      </div>
                      
                      <div className="text-lg font-bold text-white mb-4">
                        Comprehensive Electrical Hardware Engine
                      </div>
                      
                      <div className="space-y-3 text-xs sm:text-sm text-[#fdf8f5]">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0 mt-0.5" />
                          <span>Structured technical product catalog with over 2,500 active commercial SKUs.</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00d2b4] shrink-0 mt-0.5" />
                          <span>Direct instant WhatsApp order inquiry and automated contractor quotation pipeline.</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0 mt-0.5" />
                          <span>Fast mobile loading speeds and robust search indexing for contractor equipment.</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#3d2216] mt-6 flex items-center justify-between text-xs">
                      <span className="text-[#d6c7be]">Status: Fully Deployed & Live</span>
                      <a 
                        href="https://citymartelectricals.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#ff6a00] font-semibold hover:text-[#00d2b4] transition-colors inline-flex items-center gap-1"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        <div className="mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#00d2b4]">
                Live Education Platforms
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Built for access. Designed to move learning forward.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#bba99e]">
              Explore these digital platforms for education verification and primary learning.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {educationPlatforms.map(({ number, name, category, description, domain, url, Icon, theme, glow, iconColor }) => (
              <article
                key={domain}
                className={`group relative isolate min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${theme} p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8`}
              >
                <div className={`pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full ${glow} blur-3xl transition duration-500 group-hover:scale-125`} />
                <div className="pointer-events-none absolute -right-10 bottom-[-95px] h-64 w-64 rounded-full border border-white/10 transition duration-500 group-hover:scale-110" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`grid h-12 w-12 place-items-center rounded-xl border border-white/15 bg-black/20 ${iconColor}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <span className="font-mono text-4xl font-bold tracking-tight text-white/20">{number}</span>
                  </div>

                  <div className="mt-7 text-[10px] font-semibold tracking-[0.18em] text-white/60">{category}</div>
                  <h4 className="mt-2 max-w-lg text-2xl font-bold leading-tight text-white sm:text-[1.7rem]">{name}</h4>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">{description}</p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div className="flex min-w-0 items-center gap-2 text-xs text-white/65">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                      <span className="truncate font-mono">{domain}</span>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/20"
                    >
                      Visit platform
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
