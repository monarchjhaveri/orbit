import App from './App';
import {Application} from './orbit';
import './index.css';

const app = window.app = new Application({val: 1});

app.render(
  App,
  document.getElementById('root')
);
