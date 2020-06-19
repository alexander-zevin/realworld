import {
    SET_ACTIVE_TAB,
    SET_ARTICLE,
    SET_ARTICLES,
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
    tagName: ''
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
    }
    return state
}

