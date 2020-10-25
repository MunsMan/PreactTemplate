import { FunctionalComponent, h } from "preact";
import style from "./style.scss";
import Content from "./../../contents/about/about.mdx"

const about: FunctionalComponent = () => {
    return (
        <div class={style.content}>
            <div>
                <Content />
            </div>
        </div>
    );
}

export default about;
