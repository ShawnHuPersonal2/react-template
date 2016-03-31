const reducers = require('./reducers');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
//import {Header} from './containers';
import {App,Main,Component} from './containers';
import { combineReducers, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
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
        <IndexRoute component={Main} />
        <Route path="component" component={Component}>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
