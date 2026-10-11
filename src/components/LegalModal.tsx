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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#1a0d07] border border-[#3d2216] rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
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

        <div className="flex items-center gap-2.5 text-xs text-[#00d2b4] font-mono mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>LEGAL & COMPLIANCE · REVISED {activeContent.updated} · NAIROBI</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          {activeContent.title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#e5d8cf] leading-relaxed">
          {activeContent.body.map((p, idx) => (
            <p key={idx} className="p-3.5 rounded-lg bg-[#140905] border border-[#3d2216]">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#3d2216] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#f25c05] hover:from-[#ff7a1a] hover:to-[#ff6a00] rounded-lg transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
