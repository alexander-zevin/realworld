import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {articlesReducer} from "./reducers/articlesReducer";
import {tagsReducer} from "./reducers/tagsReducer";
import {profileReducer} from "./reducers/profileReducer";

const middlewares = [thunk]

const rootReducer = combineReducers({
    articles: articlesReducer,
    tags: tagsReducer,
    profile: profileReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
