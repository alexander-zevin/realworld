import {SET_ARTICLE, SET_ARTICLES, SET_PROGRESS, SHOW_TAB_TAGS} from "../constants/articlesContants";
import {
    ArticlesActions,
    Article,
    ArticlesState,
    GetArticles,
    SetArticle,
    SetProgress,
    ShowTabTags
} from "../types/articlesType";
import {articlesAPI} from "../../api/api";
import {Dispatch} from "redux";

export const setArticles = (articlesState: ArticlesState): GetArticles => ({
    type: SET_ARTICLES,
    articlesState: articlesState
});

export const setProgress = (isProgress: boolean): SetProgress => ({
    type: SET_PROGRESS,
    isProgress: isProgress
})

export const getGlobalArticles = () => async (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    const response = await articlesAPI.getGlobalArticles();
    dispatch(setArticles(response.data))
    dispatch(setProgress(false))
}

export const getYourArticles = () => async (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    const response = await articlesAPI.feedArticles()
    console.log(response.data)
    dispatch(setArticles(response.data))
    dispatch(setProgress(false))
}

export const setArticle = (article: Article): SetArticle => ({
    type: SET_ARTICLE,
    article: article
})

export const showTabTags = (showTabTags: boolean): ShowTabTags => ({
    type: SHOW_TAB_TAGS,
    showTabTags: showTabTags
})