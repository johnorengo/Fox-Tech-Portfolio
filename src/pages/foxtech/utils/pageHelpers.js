export function normalizePath(pathname) {
    const trimmed = pathname.trim();

    if (!trimmed || trimmed === "/") {
        return "/";
    }

    return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}

export function isDesignPath(pathname) {
    return pathname === "/design" || pathname.startsWith("/design/");
}

export function isOnlinePath(pathname) {
    return pathname === "/get-online" || pathname.startsWith("/get-online/");
}

export function isPathMatch(pathname, href) {
    if (href === "/") {
        return pathname === "/";
    }

    if (href === "/portfolio") {
        return pathname === "/portfolio";
    }

    if (href === "/results") {
        return pathname === "/results" || pathname === "/proof";
    }

    if (href === "/blog") {
        return pathname === "/learn" || pathname === "/blog";
    }

    return pathname === href;
}
