import {ArticlesActionType, IArticlesState} from "../types/articlesType";
import {SET_ARTICLES, SET_PROGRESS} from "../constants/articlesContants";

const initialState: IArticlesState = {
    articles: [],
    articlesCount: null,
    isProgress: false
};

export const articlesReducer = (state = initialState, action: ArticlesActionType): IArticlesState => {
    switch (action.type) {
        case SET_ARTICLES:
            return Object.assign({}, action.articlesState)
        case SET_PROGRESS:
            return {...state, isProgress: action.isProgress}
    }
    return state
}

