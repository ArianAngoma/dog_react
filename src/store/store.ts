import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {rootReducers} from '../reducers/rootReducers';

const composeEnhancers = (window && (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);
