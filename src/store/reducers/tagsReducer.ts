import {TagsState, TagsActions} from "../types/tagsTypes";
import {SET_TAGS_ERROR, SET_TAGS_PROGRESS, SET_TAGS} from "../constants/tagsConstants";

const initialState: TagsState = {
    tags: [],
    error: false,
    isProgress: false
}

export const tagsReducer = (state = initialState, action: TagsActions): TagsState => {
    switch (action.type) {
        case SET_TAGS:
            return {...state, tags: action.tags}
        case SET_TAGS_ERROR:
            return {...state, error: action.error}
        case SET_TAGS_PROGRESS:
            return {...state, isProgress: action.isProgress}
    }
    return state
}

