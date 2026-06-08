import React, { useEffect, useMemo, useState } from "react";

import { directNavLinks, pageMap } from "./data/siteData";
import { renderPage } from "./renderPage";
import { DefaultFooter, LandingFooter } from "./shared/Sections";
import { isPathMatch, normalizePath } from "./utils/pageHelpers";

export default function FoxTechPortfolioPage({ path }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const currentPath = useMemo(() => {
        const sourcePath = typeof path === "string" ? path : window.location.pathname;
        return normalizePath(sourcePath);
    }, [path]);

    const currentPage = pageMap[currentPath];
    const isLandingPage = ["home", "portfolio", "pricing", "about", "blog", "contact"].includes(currentPage?.kind);

    useEffect(() => {
        document.title = currentPage?.title || "Fox Tech Solutions";
        setMenuOpen(false);
    }, [currentPath, currentPage]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`kg-page ${currentPage ? `kg-page--${currentPage.kind}` : "kg-page--not-found"}`} id="top">
            <a className="kg-skip" href="#main-content">
                Skip to content
            </a>

            <header className="kg-header">
                <div className="kg-container kg-nav-wrap">
                    <a aria-label="Fox Tech Solutions" className="kg-brand" href="/" onClick={closeMenu}>
                        <span className="kg-brand-wordmark">
                            <span className="kg-brand-main">Fox Tech Solutions</span>
                        </span>
                    </a>

                    <button
                        aria-controls="kg-nav"
                        aria-expanded={menuOpen}
                        className="kg-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        type="button"
                    >
                        Menu
                    </button>

                    <nav className={`kg-nav ${menuOpen ? "open" : ""}`} id="kg-nav">
                        {directNavLinks.map((item) => (
                            <a
                                href={item.href}
                                key={item.href}
                                onClick={closeMenu}
                                className={isPathMatch(currentPath, item.href) ? "active" : ""}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main id="main-content">{renderPage(currentPage)}</main>

            {isLandingPage ? <LandingFooter /> : <DefaultFooter />}
        </div>
    );
}
