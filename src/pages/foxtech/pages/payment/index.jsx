import React, { useMemo, useState } from "react";

import { figmaContactDetails, figmaPaymentMethods, figmaPricingPlans } from "../../data/siteData";

export function PaymentPage({ page }) {
    const [paymentMethod, setPaymentMethod] = useState("mpesa");
    const [feedback, setFeedback] = useState(null);

    const selectedPlan = useMemo(() => {
        const query = new URLSearchParams(window.location.search);
        const requestedPlan = query.get("plan");

        return (
            figmaPricingPlans.find((plan) => plan.slug === requestedPlan) ??
            figmaPricingPlans.find((plan) => plan.badge === "Popular") ??
            figmaPricingPlans[0]
        );
    }, []);

    const phoneNumber = figmaContactDetails.find((item) => item.label === "Call us")?.value ?? "+254706830730";
    const emailAddress = figmaContactDetails.find((item) => item.label === "Email us")?.value ?? "enquiries@foxtechsolution.com";
    const phoneHref = `tel:${phoneNumber.replace(/\s+/g, "")}`;
    const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(`Payment for ${selectedPlan.name} plan`)}`;

    const handleMethodSelect = (methodName) => {
        setPaymentMethod(methodName === "M-Pesa" ? "mpesa" : "bank_transfer");
        document.getElementById("payment-request-form")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const message = [
            `Plan: ${selectedPlan.name} - ${selectedPlan.price}`,
            `Name: ${formData.get("name")}`,
            `Email: ${formData.get("email")}`,
            `Phone: ${formData.get("phone")}`,
            `Payment method: ${paymentMethod === "mpesa" ? "M-Pesa" : "Bank transfer"}`,
            `Payment reference: ${formData.get("payment_reference") || "Not provided"}`,
            "",
            "Notes:",
            formData.get("message") || "No notes provided.",
        ].join("\n");

        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
            `Payment details for ${selectedPlan.name} plan`
        )}&body=${encodeURIComponent(message)}`;

        setFeedback({
            tone: "success",
            message: "Your email app should open with the payment details ready to send.",
        });
    };

    return (
        <>
            <section className="kg-fig-payment-hero">
                <div className="kg-container kg-fig-payment-hero-wrap">
                    <div className="kg-fig-payment-copy">
                        <p className="kg-fig-kicker">Checkout</p>
                        <h1>{page.heading}</h1>
                        <p>{page.summary}</p>
                    </div>

                    <aside className="kg-fig-payment-summary">
                        <span className="kg-fig-payment-summary-label">Selected plan</span>
                        <h2>{selectedPlan.name}</h2>
                        <strong>{selectedPlan.price}</strong>
                        <p>{selectedPlan.detail}</p>
                        <ul>
                            <li>Use the selected plan name as your payment reference.</li>
                            <li>Pay using M-Pesa or request bank transfer details.</li>
                            <li>Send your confirmation to {emailAddress} after payment.</li>
                        </ul>
                    </aside>
                </div>
            </section>

            <section className="kg-fig-payment-stage">
                <div className="kg-container">
                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">Choose plan</p>
                        <h2>Confirm the package you want to pay for</h2>
                    </div>

                    <div className="kg-fig-payment-plan-grid">
                        {figmaPricingPlans.map((plan) => (
                            <a
                                className={`kg-fig-payment-plan-card ${plan.slug === selectedPlan.slug ? "is-active" : ""}`}
                                href={`/payment?plan=${plan.slug}`}
                                key={plan.slug}
                            >
                                <h3>{plan.name}</h3>
                                <strong>{plan.price}</strong>
                                <p>{plan.detail}</p>
                            </a>
                        ))}
                    </div>

                    <div className="kg-fig-section-head kg-fig-section-head--center">
                        <p className="kg-fig-kicker">Choose method</p>
                        <h2>Make payment using your preferred option</h2>
                        <p>M-Pesa is ready for direct payment, while bank transfer starts with a quick invoice request.</p>
                    </div>

                    <div className="kg-fig-payment-method-grid">
                        {figmaPaymentMethods.map((method) => (
                            <article className="kg-fig-payment-method-card" key={method.name}>
                                <h3>{method.name}</h3>
                                <p>{method.summary}</p>
                                <ul>
                                    {method.name === "M-Pesa" ? (
                                        <>
                                            <li>Send payment to {phoneNumber}.</li>
                                            <li>Use {selectedPlan.name} as the payment reference.</li>
                                            <li>Email the M-Pesa confirmation message to {emailAddress}.</li>
                                        </>
                                    ) : (
                                        <>
                                            <li>Request your bank invoice and transfer details via email.</li>
                                            <li>Use {selectedPlan.name} as the transfer reference.</li>
                                            <li>Share your proof of payment after the transfer is complete.</li>
                                        </>
                                    )}
                                </ul>
                                <button onClick={() => handleMethodSelect(method.name)} type="button">
                                    {method.name === "M-Pesa" ? "Use M-Pesa" : "Use bank transfer"}
                                </button>
                            </article>
                        ))}
                    </div>

                    <div className="kg-fig-payment-request-wrap">
                        <div className="kg-fig-payment-request-copy">
                            <p className="kg-fig-kicker">Send request</p>
                            <h2>Send your payment details to our team</h2>
                            <p>
                                Complete this form after making payment or if you want us to send the next checkout
                                instructions for the selected plan.
                            </p>
                        </div>

                        <form className="kg-fig-contact-form kg-fig-payment-request-form" id="payment-request-form" onSubmit={handleSubmit}>
                            <label>
                                Selected plan
                                <input disabled readOnly type="text" value={`${selectedPlan.name} - ${selectedPlan.price}`} />
                            </label>
                            <label>
                                Your name
                                <input name="name" placeholder="Your full name" required type="text" />
                            </label>
                            <label>
                                Email
                                <input name="email" placeholder="your@email.com" required type="email" />
                            </label>
                            <label>
                                Phone
                                <input name="phone" placeholder="+254..." required type="tel" />
                            </label>
                            <label>
                                Payment method
                                <select name="payment_method" onChange={(event) => setPaymentMethod(event.target.value)} value={paymentMethod}>
                                    <option value="mpesa">M-Pesa</option>
                                    <option value="bank_transfer">Bank transfer</option>
                                </select>
                            </label>
                            <label>
                                Payment reference
                                <input name="payment_reference" placeholder="M-Pesa code or bank transfer reference" type="text" />
                            </label>
                            <label>
                                Notes
                                <textarea name="message" placeholder="Add any payment notes or request bank details here" rows={5} />
                            </label>
                            {feedback ? <p className={`kg-fig-form-feedback kg-fig-form-feedback--${feedback.tone}`}>{feedback.message}</p> : null}
                            <button type="submit">Send payment details</button>
                        </form>
                    </div>

                    <div className="kg-fig-payment-support">
                        <h3>Need help before paying?</h3>
                        <p>
                            If you want us to confirm scope, send an invoice, or guide you through the payment process,
                            contact us directly and we will help you finish the checkout.
                        </p>
                        <a href={phoneHref}>Call {phoneNumber}</a>
                        <a href={emailHref}>Email {emailAddress}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
