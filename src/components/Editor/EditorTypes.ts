import {SET_BODY, SET_DESCRIPTION, SET_TAGS, SET_TITLE} from "./EditorConstants";

export interface IEditorState {
    article: {
        title: string
        description: string
        body: string
        tagList: string
    }
}

export interface IModifiedEditState {
    article: {
        title: string
        description: string
        body: string
        tagList: Array<string>
    }
}

export interface ISetTitleAction {
    type: typeof SET_TITLE
    title: string
}

export interface ISetDescriptionAction {
    type: typeof SET_DESCRIPTION
    description: string
}

export interface ISetBodyAction {
    type: typeof SET_BODY
    body: string
}

export interface ISetTagsAction {
    type: typeof SET_TAGS
    tagList: string
}

export type EditActionType = ISetTitleAction | ISetDescriptionAction | ISetBodyAction | ISetTagsAction