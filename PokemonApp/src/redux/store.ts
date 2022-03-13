import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import pokemonsReducer from './reducers';

const rootReducer = combineReducers({pokemonsReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
