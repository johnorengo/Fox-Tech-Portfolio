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

export function HomePage() {
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
