import {Dispatch} from "redux";
import {tagsAPI} from "../../api/api";
import {GetTags, TagsActions, TagsState} from "../types/tagsTypes";
import {SET_TAGS} from "../constants/tagsConstants";

export const setTags = (tagsState: TagsState): GetTags => ({ type: SET_TAGS, tags: tagsState.tags });

export const getTags = () => async (dispatch: Dispatch<TagsActions>) => {
    const response = await tagsAPI.getTags();
    dispatch(setTags(response.data))
}
