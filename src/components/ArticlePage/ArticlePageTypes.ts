import {Article} from "../../store/types/articlesType";
import {SET_ARTICLE, SET_FAVORITED, SET_FOLLOWING} from "./ArticlePageConstants";

export interface SetArticle {
    type: typeof SET_ARTICLE
    article: Article
}

export interface SetFollowing {
    type: typeof SET_FOLLOWING
    following: boolean
}

export interface SetFavorited {
    type: typeof SET_FAVORITED
    favorited: boolean
    slug: string
}

export type ArticlePageActions = SetArticle | SetFollowing | SetFavorited