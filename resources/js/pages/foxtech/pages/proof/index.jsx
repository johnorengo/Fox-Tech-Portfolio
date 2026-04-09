import React from "react";
import * as data from "../../data/siteData";
import { FigmaBottomCta, FigmaCaseStudies } from "../../shared/Sections";
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

export function ProofPage({ page }) {
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
