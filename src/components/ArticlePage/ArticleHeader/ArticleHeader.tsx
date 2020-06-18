import React, {FC} from 'react'
import {ArticleHeaderRoot, AuthorBlock, FavoriteButton, FollowButton, ListItemTextStyled, Title} from "./ArticleHeaderStyles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import {IArticleHeaderProps} from "./ArticleHeaderTypes";
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {articlesAPI, profileAPI} from "../../../api/api";

const ArticleHeader: FC<IArticleHeaderProps> = ({title, author, createdAt, favoritesCount,
                    favorited, setArticle, setFollowing, slug}) => {

    const follow = () => {
        if (author.following) {
            profileAPI.unfollow(author.username)
                .then(res => setFollowing(res.data.profile.following))
                .catch(err => console.log(err))
        } else {
            profileAPI.follow(author.username)
                .then(res => setFollowing(res.data.profile.following))
                .catch(err => console.log(err))
        }
    }

    const favorite = () => {
        if (favorited) {
            articlesAPI.unFavoriteArticle(slug)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            articlesAPI.favoriteArticle(slug)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }

    return (
        <ArticleHeaderRoot>
            <Title>{title}</Title>
            <AuthorBlock>
                <ListItem disableGutters>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemTextStyled primary={author.username} secondary={createdAt}/>
                    <FollowButton startIcon={<AddIcon />} onClick={follow}>
                        { author.following ? `Unfollow ` : `Follow ` } {author.username}
                    </FollowButton>
                    <FavoriteButton startIcon={<FavoriteIcon />} onClick={favorite}>
                        Favorite Article ({favoritesCount})
                    </FavoriteButton>
                </ListItem>
            </AuthorBlock>
        </ArticleHeaderRoot>
    )
}

export default ArticleHeader
