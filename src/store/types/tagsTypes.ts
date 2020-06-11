import {SET_TAGS} from "../constants/tagsConstants";

export interface ITagsState {
    tags: Array<string>
}

export interface IGetTagsAction {
    type: typeof SET_TAGS
    tags: Array<string>
}

export type TagsActionType = IGetTagsAction