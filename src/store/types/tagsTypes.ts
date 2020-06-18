import {SET_TAGS} from "../constants/tagsConstants";

export interface TagsState {
    tags: Array<string>
}

export interface GetTags {
    type: typeof SET_TAGS
    tags: Array<string>
}

export type TagsActions = GetTags