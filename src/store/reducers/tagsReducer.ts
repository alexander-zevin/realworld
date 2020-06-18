import {TagsState, TagsActions} from "../types/tagsTypes";
import {SET_TAGS} from "../constants/tagsConstants";

const initialState: TagsState = {
    tags: []
}

export const tagsReducer = (state = initialState, action: TagsActions): TagsState => {
    switch (action.type) {
        case SET_TAGS:
            return {...state, tags: action.tags}
    }
    return state
}

