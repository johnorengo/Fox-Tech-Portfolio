import React from "react";
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

export function BlogPage({ page }) {
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
