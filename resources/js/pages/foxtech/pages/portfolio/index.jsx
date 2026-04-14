import React from "react";
import * as data from "../../data/siteData";
import { FigmaAppsSection, FigmaBottomCta, FigmaCaseStudies } from "../../shared/Sections";
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

export function PortfolioPage({ page }) {
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
                            {feature.eyebrow ? <p className="kg-fig-kicker">{feature.eyebrow}</p> : null}
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
            <FigmaAppsSection />
            <FigmaBottomCta summary="Build the portfolio page, then extend the same system to pricing, about, blog, and contact." />
        </>
    );
}
