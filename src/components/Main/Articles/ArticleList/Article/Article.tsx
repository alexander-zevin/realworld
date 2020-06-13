import React, {FC} from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IArticlesProps} from "./ArticleTypes";
import {
    ArticleRoot,
    FavoriteButton,
    FavoriteCount,
    FavoriteIcon,
    ListBasis,
    ListBasisLeft, ListBasisRight,
    ListDescription,
    ListTitle
} from "./ArticleStyles";
import Chip from "@material-ui/core/Chip";
import {TagsBox} from "../../../Tags/TagsStyles";
import {Divider} from "@material-ui/core";

const Article: FC<IArticlesProps> = ({username, createdAt, title, description, favorited, favoritesCount, tagList}) => {

    return (
        <ArticleRoot>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={username} secondary={createdAt}/>
                <FavoriteButton>
                    <FavoriteIcon color='primary'/>
                    <FavoriteCount>{favoritesCount}</FavoriteCount>
                </FavoriteButton>
            </ListItem>
            <ListBasis>
                <ListBasisLeft>
                    <ListTitle>{title}</ListTitle>
                    <ListDescription>{description}</ListDescription>
                </ListBasisLeft>
                <ListBasisRight>
                    <TagsBox>
                        { tagList.map((tag, index) => <Chip label={tag} size="small" key={tag + index}/>) }
                    </TagsBox>
                </ListBasisRight>
            </ListBasis>
        </ArticleRoot>
    )
}

export default Article
