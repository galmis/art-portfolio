// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, browserHistory } from 'react-router';
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import routes from './routes';
import App from './components/app/App';
import rootSaga from './actions/sagas';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap/css/bootstrap-paper.min.css';

import './index.css';

const rootReducer = combineReducers({
  ...reducers,
  // my reducers here, routing has to be the last one
  routing: routerReducer
});

const routingMiddleware = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, routingMiddleware));
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
