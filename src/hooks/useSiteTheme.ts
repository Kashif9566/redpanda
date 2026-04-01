import { useLocation } from "react-router";

export type SiteTheme = "landing" | "secondary";

/**
 * useSiteTheme - Centralized hook to determine the current page theme.
 * 
 * "landing": For the main landing page (/).
 * "secondary": For all other pages (Case studies, Services, etc.).
 */
export const useSiteTheme = (): SiteTheme => {
    const { pathname } = useLocation();
    
    if (pathname === "/") {
        return "landing";
    }
    
    return "secondary";
};
