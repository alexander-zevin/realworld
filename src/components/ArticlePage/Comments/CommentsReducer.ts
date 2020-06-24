import {Comments, CommentsActions} from "./CommentsTypes";
import {SET_COMMENT, SET_INPUT_COMMENT} from "./CommentsConstants";

export const initialState: Comments = {
		comments: [],
		commentInput: ''
}

export const commentsReducer = (state: Comments, action: CommentsActions) => {
		switch (action.type) {
				case SET_INPUT_COMMENT:
						return {...state, commentInput: action.text}
				case SET_COMMENT:
						return {...state, comments: [...state.comments, action.comment]}
				default:
						return state
		}
}