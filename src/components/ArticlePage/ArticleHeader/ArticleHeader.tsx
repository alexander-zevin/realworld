import React from 'react'
import {ArticleHeaderRoot, AuthorBlock, FollowButton, ListItemTextStyled, Title} from "./ArticleHeaderStyles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import { StylesProvider } from "@material-ui/core/styles";

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
								</ListItem>
						</AuthorBlock>
				</ArticleHeaderRoot>
		)
}

export default ArticleHeader
