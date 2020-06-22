import React, {FC} from 'react'
import {PostCommentButton, PostCommentRoot} from "./PostCommentStyles";
import {MultilineTextField} from "../../../common/styled/rest";
import {PostCommentProps} from "./PostCommentTypes";
import {setInputComment} from "../CommentsActions";

const PostComment: FC<PostCommentProps> = ({state, dispatch, postComment}) => {
    return (
        <PostCommentRoot>
            <MultilineTextField
                label='Write a comment'
                value={state.commentInput}
                onChange={event => dispatch(setInputComment(event.target.value))}
            />
            <PostCommentButton onClick={postComment}>
                Post Comment
            </PostCommentButton>
        </PostCommentRoot>
    )
}

export default PostComment
