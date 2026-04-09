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
    figmaPaymentMethods,
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

export function PricingPage({ page }) {
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
                                <a href={`/payment?plan=${plan.slug}`}>Try now</a>
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

            <section className="kg-fig-payment-methods">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">Payments</p>
                        <h2>Payment methods</h2>
                        <p>We currently accept M-Pesa and bank transfer for project payments.</p>
                    </div>

                    <div className="kg-fig-payment-grid">
                        {figmaPaymentMethods.map((method) => (
                            <article className="kg-fig-payment-card" key={method.name}>
                                <span className="kg-fig-payment-pill">{method.name}</span>
                                <h3>{method.name}</h3>
                                <p>{method.summary}</p>
                                <small>{method.detail}</small>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-inline-cta">
                <div className="kg-container">
                    <h2>Try it for free</h2>
                    <p>Start with the strongest first page, then expand the system from there.</p>
                    <a href="/payment?plan=growth">Try now</a>
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
