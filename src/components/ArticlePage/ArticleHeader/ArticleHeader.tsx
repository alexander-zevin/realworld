import React, {FC} from 'react'
import {ArticleHeaderRoot, AuthorBlock, FavoriteButton, FollowButton, ListItemTextStyled, Title} from "./ArticleHeaderStyles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import {IArticleHeaderProps} from "./ArticleHeaderTypes";
import AddIcon from '@material-ui/icons/Add';
import {articlesAPI, profileAPI} from "../../../api/api";
import {setFavorited, setFollowing} from "../ArticlePageAction";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const ArticleHeader: FC<IArticleHeaderProps> = ({title, author, createdAt, favoritesCount,
                    favorited, slug, image, dispatch}) => {

    const follow = () => {
        if (author.following) {
            profileAPI.unfollow(author.username)
                .then(res => dispatch(setFollowing(res.data.profile.following)))
                .catch(err => console.log(err))
        } else {
            profileAPI.follow(author.username)
                .then(res => dispatch(setFollowing(res.data.profile.following)))
                .catch(err => console.log(err))
        }
    }

    const favoriteArticle = () => {
        articlesAPI.favoriteArticle(slug)
            .then(res => {
                dispatch(setFavorited(res.data.article.favorited, slug))
            })
            .catch(err => console.log(err))

    }

    const unFavoriteArticle = () => {
        articlesAPI.unFavoriteArticle(slug)
            .then(res => {
                dispatch(setFavorited(res.data.article.favorited, slug))
            })
            .catch(err => console.log(err))
    }

    return (
        <ArticleHeaderRoot>
            <Title>{title}</Title>
            <AuthorBlock>
                <ListItem disableGutters>
                    <ListItemAvatar>
                        <Avatar src={image}>
                            <AccountCircleIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemTextStyled primary={author.username} secondary={createdAt}/>
                    <FollowButton startIcon={<AddIcon />} onClick={follow}>
                        { author.following ? `Unfollow ` : `Follow ` }
                    </FollowButton>
                    <FavoriteButton
                        startIcon={favorited ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>}
                        onClick={favorited ? unFavoriteArticle : favoriteArticle}
                    >
                        Favorite Article ({favoritesCount})
                    </FavoriteButton>
                </ListItem>
            </AuthorBlock>
        </ArticleHeaderRoot>
    )
}

export default ArticleHeader
