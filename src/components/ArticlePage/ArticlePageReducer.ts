import {Article} from "../../store/types/articlesType";
import {ArticlePageActions} from "./ArticlePageTypes";
import {SET_ARTICLE, SET_FAVORITED, SET_FOLLOWING} from "./ArticlePageConstants";

export const initialState: Article = {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: {
        username: '',
        bio: '',
        image: '',
        following: false
    }
};

export const articlePageReducer = (state: Article, action: ArticlePageActions) => {
    switch (action.type) {
        case SET_ARTICLE:
            return action.article
        case SET_FOLLOWING:
            return {...state, author: {...state.author, following: action.following}}
        case SET_FAVORITED:
            return {
                ...state,
                favorited: action.favorited,
                favoritesCount: action.favorited ? ++state.favoritesCount : --state.favoritesCount
            }
        default:
            return state
    }
}