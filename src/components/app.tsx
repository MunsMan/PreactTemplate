import { h, FunctionComponent } from 'preact';
import { Router, Route } from 'preact-router';
import About from '../routes/About';
import Home from '../routes/Home';
import JoeDalton from '../routes/JoeDalton';
import NavBar from './navBar';

interface App {

}

const app: FunctionComponent<App> = () => {
    return (
        <div>
            <NavBar />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/joe" component={JoeDalton} />
            </Router>
        </div>
    );
};

export default app;
