const reducers = require('./reducers');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
//import {Header} from './containers';
import App from './containers/App';
import { combineReducers, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import {anonymous as MenuAnonymous} from './constants/Menu';
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));
const reduxRouterMiddleware = syncHistory(browserHistory);
const store = configureStore(reducer, {menu:MenuAnonymous},applyMiddleware(reduxRouterMiddleware));
if (window.Pace)
  window.Pace.stop();
//render(
//  <Provider store={store}>
//    <Header/>
//  </Provider>,
//  document.getElementById('header')
//);
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
