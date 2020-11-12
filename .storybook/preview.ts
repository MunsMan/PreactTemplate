import { addDecorator } from "@storybook/preact";
import ThemeDecorator from "./themeDecorator";

addDecorator(ThemeDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}