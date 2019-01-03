// Libraries
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

// Custom code
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default function configureStore() {
 return store;
}

sagaMiddleware.run(rootSaga);