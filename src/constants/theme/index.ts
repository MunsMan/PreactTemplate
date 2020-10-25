import { Themes } from "../../Types";

const root = document.querySelector("html")!;
const DARK = "(prefers-color-scheme: dark)";

const setTheme = (theme: Themes) => {
    root.setAttribute("data-theme", theme);
}

console.log("Test")
if (window.matchMedia(DARK).matches) {
    console.log("Dark")
    setTheme('dark');
} else {
    console.log("Light")
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