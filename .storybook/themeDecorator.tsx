import { h } from "preact";
import "../src/constants/style/global.scss";
import "../src/constants/theme";

const ThemeDecorator = (storyFn:any) => <div>{storyFn()}</div>;

export default ThemeDecorator;