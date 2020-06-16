import {ISetBodyAction, ISetDescriptionAction, ISetTagsAction, ISetTitleAction} from "./EditorTypes";
import {SET_BODY, SET_DESCRIPTION, SET_TAGS, SET_TITLE} from "./EditorConstants";

export const setEditTitleActionCreator = (title: string): ISetTitleAction => ({
		type: SET_TITLE,
		title: title
})

export const setDescriptionActionCreator = (description: string): ISetDescriptionAction => ({
		type: SET_DESCRIPTION,
		description: description
})

export const setBodyActionCreator = (body: string): ISetBodyAction => ({
		type: SET_BODY,
		body: body
})

/*
export const setTagsActionCreator = (tagList: string): ISetTagsAction => ({
		type: SET_TAGS,
		tagList: tagList
})*/
