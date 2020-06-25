import {Comment} from "../CommentsTypes";

export interface CommentProps {
		comment: Comment
		deleteComment: (id: number) => void
		username: string
}