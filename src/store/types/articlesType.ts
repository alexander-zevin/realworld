import {
    SET_ACTIVE_TAB,
    SET_ARTICLE,
    SET_ARTICLES,
    SET_PROGRESS,
    SET_TAB_TAGS,
    SET_TAG_NAME
} from "../constants/articlesContants";

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
    tabTags: boolean
    activeTab: number
    tagName: string
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

export interface SetTabTags {
    type: typeof SET_TAB_TAGS
    tabTags: boolean
}

export interface SetActiveTab {
    type: typeof SET_ACTIVE_TAB
    activeTab: number
}

export interface SetTagName {
    type: typeof SET_TAG_NAME
    tagName: string
}

export type ArticlesActions = GetArticles | SetProgress | SetArticle | SetTabTags | SetActiveTab | SetTagName