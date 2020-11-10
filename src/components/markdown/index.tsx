import { FunctionalComponent, h } from "preact";
import style from './style.css';

type Props = {
    content: any;
}

const markdown: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div>
            <div
                class={style.md}
                dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
}

export default markdown;
