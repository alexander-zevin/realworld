import React, {FC, useEffect, useReducer} from 'react'
import PostComment from "./PostComment/PostComment";
import {CommentsRoot} from "./CommentsStyles";
import {commentsReducer, initialState} from "./CommentsReducer";
import {commentsAPI} from "../../../api/api";
import {CommentsProps} from "./CommentsTypes";
import {deleteComment, setComment, setComments} from "./CommentsActions";
import Comment from "./Comment/Comment";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const Comments: FC<CommentsProps> = ({slug}) => {

		const [state, dispatch] = useReducer(commentsReducer, initialState)

		const username: string = useSelector((state: RootState) => state.profile.user.username)

		const postComment = () => {
				commentsAPI.postComment(slug, state.commentInput)
						.then(res => {
								dispatch(setComment(res.data.comment))
						})
						.catch(err => console.log(err))
		}

		const getComments = () => {
				commentsAPI.getComments(slug)
						.then(res => dispatch(setComments(res.data.comments)))
						.catch(err => console.log(err))
		}

		const delComment = (id: number) => {
				commentsAPI.deleteComment(slug, id)
						.then(res => dispatch(deleteComment(id)))
						.catch(err => console.log(err))
		}

		useEffect(() => {
				getComments()
		}, [])

		return (
				<CommentsRoot>
						<PostComment
								state={state}
								dispatch={dispatch}
								postComment={postComment}
						/>
						{
								state.comments.map(comment =>
										<Comment
												key={comment.body + comment.id}
												comment={comment}
												deleteComment={delComment}
												username={username}
										/>
								)
						}
				</CommentsRoot>
		)
}

export default Comments
