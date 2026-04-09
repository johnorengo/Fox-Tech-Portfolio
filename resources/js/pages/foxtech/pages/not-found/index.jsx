import React from "react";
export function NotFoundPage() {
    return (
        <section className="kg-inner-hero">
            <div className="kg-container">
                <h1>Page not found</h1>
                <p>The page you requested does not exist yet.</p>
                <a className="kg-cta" href="/">
                    Back to home
                </a>
            </div>
        </section>
    );
}
