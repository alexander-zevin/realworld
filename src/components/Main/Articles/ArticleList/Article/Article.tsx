import React, {FC} from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IArticlesProps} from "./ArticleTypes";

const Article: FC<IArticlesProps> = ({username, createdAt}) => {
		return (
				<ListItem>
						<ListItemAvatar>
								<Avatar>
										<AccountCircleIcon/>
								</Avatar>
						</ListItemAvatar>
						<ListItemText primary={username} secondary={createdAt} />
				</ListItem>
		)
}

export default Article
