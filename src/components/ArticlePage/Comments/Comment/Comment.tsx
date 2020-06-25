import React, {FC} from 'react'
import {CommentRoot, CommentBody, AuthorBlock, CommentAvatar, Author, CreatedAt} from "./CommentStyles";
import {CommentProps} from "./CommentTypes";
import {convertDate} from "../../../../lib/convertDate";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const Comment: FC<CommentProps> = ({comment, deleteComment, username}) => {
    return (
        <CommentRoot>
            <CommentBody>{comment.body}</CommentBody>
            <Divider/>
            <AuthorBlock>
                <CommentAvatar src={comment.author.image}/>
                <Author>{comment.author.username}</Author>
                <CreatedAt>{convertDate(comment.createdAt)}</CreatedAt>
                {
                    username === comment.author.username &&
                        <IconButton aria-label="delete" edge='end' onClick={() => deleteComment(comment.id)}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                }
            </AuthorBlock>
        </CommentRoot>
    )
}

export default Comment
