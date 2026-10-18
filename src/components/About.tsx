import React from 'react';
import { Layers, Sparkles, LifeBuoy, Users, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const tenets = [
    {
      title: 'Calm & Structured Systems',
      description: 'We believe digital experiences should be calm, fast, and intuitive. Clear communication, clean visual hierarchy, and focused calls to action make your business easier to understand and convert with.',
      icon: Layers,
      accent: '#ff6a00'
    },
    {
      title: 'Design-to-Code Continuity',
      description: 'We eliminate the messy chasm between design and development. Designers and software engineers collaborate closely using shared tokens, ensuring what you approve in Figma is pixel-perfect in code.',
      icon: Sparkles,
      accent: '#00d2b4'
    },
    {
      title: 'Reliable Long-Term Partnership',
      description: 'A launch is just day one. We stay embedded to provide 24/7 uptime monitoring, security shields, feature iterations, and proactive support so your business never misses a customer.',
      icon: LifeBuoy,
      accent: '#ff6a00'
    }
  ];

  const teamPrinciples = [
    {
      title: 'No Repetitive Setup Friction',
      detail: 'Our modular systems allow creative teams to spend their time thinking and creating rather than re-building basic layouts from scratch.'
    },
    {
      title: 'Empathetic Client Onboarding',
      detail: 'We respect your time. Transparent timelines, weekly progress demonstrations, and structured review checklists keep everyone in sync.'
    },
    {
      title: 'Obsession with Page Performance',
      detail: 'Every millisecond matters. We optimize Core Web Vitals, images, and server responses to ensure swift, pleasant user experiences on every device.'
    }
  ];

  return (
    <section id="about" className="pt-4 pb-6 bg-[#140905] border-t border-[#3d2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="rise" className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#ff6a00] tracking-wide uppercase mb-2">
            Our Philosophy & Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Empowering Teams with Structure, Clarity, and Speed
          </h2>
          <p className="text-[#e5d8cf] text-base sm:text-lg mt-4 leading-relaxed">
            Headquartered in Nairobi, Kenya, Fox Tech Solutions was founded to solve a pervasive problem: 
            creative and technical teams burning out from context switching, broken developer handoffs, 
            and chaotic launch weeks. We built a calmer, faster way forward with simple, modular systems.
          </p>
        </div>

        {/* 3 Core Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {tenets.map((tenet, idx) => {
            const Icon = tenet.icon;
            const isTeal = tenet.accent === '#00d2b4';

            return (
              <div 
                key={idx}
                data-reveal="soft"
                data-reveal-delay={idx + 1}
                className="p-6 sm:p-8 rounded-xl border border-[#3d2216] bg-[#1e100a] flex flex-col justify-between hover:border-[#ff6a00]/40 transition-colors shadow-xl"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${
                    isTeal 
                      ? 'bg-[#00d2b4]/15 border border-[#00d2b4]/30 text-[#00d2b4]' 
                      : 'bg-[#ff6a00]/15 border border-[#ff6a00]/30 text-[#ff6a00]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {tenet.title}
                  </h3>
                  <p className="text-[#d6c7be] text-sm leading-relaxed">
                    {tenet.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Principles / Team Pods Box */}
        <div data-reveal="rise" className="rounded-2xl border border-[#3d2216] bg-[#1a0d07] p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#3d2216] gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How We Deliver Predictable Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#d6c7be] mt-1">
                Built-in guardrails and proven workflows for every single client engagement.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d2b4]">
              <Users className="w-4 h-4" />
              <span>Cross-Functional Delivery Pods</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamPrinciples.map((item, idx) => (
              <div key={idx} data-reveal="soft" data-reveal-delay={idx + 1} className="p-5 rounded-lg bg-[#140905] border border-[#3d2216]">
                <div className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#d6c7be] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
