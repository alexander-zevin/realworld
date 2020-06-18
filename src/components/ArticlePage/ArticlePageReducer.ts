import {Article} from "../../store/types/articlesType";
import {ArticlePageActions} from "./ArticlePageTypes";
import {SET_ARTICLE, SET_FOLLOWING} from "./ArticlePageConstants";

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
        default:
            return state
    }
}