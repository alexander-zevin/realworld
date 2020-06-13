import {Dispatch} from "redux";
import {tagsAPI} from "../../api/api";
import {IGetTagsAction, ITagsState, TagsActionType} from "../types/tagsTypes";
import {SET_TAGS} from "../constants/tagsConstants";

export const setTagsActionCreator = (tagsState: ITagsState): IGetTagsAction => ({ type: SET_TAGS, tags: tagsState.tags });

export const getTagsThunkCreator = () => async (dispatch: Dispatch<TagsActionType>) => {
    const response = await tagsAPI.getTags();
    dispatch(setTagsActionCreator(response.data))
}