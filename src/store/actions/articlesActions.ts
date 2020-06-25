import {
    SET_ACTIVE_TAB,
    SET_ARTICLE,
    SET_ARTICLES,
    SET_ERROR,
    SET_FAVORITED,
    SET_PROGRESS,
    SET_TAB_TAGS,
    SET_TAG_NAME
} from "../constants/articlesContants";
import {
    Article,
    ArticlesActions,
    ArticlesState,
    GetArticles,
    SetActiveTab,
    SetArticle,
    SetError,
    SetFavorited,
    SetProgress,
    SetTabTags,
    SetTagName,
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

export const getGlobalArticles = (offset: number, limit: number) => async (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    articlesAPI.getGlobalArticles(offset, limit)
        .then(res => dispatch(setArticles(res.data)))
        .catch(() => dispatch(setError(true)))
        .then(() => dispatch(setProgress(false)))
}

export const getFeedArticles = (offset: number, limit: number) => async (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    const response = await articlesAPI.feedArticles(offset, limit)
    console.log(response.data)
    dispatch(setArticles(response.data))
    dispatch(setProgress(false))
}

export const setArticle = (article: Article): SetArticle => ({
    type: SET_ARTICLE,
    article: article
})

export const setTabTags = (tabTags: boolean): SetTabTags => ({
    type: SET_TAB_TAGS,
    tabTags: tabTags
})

export const setActiveTab = (activeTab: number): SetActiveTab => ({
    type: SET_ACTIVE_TAB,
    activeTab: activeTab
})

export const setTagName = (tagName: string): SetTagName => ({
    type: SET_TAG_NAME,
    tagName: tagName
})

export const getGlobalArticlesByTag = (tag: string, offset: number, limit: number) => (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    articlesAPI.getGlobalArticlesByTag(tag, offset, limit)
        .then(res => {
            dispatch(setTabTags(true))
            dispatch(setActiveTab(2))
            dispatch(setTagName(tag))
            dispatch(setArticles(res.data))
        })
        .catch(err => console.log(err))
        .then(() => dispatch(setProgress(false)))
}

export const getMyArticles = (author: string, offset: number, limit: number) => (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    articlesAPI.getMyArticles(author, offset, limit)
        .then(res => dispatch(setArticles(res.data)))
        .catch(err => console.log(err))
        .then(() => dispatch(setProgress(false)))
}

export const setError = (error: boolean): SetError => ({
    type: SET_ERROR,
    error: error
})

export const setFavorited = (favorited: boolean, slug: string): SetFavorited => ({
    type: SET_FAVORITED,
    favorited: favorited,
    slug: slug
})

export const getFavoritedArticles = (favorited: string, offset: number, limit: number) => (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    articlesAPI.getFavoritedArticles(favorited, offset, limit)
        .then(res => dispatch(setArticles(res.data)))
        .catch(err => console.log(err))
        .then(() => dispatch(setProgress(false)))
}

export const favoriteArticle = (slug: string) => (dispatch: Dispatch<ArticlesActions>) => {
    articlesAPI.favoriteArticle(slug)
        .then(res => dispatch(setFavorited(res.data.article.favorited, slug)))
        .catch(err => console.log(err))
}

export const unFavoriteArticle = (slug: string) => (dispatch: Dispatch<ArticlesActions>) => {
    articlesAPI.unFavoriteArticle(slug)
        .then(res => dispatch(setFavorited(res.data.article.favorited, slug)))
        .catch(err => console.log(err))
}

