import {IArticle} from "../../store/types/articlesType";
import {ArticlePageType} from "./ArticlePageTypes";
import {SET_ARTICLE, SET_FOLLOWING} from "./ArticlePageConstants";

export const initialState: IArticle = {
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

export const articlePageReducer = (state: IArticle, action: ArticlePageType) => {
		switch (action.type) {
				case SET_ARTICLE:
						return action.article
				case SET_FOLLOWING:
						return {...state, author: {...state.author, following: action.following}}
				default: return state
		}
}