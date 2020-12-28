import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import marked from "marked";

type Props = {
    content: string;
};

const markdown: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div>
            <div
                class={style.md}
                dangerouslySetInnerHTML={{ __html: marked(props.content) }}
            />
        </div>
    );
};

export default markdown;
