import { FunctionalComponent, h } from "preact";
import style from "./style.scss";
import { Link } from "preact-router/match";

const navBar: FunctionalComponent = () => {
    return (
        <div>
            <ul class={style.bar}>
                <li>
                    <a>PreactTemplate</a>
                </li>
                <li class={style.link}>
                    <Link href="/">Home</Link>
                </li>
                <li class={style.link}>
                    <Link href="/joe">Joe Dalton</Link>
                </li>
                <li class={[style.link, style.right].join(" ")}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default navBar;
