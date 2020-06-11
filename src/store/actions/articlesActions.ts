import {SET_ARTICLES} from "../constants/articlesContants";
import {ArticlesActionType, IArticlesState, IGetArticlesAction} from "../types/articlesType";
import {articlesAPI} from "../../api/api";
import {Dispatch} from "redux";

export const setArticlesActionCreator = (articlesState: IArticlesState): IGetArticlesAction => ({ type: SET_ARTICLES, articlesState: articlesState });

export const getArticlesThunkCreator = () => async (dispatch: Dispatch<ArticlesActionType>) => {
		const response = await articlesAPI.getArticles();
		dispatch(setArticlesActionCreator(response.data))
}