import React from "react";
import * as data from "../../data/siteData";
import { FigmaBottomCta } from "../../shared/Sections";
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

export function AboutPage({ page }) {
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
