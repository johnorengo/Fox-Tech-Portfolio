import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Repeat 
} from 'lucide-react';

export const LaunchSystemDemo: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'tokens' | 'code' | 'growth'>('tokens');
  const [systemMode, setSystemMode] = useState<'foxtech' | 'traditional'>('foxtech');

  const stages = {
    tokens: {
      title: '01. Design Tokens & Cohesive Visual Structure',
      description: 'Translating brand guidelines into mathematical design tokens (typography, spacing, color scales) that sync seamlessly between Figma and production code.',
      foxtech: {
        headline: 'Automated Token Architecture',
        details: 'Design tokens are defined once in Figma and synced directly to Tailwind & CSS variables. Any brand refresh cascades in minutes with zero manual re-keying.',
        cycleTime: 'Minutes to update',
        handoffFriction: 'Zero manual redlining',
        consistencyScore: '100% Token Compliance'
      },
      traditional: {
        headline: 'Manual Redlining & Guesswork',
        details: 'Developers guess padding values, copy hex codes by hand, and build disjointed one-off CSS rules that bloat stylesheets and break layout harmony.',
        cycleTime: '3 - 5 days back-and-forth',
        handoffFriction: 'Endless Slack ping-pong',
        consistencyScore: 'Visual drift across pages'
      }
    },
    code: {
      title: '02. Modular Web Development & Component Libraries',
      description: 'Building accessible, reusable React and TypeScript components that combine into rich landing pages and dynamic digital platforms with pixel-perfect fidelity.',
      foxtech: {
        headline: 'Structured Reusable Library',
        details: 'Components are pre-tested, responsive by default, and engineered for sub-second Core Web Vitals. New marketing pages launch in hours instead of weeks.',
        cycleTime: '48-hour page rollouts',
        handoffFriction: 'Zero QA regression cycles',
        consistencyScore: 'Strict type safety & unit tests'
      },
      traditional: {
        headline: 'Hardcoded Custom Spaghetti Code',
        details: 'Every new landing page requires rebuilding navigation, footers, and cards from scratch, resulting in slow load times and brittle responsive breakpoints.',
        cycleTime: '2 - 3 weeks per landing page',
        handoffFriction: 'Repeated visual bugs on mobile',
        consistencyScore: 'Inconsistent responsive behavior'
      }
    },
    growth: {
      title: '03. Frictionless Conversion & Managed Support',
      description: 'Eliminating friction points in the checkout/lead funnel with data-backed CRO experiments, technical SEO architecture, and round-the-clock platform health.',
      foxtech: {
        headline: 'Compounding Inbound Engine',
        details: 'Clear information architecture and calm visual hierarchy lead visitors naturally toward conversion points, supported by 24/7 uptime monitoring.',
        cycleTime: 'Continuous weekly iterations',
        handoffFriction: 'Proactive incident resolution',
        consistencyScore: '+142% Average Conversion Lift'
      },
      traditional: {
        headline: 'Static Neglected Website',
        details: 'Pages sit unchanged for months. When issues arise or forms break, no one notices until prospective clients complain about missed inquiries.',
        cycleTime: 'Infrequent quarterly panic fixes',
        handoffFriction: 'Unnoticed broken lead forms',
        consistencyScore: 'Stagnant conversion rates'
      }
    }
  };

  const current = stages[activeStage];
  const activeData = systemMode === 'foxtech' ? current.foxtech : current.traditional;

  return (
    <section id="system" className="pt-4 pb-6 bg-[#140905] border-t border-[#3d2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div data-reveal="rise">
            <div className="text-xs font-semibold text-[#00d2b4] tracking-wide uppercase mb-2">
              The Launch Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Why Creative Teams Launch Faster with Fox Tech
            </h2>
            <p className="text-[#d6c7be] text-sm sm:text-base mt-2 max-w-xl">
              Compare how our structured systems eliminate repetitive setup, reduce context switching, 
              and replace stressful releases with calm, predictable launches.
            </p>
          </div>

          {/* Stage Selector Tabs */}
          <div data-reveal="rise" data-reveal-delay="2" className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1e100a] rounded-lg border border-[#3d2216]">
            <button
              onClick={() => setActiveStage('tokens')}
              aria-pressed={activeStage === 'tokens'}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeStage === 'tokens'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>1. Design Tokens</span>
            </button>
            <button
              onClick={() => setActiveStage('code')}
              aria-pressed={activeStage === 'code'}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeStage === 'code'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>2. Modular Code</span>
            </button>
            <button
              onClick={() => setActiveStage('growth')}
              aria-pressed={activeStage === 'growth'}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeStage === 'growth'
                  ? 'bg-gradient-to-r from-[#00d2b4] to-[#10b981] text-[#140905] shadow-sm font-bold'
                  : 'text-[#d6c7be] hover:text-white hover:bg-[#28150d]'
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>3. Conversion Engine</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Console */}
        <div data-reveal="soft" className="rounded-xl border border-[#3d2216] bg-[#1a0d07] p-6 sm:p-8 shadow-2xl">
          
          {/* Top Bar with System Mode Switch */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#3d2216] gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#d6c7be] mt-1">
                {current.description}
              </p>
            </div>

            {/* System Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-[#140905] rounded-lg border border-[#3d2216] text-xs self-start sm:self-auto">
              <button
                onClick={() => setSystemMode('foxtech')}
                aria-pressed={systemMode === 'foxtech'}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                  systemMode === 'foxtech' 
                    ? 'bg-gradient-to-r from-[#ff6a00] to-[#f25c05] text-white shadow-sm font-semibold' 
                    : 'text-[#d6c7be] hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-white" />
                <span>The Fox Tech System</span>
              </button>
              <button
                onClick={() => setSystemMode('traditional')}
                aria-pressed={systemMode === 'traditional'}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                  systemMode === 'traditional' 
                    ? 'bg-[#28150d] text-white shadow-sm font-semibold' 
                    : 'text-[#d6c7be] hover:text-white'
                }`}
              >
                <Repeat className="w-3.5 h-3.5 text-[#d6c7be]" />
                <span>Traditional Chaos</span>
              </button>
            </div>
          </div>

          {/* Workflow Result Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Description & Impact */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                {systemMode === 'foxtech' ? (
                  <CheckCircle2 className="w-5 h-5 text-[#00d2b4]" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-[#f59e0b]" />
                )}
                <span className="text-base sm:text-lg font-bold text-white">
                  {activeData.headline}
                </span>
              </div>

              <p className="text-sm text-[#e5d8cf] leading-relaxed mb-6">
                {activeData.details}
              </p>

              {/* 3 Comparative Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#140905] border border-[#3d2216]">
                <div>
                  <div className="text-[11px] text-[#d6c7be] uppercase tracking-wider font-mono">Turnaround Velocity</div>
                  <div className={`text-sm sm:text-base font-bold font-mono mt-1 ${
                    systemMode === 'foxtech' ? 'text-[#00d2b4]' : 'text-[#d6c7be]'
                  }`}>
                    {activeData.cycleTime}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-[#d6c7be] uppercase tracking-wider font-mono">Handoff Friction</div>
                  <div className={`text-sm sm:text-base font-bold font-mono mt-1 ${
                    systemMode === 'foxtech' ? 'text-[#00d2b4]' : 'text-[#f59e0b]'
                  }`}>
                    {activeData.handoffFriction}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-[#d6c7be] uppercase tracking-wider font-mono">Outcome Quality</div>
                  <div className={`text-sm sm:text-base font-bold font-mono mt-1 ${
                    systemMode === 'foxtech' ? 'text-[#ff6a00]' : 'text-[#d6c7be]'
                  }`}>
                    {activeData.consistencyScore}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Workflow Diagram with Polygonal Network Motif */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-xl border border-[#3d2216] bg-[#1e100a] space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d6c7be] flex items-center justify-between">
                  <span>Structured Pipeline</span>
                  <span className="text-[#00d2b4] font-mono">Active Workflow</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className={`p-3 rounded-lg border transition-all ${
                    activeStage === 'tokens'
                      ? 'border-[#ff6a00] bg-[#28150d] text-white shadow-md shadow-[#ff6a00]/10'
                      : 'border-[#3d2216] bg-[#140905] text-[#d6c7be]'
                  }`}>
                    <div className="font-semibold text-white flex items-center justify-between">
                      <span>Step 1: Unified Design Tokens</span>
                      <span className="text-[10px] font-mono text-[#ff6a00]">FIGMA ➔ CODE</span>
                    </div>
                    <div className="text-[11px] text-[#d6c7be] mt-0.5">Colors, typography, layout grids synchronized automatically</div>
                  </div>

                  <div className={`p-3 rounded-lg border transition-all ${
                    activeStage === 'code'
                      ? 'border-[#ff6a00] bg-[#28150d] text-white shadow-md shadow-[#ff6a00]/10'
                      : 'border-[#3d2216] bg-[#140905] text-[#d6c7be]'
                  }`}>
                    <div className="font-semibold text-white flex items-center justify-between">
                      <span>Step 2: Component Library & Clean Code</span>
                      <span className="text-[10px] font-mono text-[#00d2b4]">TYPESAFE</span>
                    </div>
                    <div className="text-[11px] text-[#d6c7be] mt-0.5">Reusable, accessible components assembled without tech debt</div>
                  </div>

                  <div className={`p-3 rounded-lg border transition-all ${
                    activeStage === 'growth'
                      ? 'border-[#00d2b4] bg-[#28150d] text-white shadow-md shadow-[#00d2b4]/10'
                      : 'border-[#3d2216] bg-[#140905] text-[#d6c7be]'
                  }`}>
                    <div className="font-semibold text-white flex items-center justify-between">
                      <span>Step 3: Rapid Launch & CRO Analytics</span>
                      <span className="text-[10px] font-mono text-[#00d2b4]">LIVE ENGINE</span>
                    </div>
                    <div className="text-[11px] text-[#d6c7be] mt-0.5">Continuous performance, uptime security shields, and high conversion</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#a89587] text-center">
                  Toggle between stages above or switch workflow modes to see the difference.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
