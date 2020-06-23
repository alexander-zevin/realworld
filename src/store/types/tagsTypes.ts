import {SET_TAGS_ERROR, SET_TAGS_PROGRESS, SET_TAGS} from "../constants/tagsConstants";

export interface TagsState {
    tags: Array<string>
    error: boolean
    isProgress: boolean
}

export interface GetTags {
    type: typeof SET_TAGS
    tags: Array<string>
}

export interface SetError {
    type: typeof SET_TAGS_ERROR
    error: boolean
}

export interface SetProgress {
    type: typeof SET_TAGS_PROGRESS
    isProgress: boolean
}

export type TagsActions = GetTags | SetError | SetProgress