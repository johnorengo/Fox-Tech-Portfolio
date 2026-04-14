import React from "react";
import { figmaBlogPosts, figmaHomeFeatures, figmaReviews } from "../../data/siteData";
import { FigmaAppsSection, FigmaBottomCta } from "../../shared/Sections";

const heroRackRows = Array.from({ length: 4 });
const heroMeshNodes = Array.from({ length: 7 });

export function HomePage() {
    return (
        <>
            <section className="kg-fig-hero kg-fig-home-hero">
                <div className="kg-container kg-fig-home-hero-shell">
                    <div className="kg-fig-home-copy">
                        <h1>A place for your business</h1>
                        <p>
                            Build a calmer landing page with softer visuals, clear sections, and a structure
                            that makes your business easier to understand.
                        </p>
                        <a href="/pricing">Try now</a>
                    </div>

                    <div className="kg-fig-home-scene" aria-hidden="true">
                        <div className="kg-fig-home-scene-core">
                            <div className="kg-fig-home-lens kg-fig-home-lens--mint" />
                            <div className="kg-fig-home-lens kg-fig-home-lens--violet" />
                            <div className="kg-fig-home-lens kg-fig-home-lens--rose" />

                            <div className="kg-fig-home-beam kg-fig-home-beam--main" />
                            <div className="kg-fig-home-beam kg-fig-home-beam--loop" />
                            <div className="kg-fig-home-beam kg-fig-home-beam--lower" />
                            <div className="kg-fig-home-beam kg-fig-home-beam--vertical" />

                            <div className="kg-fig-home-panel kg-fig-home-panel--cube">
                                <span className="kg-fig-home-panel-label">AI workflow</span>
                            </div>

                            <div className="kg-fig-home-panel kg-fig-home-panel--platform">
                                <span className="kg-fig-home-panel-label">Quantum compute</span>
                                <div className="kg-fig-home-platform-chip" />
                            </div>

                            <div className="kg-fig-home-network">
                                {heroMeshNodes.map((_, index) => (
                                    <span key={index} />
                                ))}
                            </div>

                            <div className="kg-fig-home-server">
                                <p>Core network</p>
                                <div className="kg-fig-home-server-rack">
                                    {heroRackRows.map((_, index) => (
                                        <span key={index} />
                                    ))}
                                </div>
                                <div className="kg-fig-home-server-port" />
                            </div>

                            <div className="kg-fig-home-stack">
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="kg-fig-home-microcard kg-fig-home-microcard--security">
                                <span className="kg-fig-home-panel-label">Cloud security shield</span>
                            </div>

                            <div className="kg-fig-home-microcard kg-fig-home-microcard--edge">
                                <span className="kg-fig-home-panel-label">Edge gateway hub</span>
                            </div>

                            <div className="kg-fig-home-graph">
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="kg-fig-home-spark" />
                        </div>
                    </div>
                </div>
            </section>

            {figmaHomeFeatures.map((feature, index) => (
                <section className={`kg-fig-feature-row ${index % 2 === 1 ? "is-reverse" : ""}`} key={feature.title}>
                    <div className="kg-container kg-fig-feature-wrap">
                        <div className={`kg-fig-device-card ${feature.artClass}`} aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="kg-fig-feature-copy">
                            {feature.eyebrow ? <p className="kg-fig-kicker">{feature.eyebrow}</p> : null}
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
