const reducers = require('./reducers');
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
//import {Header} from './containers';
import {App,Main,ComponentEditor} from './containers';
import { combineReducers, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import {anonymous as MenuAnonymous} from './constants/Menu';

if (window.Pace)
  window.Pace.stop();

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));

const middleware = routerMiddleware(browserHistory)
const store = configureStore(reducer, {menu:MenuAnonymous}, applyMiddleware(middleware));

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="component" component={ComponentEditor}>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
