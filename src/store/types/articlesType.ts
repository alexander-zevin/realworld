import {SET_ARTICLE, SET_ARTICLES, SET_PROGRESS, SHOW_TAB_TAGS} from "../constants/articlesContants";

export interface Article {
    slug: string
    title: string
    description: string
    body: string
    tagList: Array<string>
    createdAt: string
    updatedAt: string
    favorited: boolean
    favoritesCount: number
    author: {
        username: string
        bio: string
        image: string
        following: boolean
    }
}

export interface ArticlesState {
    articles: Array<Article>
    articlesCount: number | null
    isProgress: boolean
    showTabTags: boolean
}

export interface GetArticles {
    type: typeof SET_ARTICLES
    articlesState: ArticlesState
}

export interface SetProgress {
    type: typeof SET_PROGRESS
    isProgress: boolean
}

export interface SetArticle {
    type: typeof SET_ARTICLE
    article: Article
}

export interface ShowTabTags {
    type: typeof SHOW_TAB_TAGS
    showTabTags: boolean
}

export type ArticlesActions = GetArticles | SetProgress | SetArticle | ShowTabTags