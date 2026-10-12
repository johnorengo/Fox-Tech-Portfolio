import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  Users, 
  ShieldAlert, 
  Mail, 
  Building, 
  User, 
  Phone, 
  MapPin, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const ContactScoping: React.FC = () => {
  // Form Fields
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  const directPhone = '0797697319';
  const directEmail = 'info@foxtechsolution.com';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!workEmail.trim() || !workEmail.includes('@') || !workEmail.includes('.')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!company.trim()) {
      setErrorMsg('Please enter your company or project name.');
      return;
    }
    if (!projectBrief.trim() || projectBrief.length < 15) {
      setErrorMsg('Please provide a brief description of your project goals (minimum 15 characters).');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_i03dzta';
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_50d5kyj';
    const notificationTemplateId = import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID || 'template_jqbn3bb';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'IhQ8zArOrsxO9Kpqw';

    if (!serviceId || !autoReplyTemplateId || !notificationTemplateId || !publicKey) {
      setErrorMsg(`Email delivery needs a separate EmailJS project-notification template ID. Set VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID, then rebuild. You can email us directly at ${directEmail}.`);
      return;
    }

    setIsSubmitting(true);
    try {
      const sendTemplate = async (templateId: string, templateParams: Record<string, string>) => {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        });
        if (!response.ok) {
          const details = (await response.text()).trim();
          throw new Error(details || `EmailJS returned HTTP ${response.status}.`);
        }
      };

      const companyRequest = {
        to_email: directEmail,
        name: fullName.trim(),
        from_name: fullName.trim(),
        from_email: workEmail.trim(),
        email: workEmail.trim(),
        reply_to: workEmail.trim(),
        title: `Project scoping request - ${company.trim()}`,
        company: company.trim(),
        phone: phoneNumber.trim() || 'Not provided',
        message: projectBrief.trim(),
        project_brief: projectBrief.trim(),
      };
      const clientAcknowledgement = {
        to_email: workEmail.trim(),
        name: fullName.trim(),
        from_name: 'Fox Tech Solutions',
        from_email: directEmail,
        email: workEmail.trim(),
        reply_to: directEmail,
        title: 'We received your project inquiry - Fox Tech Solutions',
        company: company.trim(),
        phone: phoneNumber.trim() || 'Not provided',
        message: projectBrief.trim(),
        project_brief: projectBrief.trim(),
      };

      const results = await Promise.allSettled([
        sendTemplate(notificationTemplateId, companyRequest),
        sendTemplate(autoReplyTemplateId, clientAcknowledgement),
      ]);
      const failedDeliveries = results.flatMap((result, index) =>
        result.status === 'rejected'
          ? [`${index === 0 ? 'Company project notification' : 'Client auto-reply'}: ${result.reason instanceof Error ? result.reason.message : 'Email delivery failed'}`]
          : []
      );
      if (failedDeliveries.length) throw new Error(failedDeliveries.join(' | '));

      const generatedRef = `FOX-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);
      setIsSubmitted(true);
    } catch (error) {
      const details = error instanceof Error ? error.message : '';
      const isNetworkError = error instanceof TypeError;
      const missingRecipient = details.toLowerCase().includes('recipient') && details.toLowerCase().includes('empty');
      setErrorMsg(isNetworkError
        ? `The form couldn't reach EmailJS. Check your connection and make sure this site's domain is allowed in EmailJS. You can also email ${directEmail}.`
        : missingRecipient
          ? `An EmailJS template has no recipient. Set the company notification template's To Email to ${directEmail}, and the auto-reply template's To Email to {{to_email}}.`
          : `EmailJS rejected the request${details ? `: ${details}` : '.'} Please check the EmailJS service, template, and recipient settings, or email ${directEmail}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setWorkEmail('');
    setCompany('');
    setPhoneNumber('');
    setProjectBrief('');
    setBookingRef('');
  };

  return (
    <section id="contact" className="py-24 bg-[#140905] border-t border-[#3d2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#ff6a00] tracking-wide uppercase mb-2">
            Start Your Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Let’s Build Simple Systems That Accelerate Your Growth
          </h2>
          <p className="text-[#e5d8cf] text-sm sm:text-base mt-2">
            Tell us about your brand vision, web platform requirements, or digital marketing goals. 
            Our technical team in Nairobi reviews every brief and responds within 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Starts directly with Estimated Engagement Pod */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Estimated Engagement Pod Card */}
            <div className="p-6 sm:p-7 rounded-xl border border-[#3d2216] bg-[#1e100a] shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#3d2216]">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#ff6a00]" />
                  <span>Estimated Engagement Pod</span>
                </div>
                <span className="text-[11px] font-mono text-[#00d2b4] font-semibold">Ready to Deploy</span>
              </div>

              {/* Delivery Pod Composition */}
              <div className="p-4 rounded-lg bg-[#140905] border border-[#3d2216] space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6a00]/15 border border-[#ff6a00]/30 flex items-center justify-center text-[#ff6a00] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Cross-Functional Dedicated Pod</div>
                    <div className="text-xs text-[#d6c7be] mt-0.5">
                      1 Lead Product Designer + 1 Full-Stack Engineer + 1 Technical Growth Specialist
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#3d2216]/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#a89587]">Typical Sprint:</span>
                  <span className="text-[#00d2b4] font-semibold">2 – 4 Weeks Launchpad</span>
                </div>
              </div>

              {/* What We Deliver */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d6c7be]">
                  Standard Pod Deliverables
                </div>
                
                <div className="space-y-2.5 text-xs sm:text-sm text-[#fdf8f5]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0 mt-0.5" />
                    <span>Interactive Figma Prototypes & Design Token System</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00d2b4] shrink-0 mt-0.5" />
                    <span>Custom Web Platform Engineering (React, Next.js, Node, TypeScript)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0 mt-0.5" />
                    <span>High-Performance Core Web Vitals & Technical SEO</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00d2b4] shrink-0 mt-0.5" />
                    <span>24/7 Managed Uptime, Security Shields & Post-Launch Support</span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-[#3d2216] space-y-2 text-xs">
                <div className="flex flex-col items-start gap-1 text-[#d6c7be] sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00d2b4]" />
                    <span>Direct Call / WhatsApp:</span>
                  </span>
                  <a href={`tel:${directPhone}`} className="font-mono text-white font-bold hover:text-[#00d2b4]">
                    {directPhone}
                  </a>
                </div>

                <div className="flex flex-col items-start gap-1 text-[#d6c7be] sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#ff6a00]" />
                    <span>Direct Project Desk:</span>
                  </span>
                  <a href={`mailto:${directEmail}`} className="font-mono text-white hover:text-[#ff6a00]">
                    {directEmail}
                  </a>
                </div>

                <div className="flex flex-col items-start gap-1 text-[#d6c7be] sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00d2b4]" />
                    <span>Office:</span>
                  </span>
                  <span className="text-[#fdf8f5]">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Trust Tag */}
              <div className="p-3 rounded-lg bg-[#140905] border border-[#3d2216] text-[11px] text-[#a89587] flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span>Mutual Non-Disclosure Signed Upfront</span>
                <span className="text-[#00d2b4] font-semibold">100% IP Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 lg:p-8 rounded-xl border border-[#3d2216] bg-[#1e100a] shadow-2xl">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#3d2216]">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Project & Contact Details
                    </h3>
                    <span className="text-xs text-[#00d2b4] font-mono font-medium">Response within 4h</span>
                  </div>

                  {errorMsg && (
                    <div role="alert" className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-300 flex items-start gap-2 break-words">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="scoping-name" className="block text-xs font-medium text-[#d6c7be] mb-1.5">
                        Your Full Name <span className="text-[#ff6a00]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#a89587] absolute left-3 top-3" />
                        <input
                          type="text"
                          id="scoping-name"
                          name="from_name"
                          autoComplete="name"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. David Kimani"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#140905] border border-[#3d2216] text-sm text-white placeholder-[#785b4d] focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="scoping-email" className="block text-xs font-medium text-[#d6c7be] mb-1.5">
                        Work Email <span className="text-[#ff6a00]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#a89587] absolute left-3 top-3" />
                        <input
                          type="email"
                          id="scoping-email"
                          name="from_email"
                          autoComplete="email"
                          required
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          placeholder="david@company.com"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#140905] border border-[#3d2216] text-sm text-white placeholder-[#785b4d] focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label htmlFor="scoping-company" className="block text-xs font-medium text-[#d6c7be] mb-1.5">
                        Company or Startup Name <span className="text-[#ff6a00]">*</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-[#a89587] absolute left-3 top-3" />
                        <input
                          type="text"
                          id="scoping-company"
                          name="company"
                          autoComplete="organization"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Rift Digital Labs"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#140905] border border-[#3d2216] text-sm text-white placeholder-[#785b4d] focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00]"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="scoping-phone" className="block text-xs font-medium text-[#d6c7be] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#a89587] absolute left-3 top-3" />
                        <input
                          type="tel"
                          id="scoping-phone"
                          name="phone"
                          autoComplete="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="e.g. 0797697319"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#140905] border border-[#3d2216] text-sm text-white placeholder-[#785b4d] focus:outline-none focus:border-[#00d2b4] focus:ring-1 focus:ring-[#00d2b4]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project brief */}
                  <div>
                    <label htmlFor="scoping-brief" className="block text-xs font-medium text-[#d6c7be] mb-1.5">
                      Tell Us About Your Project & Goals <span className="text-[#ff6a00]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      id="scoping-brief"
                      name="project_brief"
                      required
                      minLength={15}
                      maxLength={5000}
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Describe what you want to build, current challenges, target audience, or desired launch timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#140905] border border-[#3d2216] text-sm text-white placeholder-[#785b4d] focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#f25c05] hover:from-[#ff7a1a] hover:to-[#ff6a00] active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff6a00]/25"
                  >
                    {isSubmitting ? (
                      <span>Sending Project Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Scoping Request</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-[#a89587] flex flex-wrap justify-center items-center gap-x-4 gap-y-1 break-all">
                    <span>Direct: {directEmail}</span>
                    <span>·</span>
                    <span>Call: {directPhone}</span>
                    <span>·</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-6 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#00d2b4]/15 border border-[#00d2b4]/40 flex items-center justify-center text-[#00d2b4] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Project Brief Received
                  </h3>

                  <p className="text-[#e5d8cf] text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{fullName}</span>! 
                    Our technical and design leads in Nairobi are reviewing your project requirements for <span className="text-white font-medium">{company}</span>.
                  </p>

                  <div className="p-4 rounded-lg bg-[#140905] border border-[#3d2216] max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between text-[#d6c7be]">
                      <span>Project Reference:</span>
                      <span className="font-mono text-[#ff6a00] font-semibold">{bookingRef}</span>
                    </div>
                    <div className="flex justify-between text-[#d6c7be]">
                      <span>Assigned Response SLA:</span>
                      <span className="text-[#00d2b4] font-medium">Under 4 Hours</span>
                    </div>
                    <div className="flex justify-between text-[#d6c7be]">
                      <span>Direct Desk:</span>
                      <span className="text-white font-mono">{directPhone}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#a89587]">
                    Your project request was sent to our team. We will follow up at <span className="text-[#fdf8f5]">{workEmail}</span>.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 text-xs font-medium text-[#d6c7be] hover:text-white bg-[#28150d] hover:bg-[#3d2216] rounded-lg transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
