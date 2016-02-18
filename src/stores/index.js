import { createStore } from 'redux'
// Sync dispatched route actions to the history

module.exports = function(reducers,initialState, middlewares) {
  const store = createStore(reducers, initialState, middlewares);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store
};
