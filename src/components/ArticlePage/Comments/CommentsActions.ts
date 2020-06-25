import {Comment, DeleteComment, SetComment, SetComments, SetInputComment} from "./CommentsTypes";
import {DELETE_COMMENT, SET_COMMENT, SET_COMMENTS, SET_INPUT_COMMENT} from "./CommentsConstants";

export const setInputComment = (text: string): SetInputComment => ({
		type: SET_INPUT_COMMENT,
		text: text
})

export const setComment = (comment: Comment): SetComment => ({
		type: SET_COMMENT,
		comment: comment
})

export const setComments = (comments: Array<Comment>): SetComments => ({
		type: SET_COMMENTS,
		comments: comments
})

export const deleteComment = (id: number): DeleteComment => ({
		type: DELETE_COMMENT,
		id: id
})

