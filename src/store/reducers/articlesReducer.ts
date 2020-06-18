import {SET_ARTICLE, SET_ARTICLES, SET_PROGRESS, SHOW_TAB_TAGS} from "../constants/articlesContants";
import {ArticlesActionType, IArticlesState} from "../types/articlesType";

const initialState: IArticlesState = {
    articles: [],
    articlesCount: null,
    isProgress: false,
    showTabTags: false
};

export const articlesReducer = (state = initialState, action: ArticlesActionType): IArticlesState => {
    switch (action.type) {
        case SET_ARTICLES:
            return Object.assign({}, action.articlesState)
        case SET_PROGRESS:
            return {...state, isProgress: action.isProgress}
        case SET_ARTICLE:
            return {...state, articles: [...state.articles, action.article]}
        case SHOW_TAB_TAGS:
            return {...state, showTabTags: action.showTabTags}
    }
    return state
}

