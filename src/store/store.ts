import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {articlesReducer} from "./reducers/articlesReducer";

const middlewares = [thunk]

const rootReducer = combineReducers({
    articles: articlesReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
