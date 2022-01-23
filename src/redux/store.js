import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './modules';

const configStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore (
    combineReducers({
        ...rootReducers,
        ...reducers
    }),
    preloadedState,
    compose(
        applyMiddleware(
            ...middlewares,
            thunk,
        )
    )
);

export default configStore;