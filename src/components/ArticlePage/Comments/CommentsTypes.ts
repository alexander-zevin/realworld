import {DELETE_COMMENT, SET_COMMENT, SET_COMMENTS, SET_INPUT_COMMENT} from "./CommentsConstants";

export interface CommentsProps {
		slug: string
}

export interface Comment {
		id: number
		createdAt: string
		updatedAt: string
		body: string
		author: {
				username: string
				bio: string
				image: string
				following: false
		}
}

export interface Comments {
		comments: Array<Comment>
		commentInput: string
}

export interface SetInputComment {
		type: typeof SET_INPUT_COMMENT
		text: string
}

export interface SetComment {
		type: typeof SET_COMMENT
		comment: Comment
}

export interface SetComments {
		type: typeof SET_COMMENTS
		comments: Array<Comment>
}

export interface DeleteComment {
		type: typeof DELETE_COMMENT
		id: number
}

export type CommentsActions = SetInputComment | SetComment | SetComments | DeleteComment