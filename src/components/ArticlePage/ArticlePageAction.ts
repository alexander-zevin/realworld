import {IArticle} from "../../store/types/articlesType";
import {SET_ARTICLE} from "./ArticlePageConstants";
import {ISetArticleAction} from "./ArticlePageTypes";

export const setArticleActionCreator = (article: IArticle): ISetArticleAction => ({
		type: SET_ARTICLE,
		article: article
})