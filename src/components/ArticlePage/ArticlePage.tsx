import React, {useEffect, useReducer, useState} from 'react'
import {useParams} from "react-router-dom";
import {articlesAPI} from "../../api/api";
import {articlePageReducer, initialState} from "./ArticlePageReducer";
import {setArticleActionCreator} from "./ArticlePageAction";
import {ArticlePageRoot} from "./ArticlePageStyles";
import ArticleHeader from "./ArticleHeader/ArticleHeader";

const ArticlePage = () => {

		const {slug} = useParams();

		const [state, dispatch] = useReducer(articlePageReducer, initialState)

		useEffect(() => {
				articlesAPI.getArticle(slug)
						.then(res => dispatch(setArticleActionCreator(res.data.article)))
						.catch(err => console.log(err))
		}, [slug])

		return (
				<ArticlePageRoot>
						<ArticleHeader/>
				</ArticlePageRoot>
		)
}

export default ArticlePage
