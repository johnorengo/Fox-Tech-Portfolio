import React, { useState } from 'react';
import { Palette, Code2, TrendingUp, LifeBuoy, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'development' | 'marketing' | 'support'>('all');

  const services = [
    {
      id: 'design',
      number: '01',
      title: 'Branding & UI/UX Design Systems',
      category: 'design',
      summary: 'Crafting calm, cohesive digital experiences with clear visual hierarchy, frictionless user journeys, and robust design token libraries.',
      icon: Palette,
      accentColor: '#ff6a00',
      tags: ['Design Systems & Tokens', 'Interactive Figma Prototypes', 'Brand Identity & Guidelines', 'User Research & Journey Mapping', 'UX Friction Elimination'],
      deliverables: [
        'Comprehensive multi-brand design system with Figma token export',
        'High-fidelity interactive prototypes tested with real target users',
        'Bespoke brand visual identity, typography system, and asset library'
      ],
      clientImpact: 'Decreased user drop-off by 52% and increased product activation within 6 weeks.'
    },
    {
      id: 'development',
      number: '02',
      title: 'Custom Web Development & Engineering',
      category: 'development',
      summary: 'Building fast, accessible, and scalable web platforms. Our designers and engineers collaborate closely to ensure pixel-perfect fidelity.',
      icon: Code2,
      accentColor: '#00d2b4',
      tags: ['React & Next.js Platforms', 'TypeScript & Tailwind', 'Node.js & Go API Engines', 'Headless CMS Architecture', 'Edge Performance & SEO'],
      deliverables: [
        'Modular, maintainable frontend architecture with automated test coverage',
        'Sub-second page load times with Core Web Vitals optimization',
        'Seamless third-party API, payment gateway, and CRM integrations'
      ],
      clientImpact: 'Reduced deployment cycle from bi-weekly to continuous daily releases.'
    },
    {
      id: 'marketing',
      number: '03',
      title: 'Digital Marketing & Growth Systems',
      category: 'marketing',
      summary: 'Data-driven customer acquisition engines combining Conversion Rate Optimization (CRO), technical SEO, and paid performance funnels.',
      icon: TrendingUp,
      accentColor: '#ff6a00',
      tags: ['Conversion Rate Optimization (CRO)', 'Technical SEO & Content Hubs', 'Paid Search & Social Funnels', 'Multi-Touch Attribution', 'A/B Testing Frameworks'],
      deliverables: [
        'High-converting landing page variants with automated split testing',
        'Comprehensive technical SEO architecture driving compounding organic traffic',
        'Full-funnel analytics dashboards with real-time ROI and CAC visibility'
      ],
      clientImpact: 'Delivered +142% increase in qualified inbound demo requests within 90 days.'
    },
    {
      id: 'support',
      number: '04',
      title: 'Managed Technical Support & Operations',
      category: 'support',
      summary: 'Proactive maintenance, round-the-clock reliability monitoring, security shielding, and ongoing technical evolution so you can focus on growth.',
      icon: LifeBuoy,
      accentColor: '#00d2b4',
      tags: ['24/7 Uptime & Error Monitoring', 'Cloud Hosting Governance', 'Security Shields & Backups', 'Continuous Feature Refinements', 'SLA-Backed Response'],
      deliverables: [
        'Guaranteed response times with dedicated technical escalation leads',
        'Automated daily encrypted backups and disaster recovery readiness',
        'Regular dependency patching, security scans, and database maintenance'
      ],
      clientImpact: 'Maintained 99.98% uptime and resolved critical inquiries in under 15 minutes.'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="pt-4 pb-6 bg-[#140905] border-t border-[#3d2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div data-reveal="rise">
            <div className="text-xs font-semibold text-[#ff6a00] tracking-wide uppercase mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Comprehensive Services for Fast-Moving Teams
            </h2>
            <p className="text-[#d6c7be] text-sm sm:text-base mt-2 max-w-xl">
              From Nairobi, we deliver website design, custom software development, UI/UX design,
              digital marketing and managed IT support for businesses in Kenya and beyond.
            </p>
          </div>

          {/* Interactive filter tabs styled in rich espresso & brand orange */}
          <div data-reveal="rise" data-reveal-delay="2" className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1e100a] rounded-lg border border-[#3d2216] self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              aria-pressed={activeCategory === 'design'}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'design'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              Branding & UI/UX
            </button>
            <button
              onClick={() => setActiveCategory('development')}
              aria-pressed={activeCategory === 'development'}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'development'
                  ? 'bg-gradient-to-r from-[#00d2b4] to-[#10b981] text-[#140905] shadow-sm font-bold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              Web Engineering
            </button>
            <button
              onClick={() => setActiveCategory('marketing')}
              aria-pressed={activeCategory === 'marketing'}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'marketing'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              Digital Growth
            </button>
            <button
              onClick={() => setActiveCategory('support')}
              aria-pressed={activeCategory === 'support'}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'support'
                  ? 'bg-gradient-to-r from-[#00d2b4] to-[#10b981] text-[#140905] shadow-sm font-bold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              Support & Ops
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            const isTealAccent = service.accentColor === '#00d2b4';

            return (
              <div
                key={service.id}
                data-reveal="soft"
                data-reveal-delay={(index % 4) + 1}
                className="rounded-xl border border-[#3d2216] bg-[#1e100a] p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff6a00]/50 transition-all group shadow-xl hover:shadow-2xl hover:shadow-[#ff6a00]/10"
              >
                <div>
                  {/* Top editorial numbering & practice icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-[#ff6a00] font-semibold tracking-wider">
                      {service.number}
                    </span>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isTealAccent
                        ? 'bg-[#00d2b4]/15 border border-[#00d2b4]/30 text-[#00d2b4] group-hover:bg-[#00d2b4]/25'
                        : 'bg-[#ff6a00]/15 border border-[#ff6a00]/30 text-[#ff6a00] group-hover:bg-[#ff6a00]/25'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-[#e5d8cf] text-sm sm:text-base leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#d6c7be]">
                      Core Outcomes & Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#fdf8f5]">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isTealAccent ? 'text-[#00d2b4]' : 'text-[#ff6a00]'
                        }`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean unboxed tech tags with typographic bullet separators */}
                  <div className="py-3 px-3.5 rounded-lg bg-[#140905] border border-[#3d2216] text-xs text-[#d6c7be] flex flex-wrap items-center gap-x-2 gap-y-1 mb-6">
                    {service.tags.map((tag, tagIdx) => (
                      <React.Fragment key={tag}>
                        <span className="text-[#fdf8f5] font-mono text-[11px]">{tag}</span>
                        {tagIdx < service.tags.length - 1 && (
                          <span className="text-[#6b422e] select-none">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact & Action */}
                <div className="pt-4 border-t border-[#3d2216] flex items-center justify-between gap-4">
                  <div className="text-xs text-[#d6c7be]">
                    <span className="text-white font-medium">Outcome:</span> {service.clientImpact}
                  </div>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6a00] hover:text-[#ff8533] whitespace-nowrap shrink-0 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Inquire About Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
