import { FunctionalComponent, h } from "preact";
import ThemeButton from "../../components/themeButton";
import style from './style.scss'

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <div>
                <h2>
                    Hello from preact
                </h2>
            </div>
            <div>
                <ThemeButton/>
            </div>
        </div>
    );
}

export default Home;
