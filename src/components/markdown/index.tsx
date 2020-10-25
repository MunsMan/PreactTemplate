import { FunctionalComponent, h } from "preact";

type Props = {
    content: any;
}

const markdown: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: props.content}} />
        </div>
    );
}

export default markdown;
