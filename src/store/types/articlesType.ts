import {SET_ARTICLES} from "../constants/articlesContants";

export interface IArticle {
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

export interface IArticlesState {
    articles: Array<IArticle>
    articlesCount: number | null
    isProgress: boolean
}

export interface IGetArticlesAction {
    type: typeof SET_ARTICLES
    articlesState: IArticlesState
}

export type ArticlesActionType = IGetArticlesAction