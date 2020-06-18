import {Article} from "../../store/types/articlesType";
import {SET_ARTICLE, SET_FOLLOWING} from "./ArticlePageConstants";

export interface SetArticle {
    type: typeof SET_ARTICLE
    article: Article
}

export interface SetFollowing {
    type: typeof SET_FOLLOWING
    following: boolean
}

export type ArticlePageActions = SetArticle | SetFollowing