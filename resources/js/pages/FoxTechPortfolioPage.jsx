import React, { useEffect, useMemo, useRef, useState } from "react";

const designLinks = [
    { href: "/design/logo-design", label: "Logo Design" },
    { href: "/design/social-media-design", label: "Social Media Design" },
    { href: "/design/full-branding", label: "Full Branding" },
];

const onlineLinks = [
    { href: "/get-online/domains", label: "Domains" },
    { href: "/get-online/email-setup", label: "Email Setup" },
    { href: "/get-online/custom-website", label: "Custom Website" },
    { href: "/get-online/ecommerce", label: "eCommerce" },
    { href: "/get-online/hosting", label: "Hosting" },
    { href: "/get-online/vps-server", label: "VPS Server" },
];

const directNavLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
];

const homeStats = [
    { value: "230+", label: "deliverables launched for growing brands" },
    { value: "4.9/5", label: "average client feedback across recent projects" },
    { value: "7 days", label: "typical window to first strong direction" },
];

const homeOfferCards = [
    {
        eyebrow: "Brand identity",
        title: "Build a visual system that feels premium from first glance.",
        text: "Logo direction, campaign graphics, social kits, and polished brand collateral for teams that want to look ready.",
        href: "/design",
    },
    {
        eyebrow: "Web presence",
        title: "Launch pages that explain your offer clearly and convert better.",
        text: "Brochure sites, service pages, landing pages, and ecommerce builds designed to feel calm, modern, and credible.",
        href: "/get-online",
    },
    {
        eyebrow: "Digital growth",
        title: "Turn your online presence into a practical lead engine.",
        text: "Marketing support, campaign structure, and content systems that help your business show up consistently online.",
        href: "/advertise",
    },
    {
        eyebrow: "Knowledge support",
        title: "Stay sharp with simple guidance your team can actually use.",
        text: "Guides, articles, and rollout advice for founders who need clarity before making the next digital move.",
        href: "/learn",
    },
];

const homeProcessSteps = [
    {
        title: "Choose the lane that fits your next move",
        text: "Start with design, web, or digital growth and we shape the scope around what your business needs now.",
    },
    {
        title: "Review a cleaner creative direction early",
        text: "We translate your brief into sections, layouts, and visuals quickly so the project feels tangible from the start.",
    },
    {
        title: "Launch polished assets with a clear handoff",
        text: "You get final files, structured pages, and a system you can keep using after the first launch.",
    },
];

const homePackages = [
    {
        name: "Starter Sprint",
        price: "KSh 8,500+",
        summary: "For founders who need a sharper first impression fast.",
        items: ["Logo or campaign refresh", "One focused landing page section", "Delivery-ready social assets"],
        href: "/contact",
        featured: false,
    },
    {
        name: "Growth Build",
        price: "KSh 24,000+",
        summary: "For teams that want a cohesive site and brand system together.",
        items: ["Multi-section website design", "Messaging and layout direction", "Launch support and revisions"],
        href: "/pricing",
        featured: true,
    },
    {
        name: "Ongoing Creative Partner",
        price: "Custom",
        summary: "For brands that need continuous design and marketing support.",
        items: ["Monthly campaign design", "Website improvement backlog", "Priority communication and planning"],
        href: "/contact",
        featured: false,
    },
];

const homeTeamRoles = [
    {
        title: "Creative direction",
        text: "Identity systems, social visuals, and campaign concepts that keep the brand looking consistent.",
    },
    {
        title: "Web execution",
        text: "Clean layouts, strong hierarchy, and practical page flows built around how real clients browse.",
    },
    {
        title: "Growth support",
        text: "Lead-focused messaging, launch support, and marketing structure that carries the design further.",
    },
];

const homeCaseStudies = [
    {
        tag: "Website refresh",
        title: "Qananu Africa",
        text: "A cleaner service presentation with stronger trust cues and clearer navigation paths.",
    },
    {
        tag: "Brand presence",
        title: "Fashion Guru",
        text: "Sharper visuals and more intentional page rhythm to make the brand feel premium and current.",
    },
    {
        tag: "Business growth",
        title: "Just Karz Kenya",
        text: "A tidier digital storefront direction designed to help enquiries feel easier and faster.",
    },
];

