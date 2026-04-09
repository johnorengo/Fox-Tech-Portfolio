import React from "react";
import { AboutPage } from "./pages/about";
import { BlogPage } from "./pages/blog";
import { ContactPage } from "./pages/contact";
import { HomePage } from "./pages/home";
import { LearnPage } from "./pages/learn";
import { NotFoundPage } from "./pages/not-found";
import { PaymentPage } from "./pages/payment";
import { PortfolioPage } from "./pages/portfolio";
import { PricingPage } from "./pages/pricing";
import { ProofPage } from "./pages/proof";
import { ResultsPage } from "./pages/results";
import {
    AdvertisePage,
    CategoryPage,
    CustomWebsitePage,
    DetailPage,
    DomainsPage,
    EcommercePage,
    EmailSetupPage,
    FullBrandingPage,
    HostingPage,
    LogoDesignPage,
    SocialMediaDesignPage,
    VpsPage,
} from "./pages/services";
export function renderPage(page) {
    if (!page) {
        return <NotFoundPage />;
    }
    if (page.kind === "home") {
        return <HomePage />;
    }
    if (page.kind === "category") {
        return <CategoryPage page={page} />;
    }
    if (page.kind === "advertise") {
        return <AdvertisePage page={page} />;
    }
    if (page.kind === "pricing") {
        return <PricingPage page={page} />;
    }
    if (page.kind === "payment") {
        return <PaymentPage page={page} />;
    }
    if (page.kind === "about") {
        return <AboutPage page={page} />;
    }
    if (page.kind === "email_setup") {
        return <EmailSetupPage page={page} />;
    }
    if (page.kind === "logo_design") {
        return <LogoDesignPage page={page} />;
    }
    if (page.kind === "social_media_design") {
        return <SocialMediaDesignPage page={page} />;
    }
    if (page.kind === "full_branding") {
        return <FullBrandingPage page={page} />;
    }
    if (page.kind === "custom_website") {
        return <CustomWebsitePage page={page} />;
    }
    if (page.kind === "ecommerce") {
        return <EcommercePage page={page} />;
    }
    if (page.kind === "hosting") {
        return <HostingPage page={page} />;
    }
    if (page.kind === "vps") {
        return <VpsPage page={page} />;
    }
    if (page.kind === "domains") {
        return <DomainsPage page={page} />;
    }
    if (page.kind === "service" || page.kind === "info") {
        return <DetailPage page={page} />;
    }
    if (page.kind === "portfolio") {
        return <PortfolioPage page={page} />;
    }
    if (page.kind === "proof") {
        return <ProofPage page={page} />;
    }
    if (page.kind === "results") {
        return <ResultsPage page={page} />;
    }
    if (page.kind === "blog") {
        return <BlogPage page={page} />;
    }
    if (page.kind === "learn") {
        return <LearnPage page={page} />;
    }
    if (page.kind === "contact") {
        return <ContactPage page={page} />;
    }
    return <NotFoundPage />;
}
