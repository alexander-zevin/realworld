import {IArticle} from "../../store/types/articlesType";
import {SET_ARTICLE, SET_FOLLOWING} from "./ArticlePageConstants";
import {ISetArticleAction, ISetFollowingAction} from "./ArticlePageTypes";

export const setArticleActionCreator = (article: IArticle): ISetArticleAction => ({
		type: SET_ARTICLE,
		article: article
})

export const setFollowingActionCreator = (following: boolean): ISetFollowingAction => ({
		type: SET_FOLLOWING,
		following: following
})