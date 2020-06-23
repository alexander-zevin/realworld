import {Dispatch} from "redux";
import {tagsAPI} from "../../api/api";
import {GetTags, SetError, SetProgress, TagsActions, TagsState} from "../types/tagsTypes";
import {SET_ERROR, SET_PROGRESS, SET_TAGS} from "../constants/tagsConstants";

export const setTags = (tagsState: TagsState): GetTags => ({
    type: SET_TAGS,
    tags: tagsState.tags
});

export const getTags = () => (dispatch: Dispatch<TagsActions>) => {
    dispatch(setProgress(true))
    tagsAPI.getTags()
        .then(response => dispatch(setTags(response.data)))
        .catch(() => dispatch(setError(true)))
        .then(() => dispatch(setProgress(false)))
}

export const setError = (error: boolean): SetError => ({
    type: SET_ERROR,
    error: error
})

export const setProgress = (isProgress: boolean): SetProgress => ({
    type: SET_PROGRESS,
    isProgress: isProgress
})
