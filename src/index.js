import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App';
import './index.css';

const NoMatch = () =>
  <div>
    Página não encontrada !
	</div>

render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  document.getElementById('root')
);
