import React from "react";
import * as data from "../data/siteData";
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

export function FigmaLogoRow({ variant = "strip" }) {
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

export function FigmaCaseStudies({ intro = "Recent work and directions shaped around clarity, trust, and easier action." }) {
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

export function FigmaAppsSection() {
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

export function FigmaBottomCta({ title = "Try it for free", summary = "Build a calmer first impression with a page system that feels simple, polished, and easier to trust." }) {
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

export function LandingFooter() {
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

export function DefaultFooter() {
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
