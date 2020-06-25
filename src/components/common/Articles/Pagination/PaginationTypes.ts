import {ProfileState} from "../../../../store/types/profileTypes";

export interface PaginationProps {
    articlesCount: number | null
    activeTab: number
    profileState: ProfileState
    offset: number
    tagName: string
    limit: number
}