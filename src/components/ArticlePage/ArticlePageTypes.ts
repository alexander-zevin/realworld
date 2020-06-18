import {IArticle} from "../../store/types/articlesType";
import {SET_ARTICLE, SET_FOLLOWING} from "./ArticlePageConstants";

export interface ISetArticle {
		(article: IArticle): void
}

export interface ISetFollowing {
		(following: boolean): void
}

export interface ISetArticleAction {
		type: typeof SET_ARTICLE
		article: IArticle
}

export interface ISetFollowingAction {
		type: typeof SET_FOLLOWING
		following: boolean
}

export type ArticlePageType = ISetArticleAction | ISetFollowingAction