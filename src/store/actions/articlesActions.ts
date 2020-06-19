import {
    SET_ACTIVE_TAB,
    SET_ARTICLE,
    SET_ARTICLES,
    SET_PROGRESS,
    SET_TAB_TAGS,
    SET_TAG_NAME
} from "../constants/articlesContants";
import {
    ArticlesActions,
    Article,
    ArticlesState,
    GetArticles,
    SetArticle,
    SetProgress, SetTabTags, SetActiveTab, SetTagName,
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

export const getFeedArticles = () => async (dispatch: Dispatch<ArticlesActions>) => {
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

export const getGlobalArticlesByTag = (tag: string) => (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    articlesAPI.getGlobalArticlesByTag(tag)
        .then(res => {
            dispatch(setTabTags(true))
            dispatch(setActiveTab(2))
            dispatch(setTagName(tag))
            dispatch(setArticles(res.data))
        })
        .catch(err => console.log(err))
        .then(() => dispatch(setProgress(false)))
}

export const getMyArticles = (author: string) => (dispatch: Dispatch<ArticlesActions>) => {
    dispatch(setProgress(true))
    articlesAPI.getMyArticles(author)
        .then(res => dispatch(setArticles(res.data)))
        .catch(err => console.log(err))
        .then(() => dispatch(setProgress(false)))
}