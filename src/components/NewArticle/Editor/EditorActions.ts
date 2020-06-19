import {SetBody, SetDescription, SetError, SetTags, SetTitle} from "./EditorTypes";
import {SET_BODY, SET_DESCRIPTION, SET_ERROR, SET_TAGS, SET_TITLE} from "./EditorConstants";

export const setEditTitle = (title: string): SetTitle => ({
    type: SET_TITLE,
    title: title
})

export const setDescription = (description: string): SetDescription => ({
    type: SET_DESCRIPTION,
    description: description
})

export const setBody = (body: string): SetBody => ({
    type: SET_BODY,
    body: body
})

export const setTags = (tagList: string): SetTags => ({
    type: SET_TAGS,
    tagList: tagList
})

export const setError = (error: string): SetError => ({
    type: SET_ERROR,
    error: error
})
