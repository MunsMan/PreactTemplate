import { h, FunctionComponent } from 'preact';
import { Router, Route } from 'preact-router';
import About from '../routes/About';
import Home from '../routes/Home';
import NavBar from './navBar';

interface App {

}

const app: FunctionComponent<App> = () => {
    return (
        <div>
            <NavBar />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/about" component={About}/>
            </Router>
        </div>
    );
};

export default app;
