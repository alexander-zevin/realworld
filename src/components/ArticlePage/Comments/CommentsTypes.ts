import {SET_INPUT_COMMENT} from "./CommentsConstants";

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

export type CommentsActions = SetInputComment