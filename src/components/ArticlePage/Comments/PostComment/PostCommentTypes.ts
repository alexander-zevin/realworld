import {Dispatch} from "react";
import {Comments, CommentsActions} from "../CommentsTypes";

export interface PostCommentProps {
		state: Comments
		dispatch: Dispatch<CommentsActions>
		postComment: () => void
}