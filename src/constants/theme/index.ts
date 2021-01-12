import { Themes } from "../../Types";

const DARK = "(prefers-color-scheme: dark)";

const setTheme = (theme: Themes): void => {
    const doc = document.querySelector("html");
    if (doc) {
        doc.setAttribute("data-theme", theme);
    }
};

if (typeof window !== "undefined") {
    if (window.matchMedia(DARK).matches) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

const toggleTheme = (): void => {
    const doc = document.querySelector("html");
    if (doc) {
        if (doc.getAttribute("data-theme") == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
};

export { setTheme, toggleTheme };
