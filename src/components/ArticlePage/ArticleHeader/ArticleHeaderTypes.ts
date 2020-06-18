import {ArticlePageActions} from "../ArticlePageTypes";
import {Dispatch} from "react";

export interface IArticleHeaderProps {
    title: string
    author: {
        username: string
        image: string
        following: boolean
    }
    createdAt: string
    favorited: boolean
    favoritesCount: number
    slug: string
    dispatch: Dispatch<ArticlePageActions>
}

