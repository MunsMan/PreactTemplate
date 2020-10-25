import {h, render} from 'preact';
import App from './components/app';
import "./constants/style/global.scss"
import "./constants/theme"

render(<App />, document.querySelector('#root')!);
