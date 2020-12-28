import { FunctionalComponent, h, VNode } from "preact";
import { toggleTheme } from "../../constants/theme";
import style from "./style.scss";

const themeButton: FunctionalComponent = (): VNode<{}> => {
    return (
        <div class={style.btn} onClick={(): void => toggleTheme()}>
            Toggle Theme
        </div>
    );
};

export default themeButton;
