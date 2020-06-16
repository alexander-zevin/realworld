import {SET_ARTICLE, SET_ARTICLES, SET_PROGRESS} from "../constants/articlesContants";
import {
		ArticlesActionType,
		IArticle,
		IArticlesState,
		IGetArticlesAction,
		ISetArticleAction,
		ISetProgressAction
} from "../types/articlesType";
import {articlesAPI} from "../../api/api";
import {Dispatch} from "redux";

export const setArticlesActionCreator = (articlesState: IArticlesState): IGetArticlesAction => ({ type: SET_ARTICLES, articlesState: articlesState });

export const setProgressActionCreator = (isProgress: boolean): ISetProgressAction => ({ type: SET_PROGRESS, isProgress: isProgress })

export const getGlobalArticlesThunkCreator = () => async (dispatch: Dispatch<ArticlesActionType>) => {
		dispatch(setProgressActionCreator(true))
		const response = await articlesAPI.getGlobalArticles();
		dispatch(setArticlesActionCreator(response.data))
		dispatch(setProgressActionCreator(false))
}

export const getYourArticlesThunkCreator = (author: string) => async (dispatch: Dispatch<ArticlesActionType>) => {
		dispatch(setProgressActionCreator(true))
		const response = await articlesAPI.getYourArticles(author)
		console.log(response.data)
		dispatch(setArticlesActionCreator(response.data))
		dispatch(setProgressActionCreator(false))
}

export const setArticleActionCreator = (article: IArticle): ISetArticleAction => ({
		type: SET_ARTICLE,
		article: article
})