import React, { useEffect, useMemo, useRef } from "react";
import * as data from "../../data/siteData";
const {
    designLinks,
    onlineLinks,
    directNavLinks,
    homeStats,
    homeOfferCards,
    homeProcessSteps,
    homePackages,
    homeTeamRoles,
    homeCaseStudies,
    footerGroups,
    landingFooterGroups,
    figmaBrandLogos,
    figmaHomeFeatures,
    figmaWorkspaceHighlights,
    figmaReviews,
    figmaTools,
    figmaPricingPlans,
    figmaPricingFeatureGroups,
    figmaFaqs,
    figmaTeamStats,
    figmaTeamMembers,
    figmaJobCards,
    figmaOffices,
    figmaContactDetails,
    figmaBlogPosts,
    homeGoalCards,
    sampleWorks,
    resultsProjects,
    proofItems,
    blogItems,
    advertiseSolutions,
    advertiseOutcomes,
    advertiseArticles,
    domainHighlights,
    domainHeroBenefits,
    domainPriceRows,
    domainFaqs,
    learnPosts,
    logoPackages,
    logoPortfolioSamples,
    logoExpectations,
    logoTips,
    logoFaqs,
    socialPackages,
    socialPortfolioSamples,
    socialBenefits,
    socialFaqs,
    socialTips,
    fullBrandingSections,
    customWebsitePackages,
    customWebsiteSamples,
    customWebsiteBenefits,
    customWebsiteTips,
    customWebsiteFaqs,
    ecommercePackages,
    ecommerceSamples,
    ecommerceReasons,
    ecommerceAchievements,
    ecommerceTips,
    ecommerceFaqs,
    hostingPlans,
    hostingGuarantees,
    hostingWhyPoints,
    hostingLearnPosts,
    hostingFaqs,
    vpsPlans,
    vpsFaqs,
    pageMap,
} = data;

export function CategoryPage({ page }) {
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

export function DetailPage({ page }) {
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

export function EmailSetupPage({ page }) {
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

export function LogoDesignPage({ page }) {
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

export function SocialMediaDesignPage({ page }) {
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

export function FullBrandingCarouselSection({ section }) {
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

export function FullBrandingPage({ page }) {
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

export function CustomWebsitePage({ page }) {
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

export function EcommercePage({ page }) {
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

export function HostingPage({ page }) {
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

export function VpsPage({ page }) {
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

export function DomainsPage({ page }) {
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

export function AdvertisePage({ page }) {
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
