import "./bootstrap";
import "../css/app.css";

import React from "react";
import { createRoot } from "react-dom/client";
import FoxTechPortfolioPage from "./pages/FoxTechPortfolioPage";

const rootElement = document.getElementById("app");

if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <FoxTechPortfolioPage path={window.location.pathname} />
        </React.StrictMode>
    );
}
