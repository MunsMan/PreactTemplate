import { Themes } from "../../Types";

const root = document.querySelector("html")!;
const DARK = "(prefers-color-scheme: dark)";

const setTheme = (theme: Themes) => {
    root.setAttribute("data-theme", theme);
}

if (window.matchMedia(DARK).matches) {
    setTheme('dark');
} else {
    setTheme('light');
}

const toggleTheme = () => {
    if (root.getAttribute("data-theme") == 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

export { setTheme, toggleTheme };