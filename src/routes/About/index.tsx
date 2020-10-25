import { FunctionalComponent, h } from "preact";
import style from "./style.scss";
import content from "./../../contents/about/about.md"
import Markdown from "../../components/markdown";

const about: FunctionalComponent = () => {
    return (
        <div class={style.content}>
            <div>
                <Markdown content={content} />
            </div>
        </div>
    );
}

export default about;
