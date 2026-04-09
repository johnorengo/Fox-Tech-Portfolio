import React from "react";
import * as data from "../../data/siteData";
import { FigmaAppsSection, FigmaBottomCta, FigmaLogoRow } from "../../shared/Sections";
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

export function ResultsPage({ page }) {
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
