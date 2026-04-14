import React from "react";
import {
    aboutAdvantageCards,
    aboutJourneySteps,
    aboutMissionCards,
    aboutSupportPoints,
    figmaOffices,
    figmaTeamMembers,
} from "../../data/siteData";
import { FigmaBottomCta } from "../../shared/Sections";

export function AboutPage({ page }) {
    const founderProfile = {
        // use existing data where available but override name/role per user request
        ...(figmaTeamMembers[0] ?? {}),
        name: "John Orengo",
        role: figmaTeamMembers[0]?.role ?? "Technical Lead & Co-founder",
    };
    const officeLocation = figmaOffices[0]?.city ?? founderProfile.location;
    const founderInitials = founderProfile.name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");
    const profileCandidates = [
        '/Profile%20photo.jpg',
        '/Profile photo.jpg',
        '/images/Profile%20photo.jpg',
        '/images/Profile photo.jpg',
        '/johnorengo.jpg',
        '/john-orengo.jpg',
        '/images/johnorengo.jpg',
        '/images/john-orengo.jpg',
        '/johnorengo.jpg',
    ];

    return (
        <>
            <section className="kg-fig-about-hero">
                <div className="kg-container">
                    <div className="kg-fig-about-hero-panel">
                        <h1 className="kg-fig-about-hero-title">{page?.heading ?? "Founder-led. Built for growth."}</h1>
                        <p className="kg-fig-about-hero-summary">{page?.summary ?? "Founder-led digital delivery for growing businesses."}</p>
                    </div>

                    <div className="kg-fig-about-mission-grid">
                        {aboutMissionCards.map((card) => (
                            <article className="kg-fig-about-mission-card" key={card.title}>
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-about-story">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <h2>Leadership</h2>
                        <p>Fox Tech Solutions is built around direct founder involvement, practical thinking, and a professional standard of delivery.</p>
                    </div>

                    {/* Lead card and qualifications removed per request */}
                </div>
            </section>

                <section className="kg-fig-team">
                    <div className="kg-container">
                        <div className="kg-fig-team-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0' }}>
                            <article className="kg-fig-about-lead-card">
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        alt={founderProfile.name}
                                        src={profileCandidates[0]}
                                        data-try-index={0}
                                        style={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 8px 24px rgba(17,24,39,0.12)' }}
                                        onError={(e) => {
                                            const current = Number(e.target.getAttribute('data-try-index') || 0);
                                            const next = current + 1;
                                            if (next < profileCandidates.length) {
                                                e.target.setAttribute('data-try-index', next);
                                                e.target.src = profileCandidates[next];
                                            } else {
                                                e.target.style.display = 'none';
                                            }
                                        }}
                                    />
                                </div>
                                <div className="kg-fig-about-lead-head" style={{ justifyContent: 'center', textAlign: 'center', marginTop: '0.75rem' }}>
                                    <div>
                                        <h3>John Orengo</h3>
                                        <p style={{ color: '#6554af' }}>{founderProfile.role}</p>
                                    </div>
                                </div>
                                <p className="kg-fig-about-lead-story" style={{ textAlign: 'center' }}>{founderProfile.statement}</p>
                            </article>

                            <article className="kg-fig-about-advantage-card">
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: 72, height: 72, borderRadius: 12, background: 'linear-gradient(135deg,#17165d,#6554af)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M7.5 12.5L10 15l4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13.5 12.5L16 15l2-2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M4 12L7 15l3-3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.5 10.5L11 12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.5 14.5L12 17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 9l2.5 2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                                    <h3>Partner</h3>
                                    <p style={{ color: '#6554af', marginTop: '0.25rem' }}>Sales & Client Strategy</p>
                                </div>
                                <p style={{ textAlign: 'center' }}>Business development and client relations expert. Ensures every client engagement starts with clear alignment on goals, scope, and expectations ; and ends with a satisfied client.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <p className="kg-fig-about-network-note" style={{ textAlign: 'center', maxWidth: '900px', margin: '0.4rem auto' }}>
                    For larger projects, we bring in vetted senior specialists from our trusted network; frontend, backend, design, and DevOps — all pre-screened and held to the same standards.
                </p>

            <section className="kg-fig-about-why">
                <div className="kg-container kg-fig-about-why-wrap">
                    <div className="kg-fig-about-why-copy">
                        <p className="kg-fig-kicker">Why Fox Tech Solutions</p>
                        <h2>
                            The right mix of <span>clarity & quality</span>
                        </h2>
                        <p>
                            Fox Tech Solutions is designed to give businesses a more direct and dependable
                            way to build their digital presence without unnecessary complexity.
                        </p>

                        <ul className="kg-fig-about-point-list">
                            {aboutSupportPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="kg-fig-about-advantage-grid">
                        {aboutAdvantageCards.map((card) => (
                            <article className="kg-fig-about-advantage-card" key={card.title}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-about-journey">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <h2>How we got here</h2>
                    </div>

                    <div className="kg-fig-about-journey-list">
                        {aboutJourneySteps.map((step) => (
                            <article className="kg-fig-about-journey-item" key={`${step.year}-${step.text}`}>
                                <span className="kg-fig-about-journey-year">{step.year}</span>
                                <p>{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="kg-fig-jobs">
                <div className="kg-container">
                    <article className="kg-fig-about-location-card">
                        <h2>Based in {officeLocation}</h2>
                        <p>
                            Fox Tech Solutions operates from Nairobi, Kenya and supports businesses that want a clearer,
                            stronger, and more professional digital presence.
                        </p>
                    </article>
                </div>
            </section>

            <FigmaBottomCta summary="Work directly with the founder of Fox Tech Solutions to build a clearer brand, stronger website, and a more confident online presence." />
        </>
    );
}
