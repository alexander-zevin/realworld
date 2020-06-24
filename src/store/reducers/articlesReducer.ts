import {
    SET_ACTIVE_TAB,
    SET_ARTICLE,
    SET_ARTICLES, SET_ERROR, SET_FAVORITED,
    SET_PROGRESS,
    SET_TAB_TAGS,
    SET_TAG_NAME
} from "../constants/articlesContants";
import {ArticlesActions, ArticlesState} from "../types/articlesType";

const initialState: ArticlesState = {
    articles: [],
    articlesCount: null,
    isProgress: false,
    tabTags: false,
    activeTab: 1,
    tagName: '',
    limit: 4,
    offset: 0,
    error: false
};

export const articlesReducer = (state = initialState, action: ArticlesActions): ArticlesState => {
    switch (action.type) {
        case SET_ARTICLES:
            return Object.assign({}, state, action.articlesState)
        case SET_PROGRESS:
            return {...state, isProgress: action.isProgress}
        case SET_ARTICLE:
            return {...state, articles: [...state.articles, action.article]}
        case SET_TAB_TAGS:
            return {...state, tabTags: action.tabTags}
        case SET_ACTIVE_TAB:
            return  {...state, activeTab: action.activeTab}
        case SET_TAG_NAME:
            return {...state, tagName: action.tagName }
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_FAVORITED:
            return {
                ...state,
                articles: state.articles.map(i =>
                    i.slug === action.slug ? {
                        ...i,
                        favorited: action.favorited,
                        favoritesCount: action.favorited ? ++i.favoritesCount : --i.favoritesCount
                    } : i
                )
            }
    }
    return state
}

