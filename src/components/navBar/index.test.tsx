import { h } from "preact";
import { Router, Route } from "preact-router";
import { shallow, mount } from "enzyme";

import "./../../tests/__mocks__/matchMedia";

import NavBar from "./index";
import Home from "./../../routes/Home";
// import About from "./../../routes/About"
import JoeDalton from "../../routes/JoeDalton";

jest.mock("./../../routes/About", () => {
    return <div>About</div>;
});

const About = jest.fn(() => <div>About</div>);

describe("NavBar", () => {
    const context = shallow(<NavBar />);

    test("number of entries", () => {
        expect(context.find("li").length).toBe(4);
    });
    test("number of links", () => {
        expect(context.find("Link").length).toBe(3);
    });
    test("Link Home", () => {
        const wrapper = mount(
            <Router url={"/"}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/joe" component={JoeDalton} />
            </Router>
        );
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(About)).toHaveLength(0);
        expect(wrapper.find(JoeDalton)).toHaveLength(0);
    });
    test("Link About", () => {
        const wrapper = mount(
            <Router url={"/about"}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/joe" component={JoeDalton} />
            </Router>
        );
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(About)).toHaveLength(1);
        expect(wrapper.find(JoeDalton)).toHaveLength(0);
    });
    test("Link Joe", () => {
        const wrapper = mount(
            <Router url={"/joe"}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/joe" component={JoeDalton} />
            </Router>
        );
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(About)).toHaveLength(0);
        expect(wrapper.find(JoeDalton)).toHaveLength(1);
    });
});
