import {SET_ARTICLE, SET_ARTICLES, SET_PROGRESS, SHOW_TAB_TAGS} from "../constants/articlesContants";
import {
		ArticlesActionType,
		IArticle,
		IArticlesState,
		IGetArticlesAction,
		ISetArticleAction,
		ISetProgressAction, IShowTabTagsAction
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

export const getYourArticlesThunkCreator = () => async (dispatch: Dispatch<ArticlesActionType>) => {
		dispatch(setProgressActionCreator(true))
		const response = await articlesAPI.feedArticles()
		console.log(response.data)
		dispatch(setArticlesActionCreator(response.data))
		dispatch(setProgressActionCreator(false))
}

export const setArticleActionCreator = (article: IArticle): ISetArticleAction => ({
		type: SET_ARTICLE,
		article: article
})

export const showTabTagsActionCreator = (showTabTags: boolean): IShowTabTagsAction => ({
		type: SHOW_TAB_TAGS,
		showTabTags: showTabTags
})