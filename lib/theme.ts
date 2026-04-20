export const THEME_STORAGE_KEY = "theme";

/**
 * Inline script injected into <head> to set the initial theme class
 * before any paint — prevents a flash of unstyled content (FOUC).
 * Runs synchronously during HTML parsing, before React hydrates.
 */
export const THEME_SCRIPT = `(function(){try{var k='${THEME_STORAGE_KEY}',s=localStorage.getItem(k),m=window.matchMedia('(prefers-color-scheme: dark)').matches,r=s==='dark'||(!s||s==='system')&&m?'dark':'light',d=document.documentElement;d.classList.add(r);d.style.colorScheme=r;}catch(e){}})();`;

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";
