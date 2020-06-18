import {Article} from "../../store/types/articlesType";
import {SET_ARTICLE, SET_FOLLOWING} from "./ArticlePageConstants";
import {SetArticle, SetFollowing} from "./ArticlePageTypes";

export const setArticle = (article: Article): SetArticle => ({
    type: SET_ARTICLE,
    article: article
})

export const setFollowing = (following: boolean): SetFollowing => ({
    type: SET_FOLLOWING,
    following: following
})