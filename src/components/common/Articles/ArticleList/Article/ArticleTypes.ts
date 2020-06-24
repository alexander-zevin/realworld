export interface ArticlesProps {
    username: string
    createdAt: string
    title: string
    description: string
    favorited: boolean
    favoritesCount: number
    tagList: Array<string>
    slug: string
    image: string
}