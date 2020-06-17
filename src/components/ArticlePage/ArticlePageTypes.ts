import {IArticle} from "../../store/types/articlesType";
import {SET_ARTICLE} from "./ArticlePageConstants";

export interface ISetArticleAction {
		type: typeof SET_ARTICLE
		article: IArticle
}

export type ArticlePageType = ISetArticleAction