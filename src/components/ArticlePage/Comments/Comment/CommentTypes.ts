import {Comment} from "../CommentsTypes";

export interface CommentProps {
		comment: Comment
		slug: string
		deleteComment: (id: number) => void
}