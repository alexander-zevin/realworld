import {SET_BODY, SET_DESCRIPTION, SET_ERROR, SET_TAGS, SET_TITLE} from "./EditorConstants";

export interface EditorState {
    article: {
        title: string
        description: string
        body: string
        tagList: string
    }
    error: null | string
}

export interface ModifiedEditState {
    article: {
        title: string
        description: string
        body: string
        tagList: Array<string>
    }
}

export interface SetTitle {
    type: typeof SET_TITLE
    title: string
}

export interface SetDescription {
    type: typeof SET_DESCRIPTION
    description: string
}

export interface SetBody {
    type: typeof SET_BODY
    body: string
}

export interface SetTags {
    type: typeof SET_TAGS
    tagList: string
}

export interface SetError {
    type: typeof SET_ERROR
    error: string | null
}

export type EditActions = SetTitle | SetDescription | SetBody | SetTags | SetError