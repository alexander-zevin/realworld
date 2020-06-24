import {Comment, SetComment, SetInputComment} from "./CommentsTypes";
import {SET_COMMENT, SET_INPUT_COMMENT} from "./CommentsConstants";

export const setInputComment = (text: string): SetInputComment => ({
		type: SET_INPUT_COMMENT,
		text: text
})

export const setComment = (comment: Comment): SetComment => ({
		type: SET_COMMENT,
		comment: comment
})

