import {Comments, CommentsActions} from "./CommentsTypes";
import {DELETE_COMMENT, SET_COMMENT, SET_COMMENTS, SET_INPUT_COMMENT} from "./CommentsConstants";

export const initialState: Comments = {
		comments: [],
		commentInput: ''
}

export const commentsReducer = (state: Comments, action: CommentsActions) => {
		switch (action.type) {
				case SET_INPUT_COMMENT:
						return {...state, commentInput: action.text}
				case SET_COMMENT:
						return {
								...state,
								comments: [...state.comments, action.comment],
								commentInput: ''
						}
				case SET_COMMENTS:
						return {...state, comments: action.comments}
				case DELETE_COMMENT:
						return {
								...state,
								comments: state.comments.filter(comment => comment.id !== action.id)
						}
				default:
						return state
		}
}