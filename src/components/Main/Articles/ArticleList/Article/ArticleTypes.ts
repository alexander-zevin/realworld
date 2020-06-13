export interface IArticlesProps {
    username: string
    createdAt: string
    title: string
    description: string
    favorited: boolean
    favoritesCount: number
    tagList: Array<string>
}