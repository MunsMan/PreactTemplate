import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import "./../../tests/__mocks__/matchMedia";

import ThemeButton from "./index";

describe("ThemeButton", () => {
    test("switching Theme", () => {
        render(<ThemeButton />);
        const docRoot = document.querySelector("html");
        expect(docRoot).toBeTruthy();
        if (docRoot) {
            const initTheme = docRoot.getAttribute("data-theme");
            fireEvent.click(screen.getByText("Toggle Theme"));
            expect(docRoot.getAttribute("data-theme")).not.toBe(initTheme);
        }
    });
});
