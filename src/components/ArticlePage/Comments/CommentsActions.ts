import {SetInputComment} from "./CommentsTypes";
import {SET_INPUT_COMMENT} from "./CommentsConstants";

export const setInputComment = (text: string): SetInputComment => ({
		type: SET_INPUT_COMMENT,
		text: text
})

