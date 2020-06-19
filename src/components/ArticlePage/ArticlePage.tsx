import React, {useEffect, useReducer} from 'react'
import {useParams} from "react-router-dom";
import {articlesAPI} from "../../api/api";
import {articlePageReducer, initialState} from "./ArticlePageReducer";
import {setArticle, setFollowing} from "./ArticlePageAction";
import {ArticlePageRoot} from "./ArticlePageStyles";
import ArticleHeader from "./ArticleHeader/ArticleHeader";
import {convertDate} from "../../lib/convertDate";
import ArticleBody from "./ArticleBody/ArticleBody";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

const ArticlePage = () => {

    const {slug} = useParams();

    const [state, dispatch] = useReducer(articlePageReducer, initialState)

    console.log(state)

    useEffect(() => {
        articlesAPI.getArticle(slug)
            .then(res => dispatch(setArticle(res.data.article)))
            .catch(err => console.log(err))
    }, [slug])

    return (
        <>
            <Header/>
            <ArticlePageRoot>
                <ArticleHeader
                    title={state.title}
                    author={state.author}
                    createdAt={convertDate(state.createdAt)}
                    favorited={state.favorited}
                    favoritesCount={state.favoritesCount}
                    slug={slug}
                    dispatch={dispatch}
                />
                <ArticleBody body={state.body}/>
            </ArticlePageRoot>
            <Footer/>
        </>
    )
}

export default ArticlePage
