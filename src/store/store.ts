import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {articlesReducer} from "./reducers/articlesReducer";
import {tagsReducer} from "./reducers/tagsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {authReducer} from "./reducers/authReducer";
import {appReducer} from "./reducers/appReducer";

const middlewares = [thunk]

const rootReducer = combineReducers({
    articles: articlesReducer,
    tags: tagsReducer,
    profile: profileReducer,
    auth: authReducer,
    app: appReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
