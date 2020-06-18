import React, {useEffect, useReducer} from 'react'
import {useParams} from "react-router-dom";
import {articlesAPI} from "../../api/api";
import {articlePageReducer, initialState} from "./ArticlePageReducer";
import {setArticleActionCreator, setFollowingActionCreator} from "./ArticlePageAction";
import {ArticlePageRoot} from "./ArticlePageStyles";
import ArticleHeader from "./ArticleHeader/ArticleHeader";
import {convertDate} from "../../lib/convertDate";
import ArticleBody from "./ArticleBody/ArticleBody";
import {ISetArticle, ISetFollowing} from "./ArticlePageTypes";

const ArticlePage = () => {

    const {slug} = useParams();

    const [state, dispatch] = useReducer(articlePageReducer, initialState)

    const setArticle: ISetArticle = article => dispatch(setArticleActionCreator(article))
    const setFollowing: ISetFollowing = following => dispatch(setFollowingActionCreator(following))

    console.log(state)

    useEffect(() => {
        articlesAPI.getArticle(slug)
            .then(res => dispatch(setArticleActionCreator(res.data.article)))
            .catch(err => console.log(err))
    }, [slug])

    return (
        <ArticlePageRoot>
            <ArticleHeader
                title={state.title}
                author={state.author}
                createdAt={convertDate(state.createdAt)}
                favorited={state.favorited}
                favoritesCount={state.favoritesCount}
                setArticle={setArticle}
                setFollowing={setFollowing}
                slug={slug}
            />
            <ArticleBody body={state.body}/>
        </ArticlePageRoot>
    )
}

export default ArticlePage
