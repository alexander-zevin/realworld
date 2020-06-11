import {ITagsState, TagsActionType} from "../types/tagsTypes";
import {SET_TAGS} from "../constants/tagsConstants";

const initialState: ITagsState = {
    tags: []
}

export const tagsReducer = (state = initialState, action: TagsActionType): ITagsState => {
    switch (action.type) {
        case SET_TAGS:
            return {...state, tags: action.tags}
    }
    return state
}

