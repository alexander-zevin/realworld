import {SET_ARTICLE, SET_ARTICLES, SET_PROGRESS, SHOW_TAB_TAGS} from "../constants/articlesContants";

export interface IArticle {
		slug: string
		title: string
		description: string
		body: string
		tagList: Array<string>
		createdAt: string
		updatedAt: string
		favorited: boolean
		favoritesCount: number
		author: {
				username: string
				bio: string
				image: string
				following: boolean
		}
}

export interface IArticlesState {
		articles: Array<IArticle>
		articlesCount: number | null
		isProgress: boolean
		showTabTags: boolean
}

export interface IGetArticlesAction {
		type: typeof SET_ARTICLES
		articlesState: IArticlesState
}

export interface ISetProgressAction {
		type: typeof SET_PROGRESS
		isProgress: boolean
}

export interface ISetArticleAction {
		type: typeof SET_ARTICLE
		article: IArticle
}

export interface IShowTabTagsAction {
		type: typeof SHOW_TAB_TAGS
		showTabTags: boolean
}

export type ArticlesActionType = IGetArticlesAction | ISetProgressAction | ISetArticleAction | IShowTabTagsAction