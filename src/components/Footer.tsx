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
          
          {/* Brand Column: Clean Typography (NO LOGO), Tagline under company name */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#FF6A00] tracking-tight uppercase leading-none">
                Fox Tech Solutions
              </div>
              <p className="text-xs font-semibold text-[#00d2b4] tracking-normal mt-1.5 leading-tight">
                Smart Technology. Limitless Possibilities.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 text-xs text-[#e5d8cf] pt-1 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00d2b4] shrink-0" />
                <a href="tel:0797697319" className="hover:text-white transition-colors">
                  0797697319 / +254 797 697 319
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
                <a href="mailto:enquiries@foxtechsolution.com" className="hover:text-white transition-colors">
                  enquiries@foxtechsolution.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#a89587]">
                <MapPin className="w-3.5 h-3.5 text-[#00d2b4] shrink-0" />
                <span>Nairobi, Kenya</span>
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
                <a href="#system" className="hover:text-white transition-colors">The System</a>
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
            <div className="text-white font-semibold text-xs tracking-wider uppercase">
              Trust & Legal
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onOpenLegal('security')}
                  className="hover:text-white transition-colors text-left"
                >
                  Security Architecture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright Text Strictly Centered */}
        <div className="mt-12 pt-8 border-t border-[#3d2216] flex items-center justify-center text-center text-[#a89587] text-xs">
          <p className="font-medium">
            © 2026 Fox Tech Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
