import { FunctionalComponent, h } from "preact";
import { toggleTheme } from "../../constants/theme";
import style from "./style.scss";

const themeButton: FunctionalComponent = () => {
    return (
        <div
            class={style.btn}
            onClick={() => toggleTheme()}
        >
            Toggle Theme
        </div>
    );
}

export default themeButton;
