import { h, FunctionComponent } from 'preact';
import ThemeButton from './themeButton';

interface App {

}

const app: FunctionComponent<App> = () => {
    return (
        <div>
            Hello from Preact
             <ThemeButton />
        </div>
    );
};

export default app;
