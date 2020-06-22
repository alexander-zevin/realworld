import {Comments, CommentsActions} from "./CommentsTypes";
import {SET_INPUT_COMMENT} from "./CommentsConstants";

export const initialState: Comments = {
		comments: [],
		commentInput: ''
}

export const commentsReducer = (state: Comments, action: CommentsActions) => {
		switch (action.type) {
				case SET_INPUT_COMMENT:
						return {...state, commentInput: action.text}
				default:
						return state
		}
}