const footerGroups = [
    {
        title: "Services",
        links: [
            { href: "/design", label: "Design" },
            { href: "/get-online", label: "Get Online" },
            { href: "/advertise", label: "Advertise" },
        ],
    },
    {
        title: "Explore",
        links: [
            { href: "/portfolio", label: "Portfolio" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About" },
        ],
    },
    {
        title: "Resources",
        links: [
            { href: "/blog", label: "Blog" },
            { href: "/learn", label: "Learn" },
            { href: "/contact", label: "Contact" },
            { href: "/free-guide", label: "Free Guide" },
        ],
    },
];

const landingFooterGroups = [
    {
        title: "Pages",
        links: [
            { href: "/", label: "Home" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About us" },
        ],
    },
    {
        title: "Connect",
        links: [
            { href: "/contact", label: "Contact" },
            { href: "/blog", label: "Blog" },
            { href: "/pricing", label: "Sign up" },
        ],
    },
    {
        title: "Sections",
        links: [
            { href: "/portfolio", label: "Case Studies" },
            { href: "/pricing", label: "FAQ" },
            { href: "/about", label: "Team" },
        ],
    },
    {
        title: "Resources",
        links: [
            { href: "/learn", label: "Trending" },
            { href: "/portfolio", label: "Integrations" },
            { href: "#top", label: "Back to top" },
        ],
    },
];

const figmaBrandLogos = ["Logo", "Logo", "Logo", "Logo"];

const figmaHomeFeatures = [
    {
        eyebrow: "Feature",
        title: "Simple and super-easy to use!",
        text: "Clear structure, friendly onboarding, and a layout that makes your offer feel easier to trust.",
        artClass: "kg-fig-device-card--left",
    },
    {
        eyebrow: "Feature",
        title: "Simplicity is the key",
        text: "Quiet spacing, strong hierarchy, and focused CTAs create a calmer product-style experience.",
        artClass: "kg-fig-device-card--right",
    },
    {
        eyebrow: "Feature",
        title: "We have solutions for everyone",
        text: "From first impressions to full digital rollout, each section helps move the visitor toward action.",
        artClass: "kg-fig-device-card--left-soft",
    },
];

const figmaWorkspaceHighlights = [
    {
        eyebrow: "Feature",
        title: "Adjust your workspace",
        text: "Shape the page around your offer, your proof, and the action you want people to take next.",
        artClass: "kg-fig-board-card--wide",
    },
    {
        eyebrow: "Feature",
        title: "Simplicity is the key",
        text: "A structured page feels more premium when the sections know exactly what job they are doing.",
        artClass: "kg-fig-board-card--stack",
    },
    {
        eyebrow: "Feature",
        title: "We have solutions for everyone",
        text: "Design, web, and launch support all fit into one consistent visual system.",
        artClass: "kg-fig-board-card--phone",
    },
];

const figmaReviews = [
    {
        name: "Alicia White",
        role: "Founder",
        quote: "The new layout finally made our business feel organized and premium.",
    },
    {
        name: "Mark Otieno",
        role: "Operations lead",
        quote: "Clear process, better pages, and a smoother launch than we expected.",
    },
    {
        name: "Susan Kariuki",
        role: "Brand manager",
        quote: "Our team now has a visual system we can actually keep using.",
    },
];

const figmaTools = ["Slack", "Zapier", "Notion", "Figma", "Drive", "Dropbox", "GitHub", "Linear"];

const figmaPricingPlans = [
    {
        name: "Starter",
        price: "$199",
        detail: "Best for simple launches and early brand cleanup.",
        badge: null,
    },
    {
        name: "Growth",
        price: "$299",
        detail: "Best for teams that need a stronger website and clearer structure.",
        badge: "Popular",
    },
    {
        name: "Business",
        price: "$999",
        detail: "Best for ongoing design, rollout support, and larger page systems.",
        badge: null,
    },
];

const figmaPricingFeatureGroups = [
    {
        title: "Main Features",
        rows: [
            { label: "Landing page sections", values: ["1-2", "5+", "Unlimited"] },
            { label: "Revision rounds", values: ["1", "2", "Priority"] },
            { label: "Content hierarchy support", values: ["Basic", "Advanced", "Advanced"] },
            { label: "Launch support", values: ["-", "Included", "Included"] },
        ],
    },
    {
        title: "Integration",
        rows: [
            { label: "Contact forms", values: ["Basic", "Included", "Included"] },
            { label: "Analytics setup", values: ["-", "Included", "Included"] },
            { label: "Design system handoff", values: ["-", "Included", "Included"] },
            { label: "Priority support", values: ["-", "-", "Included"] },
        ],
    },
    {
        title: "Main Features",
        rows: [
            { label: "Case study modules", values: ["-", "Included", "Included"] },
            { label: "Team or blog templates", values: ["-", "Basic", "Included"] },
            { label: "Priority revisions", values: ["-", "-", "Included"] },
        ],
    },
];

const figmaFaqs = [
    {
        question: "How quickly can a first concept be ready?",
        answer: "Most projects move into a first strong direction within a week, depending on scope and content readiness.",
    },
    {
        question: "Can you redesign an existing portfolio or business website?",
        answer: "Yes. We can refresh the layout, tighten the messaging, and rebuild the visual system without starting from zero.",
    },
    {
        question: "Do you also help with launch support?",
        answer: "Yes. The project can include implementation guidance, refinements, and practical support during rollout.",
    },
    {
        question: "Can I start with one page and expand later?",
        answer: "Absolutely. We can build a clean first page, then extend the same system to pricing, blog, contact, and portfolio pages.",
    },
];

const figmaTeamStats = [
    { value: "2020", label: "We started" },
    { value: "1M+", label: "Visitors reached" },
    { value: "$100M", label: "Value influenced" },
];

const figmaTeamMembers = [
    { name: "Pearl Scott", role: "Head of strategy" },
    { name: "John Smith", role: "Operations" },
    { name: "Victor Lee", role: "Product" },
    { name: "Liu Chen", role: "UI lead" },
    { name: "Olivia James", role: "Design" },
    { name: "Pablo Perez", role: "Growth" },
    { name: "Samantha Brown", role: "Research" },
    { name: "Catherine Lim", role: "Marketing" },
    { name: "Kelly Nguyen", role: "Support" },
    { name: "Chris Doe", role: "Partnerships" },
    { name: "Jason Yu", role: "Finance" },
    { name: "Trevor Ali", role: "Delivery" },
];

const figmaJobCards = [
    { title: "Product designer", mode: "Remote" },
    { title: "Marketing designer", mode: "Hybrid" },
    { title: "Project manager", mode: "Remote" },
    { title: "Content strategist", mode: "Nairobi" },
    { title: "Visual designer", mode: "Remote" },
    { title: "Web specialist", mode: "Hybrid" },
];

const figmaOffices = [
    { city: "Nairobi", address: "Westlands, Nairobi" },
    { city: "Mombasa", address: "Nyali, Mombasa" },
];

const figmaContactDetails = [
    { label: "Call us", value: "+254 700 123 456" },
    { label: "Email us", value: "hello@foxtechsolutions.com" },
    { label: "Address", value: "Westlands, Nairobi, Kenya" },
];

const figmaBlogPosts = [
    {
        title: "5 Ways to Boost Your Productivity",
        excerpt: "Create stronger focus by simplifying your tools, routines, and design environment.",
        imageClass: "kg-fig-blog-media--1",
    },
    {
        title: "How to build a cleaner service page",
        excerpt: "Use hierarchy, proof, and stronger calls to action to make your offer easier to understand.",
        imageClass: "kg-fig-blog-media--2",
    },
    {
        title: "Why a softer interface can feel more premium",
        excerpt: "Airier spacing and calmer contrast often create a more trustworthy first impression.",
        imageClass: "kg-fig-blog-media--3",
    },
    {
        title: "How to organize your case studies better",
        excerpt: "Turn project screenshots into stories that communicate outcomes more clearly.",
        imageClass: "kg-fig-blog-media--4",
    },
    {
        title: "Simple systems that help creative teams launch faster",
        excerpt: "Templates and clear section patterns reduce friction when the work gets busy.",
        imageClass: "kg-fig-blog-media--5",
    },
    {
        title: "Building a blog that feels connected to the product",
        excerpt: "Your articles should inherit the same visual language as the rest of the site.",
        imageClass: "kg-fig-blog-media--6",
    },
    {
        title: "What makes a services page easier to trust?",
        excerpt: "Small design choices like rhythm, white space, and proof blocks can do a lot of work.",
        imageClass: "kg-fig-blog-media--1",
    },
    {
        title: "How to make case studies feel more editorial",
        excerpt: "Pair stronger story structure with cleaner cards and calmer media framing.",
        imageClass: "kg-fig-blog-media--2",
    },
    {
        title: "A simple checklist for cleaner page launches",
        excerpt: "Use repeatable sections and a tighter footer system to make the launch feel more complete.",
        imageClass: "kg-fig-blog-media--3",
    },
];

const homeGoalCards = [
    {
        title: "Graphic Design",
        description: "Showcase your business",
        imageClass: "kg-goal-image--red",
        href: "/design",
    },
    {
        title: "Online Presence Setup",
        description: "Bring your business online",
        imageClass: "kg-goal-image--blue",
        href: "/get-online",
    },
    {
        title: "Online Marketing",
        description: "Be noticed on the internet",
        imageClass: "kg-goal-image--yellow",
        href: "/advertise",
    },
    {
        title: "Knowledge Center",
        description: "Get free business advice",
        imageClass: "kg-goal-image--green",
        href: "/blog",
    },
];

const sampleWorks = [
    { title: "Packaging Design", imageClass: "kg-sample-image--bag" },
    { title: "Brochure Design", imageClass: "kg-sample-image--brochure" },
    { title: "Menu Design", imageClass: "kg-sample-image--menu" },
    { title: "Social Media Kit", imageClass: "kg-sample-image--social" },
    { title: "Stationery Design", imageClass: "kg-sample-image--stationery" },
    { title: "Corporate Profile", imageClass: "kg-sample-image--corporate" },
];

const resultsProjects = [
    { title: "Website Design in Kenya for Qananu Africa", imageClass: "kg-results-thumb--1" },
    { title: "Website Design in Kenya for Homeloq", imageClass: "kg-results-thumb--2" },
    { title: "Website Design in Kenya for Fashion Guru", imageClass: "kg-results-thumb--3" },
    { title: "Website Design in Kenya for TGS Abroad", imageClass: "kg-results-thumb--4" },
    { title: "Website Design in Kenya for Listos Linguistas", imageClass: "kg-results-thumb--5" },
    { title: "Website Design in Kenya for Branjels Healthcare", imageClass: "kg-results-thumb--6" },
    { title: "Website Design in Kenya for Hello Hair Oils", imageClass: "kg-results-thumb--7" },
    { title: "Website Design in Kenya for Lusamik Equipments", imageClass: "kg-results-thumb--8" },
    { title: "Website Design in Kenya for Just Karz Kenya", imageClass: "kg-results-thumb--9" },
];

const proofItems = [
    {
        initials: "L",
        name: "Linet",
        rating: "★★★★★",
        text: "Excellent support and fast turnaround.",
    },
    {
        initials: "T",
        name: "Titus",
        rating: "★★★★★",
        text: "Clear process and quality execution.",
    },
    {
        initials: "C",
        name: "Constance",
        rating: "★★★★★",
        text: "Our business now looks more professional.",
    },
    {
        initials: "W",
        name: "Wendy",
        rating: "★★★★★",
        text: "Great communication and reliable delivery.",
    },
];

const blogItems = [
    {
        title: "How to Fix Your Brand Identity",
        excerpt: "A practical checklist to sharpen your market positioning and visual consistency.",
        imageClass: "kg-blog-image--purple",
    },
    {
        title: "Why Your Website Needs Better Structure",
        excerpt: "Improve trust and conversion with clearer content hierarchy and page flow.",
        imageClass: "kg-blog-image--blue",
    },
    {
        title: "12 Ways to Promote Your Brand Online",
        excerpt: "Simple tactics you can start today to build visibility and credibility.",
        imageClass: "kg-blog-image--orange",
    },
];

const advertiseSolutions = [
    { title: "Google Marketing", icon: "G" },
    { title: "Social Media Marketing", icon: "f" },
    { title: "Network Marketing", icon: "N" },
    { title: "Affiliate Marketing", icon: "A" },
    { title: "Email Marketing", icon: "?" },
    { title: "Content Marketing", icon: "?" },
    { title: "Marketing Automation", icon: "?" },
    { title: "SMS Marketing", icon: "SMS" },
];

const advertiseOutcomes = [
    {
        title: "Less trial & error",
        text: "We guide your campaigns with tested structures so your business avoids expensive guesswork.",
    },
    {
        title: "Better ROI",
        text: "Set up marketing systems that prioritize measurable growth, leads, and stronger conversion paths.",
    },
    {
        title: "More leads & sales",
        text: "Reach customers faster with practical digital channels designed around your service goals.",
    },
    {
        title: "Better Brand Reputation",
        text: "Consistent presence, quality messaging, and better presentation improve market confidence.",
    },
];

const advertiseArticles = [
    {
        title: "How to Start an Online Business in Kenya",
        excerpt: "A simple launch checklist for service providers and startup founders.",
        imageClass: "kg-adv-article-media--1",
    },
    {
        title: "How to Grow Your Customer Base with Digital Marketing in Kenya",
        excerpt: "Practical strategies to turn attention into qualified inquiries.",
        imageClass: "kg-adv-article-media--2",
    },
    {
        title: "How to Get Started with Business Digital Marketing in Kenya",
        excerpt: "Set realistic goals, choose channels, and track what matters.",
        imageClass: "kg-adv-article-media--3",
    },
];

const domainHighlights = [
    {
        title: "Think Creatively",
        text: "The most obvious domain name will simply be your brand name. Yet, what if it has been taken? Think outside of the box and go crazy with keywords.",
    },
    {
        title: "Make It Short And Simple",
        text: "Choose a domain that's catchy, brandable, and future-proof too. The easier it is to remember, the more likely are visitors to come back.",
    },
    {
        title: "Check If It's Available",
        text: "If you're buying a domain before creating your brand, make sure that no one is using your chosen domain as part of their business.",
    },
];

const domainHeroBenefits = [
    "Matching Domain Email",
    "FREE SSL Certificate",
    "Unmatched 24/7 support",
];

const domainPriceRows = [
    { extension: ".co.ke", registration: "KSh 1,000", renewal: "KSh 1,000", transfer: "KSh 1,000" },
    { extension: ".or.ke", registration: "KSh 1,000", renewal: "KSh 1,000", transfer: "KSh 1,000" },
    { extension: ".me.ke", registration: "KSh 1,000", renewal: "KSh 1,000", transfer: "KSh 1,000" },
    { extension: ".mobi.ke", registration: "KSh 1,000", renewal: "KSh 1,000", transfer: "KSh 1,000" },
    { extension: ".go.ke", registration: "KSh 950", renewal: "KSh 950", transfer: "KSh 950" },
    { extension: ".ac.ke", registration: "KSh 950", renewal: "KSh 950", transfer: "KSh 950" },
    { extension: ".sc.ke", registration: "KSh 950", renewal: "KSh 950", transfer: "KSh 950" },
    { extension: ".info.ke", registration: "KSh 1,000", renewal: "KSh 1,000", transfer: "KSh 1,000" },
    { extension: ".name.ke", registration: "KSh 1,000", renewal: "KSh 1,000", transfer: "KSh 1,000" },
    { extension: ".com", registration: "KSh 1,600", renewal: "KSh 1,600", transfer: "KSh 1,600" },
    { extension: ".net", registration: "KSh 1,900", renewal: "KSh 1,900", transfer: "KSh 1,900" },
    { extension: ".org", registration: "KSh 1,700", renewal: "KSh 1,700", transfer: "KSh 1,700" },
    { extension: ".biz", registration: "KSh 2,150", renewal: "KSh 2,150", transfer: "KSh 2,150" },
    { extension: ".info", registration: "KSh 2,350", renewal: "KSh 2,350", transfer: "KSh 2,350" },
    { extension: ".me", registration: "KSh 2,300", renewal: "KSh 2,300", transfer: "KSh 2,300" },
    { extension: ".online", registration: "KSh 3,150", renewal: "KSh 3,150", transfer: "KSh 3,150" },
    { extension: ".site", registration: "KSh 3,000", renewal: "KSh 3,000", transfer: "KSh 3,000" },
    { extension: ".store", registration: "KSh 6,900", renewal: "KSh 6,900", transfer: "KSh 6,900" },
    { extension: ".tech", registration: "KSh 6,200", renewal: "KSh 6,200", transfer: "KSh 6,200" },
    { extension: ".africa", registration: "KSh 2,850", renewal: "KSh 2,850", transfer: "KSh 2,850" },
    { extension: ".xyz", registration: "KSh 1,950", renewal: "KSh 1,950", transfer: "KSh 1,950" },
    { extension: ".digital", registration: "KSh 5,400", renewal: "KSh 5,400", transfer: "KSh 5,400" },
    { extension: ".agency", registration: "KSh 4,900", renewal: "KSh 4,900", transfer: "KSh 4,900" },
    { extension: ".solutions", registration: "KSh 5,200", renewal: "KSh 5,200", transfer: "KSh 5,200" },
    { extension: ".media", registration: "KSh 4,350", renewal: "KSh 4,350", transfer: "KSh 4,350" },
    { extension: ".app", registration: "KSh 2,900", renewal: "KSh 2,900", transfer: "KSh 2,900" },
    { extension: ".cloud", registration: "KSh 3,500", renewal: "KSh 3,500", transfer: "KSh 3,500" },
    { extension: ".io", registration: "KSh 9,800", renewal: "KSh 9,800", transfer: "KSh 9,800" },
    { extension: ".dev", registration: "KSh 2,950", renewal: "KSh 2,950", transfer: "KSh 2,950" },
    { extension: ".ai", registration: "KSh 18,500", renewal: "KSh 18,500", transfer: "KSh 18,500" },
];

const domainFaqs = [
    {
        question: "What is a domain name?",
        answer:
            "A domain name is your website address on the internet. It helps customers find and remember your business online.",
    },
    {
        question: "How much does a domain name cost in Kenya?",
        answer:
            "Cost depends on the extension. Local and global extensions have different yearly registration and renewal fees.",
    },
    {
        question: "Can I transfer my domain to Fox Tech Solutions?",
        answer:
            "Yes. We can guide you through domain transfer, DNS updates, and downtime-safe migration.",
    },
    {
        question: "What happens if my domain expires?",
        answer:
            "If it expires, your site and emails may stop working. Renew before expiration to avoid service disruption.",
    },
    {
        question: "Do I need hosting before buying a domain?",
        answer:
            "No. You can buy the domain first, then connect hosting and email services later.",
    },
    {
        question: "Can I use a local domain and still rank on Google?",
        answer:
            "Yes. Domain extension does not block ranking. Content quality, SEO setup, and performance matter most.",
    },
    {
        question: "How do I choose the best extension for my business?",
        answer:
            "Choose one aligned with your brand and audience. We normally recommend a main .com plus a local backup domain.",
    },
    {
        question: "Can I connect business email to my domain?",
        answer:
            "Absolutely. We configure branded email accounts and the DNS records required for reliable delivery.",
    },
];

const learnPosts = [
    { title: "How to Buy & Sell Shares via Zidi Market by Safaricom", imageClass: "kg-learn-post-media--1" },
    { title: "How to Apply for a Business Permit in Kenya", imageClass: "kg-learn-post-media--2" },
    { title: "Which AI Logo Maker Is Best? Top 10 Reviewed", imageClass: "kg-learn-post-media--3" },
    { title: "How to Become a Virtual Assistant in Kenya", imageClass: "kg-learn-post-media--4" },
    { title: "How to Get Influencer Brand Deals in Kenya", imageClass: "kg-learn-post-media--5" },
    { title: "How to Go Viral on Social Media in Kenya", imageClass: "kg-learn-post-media--6" },
    { title: "20 Effective Content Creation Ideas in Kenya", imageClass: "kg-learn-post-media--7" },
    { title: "How to Become an Influencer in Kenya", imageClass: "kg-learn-post-media--8" },
    { title: "Top 10 Free Online Learning Sites in Kenya", imageClass: "kg-learn-post-media--9" },
    { title: "How To Become A Content Creator in Kenya", imageClass: "kg-learn-post-media--10" },
    { title: "How to Monetise Your Facebook Page in Kenya", imageClass: "kg-learn-post-media--11" },
    { title: "10 Best Webflow Roles for Jobs in Kenya", imageClass: "kg-learn-post-media--12" },
    { title: "How to Start an Online Business in Kenya", imageClass: "kg-learn-post-media--13" },
    { title: "How to Apply for Nyota Fund Business Support", imageClass: "kg-learn-post-media--14" },
    { title: "Which Logo Maker Wins? Designs.com vs Mr Logo Maker", imageClass: "kg-learn-post-media--15" },
    { title: "How To Set Up Your Own Business Email in Kenya", imageClass: "kg-learn-post-media--16" },
    { title: "How to Get Verified on LinkedIn in Kenya", imageClass: "kg-learn-post-media--17" },
    { title: "HostAfrica Alternatives to Try in 2026 Compared With Competitors", imageClass: "kg-learn-post-media--18" },
    { title: "Ksh 100,000 Invested in Equity Bank Stock: Is It Worth It?", imageClass: "kg-learn-post-media--19" },
    { title: "Top 10 Places to Visit in Nairobi Under 500", imageClass: "kg-learn-post-media--20" },
];

const logoPackages = [
    {
        title: "Starter Logo Package",
        price: "From KSh 8,500",
        imageClass: "kg-logo-package-media--1",
    },
    {
        title: "Business Identity Kit",
        price: "From KSh 16,000",
        imageClass: "kg-logo-package-media--2",
    },
    {
        title: "Social + Logo Combo",
        price: "From KSh 18,500",
        imageClass: "kg-logo-package-media--3",
    },
    {
        title: "Corporate Signature Set",
        price: "From KSh 24,000",
        imageClass: "kg-logo-package-media--4",
    },
];

const logoPortfolioSamples = [
    { name: "Organizers", mark: "O", styleClass: "kg-logo-mark--1" },
    { name: "Caviniah", mark: "C", styleClass: "kg-logo-mark--2" },
    { name: "ARKMED", mark: "A", styleClass: "kg-logo-mark--3" },
    { name: "MentorSpace", mark: "M", styleClass: "kg-logo-mark--4" },
    { name: "TAJI DECOR", mark: "T", styleClass: "kg-logo-mark--5" },
    { name: "Outdoor", mark: "O", styleClass: "kg-logo-mark--6" },
];

const logoExpectations = [
    { title: "Fast Delivery", text: "Project-ready files on time." },
    { title: "Creative Concepts", text: "Fresh ideas for your brand." },
    { title: "Unique Concepts", text: "Distinct visuals that stand out." },
    { title: "Memorable Design", text: "Logo built for long-term recall." },
];

const logoTips = [
    {
        title: "How to Save Money and Still Get a Quality Logo in Kenya",
        excerpt: "A practical checklist to avoid overpaying while keeping design quality high.",
        imageClass: "kg-logo-tip-media--1",
    },
    {
        title: "3 Ways to Get Your Business Noticed in 2026",
        excerpt: "Simple branding actions that make your business easier to trust and remember.",
        imageClass: "kg-logo-tip-media--2",
    },
    {
        title: "Online Marketing in Kenya: The Easy Guide",
        excerpt: "How to connect brand visuals with marketing channels for better customer response.",
        imageClass: "kg-logo-tip-media--3",
    },
];

const logoFaqs = [
    {
        question: "Will my logo be unique?",
        answer:
            "Yes. Every logo is created from scratch around your brand personality, market, and goals.",
    },
    {
        question: "How much do logo designs go for?",
        answer:
            "Pricing depends on scope, revisions, and deliverables. Our packages begin from entry-level business budgets.",
    },
    {
        question: "Are there books or websites for logo testing before sharing my project?",
        answer:
            "Yes. You can test with brand boards, mockups, social profile previews, and print simulations before final approval.",
    },
    {
        question: "How many formats will you provide?",
        answer:
            "You get high-quality files for print and digital use including PNG, JPG, PDF, and vector formats.",
    },
    {
        question: "What is trademark?",
        answer:
            "A trademark protects brand assets like logos and names. We can guide you on best-practice handoff for registration.",
    },
    {
        question: "How do logo check if plagiarized?",
        answer:
            "We use concept originality checks and visual research before final delivery to reduce similarity risk.",
    },
    {
        question: "How do businesses trademark logos?",
        answer:
            "Most businesses register through the relevant local intellectual property office after finalizing their logo files.",
    },
    {
        question: "Do you offer logo redesigns?",
        answer:
            "Yes. We can refresh existing logos while preserving recognizable brand elements where needed.",
    },
];

const socialPackages = [
    {
        title: "Social Media Calendar",
        price: "Starting at: Ksh.1,500",
        imageClass: "kg-social-pack-media--1",
    },
    {
        title: "Social Media Marketing",
        price: "Starting at: Ksh.15,000",
        imageClass: "kg-social-pack-media--2",
    },
    {
        title: "Social Media Management",
        price: "Starting at: Ksh.22,000",
        imageClass: "kg-social-pack-media--3",
    },
    {
        title: "Linkedin Banner Design",
        price: "Starting at: Ksh.1,500",
        imageClass: "kg-social-pack-media--4",
    },
    {
        title: "Facebook Cover Design",
        price: "Starting at: Ksh.1,500",
        imageClass: "kg-social-pack-media--5",
    },
    {
        title: "Instagram Highlight Cover Design",
        price: "Starting at: Ksh.1,500",
        imageClass: "kg-social-pack-media--6",
    },
    {
        title: "Youtube Banner Design",
        price: "Starting at: Ksh.1,500",
        imageClass: "kg-social-pack-media--7",
    },
];

const socialPortfolioSamples = [
    { title: "Father's Day Promo", imageClass: "kg-social-sample-media--1" },
    { title: "Restaurant Campaign", imageClass: "kg-social-sample-media--2" },
    { title: "Flyer Design", imageClass: "kg-social-sample-media--3" },
    { title: "Corporate Post Set", imageClass: "kg-social-sample-media--4" },
    { title: "Event Social Kit", imageClass: "kg-social-sample-media--5" },
    { title: "Web + Social Banner", imageClass: "kg-social-sample-media--6" },
];

const socialBenefits = [
    { title: "Stand Out Visually", text: "Stronger social presence." },
    { title: "Increase Market Perception", text: "Build trust faster." },
    { title: "Boost Your Sales", text: "Turn attention into leads." },
];

const socialFaqs = [
    {
        question: "How much do social media designs cost in Kenya?",
        answer:
            "Cost depends on content volume, design complexity, and timeline. We have flexible packages for startups and growing teams.",
    },
    {
        question: "What are the best social media tools in Kenya?",
        answer:
            "Popular tools include Meta Business Suite, Canva, Buffer, Hootsuite, and in-platform analytics for campaign tracking.",
    },
    {
        question: "How much does it cost to design Instagram posts in Kenya?",
        answer:
            "Pricing is based on quantity and style. Single-design jobs cost less than monthly managed content packages.",
    },
    {
        question: "How do I increase my social media following in Kenya?",
        answer:
            "Use consistent branding, relevant content themes, clear offers, and regular posting schedules with campaign boosts.",
    },
    {
        question: "Can I buy social media post templates in Kenya?",
        answer:
            "Yes. We create reusable branded templates for posts, reels covers, stories, and ad creatives.",
    },
    {
        question: "Can social media help my business?",
        answer:
            "Absolutely. Strategic social media design improves visibility, credibility, and conversion performance for your business.",
    },
];

const socialTips = [
    {
        title: "Online Marketing in Kenya: The Easy Guide for Business Owners in 2026",
        excerpt: "Foundational actions to attract better leads through social media and content consistency.",
        imageClass: "kg-social-tip-media--1",
    },
    {
        title: "How to Do Restaurant Marketing in Kenya to Boost Profits",
        excerpt: "Campaign ideas for food businesses that want stronger engagement and repeat orders.",
        imageClass: "kg-social-tip-media--2",
    },
    {
        title: "12 Best Ways to Promote Your Website in Kenya",
        excerpt: "Simple cross-channel tactics that connect social visibility with website conversions.",
        imageClass: "kg-social-tip-media--3",
    },
];

const fullBrandingSections = [
    {
        title: "Start with a Logo",
        cards: [
            { title: "Logo Design & Guide", price: "Starting at: KSh 8,500", imageClass: "kg-brand-media--1" },
            { title: "Email Signature", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--2" },
            { title: "Get a Logo", price: "Starting at: KSh 4,500", imageClass: "kg-brand-media--3" },
            { title: "Product Label Design", price: "Starting at: KSh 4,000", imageClass: "kg-brand-media--4" },
        ],
    },
    {
        title: "Launch Your Product",
        cards: [
            { title: "Book Cover Design", price: "Starting at: KSh 2,500", imageClass: "kg-brand-media--5" },
            { title: "Branded Tote Bag", price: "Starting at: KSh 2,500", imageClass: "kg-brand-media--6" },
            { title: "Product Label Design", price: "Starting at: KSh 4,000", imageClass: "kg-brand-media--7" },
            { title: "Packaging Design", price: "Starting at: KSh 6,000", imageClass: "kg-brand-media--8" },
        ],
    },
    {
        title: "Shine on Social Media",
        cards: [
            { title: "YouTube Banner Design", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--9" },
            { title: "Social Media Calendar", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--10" },
            { title: "Social Media Marketing", price: "Starting at: KSh 15,000", imageClass: "kg-brand-media--11" },
            { title: "Profile Security Graphic", price: "Starting at: KSh 1,800", imageClass: "kg-brand-media--12" },
        ],
    },
    {
        title: "Stand out with a website",
        cards: [
            { title: "Business Website", price: "Starting at: KSh 18,000", imageClass: "kg-brand-media--13" },
            { title: "Ecommerce Website", price: "Starting at: KSh 50,000", imageClass: "kg-brand-media--14" },
            { title: "School Website", price: "Starting at: KSh 25,000", imageClass: "kg-brand-media--15" },
            { title: "Real Estate Website", price: "Starting at: KSh 35,000", imageClass: "kg-brand-media--16" },
        ],
    },
    {
        title: "Generate Awareness Offline",
        cards: [
            { title: "Flyer Design", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--17" },
            { title: "Poster Design", price: "Starting at: KSh 2,000", imageClass: "kg-brand-media--18" },
            { title: "Brochure Design", price: "Starting at: KSh 4,500", imageClass: "kg-brand-media--19" },
            { title: "Rollup Banner Design", price: "Starting at: KSh 2,500", imageClass: "kg-brand-media--20" },
        ],
    },
    {
        title: "Make a Lasting Impression",
        cards: [
            { title: "Letterhead Design", price: "Starting at: KSh 1,000", imageClass: "kg-brand-media--21" },
            { title: "Business Card Design", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--22" },
            { title: "Invoice / Receipt Design", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--23" },
            { title: "Company Profile Design", price: "Starting at: KSh 8,000", imageClass: "kg-brand-media--24" },
        ],
    },
    {
        title: "Build Customer Loyalty",
        cards: [
            { title: "Loyalty Card Design", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--25" },
            { title: "Coupon Design", price: "Starting at: KSh 1,000", imageClass: "kg-brand-media--26" },
            { title: "Branded T-Shirt Design", price: "Starting at: KSh 2,500", imageClass: "kg-brand-media--27" },
            { title: "Gift Card Design", price: "Starting at: KSh 1,500", imageClass: "kg-brand-media--28" },
        ],
    },
];

const customWebsitePackages = [
    {
        title: "Basic Starter Website",
        subtitle: "Simple one-page presence for startups.",
        price: "From KSh 18,000",
        badge: "Best for starters",
        imageClass: "kg-web-pack-media--1",
    },
    {
        title: "Growth Business Website",
        subtitle: "Multi-page website with service funnels.",
        price: "From KSh 35,000",
        badge: "Most popular",
        imageClass: "kg-web-pack-media--2",
    },
    {
        title: "Online Store Package",
        subtitle: "Catalog, cart, and payment-ready setup.",
        price: "From KSh 55,000",
        badge: "Sell online",
        imageClass: "kg-web-pack-media--3",
    },
    {
        title: "High-Ticket Service Website",
        subtitle: "Premium design with conversion-focused pages.",
        price: "From KSh 75,000",
        badge: "Premium",
        imageClass: "kg-web-pack-media--4",
    },
];

const customWebsiteSamples = [
    { title: "FTS Dental", link: "www.foxtechdental.co.ke", imageClass: "kg-web-sample-media--1" },
    { title: "Nairobi Learning Hub", link: "www.nairobilearninghub.co.ke", imageClass: "kg-web-sample-media--2" },
    { title: "Nyota Rentals", link: "www.nyotarentals.co.ke", imageClass: "kg-web-sample-media--3" },
];

const customWebsiteBenefits = [
    { title: "New Leads", text: "Receive inquiries daily." },
    { title: "Online Growth", text: "Reach more customers." },
    { title: "Visibility", text: "Be discoverable on search." },
    { title: "Trust", text: "Build stronger credibility." },
    { title: "Revenue", text: "Turn visits into sales." },
    { title: "24/7 Presence", text: "Sell even when offline." },
    { title: "Better UX", text: "Keep users engaged." },
    { title: "Scalability", text: "Expand with your business." },
];

const customWebsiteTips = [
    {
        title: "How Much Does a Website Cost in Kenya?",
        excerpt: "Learn the key pricing factors and what affects project scope.",
        imageClass: "kg-web-tip-media--1",
    },
    {
        title: "Low Cost Ways to Find Affordable Web Design in Kenya",
        excerpt: "Practical ways to choose quality work without overpaying.",
        imageClass: "kg-web-tip-media--2",
    },
    {
        title: "How to Find the Right Website Designer in Kenya",
        excerpt: "A checklist for selecting the best fit for your business.",
        imageClass: "kg-web-tip-media--3",
    },
];

const customWebsiteFaqs = [
    {
        question: "Do you offer web design for small businesses?",
        answer:
            "Yes. We provide starter and growth packages designed for new and small businesses with practical budgets.",
    },
    {
        question: "How long will it take to complete my website?",
        answer:
            "Most standard business websites take between 2 and 4 weeks depending on scope, content readiness, and feedback speed.",
    },
    {
        question: "Who writes the website content for my website?",
        answer:
            "You can provide your copy, or we can help you structure and refine website content for better clarity and conversion.",
    },
    {
        question: "Will my site be optimized for mobile?",
        answer:
            "Absolutely. Every website we build is responsive and tested for mobile, tablet, and desktop usage.",
    },
    {
        question: "Will you help with the hosting and domain name?",
        answer:
            "Yes. We can assist with domain setup, hosting, DNS configuration, and post-launch maintenance guidance.",
    },
    {
        question: "I already have a website and want to redesign it. Can you help?",
        answer:
            "Yes. We can redesign your current website while preserving valuable content and improving structure, speed, and UX.",
    },
];

const ecommercePackages = [
    {
        title: "Single Page Store",
        subtitle: "",
        price: "Starting at: Ksh.10,000",
        imageClass: "kg-ecom-pack-media--1",
    },
    {
        title: "Online Grocery Store",
        subtitle: "",
        price: "Starting at: Ksh.37,000",
        imageClass: "kg-ecom-pack-media--2",
    },
    {
        title: "Full Online Store \u2192",
        subtitle: "",
        price: "Starting at: Ksh.50,000",
        imageClass: "kg-ecom-pack-media--3",
    },
    {
        title: "Travel Booking Store \u2192",
        subtitle: "",
        price: "Starting at: Ksh.47,500",
        imageClass: "kg-ecom-pack-media--4",
    },
];

const ecommerceSamples = [
    { title: "Chuma Empire", link: "www.chumaempire.co.ke", imageClass: "kg-ecom-sample-media--1" },
    { title: "Capricorn Furniture", link: "www.capricornfurniture.co.ke", imageClass: "kg-ecom-sample-media--2" },
    { title: "Luxe Interiors", link: "www.luxeinteriors.co.ke", imageClass: "kg-ecom-sample-media--3" },
];

const ecommerceReasons = [
    {
        title: "Brand Recognition",
        text: "Build a trusted digital storefront customers can visit anytime.",
    },
    {
        title: "Fast Cash",
        text: "Capture demand quicker with clear product pages and checkout.",
    },
    {
        title: "24/7 Sales Potential",
        text: "Keep selling around the clock without physical location limits.",
    },
];

const ecommerceAchievements = [
    { title: "Brand Credibility", text: "Look trusted online." },
    { title: "High Sales Potential", text: "Increase order volume." },
    { title: "Better Customer Reach", text: "Sell beyond your location." },
    { title: "Low Running Costs", text: "Reduce overhead pressure." },
    { title: "Convenient Shopping", text: "Serve clients faster." },
    { title: "Data Insights", text: "Track behavior and growth." },
];

const ecommerceTips = [
    {
        title: "Affordable Ways to Start an E-commerce Shop",
        excerpt: "Practical setup choices that keep costs low while you launch.",
        imageClass: "kg-ecom-tip-media--1",
    },
    {
        title: "All About Online Stores in Kenya",
        excerpt: "Understand platforms, payments, and delivery models that work.",
        imageClass: "kg-ecom-tip-media--2",
    },
    {
        title: "How Ecommerce Works in Kenya",
        excerpt: "A simple walkthrough from product listing to successful checkout.",
        imageClass: "kg-ecom-tip-media--3",
    },
];

const ecommerceFaqs = [
    {
        question: "Will I get full control of my ecommerce website?",
        answer:
            "Yes. You own your store, content, and admin access, and we help you manage updates confidently.",
    },
    {
        question: "What payment methods can my ecommerce website include?",
        answer:
            "We can integrate M-Pesa, card options, bank transfer workflows, and manual payment confirmation where needed.",
    },
    {
        question: "Can you help me get products and customers online?",
        answer:
            "Yes. We help you structure product categories, pages, and campaigns to attract and convert buyers.",
    },
    {
        question: "When can my ecommerce website go live?",
        answer:
            "Most projects launch in 3 to 6 weeks depending on catalog size, features, and content readiness.",
    },
    {
        question: "Can I add products and discounts myself?",
        answer:
            "Absolutely. You will be able to add products, set prices, and run promotions from the admin panel.",
    },
    {
        question: "Do you support redesign if I already have an old store?",
        answer:
            "Yes. We can redesign and migrate your existing store to improve experience, speed, and conversion.",
    },
];

const hostingPlans = [
    {
        name: "BizStarter",
        tagline: "Ideal for beginners",
        price: "2,900",
        themeClass: "kg-host-plan--blue",
        cta: "Get Starter",
        features: [
            "12 GB SSD Storage",
            "Free SSL Certificate",
            "Daily Backups",
            "99.9% Uptime",
            "cPanel Access",
            "24/7 Support",
        ],
    },
    {
        name: "BizPlus",
        tagline: "Perfect for growing business",
        price: "3,922",
        themeClass: "kg-host-plan--gold",
        cta: "Get BizPlus",
        features: [
            "25 GB SSD Storage",
            "Free Domain (1 Year)",
            "Daily Backups",
            "LiteSpeed Cache",
            "Unlimited Emails",
            "Priority Support",
        ],
    },
    {
        name: "BizPrime",
        tagline: "For high performance websites",
        price: "5,000",
        themeClass: "kg-host-plan--green",
        cta: "Get BizPrime",
        features: [
            "50 GB SSD Storage",
            "Free Migration",
            "Advanced Security",
            "Dedicated Resources",
            "Staging Tools",
            "24/7 Priority Support",
        ],
    },
];

const hostingGuarantees = [
    {
        title: "24/7 Support",
        text: "Friendly team available any time you need technical help.",
    },
    {
        title: "Reliable Backup",
        text: "Automated backups to help protect your website data.",
    },
    {
        title: "Fast SSL Security",
        text: "Secure HTTPS setup with trusted SSL certificates.",
    },
    {
        title: "Domain Email",
        text: "Business email setup using your own domain name.",
    },
];

const hostingWhyPoints = [
    "You get stable infrastructure, faster page loading, and better uptime for your business website.",
    "Every plan is optimized for real business websites and can be upgraded as your traffic grows.",
    "Our support team helps with setup, migration, security, and best-practice hosting guidance.",
];

const hostingLearnPosts = [
    {
        title: "What Web Hosting Companies in Kenya Should Offer",
        excerpt: "The core features every serious hosting plan should include.",
        imageClass: "kg-host-learn-media--1",
    },
    {
        title: "How to Renew Domains in Kenya Online",
        excerpt: "Avoid downtime with a simple renewal and DNS checklist.",
        imageClass: "kg-host-learn-media--2",
    },
    {
        title: "How to Register a Domain Name in Kenya",
        excerpt: "A practical guide to choose and secure the right domain.",
        imageClass: "kg-host-learn-media--3",
    },
];

const hostingFaqs = [
    {
        question: "What is web hosting in Kenya?",
        answer:
            "Web hosting is the service that stores your website files and makes your site available online to visitors.",
    },
    {
        question: "How much does shared web hosting cost in Kenya?",
        answer:
            "Pricing depends on storage, performance, support, and features. Starter business plans often begin from a few thousand shillings yearly.",
    },
    {
        question: "What are the different types of web hosting in Kenya?",
        answer:
            "Common options include shared hosting, VPS hosting, dedicated servers, and managed cloud hosting.",
    },
    {
        question: "How can I get help with web hosting in Kenya?",
        answer:
            "Contact our support team and we will recommend the right plan based on your traffic and website goals.",
    },
];

const vpsPlans = [
    {
        name: "Mercury VPS",
        tagline: "The ideal starting point for growing online projects.",
        price: "3,300",
        vcpu: "1 CPU vCore",
        ram: "1GB RAM",
        storage: "20GB SSD Storage",
    },
    {
        name: "Venus VPS",
        tagline: "Best for teams that need more speed and stability.",
        price: "6,500",
        vcpu: "2 CPU vCores",
        ram: "2GB RAM",
        storage: "50GB SSD Storage",
        popular: true,
    },
    {
        name: "Earth VPS",
        tagline: "Great for businesses with higher traffic and workloads.",
        price: "7,000",
        vcpu: "2 CPU vCores",
        ram: "2GB RAM",
        storage: "80GB SSD Storage",
    },
    {
        name: "Mars VPS",
        tagline: "Advanced solution for demanding production systems.",
        price: "10,500",
        vcpu: "2 CPU vCores",
        ram: "4GB RAM",
        storage: "100GB SSD Storage",
    },
];

const vpsFaqs = [
    {
        question: "What is VPS hosting in Kenya?",
        answer:
            "VPS hosting gives you dedicated virtual resources on a secure server, so your website performs better than typical shared hosting.",
    },
    {
        question: "How much does VPS hosting cost in Kenya?",
        answer:
            "Pricing depends on CPU, RAM, storage, and support level. Entry plans usually start from a few thousand shillings monthly.",
    },
    {
        question: "What are the different types of VPS hosting in Kenya?",
        answer:
            "Common options include managed VPS, unmanaged VPS, Linux VPS, and Windows VPS for different technical needs.",
    },
    {
        question: "How can I get help with VPS hosting in Kenya?",
        answer:
            "Contact us and we will recommend the right VPS package based on your traffic, software stack, and scaling goals.",
    },
];

const pageMap = {
    "/": {
        kind: "home",
        title: "Fox Tech Solutions | Build the Business of Your Dreams",
    },
    "/design": {
        kind: "category",
        title: "Design Services | Fox Tech Solutions",
        heading: "Design Services for Businesses That Want to Stand Out",
        summary:
            "From logos to full identity systems, we create visuals that make your business look consistent, trustworthy, and market-ready.",
        cards: designLinks.map((item) => ({
            title: item.label,
            description: "Tailored creative work focused on business outcomes and brand consistency.",
            href: item.href,
        })),
    },
    "/design/logo-design": {
        kind: "logo_design",
        title: "Logo Design | Fox Tech Solutions",
        heading: "Professional Logo Design in Kenya",
        summary:
            "Create a bold visual identity that helps your brand look credible and memorable.",
        bullets: [
            "Primary and secondary logo concepts",
            "Color and monochrome versions",
            "Transparent and print-ready exports",
            "Mini usage guide for consistency",
        ],
    },
    "/design/social-media-design": {
        kind: "social_media_design",
        title: "Social Media Design | Fox Tech Solutions",
        heading: "Get Unique Social Media Design in Kenya",
        summary:
            "Create engaging social visuals that increase brand trust and improve campaign performance.",
        bullets: [
            "Post and story templates",
            "Campaign creatives",
            "Profile branding and highlights",
            "Reusable design system",
        ],
    },
    "/design/full-branding": {
        kind: "full_branding",
        title: "Full Branding | Fox Tech Solutions",
        heading: "What would you like & to design today?",
        summary:
            "Choose from our complete branding options",
        bullets: [
            "Logo suite and color system",
            "Typography and brand voice direction",
            "Business stationery assets",
            "Brand usage and consistency guide",
        ],
    },
    "/get-online": {
        kind: "category",
        title: "Get Online Services | Fox Tech Solutions",
        heading: "Get Online and Build a Reliable Digital Presence",
        summary:
            "We help businesses set up core digital infrastructure from domain and email to website and hosting.",
        cards: onlineLinks.map((item) => ({
            title: item.label,
            description: "Implementation support with practical setup for business continuity.",
            href: item.href,
        })),
    },
    "/get-online/domains": {
        kind: "domains",
        title: "Domains | Fox Tech Solutions",
        heading: "Secure your domain name today",
        summary:
            "Start by checking the availability of your domain name in Kenya",
        bullets: [
            "Domain registration guidance",
            "DNS configuration",
            "Subdomain planning",
            "Renewal and ownership best practices",
        ],
    },
    "/get-online/email-setup": {
        kind: "email_setup",
        title: "Email Setup | Fox Tech Solutions",
        heading: "Email Setup Services in Kenya",
        summary:
            "Change You93@gmail.com to You@YourBusiness.com",
        bullets: [
            "Professional email addresses",
            "SPF, DKIM, and DMARC basics",
            "Mailbox setup for teams",
            "Web and mobile access configuration",
        ],
    },
    "/get-online/custom-website": {
        kind: "custom_website",
        title: "Custom Website | Fox Tech Solutions",
        heading: "Professional Web Design in Kenya",
        summary:
            "Get a conversion-ready website that helps your business look credible and attract better clients.",
        bullets: [
            "Structured service pages",
            "Lead capture workflow",
            "Mobile-first responsiveness",
            "Performance and SEO fundamentals",
        ],
    },
    "/get-online/ecommerce": {
        kind: "ecommerce",
        title: "eCommerce | Fox Tech Solutions",
        heading: "Want to Build an Ecommerce Website in Kenya?",
        summary:
            "Launch an online store built to attract buyers, build trust, and scale your sales.",
        bullets: [
            "Catalog and product taxonomy setup",
            "Checkout and payment integration",
            "Shipping and order workflow",
            "Tracking and analytics setup",
        ],
    },
    "/get-online/hosting": {
        kind: "hosting",
        title: "Hosting | Fox Tech Solutions",
        heading: "Be 100% Online with Reliable Web Hosting in Kenya",
        summary:
            "Fast, secure, and affordable hosting plans tailored for Kenyan businesses.",
        bullets: [
            "Hosting plan recommendation",
            "Deployment and DNS connection",
            "SSL and security baseline",
            "Backup and uptime considerations",
        ],
    },
    "/get-online/vps-server": {
        kind: "vps",
        title: "VPS Server | Fox Tech Solutions",
        heading: "Harness the power of VPS Hosting in Kenya",
        summary: "",
        bullets: [
            "Server provisioning",
            "Web stack configuration",
            "Security hardening",
            "Monitoring and maintenance guidance",
        ],
    },
    "/advertise": {
        kind: "advertise",
        title: "Advertise | Fox Tech Solutions",
        heading: "Get Customers For Your Business",
        summary:
            "Discover proven ways to drive sales and growth to your business.",
        bullets: [
            "Campaign planning and channel selection",
            "Creative and messaging preparation",
            "Landing page alignment",
            "Performance reporting and optimization",
        ],
    },
    "/sell": {
        kind: "info",
        title: "Sell Online | Fox Tech Solutions",
        heading: "Sell More with Better Digital Experience",
        summary:
            "Improve the path from interest to purchase with clearer presentation and stronger trust signals.",
        bullets: [
            "Offer packaging and positioning",
            "Sales page and pricing clarity",
            "Checkout flow optimization",
            "Follow-up and retention touchpoints",
        ],
    },
    "/pricing": {
        kind: "pricing",
        title: "Pricing | Fox Tech Solutions",
        heading: "Pricing",
        summary: "Our pricing is very flexible, so you only pay for what you need and scale when you are ready.",
    },
    "/about": {
        kind: "about",
        title: "About | Fox Tech Solutions",
        heading: "Meet the team behind the magic",
        summary: "A softer company page for story, numbers, people, opportunities, and offices.",
    },
    "/proof": {
        kind: "proof",
        title: "Proof | Fox Tech Solutions",
        heading: "Valuable Feedback from Customers",
        summary: "Real client feedback from branding, website, and digital setup projects.",
    },
    "/results": {
        kind: "results",
        title: "Results | Fox Tech Solutions",
        heading: "Here's an idea of what we do.",
        summary: "Web and Graphic Design Portfolio in Kenya",
    },
    "/portfolio": {
        kind: "portfolio",
        title: "Portfolio | Fox Tech Solutions",
        heading: "Simple and intuitive right from the get-go",
        summary: "A modular portfolio page that mixes product-style storytelling with case studies and integrations.",
    },
    "/blog": {
        kind: "blog",
        title: "Blog | Fox Tech Solutions",
        heading: "Blog",
        summary: "Useful articles and product-minded thinking collected in one cleaner editorial layout.",
    },
    "/learn": {
        kind: "blog",
        title: "Learn | Fox Tech Solutions",
        heading: "Insights for building a better business experience",
        summary: "Articles, notes, and practical guidance that use the same calmer design language as the main site.",
    },
    "/contact": {
        kind: "contact",
        title: "Contact | Fox Tech Solutions",
        heading: "Contact",
        summary:
            "We would love to hear from you. Fill out the form below and our team will get back to you shortly.",
    },
    "/free-guide": {
        kind: "info",
        title: "Free Guide | Fox Tech Solutions",
        heading: "Free Guide for Growing Your Business Online",
        summary:
            "Get our practical starter guide covering branding consistency, digital setup, and lead generation basics.",
        bullets: [
            "How to position your business clearly",
            "Website essentials that build trust",
            "Content and ad basics for customer reach",
            "Simple weekly checklist for growth",
        ],
    },
    "/client-space": {
        kind: "info",
        title: "Client Space | Fox Tech Solutions",
        heading: "Client Space",
        summary:
            "A dedicated area for project communication, deliveries, and progress updates. Contact us to get access.",
        bullets: [
            "Project milestone tracking",
            "Asset sharing and approvals",
            "Revision request workflow",
            "Delivery and support history",
        ],
    },
};

function normalizePath(pathname) {
    const trimmed = pathname.trim();

    if (!trimmed || trimmed === "/") {
        return "/";
    }

    return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}

function isDesignPath(pathname) {
    return pathname === "/design" || pathname.startsWith("/design/");
}

function isOnlinePath(pathname) {
    return pathname === "/get-online" || pathname.startsWith("/get-online/");
}

function isPathMatch(pathname, href) {
    if (href === "/") {
        return pathname === "/";
    }

    if (href === "/portfolio") {
        return pathname === "/portfolio";
    }

    if (href === "/results") {
        return pathname === "/results" || pathname === "/proof";
    }

    if (href === "/blog") {
        return pathname === "/learn" || pathname === "/blog";
    }

    return pathname === href;
}

function FigmaLogoRow({ variant = "strip" }) {
    if (variant === "inline") {
        return (
            <section className="kg-fig-logo-strip kg-fig-logo-strip--inline">
                <div className="kg-container kg-fig-logo-inline">
                    <p>Trusted and used by those companies</p>
                    <div className="kg-fig-logo-inline-grid">
                        {figmaBrandLogos.map((item, index) => (
                            <span key={`${item}-${index}`}>{item}</span>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="kg-fig-logo-strip">
            <div className="kg-container">
                <p>Trusted and used by teams that care about clarity</p>
                <div className="kg-fig-logo-row">
                    {figmaBrandLogos.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FigmaCaseStudies({ intro = "Recent work and directions shaped around clarity, trust, and easier action." }) {
    return (
        <section className="kg-fig-case-studies">
            <div className="kg-container">
                <div className="kg-fig-section-head">
                    <p className="kg-fig-kicker">Case Studies</p>
                    <h2>Case studies</h2>
                    <p>{intro}</p>
                </div>

                <div className="kg-fig-case-grid">
                    {resultsProjects.slice(0, 3).map((project, index) => (
                        <article className="kg-fig-case-card" key={project.title}>
                            <div className={`kg-fig-case-media kg-fig-case-media--${index + 1}`} />
                            <h3>{project.title}</h3>
                            <p>Product-minded storytelling, stronger hierarchy, and better visual pacing.</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FigmaAppsSection() {
    return (
        <section className="kg-fig-apps">
            <div className="kg-container kg-fig-apps-wrap">
                <div className="kg-fig-apps-copy">
                    <p className="kg-fig-kicker">Integrations</p>
                    <h2>Connect the apps that you use everyday</h2>
                    <p>
                        Keep the experience feeling connected with the tools, files, and systems your team already uses.
                    </p>
                    <a href="/pricing">Try now</a>
                </div>

                <div className="kg-fig-app-orbit" aria-hidden="true">
                    {figmaTools.map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FigmaBottomCta({ title = "Try it for free", summary = "Build a calmer first impression with a page system that feels simple, polished, and easier to trust." }) {
    return (
        <section className="kg-fig-bottom-cta">
            <div className="kg-container">
                <h2>{title}</h2>
                <p>{summary}</p>
                <div className="kg-fig-bottom-actions">
                    <a href="/pricing">Try now</a>
                    <a href="/about">Learn more</a>
                </div>
            </div>
        </section>
    );
}

function HomePage() {
    return (
        <>
            <section className="kg-fig-hero">
                <div className="kg-container kg-fig-hero-wrap">
                    <div className="kg-fig-hero-copy">
                        <h1>A place for your business</h1>
                        <p>
                            Build a calmer landing page with softer visuals, clear sections, and a structure
                            that makes your business easier to understand.
                        </p>
                        <a href="/pricing">Try now</a>
                    </div>

                    <div className="kg-fig-hero-device" aria-hidden="true">
                        <div className="kg-fig-monitor">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="kg-fig-phone">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </section>

            <FigmaLogoRow />

            {figmaHomeFeatures.map((feature, index) => (
                <section className={`kg-fig-feature-row ${index % 2 === 1 ? "is-reverse" : ""}`} key={feature.title}>
                    <div className="kg-container kg-fig-feature-wrap">
                        <div className={`kg-fig-device-card ${feature.artClass}`} aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="kg-fig-feature-copy">
                            <p className="kg-fig-kicker">{feature.eyebrow}</p>
                            <h2>{feature.title}</h2>
                            <p>{feature.text}</p>
                            <a href="/portfolio">Learn more</a>
                        </div>
                    </div>
                </section>
            ))}

            <section className="kg-fig-blog-promo">
                <div className="kg-container">
                    <div className="kg-fig-blog-banner">
                        <div>
                            <p className="kg-fig-kicker kg-fig-kicker--inverse">Editorial</p>
                            <h2>Check out our blog</h2>
                            <p>Bring articles and thought pieces into the same visual system as the product pages.</p>
                        </div>

                        <div className="kg-fig-blog-banner-grid">
                            {figmaBlogPosts.slice(0, 3).map((post) => (
                                <article className="kg-fig-blog-banner-card" key={post.title}>
                                    <div className={`kg-fig-blog-card-media ${post.imageClass}`} />
                                    <h3>{post.title}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="kg-fig-inline-cta">
                <div className="kg-container">
                    <h2>Take your first leap towards success</h2>
                    <p>Build a sharper first impression with calmer structure and cleaner visual rhythm.</p>
                    <a href="/pricing">Try now</a>
                </div>
            </section>

            <section className="kg-fig-reviews">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">Reviews from our users</p>
                        <h2>Reviews from our users</h2>
                    </div>

                    <div className="kg-fig-review-grid">
                        {figmaReviews.map((review) => (
                            <article className="kg-fig-review-card" key={review.name}>
                                <div className="kg-fig-stars">*****</div>
                                <p>{review.quote}</p>
                                <strong>{review.name}</strong>
                                <span>{review.role}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-showcase">
                <div className="kg-container kg-fig-showcase-wrap">
                    <div className="kg-fig-showcase-copy">
                        <p className="kg-fig-kicker kg-fig-kicker--inverse">Feature</p>
                        <h2>Experience the best</h2>
                        <p>Use one stronger visual block to break the page rhythm and make the experience feel more premium.</p>
                        <a href="/about">Learn more</a>
                    </div>
                    <div className="kg-fig-showcase-art" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </section>

            <FigmaAppsSection />
            <FigmaBottomCta />
        </>
    );
}

function LandingFooter() {
    return (
        <footer className="kg-footer kg-footer--landing">
            <div className="kg-container kg-footer-inner kg-footer-inner--landing">
                <div className="kg-footer-top kg-footer-top--landing">
                    <div className="kg-footer-brandline">
                        <strong>Fox Tech Solutions</strong>
                        <p>Simple and intuitive pages built with calmer hierarchy.</p>
                    </div>
                </div>

                <div className="kg-footer-grid kg-footer-grid--landing">
                    {landingFooterGroups.map((group) => (
                        <div className="kg-footer-column" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="kg-footer-links">
                                {group.links.map((link) => (
                                    <a href={link.href} key={`${group.title}-${link.href}`}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="kg-footer-bottom kg-footer-bottom--landing">
                    <p>&copy; {new Date().getFullYear()} Fox Tech Solutions</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

function DefaultFooter() {
    return (
        <footer className="kg-footer">
            <div className="kg-container kg-footer-inner">
                <div className="kg-footer-top">
                    <div className="kg-footer-brand">
                        <span className="kg-brand-mark kg-brand-mark--footer">FT</span>
                        <div>
                            <strong>Fox Tech Solutions</strong>
                            <p>
                                A calmer, more premium digital presence for businesses that need better
                                design structure online.
                            </p>
                        </div>
                    </div>

                    <a className="kg-footer-cta" href="/contact">
                        Book a project call
                    </a>
                </div>

                <div className="kg-footer-grid">
                    {footerGroups.map((group) => (
                        <div className="kg-footer-column" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="kg-footer-links">
                                {group.links.map((link) => (
                                    <a href={link.href} key={link.href}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="kg-footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Fox Tech Solutions</p>
                    <p>Nairobi, Kenya</p>
                </div>
            </div>
        </footer>
    );
}

function CategoryPage({ page }) {
    return (
        <>
            <section className="kg-inner-hero">
                <div className="kg-container">
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                </div>
            </section>

            <section className="kg-section">
                <div className="kg-container">
                    <div className="kg-service-grid">
                        {page.cards.map((card) => (
                            <article className="kg-service-card" key={card.href}>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <a href={card.href}>Open page</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function DetailPage({ page }) {
    return (
        <>
            <section className="kg-inner-hero">
                <div className="kg-container">
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                </div>
            </section>

            <section className="kg-section">
                <div className="kg-container">
                    <div className="kg-detail-card">
                        <h2>What you get</h2>
                        <ul>
                            {page.bullets.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <a className="kg-cta" href="/contact">
                            Request this service
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

function EmailSetupPage({ page }) {
    return (
        <>
            <section className="kg-email-hero">
                <div className="kg-container kg-email-hero-wrap">
                    <div className="kg-email-copy">
                        <p className="kg-email-kicker">Get Reliable</p>
                        <h1>{page.heading}</h1>
                        <p className="kg-email-sub">{page.summary}</p>
                        <a href="/contact">See Packages</a>
                    </div>

                    <div className="kg-email-visual" aria-hidden="true">
                        <div className="kg-email-monitor">
                            <div className="kg-email-monitor-top" />
                            <div className="kg-email-monitor-content">
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className="kg-email-phone" />
                    </div>
                </div>
            </section>

            <section className="kg-email-coming">
                <div className="kg-container">
                    <h2>Coming soon...</h2>
                </div>
            </section>

            <section className="kg-email-consult">
                <div className="kg-container">
                    <h2>FREE Consultation Available!</h2>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function LogoDesignPage({ page }) {
    const packageTrackRef = useRef(null);
    const packageLoopWidthRef = useRef(0);
    const isNormalizingRef = useRef(false);
    const hasInitializedRef = useRef(false);
    const loopedLogoPackages = useMemo(() => [...logoPackages, ...logoPackages, ...logoPackages], []);

    const getPackageStep = (element) => {
        const firstCard = element.querySelector(".kg-logo-package-card");
        const computedStyles = window.getComputedStyle(element);
        const gap = Number.parseFloat(computedStyles.columnGap || computedStyles.gap || "0") || 0;

        if (!firstCard) {
            return Math.max(element.clientWidth * 0.8, 240);
        }

        return firstCard.getBoundingClientRect().width + gap;
    };

    const normalizePackageLoop = (element) => {
        const singleSetWidth = packageLoopWidthRef.current;
        if (singleSetWidth <= 0 || isNormalizingRef.current) {
            return;
        }

        if (element.scrollLeft >= singleSetWidth * 2) {
            isNormalizingRef.current = true;
            element.scrollLeft -= singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
            return;
        }

        if (element.scrollLeft <= 0) {
            isNormalizingRef.current = true;
            element.scrollLeft += singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
        }
    };

    const scrollPackages = (direction = "next") => {
        const element = packageTrackRef.current;
        if (!element) {
            return;
        }

        const step = getPackageStep(element);

        if (direction === "next") {
            element.scrollBy({ left: step, behavior: "smooth" });
            return;
        }

        if (element.scrollLeft <= 4 && packageLoopWidthRef.current > 0) {
            element.scrollLeft += packageLoopWidthRef.current;
        }

        element.scrollBy({ left: -step, behavior: "smooth" });
    };

    useEffect(() => {
        const element = packageTrackRef.current;
        if (!element) {
            return undefined;
        }

        const syncPackageLoopMeta = () => {
            packageLoopWidthRef.current = Math.max(0, element.scrollWidth / 3);

            if (!hasInitializedRef.current && packageLoopWidthRef.current > 0) {
                element.scrollLeft = packageLoopWidthRef.current;
                hasInitializedRef.current = true;
            }
        };

        const onTrackScroll = () => normalizePackageLoop(element);

        syncPackageLoopMeta();
        element.addEventListener("scroll", onTrackScroll, { passive: true });
        window.addEventListener("resize", syncPackageLoopMeta);
        const autoSlideId = window.setInterval(() => scrollPackages("next"), 5000);

        return () => {
            element.removeEventListener("scroll", onTrackScroll);
            window.removeEventListener("resize", syncPackageLoopMeta);
            window.clearInterval(autoSlideId);
        };
    }, []);

    return (
        <>
            <section className="kg-logo-hero">
                <div className="kg-container kg-logo-hero-wrap">
                    <div className="kg-logo-hero-copy">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                        <a href="#logo-packages">SEE PACKAGES</a>
                    </div>

                    <div className="kg-logo-hero-video" aria-hidden="true">
                        <p>Professional Logo Design in Kenya - Fox Tech Solutions</p>
                        <span>&#9658;</span>
                        <small>Watch on YouTube</small>
                    </div>
                </div>
            </section>

            <section className="kg-logo-packages" id="logo-packages">
                <div className="kg-container">
                    <h2>Choose Your Logo Package</h2>
                    <div className="kg-logo-pack-scroll">
                        <button
                            aria-label="Scroll logo packages left"
                            className="kg-logo-pack-nav kg-logo-pack-nav--prev"
                            onClick={() => scrollPackages("prev")}
                            type="button"
                        >
                            &lsaquo;
                        </button>

                        <div className="kg-logo-package-grid" ref={packageTrackRef}>
                            {loopedLogoPackages.map((item, index) => (
                                <article className="kg-logo-package-card" key={`${item.title}-${index}`}>
                                    <div className={`kg-logo-package-media ${item.imageClass}`} />
                                    <div className="kg-logo-package-copy">
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <button
                            aria-label="Scroll logo packages right"
                            className="kg-logo-pack-nav kg-logo-pack-nav--next"
                            onClick={() => scrollPackages("next")}
                            type="button"
                        >
                            &rsaquo;
                        </button>
                    </div>
                </div>
            </section>

            <section className="kg-logo-samples">
                <div className="kg-container">
                    <h2>Logo Portfolio Samples</h2>
                    <div className="kg-logo-sample-grid">
                        {logoPortfolioSamples.map((item) => (
                            <article className="kg-logo-sample-card" key={item.name}>
                                <div className={`kg-logo-sample-mark ${item.styleClass}`} aria-hidden="true">
                                    {item.mark}
                                </div>
                                <h3>{item.name}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-logo-expect">
                <div className="kg-container">
                    <h2>Here&apos;s What to Expect</h2>
                    <div className="kg-logo-expect-grid">
                        {logoExpectations.map((item) => (
                            <article className="kg-logo-expect-card" key={item.title}>
                                <span aria-hidden="true">&#10038;</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-logo-tips">
                <div className="kg-container">
                    <h2>Helpful Logo Design Tips</h2>
                    <div className="kg-logo-tip-grid">
                        {logoTips.map((item) => (
                            <article className="kg-logo-tip-card" key={item.title}>
                                <div className={`kg-logo-tip-media ${item.imageClass}`} />
                                <h3>{item.title}</h3>
                                <p>{item.excerpt}</p>
                                <a href="/learn">Read More</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-logo-faq">
                <div className="kg-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="kg-logo-faq-list">
                        {logoFaqs.map((item) => (
                            <details key={item.question}>
                                <summary>{item.question}</summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-logo-cta">
                <div className="kg-container">
                    <h2>FREE Consultation Available!</h2>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function SocialMediaDesignPage({ page }) {
    const packageTrackRef = useRef(null);
    const packageLoopWidthRef = useRef(0);
    const isNormalizingRef = useRef(false);
    const hasInitializedRef = useRef(false);
    const loopedSocialPackages = useMemo(() => [...socialPackages, ...socialPackages, ...socialPackages], []);

    const getPackageStep = (element) => {
        const firstCard = element.querySelector(".kg-social-pack-card");
        const computedStyles = window.getComputedStyle(element);
        const gap = Number.parseFloat(computedStyles.columnGap || computedStyles.gap || "0") || 0;

        if (!firstCard) {
            return Math.max(element.clientWidth * 0.8, 240);
        }

        return firstCard.getBoundingClientRect().width + gap;
    };

    const normalizePackageLoop = (element) => {
        const singleSetWidth = packageLoopWidthRef.current;
        if (singleSetWidth <= 0 || isNormalizingRef.current) {
            return;
        }

        if (element.scrollLeft >= singleSetWidth * 2) {
            isNormalizingRef.current = true;
            element.scrollLeft -= singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
            return;
        }

        if (element.scrollLeft <= 0) {
            isNormalizingRef.current = true;
            element.scrollLeft += singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
        }
    };

    const scrollPackages = (direction = "next") => {
        const element = packageTrackRef.current;
        if (!element) {
            return;
        }

        const step = getPackageStep(element);

        if (direction === "next") {
            element.scrollBy({ left: step, behavior: "smooth" });
            return;
        }

        if (element.scrollLeft <= 4 && packageLoopWidthRef.current > 0) {
            element.scrollLeft += packageLoopWidthRef.current;
        }

        element.scrollBy({ left: -step, behavior: "smooth" });
    };

    useEffect(() => {
        const element = packageTrackRef.current;
        if (!element) {
            return undefined;
        }

        const syncPackageLoopMeta = () => {
            packageLoopWidthRef.current = Math.max(0, element.scrollWidth / 3);

            if (!hasInitializedRef.current && packageLoopWidthRef.current > 0) {
                element.scrollLeft = packageLoopWidthRef.current;
                hasInitializedRef.current = true;
            }
        };

        const onTrackScroll = () => normalizePackageLoop(element);

        syncPackageLoopMeta();
        element.addEventListener("scroll", onTrackScroll, { passive: true });
        window.addEventListener("resize", syncPackageLoopMeta);
        const autoSlideId = window.setInterval(() => scrollPackages("next"), 5000);

        return () => {
            element.removeEventListener("scroll", onTrackScroll);
            window.removeEventListener("resize", syncPackageLoopMeta);
            window.clearInterval(autoSlideId);
        };
    }, []);

    return (
        <>
            <section className="kg-social-hero">
                <div className="kg-container kg-social-hero-wrap">
                    <div className="kg-social-hero-copy">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                        <a href="#social-packages">SEE PACKAGES</a>
                    </div>

                    <div className="kg-social-hero-art" aria-hidden="true">
                        <span className="kg-social-chip kg-social-chip--1">f</span>
                        <span className="kg-social-chip kg-social-chip--2">IG</span>
                        <span className="kg-social-chip kg-social-chip--3">X</span>
                        <span className="kg-social-chip kg-social-chip--4">YT</span>
                    </div>
                </div>
            </section>

            <section className="kg-social-packages" id="social-packages">
                <div className="kg-container">
                    <h2>Select Your Social Package</h2>
                    <div className="kg-social-pack-scroll">
                        <button
                            aria-label="Scroll social packages left"
                            className="kg-social-pack-nav kg-social-pack-nav--prev"
                            onClick={() => scrollPackages("prev")}
                            type="button"
                        >
                            &lsaquo;
                        </button>

                        <div className="kg-social-pack-grid" ref={packageTrackRef}>
                            {loopedSocialPackages.map((item, index) => (
                                <article className="kg-social-pack-card" key={`${item.title}-${index}`}>
                                    <div className={`kg-social-pack-media ${item.imageClass}`} />
                                    <div className="kg-social-pack-copy">
                                        <h3>
                                            {item.title} &#8594;
                                        </h3>
                                        <p>{item.price}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <button
                            aria-label="Scroll social packages right"
                            className="kg-social-pack-nav kg-social-pack-nav--next"
                            onClick={() => scrollPackages("next")}
                            type="button"
                        >
                            &rsaquo;
                        </button>
                    </div>
                </div>
            </section>

            <section className="kg-social-samples">
                <div className="kg-container">
                    <p className="kg-social-helper-link">
                        <a href="/design/logo-design">Go to logo design services</a>
                    </p>
                    <h2>Portfolio Samples, To Get You Inspired</h2>
                    <div className="kg-social-sample-grid">
                        {socialPortfolioSamples.map((item) => (
                            <article className="kg-social-sample-card" key={item.title}>
                                <div className={`kg-social-sample-media ${item.imageClass}`} />
                                <h3>{item.title}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-social-benefits">
                <div className="kg-container">
                    <h2>The benefits of Social Media Graphics</h2>
                    <div className="kg-social-benefit-grid">
                        {socialBenefits.map((item) => (
                            <article className="kg-social-benefit-card" key={item.title}>
                                <span aria-hidden="true">&#10003;</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-social-faq">
                <div className="kg-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="kg-social-faq-list">
                        {socialFaqs.map((item) => (
                            <details key={item.question}>
                                <summary>{item.question}</summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-social-tips">
                <div className="kg-container">
                    <h2>Tips to Grow Your Social Presence</h2>
                    <div className="kg-social-tip-grid">
                        {socialTips.map((item) => (
                            <article className="kg-social-tip-card" key={item.title}>
                                <div className={`kg-social-tip-media ${item.imageClass}`} />
                                <h3>{item.title}</h3>
                                <p>{item.excerpt}</p>
                                <a href="/learn">Read More</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-social-cta">
                <div className="kg-container">
                    <h2>Free Consultation Available</h2>
                    <a href="/contact">SEND ENQUIRY</a>
                </div>
            </section>
        </>
    );
}

function FullBrandingCarouselSection({ section }) {
    const trackRef = useRef(null);
    const loopWidthRef = useRef(0);
    const isNormalizingRef = useRef(false);
    const hasInitializedRef = useRef(false);
    const loopedCards = useMemo(() => [...section.cards, ...section.cards, ...section.cards], [section.cards]);

    const getStep = (element) => {
        const firstCard = element.querySelector(".kg-brand-card");
        const computedStyles = window.getComputedStyle(element);
        const gap = Number.parseFloat(computedStyles.columnGap || computedStyles.gap || "0") || 0;

        if (!firstCard) {
            return Math.max(element.clientWidth * 0.8, 240);
        }

        return firstCard.getBoundingClientRect().width + gap;
    };

    const normalizeLoop = (element) => {
        const singleSetWidth = loopWidthRef.current;
        if (singleSetWidth <= 0 || isNormalizingRef.current) {
            return;
        }

        if (element.scrollLeft >= singleSetWidth * 2) {
            isNormalizingRef.current = true;
            element.scrollLeft -= singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
            return;
        }

        if (element.scrollLeft <= 0) {
            isNormalizingRef.current = true;
            element.scrollLeft += singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
        }
    };

    const scrollCards = (direction = "next") => {
        const element = trackRef.current;
        if (!element) {
            return;
        }

        const step = getStep(element);

        if (direction === "next") {
            element.scrollBy({ left: step, behavior: "smooth" });
            return;
        }

        if (element.scrollLeft <= 4 && loopWidthRef.current > 0) {
            element.scrollLeft += loopWidthRef.current;
        }

        element.scrollBy({ left: -step, behavior: "smooth" });
    };

    useEffect(() => {
        const element = trackRef.current;
        if (!element) {
            return undefined;
        }

        const syncLoopMeta = () => {
            loopWidthRef.current = Math.max(0, element.scrollWidth / 3);

            if (!hasInitializedRef.current && loopWidthRef.current > 0) {
                element.scrollLeft = loopWidthRef.current;
                hasInitializedRef.current = true;
            }
        };

        const onTrackScroll = () => normalizeLoop(element);

        syncLoopMeta();
        element.addEventListener("scroll", onTrackScroll, { passive: true });
        window.addEventListener("resize", syncLoopMeta);
        const autoSlideId = window.setInterval(() => scrollCards("next"), 5000);

        return () => {
            element.removeEventListener("scroll", onTrackScroll);
            window.removeEventListener("resize", syncLoopMeta);
            window.clearInterval(autoSlideId);
        };
    }, []);

    return (
        <section className="kg-brand-section" key={section.title}>
            <div className="kg-container">
                <h2>{section.title}</h2>
                <div className="kg-brand-pack-scroll">
                    <button
                        aria-label={`Scroll ${section.title} left`}
                        className="kg-brand-pack-nav kg-brand-pack-nav--prev"
                        onClick={() => scrollCards("prev")}
                        type="button"
                    >
                        &lsaquo;
                    </button>

                    <div className="kg-brand-grid" ref={trackRef}>
                        {loopedCards.map((item, index) => (
                            <article className="kg-brand-card" key={`${item.title}-${index}`}>
                                <div className={`kg-brand-media ${item.imageClass}`} />
                                <div className="kg-brand-copy">
                                    <h3>
                                        {item.title} &#8594;
                                    </h3>
                                    <p>{item.price}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button
                        aria-label={`Scroll ${section.title} right`}
                        className="kg-brand-pack-nav kg-brand-pack-nav--next"
                        onClick={() => scrollCards("next")}
                        type="button"
                    >
                        &rsaquo;
                    </button>
                </div>
            </div>
        </section>
    );
}

function FullBrandingPage({ page }) {
    return (
        <>
            <section className="kg-brand-hero">
                <div className="kg-container">
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                </div>
            </section>

            {fullBrandingSections.map((section) => (
                <FullBrandingCarouselSection key={section.title} section={section} />
            ))}

            <section className="kg-brand-cta">
                <div className="kg-container">
                    <h2>FREE Consultation Available!</h2>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function CustomWebsitePage({ page }) {
    return (
        <>
            <section className="kg-web-hero">
                <div className="kg-container kg-web-hero-wrap">
                    <div className="kg-web-hero-copy">
                        <p className="kg-web-kicker">Professional Web</p>
                        <h1>Design in Kenya</h1>
                        <p>{page.summary}</p>
                        <a href="#web-packages">SEE PACKAGES</a>
                    </div>

                    <div className="kg-web-hero-art" aria-hidden="true">
                        <div className="kg-web-hero-main" />
                        <span className="kg-web-hero-badge">Great Again!</span>
                        <button type="button">Want a Website</button>
                    </div>
                </div>
            </section>

            <section className="kg-web-packages" id="web-packages">
                <div className="kg-container">
                    <h2>Choose a Package</h2>
                    <div className="kg-web-pack-grid">
                        {customWebsitePackages.map((item) => (
                            <article className="kg-web-pack-card" key={item.title}>
                                <div className={`kg-web-pack-media ${item.imageClass}`} />
                                <div className="kg-web-pack-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    <strong>{item.price}</strong>
                                    <span>{item.badge}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-web-samples">
                <div className="kg-container">
                    <h2>Website Portfolio Samples</h2>
                    <div className="kg-web-sample-grid">
                        {customWebsiteSamples.map((item) => (
                            <article className="kg-web-sample-card" key={item.title}>
                                <div className={`kg-web-sample-media ${item.imageClass}`} />
                                <h3>{item.title}</h3>
                                <p>{item.link}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-web-benefits">
                <div className="kg-container">
                    <h2>This is what you'll achieve with professional design in Kenya</h2>
                    <div className="kg-web-benefit-grid">
                        {customWebsiteBenefits.map((item) => (
                            <article className="kg-web-benefit-card" key={item.title}>
                                <span aria-hidden="true">?</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-web-tips">
                <div className="kg-container">
                    <h2>Tips About Websites</h2>
                    <div className="kg-web-tip-grid">
                        {customWebsiteTips.map((item) => (
                            <article className="kg-web-tip-card" key={item.title}>
                                <div className={`kg-web-tip-media ${item.imageClass}`} />
                                <h3>{item.title}</h3>
                                <p>{item.excerpt}</p>
                                <a href="/learn">Read More</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-web-faq">
                <div className="kg-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="kg-web-faq-list">
                        {customWebsiteFaqs.map((item) => (
                            <details key={item.question}>
                                <summary>{item.question}</summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-web-cta">
                <div className="kg-container">
                    <p>Do you have any Questions?</p>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function EcommercePage({ page }) {
    const packageTrackRef = useRef(null);
    const packageLoopWidthRef = useRef(0);
    const isNormalizingRef = useRef(false);
    const hasInitializedRef = useRef(false);
    const loopedEcommercePackages = useMemo(() => [...ecommercePackages, ...ecommercePackages, ...ecommercePackages], []);

    const getPackageStep = (element) => {
        const firstCard = element.querySelector(".kg-ecom-pack-card");
        const computedStyles = window.getComputedStyle(element);
        const gap = Number.parseFloat(computedStyles.columnGap || computedStyles.gap || "0") || 0;

        if (!firstCard) {
            return Math.max(element.clientWidth * 0.82, 260);
        }

        return firstCard.getBoundingClientRect().width + gap;
    };

    const normalizePackageLoop = (element) => {
        const singleSetWidth = packageLoopWidthRef.current;
        if (singleSetWidth <= 0 || isNormalizingRef.current) {
            return;
        }

        if (element.scrollLeft >= singleSetWidth * 2) {
            isNormalizingRef.current = true;
            element.scrollLeft -= singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
            return;
        }

        if (element.scrollLeft <= 0) {
            isNormalizingRef.current = true;
            element.scrollLeft += singleSetWidth;
            window.requestAnimationFrame(() => {
                isNormalizingRef.current = false;
            });
        }
    };

    const scrollPackages = (direction = "next") => {
        const element = packageTrackRef.current;
        if (!element) {
            return;
        }

        const step = getPackageStep(element);

        if (direction === "next") {
            element.scrollBy({ left: step, behavior: "smooth" });
            return;
        }

        if (element.scrollLeft <= 4 && packageLoopWidthRef.current > 0) {
            element.scrollLeft += packageLoopWidthRef.current;
        }

        element.scrollBy({ left: -step, behavior: "smooth" });
    };

    useEffect(() => {
        const element = packageTrackRef.current;
        if (!element) {
            return undefined;
        }

        const syncPackageLoopMeta = () => {
            packageLoopWidthRef.current = Math.max(0, element.scrollWidth / 3);

            if (!hasInitializedRef.current && packageLoopWidthRef.current > 0) {
                element.scrollLeft = packageLoopWidthRef.current;
                hasInitializedRef.current = true;
            }
        };

        const onTrackScroll = () => normalizePackageLoop(element);

        syncPackageLoopMeta();
        element.addEventListener("scroll", onTrackScroll, { passive: true });
        window.addEventListener("resize", syncPackageLoopMeta);
        const autoSlideId = window.setInterval(() => scrollPackages("next"), 5000);

        return () => {
            element.removeEventListener("scroll", onTrackScroll);
            window.removeEventListener("resize", syncPackageLoopMeta);
            window.clearInterval(autoSlideId);
        };
    }, []);

    return (
        <>
            <section className="kg-ecom-hero">
                <div className="kg-container kg-ecom-hero-wrap">
                    <div className="kg-ecom-copy">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                        <a href="#ecom-packages">SEE PACKAGES</a>
                    </div>

                    <div className="kg-ecom-art" aria-hidden="true">
                        <div className="kg-ecom-art-main" />
                        <span className="kg-ecom-art-chip">Mobile Shopping For Your Business</span>
                    </div>
                </div>
            </section>

            <section className="kg-ecom-packages" id="ecom-packages">
                <div className="kg-container">
                    <h2>Choose a Package</h2>
                    <div className="kg-ecom-pack-scroll">
                        <button
                            aria-label="Scroll packages left"
                            className="kg-ecom-pack-nav kg-ecom-pack-nav--prev"
                            onClick={() => scrollPackages("prev")}
                            type="button"
                        >
                            &lsaquo;
                        </button>

                        <div className="kg-ecom-pack-grid" ref={packageTrackRef}>
                            {loopedEcommercePackages.map((item, index) => (
                                <article className="kg-ecom-pack-card" key={`${item.title}-${index}`}>
                                    <div className={`kg-ecom-pack-media ${item.imageClass}`} />
                                    <div className="kg-ecom-pack-copy">
                                        <h3>{item.title}</h3>
                                        {item.subtitle ? <p>{item.subtitle}</p> : null}
                                        <strong>{item.price}</strong>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <button
                            aria-label="Scroll packages right"
                            className="kg-ecom-pack-nav kg-ecom-pack-nav--next"
                            onClick={() => scrollPackages("next")}
                            type="button"
                        >
                            &rsaquo;
                        </button>
                    </div>
                </div>
            </section>

            <section className="kg-ecom-samples">
                <div className="kg-container">
                    <h2>See Past Clients Samples</h2>
                    <div className="kg-ecom-sample-grid">
                        {ecommerceSamples.map((item) => (
                            <article className="kg-ecom-sample-card" key={item.title}>
                                <div className={`kg-ecom-sample-media ${item.imageClass}`} />
                                <h3>{item.title}</h3>
                                <p>{item.link}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-ecom-reasons">
                <div className="kg-container">
                    <h2>Why You Need an Ecommerce Website in Kenya</h2>
                    <div className="kg-ecom-reason-grid">
                        {ecommerceReasons.map((item) => (
                            <article className="kg-ecom-reason-card" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-ecom-achieve">
                <div className="kg-container">
                    <h2>Here&apos;s What to Expect</h2>
                    <p className="kg-ecom-achieve-sub">
                        This is what you&apos;ll achieve amazing results with an ecommerce website in Kenya.
                    </p>
                    <div className="kg-ecom-achieve-grid">
                        {ecommerceAchievements.map((item) => (
                            <article className="kg-ecom-achieve-card" key={item.title}>
                                <span aria-hidden="true">?</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-ecom-tips">
                <div className="kg-container">
                    <h2>Tips About Ecommerce</h2>
                    <div className="kg-ecom-tip-grid">
                        {ecommerceTips.map((item) => (
                            <article className="kg-ecom-tip-card" key={item.title}>
                                <div className={`kg-ecom-tip-media ${item.imageClass}`} />
                                <h3>{item.title}</h3>
                                <p>{item.excerpt}</p>
                                <a href="/learn">Read More</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-ecom-faq">
                <div className="kg-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="kg-ecom-faq-list">
                        {ecommerceFaqs.map((item) => (
                            <details key={item.question}>
                                <summary>{item.question}</summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-ecom-cta">
                <div className="kg-container">
                    <p>Turn your e-commerce dream into reality</p>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function HostingPage({ page }) {
    return (
        <>
            <section className="kg-host-hero">
                <div className="kg-container kg-host-hero-wrap">
                    <div className="kg-host-hero-copy">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                        <a href="#hosting-plans">Start Hosting</a>
                    </div>

                    <div className="kg-host-hero-visual" aria-hidden="true">
                        <div className="kg-host-screen" />
                        <div className="kg-host-dots">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </section>

            <section className="kg-host-plans" id="hosting-plans">
                <div className="kg-container">
                    <h2>Best Web Hosting in Kenya with Free SSL Certificate</h2>
                    <div className="kg-host-plan-grid">
                        {hostingPlans.map((plan) => (
                            <article className={`kg-host-plan-card ${plan.themeClass}`} key={plan.name}>
                                <header>
                                    <h3>{plan.name}</h3>
                                    <p>{plan.tagline}</p>
                                </header>

                                <div className="kg-host-price-wrap">
                                    <p>Starting from</p>
                                    <p className="kg-host-price">
                                        KSh <strong>{plan.price}</strong>
                                    </p>
                                </div>

                                <ul>
                                    {plan.features.map((feature) => (
                                        <li key={feature}>
                                            <span aria-hidden="true">&bull;</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="/contact">{plan.cta}</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-host-guarantees">
                <div className="kg-container">
                    <h2>We Guarantee</h2>
                    <div className="kg-host-guarantee-grid">
                        {hostingGuarantees.map((item, index) => (
                            <article className="kg-host-guarantee-card" key={item.title}>
                                <span aria-hidden="true">{index + 1}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-host-domain-call">
                <div className="kg-container kg-host-domain-wrap">
                    <div>
                        <h2>Do You have a domain name?</h2>
                        <p>Start by checking your domain availability instantly.</p>
                    </div>

                    <form className="kg-host-domain-form" onSubmit={(event) => event.preventDefault()}>
                        <input placeholder="Search for your domain" type="text" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </section>

            <section className="kg-host-info">
                <div className="kg-container kg-host-info-wrap">
                    <div className="kg-host-info-copy">
                        <h2>What is Web Hosting in Kenya?</h2>
                        <p>
                            Web hosting stores your website files and makes your site available online. Choosing
                            the right hosting gives you better performance, stronger security, and stable uptime
                            for your business.
                        </p>
                    </div>

                    <aside className="kg-host-price-card">
                        <p>Starting from</p>
                        <strong>KSh 2,900</strong>
                        <a href="#hosting-plans">Order Now</a>
                    </aside>
                </div>
            </section>

            <section className="kg-host-why">
                <div className="kg-container">
                    <h2>Why Choose Us</h2>
                    <div className="kg-host-why-copy">
                        {hostingWhyPoints.map((point) => (
                            <p key={point}>{point}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-host-learn">
                <div className="kg-container">
                    <h2>Learn Something About Web Hosting</h2>
                    <div className="kg-host-learn-grid">
                        {hostingLearnPosts.map((post) => (
                            <article className="kg-host-learn-card" key={post.title}>
                                <div className={`kg-host-learn-media ${post.imageClass}`} />
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href="/learn">Read More</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-host-faq">
                <div className="kg-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="kg-host-faq-list">
                        {hostingFaqs.map((faq) => (
                            <details key={faq.question}>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-host-cta">
                <div className="kg-container">
                    <p>Need help finding the right plan?</p>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function VpsPage({ page }) {
    return (
        <>
            <section className="kg-vps-hero">
                <div className="kg-container kg-vps-hero-inner">
                    <h1>{page.heading}</h1>
                    {page.summary ? <p>{page.summary}</p> : null}
                    <span className="kg-vps-hero-mark" aria-hidden="true">
                        &#709;
                    </span>
                </div>
            </section>

            <section className="kg-vps-plans">
                <div className="kg-container">
                    <h2>Choose Your VPS Hosting Plan</h2>
                    <div className="kg-vps-plan-grid">
                        {vpsPlans.map((plan) => (
                            <article className={`kg-vps-plan-card ${plan.popular ? "kg-vps-plan-card--popular" : ""}`} key={plan.name}>
                                {plan.popular ? <p className="kg-vps-popular">Most Popular</p> : null}
                                <h3>{plan.name}</h3>
                                <p className="kg-vps-tagline">{plan.tagline}</p>
                                <p className="kg-vps-price">Ksh. {plan.price}</p>
                                <p className="kg-vps-period">per month</p>
                                <a href="/contact">ORDER NOW</a>
                                <p className="kg-vps-feature-title">Features</p>
                                <ul>
                                    <li>
                                        <span aria-hidden="true">&#10003;</span>
                                        {plan.vcpu}
                                    </li>
                                    <li>
                                        <span aria-hidden="true">&#10003;</span>
                                        {plan.ram}
                                    </li>
                                    <li>
                                        <span aria-hidden="true">&#10003;</span>
                                        {plan.storage}
                                    </li>
                                    <li>
                                        <span aria-hidden="true">&#10003;</span>
                                        Full cPanel access
                                    </li>
                                    <li>
                                        <span aria-hidden="true">&#10003;</span>
                                        SSH &amp; Root access
                                    </li>
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-vps-faq">
                <div className="kg-container">
                    <h2>FAQs about VPS Hosting in Kenya</h2>
                    <div className="kg-vps-faq-list">
                        {vpsFaqs.map((faq) => (
                            <details key={faq.question}>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-vps-cta">
                <div className="kg-container">
                    <h2>Need Some Help Deciding?</h2>
                    <p>Our experts are here to assist you!</p>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function DomainsPage({ page }) {
    return (
        <>
            <section className="kg-domain-hero">
                <div className="kg-container">
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                    <form className="kg-domain-search" onSubmit={(event) => event.preventDefault()}>
                        <input placeholder="Type the domain you want" type="text" />
                        <button type="submit">SEARCH</button>
                    </form>
                    <div className="kg-domain-benefits">
                        {domainHeroBenefits.map((item) => (
                            <span className="kg-domain-benefit" key={item}>
                                <span aria-hidden="true">?</span>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-domain-overview">
                <div className="kg-container kg-domain-overview-wrap">
                    <div className="kg-domain-highlights">
                        <h2 className="kg-domain-overview-title">How to Find the Perfect Domain Name in Kenya</h2>
                        {domainHighlights.map((item) => (
                            <article className="kg-domain-highlight" key={item.title}>
                                <span aria-hidden="true">?</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="kg-domain-photo" aria-hidden="true" />
                </div>
            </section>

            <section className="kg-domain-finder">
                <div className="kg-container">
                    <h2>Find a domain name</h2>
                    <p>Search if your preferred business domain is available instantly.</p>
                    <form className="kg-domain-search kg-domain-search--compact" onSubmit={(event) => event.preventDefault()}>
                        <input placeholder="eg. foxtechsolutions.com" type="text" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </section>

            <section className="kg-domain-pricing">
                <div className="kg-container">
                    <div className="kg-domain-pricing-card">
                        <h2>Find the price of a specific domain extension</h2>
                        <p>Pricing is shown for annual registration, renewal, and transfer.</p>

                        <div className="kg-domain-table-wrap">
                            <table className="kg-domain-table">
                                <thead>
                                    <tr>
                                        <th>Extension</th>
                                        <th>Registration</th>
                                        <th>Renewal</th>
                                        <th>Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {domainPriceRows.map((row) => (
                                        <tr key={row.extension}>
                                            <td>{row.extension}</td>
                                            <td>{row.registration}</td>
                                            <td>{row.renewal}</td>
                                            <td>{row.transfer}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button className="kg-domain-status-btn" type="button">
                            Check Your Domain Status
                        </button>
                    </div>
                </div>
            </section>

            <section className="kg-domain-faq">
                <div className="kg-container">
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know before registering your domain.</p>

                    <div className="kg-domain-faq-list">
                        {domainFaqs.map((faq) => (
                            <details key={faq.question}>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-domain-cta">
                <div className="kg-container">
                    <p>Still have questions about domain registration?</p>
                    <a href="/contact">Contact Us</a>
                </div>
            </section>
        </>
    );
}

function AdvertisePage({ page }) {
    return (
        <>
            <section className="kg-adv-hero">
                <div className="kg-container kg-adv-hero-wrap">
                    <div className="kg-adv-copy">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                        <a className="kg-adv-primary" href="/contact">
                            See What Works
                        </a>
                    </div>

                    <div className="kg-adv-visual" aria-hidden="true">
                        <div className="kg-adv-visual-main" />
                        <div className="kg-adv-visual-card">
                            Digital
                            <br />
                            business reality
                        </div>
                    </div>
                </div>
            </section>

            <section className="kg-adv-solutions">
                <div className="kg-container">
                    <h2>Marketing Solutions That Work</h2>
                    <div className="kg-adv-solution-grid">
                        {advertiseSolutions.map((item) => (
                            <article className="kg-adv-solution-card" key={item.title}>
                                <span aria-hidden="true">{item.icon}</span>
                                <h3>{item.title}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-adv-outcomes">
                <div className="kg-container">
                    <h2>Results we can deliver</h2>
                    <div className="kg-adv-outcome-grid">
                        {advertiseOutcomes.map((item) => (
                            <article className="kg-adv-outcome-card" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-adv-lead">
                <div className="kg-container kg-adv-lead-wrap">
                    <div className="kg-adv-lead-image" aria-hidden="true" />
                    <div className="kg-adv-lead-copy">
                        <h2>Improve Your Digital Marketing Knowledge</h2>
                        <p>
                            In the process of putting together our digital marketing plan, there are many
                            tactics to choose from and get right. Practical guidance is what sets strong teams
                            apart.
                        </p>
                        <p>
                            We have created an all-in-one starter guide to help you make informed decisions and
                            execute with confidence.
                        </p>
                        <a href="/free-guide">Get Your Free Copy</a>
                    </div>
                </div>
            </section>

            <section className="kg-adv-articles">
                <div className="kg-container">
                    <h2>Read Our Marketing Articles</h2>
                    <p className="kg-adv-sub">Your Guide to Digital Marketing in Kenya</p>

                    <div className="kg-adv-article-grid">
                        {advertiseArticles.map((article) => (
                            <article className="kg-adv-article-card" key={article.title}>
                                <div className={`kg-adv-article-media ${article.imageClass}`} />
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <a href="/learn">Read More</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-adv-cta">
                <div className="kg-container">
                    <p>Ready to take your marketing seriously?</p>
                    <a href="/contact">GET IN TOUCH</a>
                </div>
            </section>
        </>
    );
}

function PortfolioPage({ page }) {
    return (
        <>
            <section className="kg-fig-portfolio-hero">
                <div className="kg-container kg-fig-portfolio-hero-wrap">
                    <div className="kg-fig-portfolio-copy">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                        <a href="/pricing">Try now</a>
                    </div>
                    <div className="kg-fig-workspace-art kg-fig-workspace-art--hero" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </section>

            <section className="kg-fig-workspace-stage">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">Feature</p>
                        <h2>Adjust your workspace</h2>
                        <p>Shape the page around the offer, proof, and actions you want to foreground.</p>
                    </div>
                    <div className="kg-fig-workspace-art kg-fig-workspace-art--board" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </section>

            <section className="kg-fig-inline-cta">
                <div className="kg-container">
                    <h2>Take your first leap towards success</h2>
                    <p>A clear structure helps your best work feel easier to understand.</p>
                    <a href="/pricing">Try now</a>
                </div>
            </section>

            {figmaWorkspaceHighlights.slice(1).map((feature, index) => (
                <section className={`kg-fig-feature-row ${index % 2 === 0 ? "is-reverse" : ""}`} key={feature.title}>
                    <div className="kg-container kg-fig-feature-wrap">
                        <div className={`kg-fig-board-card ${feature.artClass}`} aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="kg-fig-feature-copy">
                            <p className="kg-fig-kicker">{feature.eyebrow}</p>
                            <h2>{feature.title}</h2>
                            <p>{feature.text}</p>
                            <a href="/pricing">Try now</a>
                        </div>
                    </div>
                </section>
            ))}

            <section className="kg-fig-showcase kg-fig-showcase--portfolio">
                <div className="kg-container kg-fig-showcase-wrap">
                    <div className="kg-fig-showcase-copy">
                        <p className="kg-fig-kicker kg-fig-kicker--inverse">Feature</p>
                        <h2>Experience the best</h2>
                        <p>A bold midpoint section mirrors the second homepage direction in your Figma board.</p>
                        <a href="/pricing">Try now</a>
                    </div>
                    <div className="kg-fig-showcase-art" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </section>

            <FigmaCaseStudies intro="Recent website and design directions presented in a calmer, more product-like case study layout." />
            <FigmaLogoRow variant="inline" />
            <FigmaAppsSection />
            <FigmaBottomCta summary="Build the portfolio page, then extend the same system to pricing, about, blog, and contact." />
        </>
    );
}

function ProofPage({ page }) {
    return (
        <>
            <section className="kg-fig-proof-hero">
                <div className="kg-container">
                    <p className="kg-fig-kicker">Proof</p>
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                </div>
            </section>

            <section className="kg-fig-reviews">
                <div className="kg-container">
                    <div className="kg-fig-review-grid">
                        {proofItems.map((item) => (
                            <article className="kg-fig-review-card" key={item.name}>
                                <div className="kg-fig-stars">5 stars</div>
                                <p>{item.text}</p>
                                <strong>{item.name}</strong>
                                <span>Client review</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FigmaCaseStudies intro="Proof works better when the testimonials and project stories support each other visually." />
            <FigmaBottomCta summary="Use reviews, case studies, and better page structure to make trust feel immediate." />
        </>
    );
}

function ResultsPage({ page }) {
    return (
        <>
            <section className="kg-fig-results-hero">
                <div className="kg-container">
                    <p className="kg-fig-kicker">Results</p>
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                </div>
            </section>

            <section className="kg-fig-results-stage">
                <div className="kg-container">
                    <div className="kg-fig-case-grid kg-fig-case-grid--wide">
                        {resultsProjects.map((project) => (
                            <article className="kg-fig-case-card" key={project.title}>
                                <a href="#" onClick={(event) => event.preventDefault()}>
                                    <div className="kg-fig-case-media kg-fig-case-media--1" />
                                    <h3>{project.title}</h3>
                                    <p>Cleaner structure, calmer hierarchy, and a more considered presentation of the work.</p>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FigmaLogoRow />
            <FigmaAppsSection />
            <FigmaBottomCta summary="Once the work is clearer, the results page can do a much better job of closing the loop." />
        </>
    );
}

function PricingPage({ page }) {
    return (
        <>
            <section className="kg-fig-pricing-hero">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                    </div>

                    <div className="kg-fig-pricing-grid">
                        {figmaPricingPlans.map((plan) => (
                            <article className={`kg-fig-price-card ${plan.badge ? "is-popular" : ""}`} key={plan.name}>
                                {plan.badge ? <span className="kg-fig-price-badge">{plan.badge}</span> : null}
                                <h2>{plan.name}</h2>
                                <strong>{plan.price}</strong>
                                <p>{plan.detail}</p>
                                <a href="/pricing">Try now</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-pricing-tables">
                <div className="kg-container">
                    {figmaPricingFeatureGroups.map((group) => (
                        <div className="kg-fig-pricing-table-card" key={group.title}>
                            <h2>{group.title}</h2>
                            <div className="kg-fig-pricing-table">
                                <div className="kg-fig-pricing-row kg-fig-pricing-row--head">
                                    <span>Compare</span>
                                    <span>Starter</span>
                                    <span>Growth</span>
                                    <span>Business</span>
                                </div>
                                {group.rows.map((row) => (
                                    <div className="kg-fig-pricing-row" key={row.label}>
                                        <span>{row.label}</span>
                                        {row.values.map((value) => (
                                            <span key={`${row.label}-${value}`}>{value}</span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="kg-fig-inline-cta">
                <div className="kg-container">
                    <h2>Try it for free</h2>
                    <p>Start with the strongest first page, then expand the system from there.</p>
                    <a href="/pricing">Try now</a>
                </div>
            </section>

            <section className="kg-fig-faq">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">FAQ</p>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="kg-fig-faq-list">
                        {figmaFaqs.map((faq) => (
                            <details key={faq.question}>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <FigmaCaseStudies intro="Pair the pricing page with proof so the offer feels more tangible and credible." />
            <FigmaAppsSection />
            <FigmaBottomCta summary="A good pricing page should feel clear, roomy, and easy to compare at a glance." />
        </>
    );
}

function AboutPage({ page }) {
    return (
        <>
            <section className="kg-fig-about-hero">
                <div className="kg-container kg-fig-about-hero-wrap">
                    <div className="kg-fig-about-copy">
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                    </div>
                    <div className="kg-fig-about-photo kg-fig-about-photo--hero" aria-hidden="true" />
                </div>
            </section>

            <section className="kg-fig-about-story">
                <div className="kg-container kg-fig-about-story-wrap">
                    <div className="kg-fig-about-photo kg-fig-about-photo--story" aria-hidden="true" />
                    <div className="kg-fig-about-copy">
                        <p className="kg-fig-kicker">Our Story</p>
                        <h2>Designing calmer experiences for growing businesses.</h2>
                        <p>
                            This page follows the team/story layout from your Figma board so the company
                            feels more established, more human, and more product-minded.
                        </p>
                    </div>
                </div>
            </section>

            <section className="kg-fig-about-stats">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <h2>Our numbers</h2>
                    </div>
                    <div className="kg-fig-stat-grid">
                        {figmaTeamStats.map((item) => (
                            <article className="kg-fig-stat-card" key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-team">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">Team</p>
                        <h2>Team</h2>
                    </div>

                    <div className="kg-fig-team-grid">
                        {figmaTeamMembers.map((member, index) => (
                            <article className="kg-fig-team-card" key={member.name}>
                                <div className={`kg-fig-team-photo kg-fig-team-photo--${(index % 6) + 1}`} />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-investor-band">
                <div className="kg-container">
                    <h2>Our investors and board</h2>
                </div>
            </section>

            <section className="kg-fig-jobs">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">Hiring</p>
                        <h2>New positions</h2>
                    </div>

                    <div className="kg-fig-job-grid">
                        {figmaJobCards.map((job) => (
                            <article className="kg-fig-job-card" key={job.title}>
                                <h3>{job.title}</h3>
                                <p>{job.mode}</p>
                                <a href="/contact">Apply now</a>
                            </article>
                        ))}
                    </div>

                    <div className="kg-fig-section-head kg-fig-section-head--center kg-fig-section-head--offices">
                        <h2>Our offices</h2>
                    </div>

                    <div className="kg-fig-office-grid">
                        {figmaOffices.map((office) => (
                            <article className="kg-fig-office-card" key={office.city}>
                                <h3>{office.city}</h3>
                                <p>{office.address}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FigmaBottomCta summary="Use story, numbers, people, and hiring blocks to make the business feel established and trustworthy." />
        </>
    );
}

function BlogPage({ page }) {
    return (
        <>
            <section className="kg-fig-blog-hero">
                <div className="kg-container">
                    <div className="kg-fig-blog-hero-card">
                        <p className="kg-fig-kicker kg-fig-kicker--inverse">Blog</p>
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                    </div>
                </div>
            </section>

            <section className="kg-fig-blog-featured">
                <div className="kg-container kg-fig-blog-featured-wrap">
                    <div className="kg-fig-blog-featured-media kg-fig-blog-media--hero" aria-hidden="true" />
                    <article className="kg-fig-blog-featured-copy">
                        <p className="kg-fig-kicker">Featured</p>
                        <h2>{figmaBlogPosts[0].title}</h2>
                        <p>{figmaBlogPosts[0].excerpt}</p>
                        <a href="/contact">Read article</a>
                    </article>
                </div>
            </section>

            <section className="kg-fig-blog-feed">
                <div className="kg-container">
                    <div className="kg-fig-section-head">
                        <p className="kg-fig-kicker">Trending</p>
                        <h2>Trending</h2>
                    </div>

                    <div className="kg-fig-blog-feed-grid">
                        {figmaBlogPosts.map((post) => (
                            <article className="kg-fig-blog-feed-card" key={post.title}>
                                <div className={`kg-fig-blog-card-media ${post.imageClass}`} />
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function LearnPage({ page }) {
    return <BlogPage page={page} />;
}

function ContactPage({ page }) {
    return (
        <>
            <section className="kg-fig-contact-hero">
                <div className="kg-container kg-fig-contact-head">
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                </div>
            </section>

            <section className="kg-fig-contact-stage">
                <div className="kg-container kg-fig-contact-stage-wrap">
                    <form className="kg-fig-contact-form" onSubmit={(event) => event.preventDefault()}>
                        <label>
                            Name
                            <input name="name" placeholder="Your name" required type="text" />
                        </label>
                        <label>
                            Email
                            <input name="email" placeholder="your@email.com" required type="email" />
                        </label>
                        <label>
                            Phone
                            <input name="phone" placeholder="+254..." required type="tel" />
                        </label>
                        <label>
                            Message
                            <textarea name="message" placeholder="Tell us about your project" rows={5} />
                        </label>
                        <button type="submit">Send message</button>
                    </form>

                    <div className="kg-fig-contact-map" aria-hidden="true">
                        <div className="kg-fig-contact-map-pin" />
                    </div>
                </div>
            </section>

            <section className="kg-fig-contact-meta">
                <div className="kg-container">
                    <div className="kg-fig-contact-meta-grid">
                        {figmaContactDetails.map((item) => (
                            <article className="kg-fig-contact-meta-card" key={item.label}>
                                <h2>{item.label}</h2>
                                <p>{item.value}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function NotFoundPage() {
    return (
        <section className="kg-inner-hero">
            <div className="kg-container">
                <h1>Page not found</h1>
                <p>The page you requested does not exist yet.</p>
                <a className="kg-cta" href="/">
                    Back to home
                </a>
            </div>
        </section>
    );
}

function renderPage(page) {
    if (!page) {
        return <NotFoundPage />;
    }

    if (page.kind === "home") {
        return <HomePage />;
    }

    if (page.kind === "category") {
        return <CategoryPage page={page} />;
    }

    if (page.kind === "advertise") {
        return <AdvertisePage page={page} />;
    }

    if (page.kind === "pricing") {
        return <PricingPage page={page} />;
    }

    if (page.kind === "about") {
        return <AboutPage page={page} />;
    }

    if (page.kind === "email_setup") {
        return <EmailSetupPage page={page} />;
    }

    if (page.kind === "logo_design") {
        return <LogoDesignPage page={page} />;
    }

    if (page.kind === "social_media_design") {
        return <SocialMediaDesignPage page={page} />;
    }

    if (page.kind === "full_branding") {
        return <FullBrandingPage page={page} />;
    }

    if (page.kind === "custom_website") {
        return <CustomWebsitePage page={page} />;
    }

    if (page.kind === "ecommerce") {
        return <EcommercePage page={page} />;
    }

    if (page.kind === "hosting") {
        return <HostingPage page={page} />;
    }

    if (page.kind === "vps") {
        return <VpsPage page={page} />;
    }

    if (page.kind === "domains") {
        return <DomainsPage page={page} />;
    }

    if (page.kind === "service" || page.kind === "info") {
        return <DetailPage page={page} />;
    }

    if (page.kind === "portfolio") {
        return <PortfolioPage page={page} />;
    }

    if (page.kind === "proof") {
        return <ProofPage page={page} />;
    }

    if (page.kind === "results") {
        return <ResultsPage page={page} />;
    }

    if (page.kind === "blog") {
        return <BlogPage page={page} />;
    }

    if (page.kind === "learn") {
        return <LearnPage page={page} />;
    }

    if (page.kind === "contact") {
        return <ContactPage page={page} />;
    }

    return <NotFoundPage />;
}

export default function FoxTechPortfolioPage({ path }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const currentPath = useMemo(() => {
        const sourcePath = typeof path === "string" ? path : window.location.pathname;
        return normalizePath(sourcePath);
    }, [path]);

    const currentPage = pageMap[currentPath];
    const isLandingPage = ["home", "portfolio", "pricing", "about", "blog", "contact"].includes(currentPage?.kind);

    useEffect(() => {
        document.title = currentPage?.title || "Fox Tech Solutions";
        setMenuOpen(false);
    }, [currentPath, currentPage]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="kg-page" id="top">
            <a className="kg-skip" href="#main-content">
                Skip to content
            </a>

            <header className="kg-header">
                <div className="kg-container kg-nav-wrap">
                    <a
                        aria-label="Fox Tech Solutions"
                        className="kg-brand"
                        href="/"
                        onClick={closeMenu}
                    >
                        <span className="kg-brand-wordmark">
                            <span className="kg-brand-main">Fox Tech Solutions</span>
                        </span>
                    </a>

                    <button
                        aria-controls="kg-nav"
                        aria-expanded={menuOpen}
                        className="kg-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        type="button"
                    >
                        Menu
                    </button>

                    <nav className={`kg-nav ${menuOpen ? "open" : ""}`} id="kg-nav">
                        {directNavLinks.map((item) => (
                            <a
                                href={item.href}
                                key={item.href}
                                onClick={closeMenu}
                                className={isPathMatch(currentPath, item.href) ? "active" : ""}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main id="main-content">{renderPage(currentPage)}</main>

            {isLandingPage ? <LandingFooter /> : <DefaultFooter />}
        </div>
    );
}


