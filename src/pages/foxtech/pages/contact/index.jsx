import React from "react";
import * as data from "../../data/siteData";

const {
    figmaContactDetails,
} = data;

export function ContactPage({ page }) {
    const googleFormEmbedUrl = page.googleFormEmbedUrl || "";
    const googleFormPublicUrl = page.googleFormPublicUrl || "";
    const isGoogleFormConfigured =
        googleFormEmbedUrl.includes("docs.google.com/forms") &&
        !googleFormEmbedUrl.includes("REPLACE_WITH_YOUR_FORM_ID");

    return (
        <>
            <section className="kg-fig-contact-hero">
                <div className="kg-container kg-fig-contact-head">
                    <h1>{page.heading}</h1>
                    <p>{page.summary}</p>
                </div>
            </section>

            <section className="kg-fig-contact-stage">
                <div className="kg-container kg-fig-contact-stage-wrap">
                    <div className="kg-fig-contact-form kg-fig-google-form-wrap">
                        {isGoogleFormConfigured ? (
                            <>
                                <iframe
                                    className="kg-fig-google-form-frame"
                                    loading="lazy"
                                    src={googleFormEmbedUrl}
                                    title="Fox Tech Solutions Contact Form"
                                />
                                {googleFormPublicUrl ? (
                                    <p className="kg-fig-google-form-open">
                                        Prefer full page?
                                        {" "}
                                        <a href={googleFormPublicUrl} rel="noreferrer" target="_blank">Open Google Form</a>
                                    </p>
                                ) : null}
                            </>
                        ) : (
                            <p className="kg-fig-form-feedback kg-fig-form-feedback--error">
                                Google Form is not configured yet. Add the form URL in contact page data.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <section className="kg-fig-contact-meta">
                <div className="kg-container">
                    <div className="kg-fig-contact-meta-grid">
                        {figmaContactDetails.map((item) => (
                            <article className="kg-fig-contact-meta-card" key={item.label}>
                                <h2>{item.label}</h2>
                                <p>{item.value}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
