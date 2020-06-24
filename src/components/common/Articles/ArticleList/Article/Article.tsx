import React, {FC} from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {ArticlesProps} from "./ArticleTypes";
import {
    ArticleRoot,
    FavoriteButton,
    ListBasis,
    ListBasisLeft, ListBasisRight,
    ListDescription,
    ListTitle, ReadMore
} from "./ArticleStyles";
import Chip from "@material-ui/core/Chip";
import {TagsBox} from "../../../Tags/TagsStyles";
import {articlesAPI} from "../../../../../api/api";
import { useHistory } from "react-router-dom";
import {getGlobalArticlesByTag, setFavorited} from "../../../../../store/actions/articlesActions";
import {useDispatch} from "react-redux";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Article: FC<ArticlesProps> = ({username, createdAt, title, description,
                                         favorited, favoritesCount, tagList, slug}) => {

    const history = useHistory()

    const dispatch = useDispatch()

    const favoriteArticle = () => {
        articlesAPI.favoriteArticle(slug)
            .then(res => dispatch(setFavorited(res.data.article.favorited, slug)))
            .catch(err => console.log(err))
    }

    const unFavoriteArticle = () => {
        articlesAPI.unFavoriteArticle(slug)
            .then(res => dispatch(setFavorited(res.data.article.favorited, slug)))
            .catch(err => console.log(err))
    }

    return (
        <ArticleRoot>
            <ListItem disableGutters>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={username} secondary={createdAt}/>
                <FavoriteButton
                    startIcon={favorited ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>}
                    onClick={favorited ? unFavoriteArticle : favoriteArticle}
                >
                    {favoritesCount}
                </FavoriteButton>
            </ListItem>
            <ListBasis>
                <ListBasisLeft>
                    <ListTitle>{title}</ListTitle>
                    <ListDescription>{description}</ListDescription>
                    <ReadMore onClick={() => history.push(`/article/${slug}`)}>Read more...</ReadMore>
                </ListBasisLeft>
                <ListBasisRight>
                    <TagsBox>
                        { tagList.map((tag, index) =>
                            <Chip
                                label={tag}
                                size="small"
                                key={tag + index}
                                onClick={() => dispatch(getGlobalArticlesByTag(tag))}
                            />
                        )}
                    </TagsBox>
                </ListBasisRight>
            </ListBasis>
        </ArticleRoot>
    )
}

export default Article
