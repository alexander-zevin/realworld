import React from 'react'
import {ArticleHeaderRoot, AuthorBlock, FollowButton, ListItemTextStyled, Title} from "./ArticleHeaderStyles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import {Button} from "@material-ui/core";

const ArticleHeader = () => {
    return (
        <ArticleHeaderRoot>
            <Title>Title</Title>
            <AuthorBlock>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemTextStyled primary="username" secondary="createdAt"/>
                    <FollowButton>FollowButton</FollowButton>
                    <Button variant="contained" color="primary">FollowButton</Button>
                </ListItem>
            </AuthorBlock>
        </ArticleHeaderRoot>
    )
}

export default ArticleHeader
