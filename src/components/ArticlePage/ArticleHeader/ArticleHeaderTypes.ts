import {ISetArticle, ISetFollowing} from "../ArticlePageTypes";

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
		setArticle: ISetArticle
		setFollowing: ISetFollowing
		slug: string
}

