import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'security') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#0e0603] border-t border-[#3d2216] text-[#d6c7be] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col gap-2.5 text-xs text-[#e5d8cf] pt-1 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00d2b4] shrink-0" />
                <a href="tel:+254797697319" className="hover:text-white transition-colors">
                  +254 797 697 319
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
                <a href="mailto:info@foxtechsolution.com" className="hover:text-white transition-colors">
                  info@foxtechsolution.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#a89587]">
                <MapPin className="w-3.5 h-3.5 text-[#00d2b4] shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 shrink-0 fill-[#1877F2]"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.006 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.886v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.079 24 18.092 24 12.073Z" />
                </svg>
                <a
                  href="https://www.facebook.com/profile.php?id=61577433790128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs tracking-wider uppercase">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#system" className="hover:text-white transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs tracking-wider uppercase">
              What We Do
            </div>
            <ul className="space-y-2">
              <li><span className="text-[#fdf8f5]">Branding & Visual Identity</span></li>
              <li><span className="text-[#fdf8f5]">UI/UX Design Systems</span></li>
              <li><span className="text-[#fdf8f5]">Custom Web Engineering</span></li>
              <li><span className="text-[#fdf8f5]">Digital Growth & SEO</span></li>
              <li><span className="text-[#fdf8f5]">Managed Hosting & Support</span></li>
            </ul>
          </div>

          {/* Governance & Legal */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs tracking-wider uppercase">Trust & Legal</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenLegal('security')} className="text-left transition-colors hover:text-white">
                  Security Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="text-left transition-colors hover:text-white">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="text-left transition-colors hover:text-white">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright Text Strictly Centered */}
        <div className="mt-12 pt-8 border-t border-[#3d2216] flex items-center justify-center text-center text-[#a89587] text-xs">
          <p className="font-medium">
            © 2026. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
