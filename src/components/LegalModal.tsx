import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'security' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      updated: 'October 2026',
      body: [
        'Fox Tech Solutions operates under strict privacy-by-design standards. We collect minimal telemetry strictly required for operational delivery, project scoping, and secure client communication.',
        'We never sell, rent, or distribute client contact data, design assets, or proprietary business information to third parties.',
        'All preliminary technical reviews and code audits are conducted under reciprocal non-disclosure protections. Project data is strictly confidential.',
        'For clients in Kenya and international jurisdictions, data handling adheres to the Kenya Data Protection Act 2019 and international GDPR standards with high-security encrypted storage.'
      ]
    },
    terms: {
      title: 'Terms of Engineering & Design Service',
      updated: 'October 2026',
      body: [
        'All design systems, web development deliverables, and consulting services provided by Fox Tech Solutions are governed by executed Statement of Work (SOW) milestone agreements.',
        'Intellectual Property: Upon complete payment of milestone invoices, all custom code, design tokens, Figma component libraries, and digital assets become the exclusive intellectual property of the client.',
        'Warranty & Support: Fox Tech Solutions provides a 60-day post-launch warranty covering any functional bugs or layout discrepancies, followed by ongoing managed SLA support options.',
        'Jurisdiction: Governing law is set according to the Republic of Kenya with international arbitration clauses available for global enterprise contracts.'
      ]
    },
    security: {
      title: 'Security Architecture & Compliance Whitepaper',
      updated: 'October 2026',
      body: [
        'Design-to-Code Integrity: Fox Tech Solutions enforces strict automated linting, type-checking, and dependency vulnerability scans across all client repositories.',
        'Access Governance: We enforce multi-factor authentication (MFA) and least-privilege role-based access for all staging servers, databases, and third-party APIs.',
        'Zero Data Persistence: Staging database seedings use anonymized synthetic data. No real production customer records are stored on local designer or engineer workstations.',
        'Direct Security Reporting: Security concerns can be reported directly to info@foxtechsolution.com with expedited response from our technical team in Nairobi.'
      ]
    }
  };

  const activeContent = contentMap[type];
  const documentTheme = {
    privacy: {
      gradient: 'from-fuchsia-600 via-rose-500 to-amber-400',
      glow: 'bg-pink-300/35',
      accent: 'text-pink-200',
      border: 'border-pink-200/25',
    },
    terms: {
      gradient: 'from-cyan-500 via-blue-600 to-violet-700',
      glow: 'bg-cyan-300/35',
      accent: 'text-cyan-200',
      border: 'border-cyan-200/25',
    },
    security: {
      gradient: 'from-lime-400 via-emerald-500 to-teal-600',
      glow: 'bg-emerald-200/35',
      accent: 'text-emerald-200',
      border: 'border-emerald-200/25',
    },
  }[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative isolate w-full max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-br ${documentTheme.gradient} p-[1px] shadow-[0_28px_100px_rgba(0,0,0,0.65)] max-h-[88vh]`}
      >
        <div
          className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full bg-white/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute -bottom-20 -left-14 h-64 w-64 rounded-full ${documentTheme.glow} blur-3xl`}
          aria-hidden="true"
        />
        <div
        className={`relative max-h-[calc(88vh-2px)] overflow-y-auto rounded-[15px] border ${documentTheme.border} bg-[#160c1a]/90 p-6 backdrop-blur-xl sm:p-8`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#d6c7be] hover:text-white hover:bg-[#28150d] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className={`mb-2 flex items-center gap-2.5 text-xs font-mono ${documentTheme.accent}`}>
          <ShieldCheck className="w-4 h-4" />
          <span>LEGAL & COMPLIANCE · REVISED {activeContent.updated} · NAIROBI</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          {activeContent.title}
        </h3>

        <div className="space-y-4 text-xs leading-relaxed text-white/95 sm:text-sm">
          {activeContent.body.map((p, idx) => (
            <p key={idx} className="rounded-xl border border-white/10 bg-[#100914]/65 p-4 shadow-lg shadow-black/10">
              {p}
            </p>
          ))}
        </div>

        <div className={`mt-8 flex justify-end border-t ${documentTheme.border} pt-6`}>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#f25c05] hover:from-[#ff7a1a] hover:to-[#ff6a00] rounded-lg transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
