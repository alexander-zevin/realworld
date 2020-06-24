import {Article} from "../../store/types/articlesType";
import {SET_ARTICLE, SET_FAVORITED, SET_FOLLOWING} from "./ArticlePageConstants";
import {SetArticle, SetFavorited, SetFollowing} from "./ArticlePageTypes";

export const setArticle = (article: Article): SetArticle => ({
    type: SET_ARTICLE,
    article: article
})

export const setFollowing = (following: boolean): SetFollowing => ({
    type: SET_FOLLOWING,
    following: following
})

export const setFavorited = (favorited: boolean, slug: string): SetFavorited => ({
    type: SET_FAVORITED,
    favorited: favorited,
    slug: slug
})