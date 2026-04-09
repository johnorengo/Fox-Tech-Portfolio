import React, { useState } from "react";
import * as data from "../../data/siteData";

const {
    figmaContactDetails,
} = data;

export function ContactPage({ page }) {
    const [fieldErrors, setFieldErrors] = useState({});
    const [feedback, setFeedback] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getFieldError = (fieldName) => fieldErrors[fieldName]?.[0];

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setFieldErrors({});
        setFeedback(null);
        setIsSubmitting(true);

        try {
            const response = await window.axios.post("/contact", Object.fromEntries(formData.entries()), {
                headers: {
                    Accept: "application/json",
                },
            });

            form.reset();
            setFeedback({
                tone: "success",
                message: response.data.message,
            });
        } catch (error) {
            if (error.response?.status === 422) {
                setFieldErrors(error.response.data?.errors ?? {});
                setFeedback({
                    tone: "error",
                    message: "Please check the highlighted fields and try again.",
                });
            } else {
                setFeedback({
                    tone: "error",
                    message: "We could not send your message right now. Please try again in a moment.",
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <form className="kg-fig-contact-form" onSubmit={handleSubmit}>
                        <label>
                            Name
                            <input aria-invalid={Boolean(getFieldError("name"))} disabled={isSubmitting} name="name" placeholder="Your name" required type="text" />
                            {getFieldError("name") ? <span className="kg-fig-form-error">{getFieldError("name")}</span> : null}
                        </label>
                        <label>
                            Email
                            <input aria-invalid={Boolean(getFieldError("email"))} disabled={isSubmitting} name="email" placeholder="your@email.com" required type="email" />
                            {getFieldError("email") ? <span className="kg-fig-form-error">{getFieldError("email")}</span> : null}
                        </label>
                        <label>
                            Phone
                            <input aria-invalid={Boolean(getFieldError("phone"))} disabled={isSubmitting} name="phone" placeholder="+254..." required type="tel" />
                            {getFieldError("phone") ? <span className="kg-fig-form-error">{getFieldError("phone")}</span> : null}
                        </label>
                        <label>
                            Message
                            <textarea aria-invalid={Boolean(getFieldError("message"))} disabled={isSubmitting} name="message" placeholder="Tell us about your project" required rows={5} />
                            {getFieldError("message") ? <span className="kg-fig-form-error">{getFieldError("message")}</span> : null}
                        </label>
                        {feedback ? <p className={`kg-fig-form-feedback kg-fig-form-feedback--${feedback.tone}`}>{feedback.message}</p> : null}
                        <button disabled={isSubmitting} type="submit">{isSubmitting ? "Sending..." : "Send message"}</button>
                    </form>

                    <div className="kg-fig-contact-map" aria-hidden="true">
                        <div className="kg-fig-contact-map-pin" />
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
