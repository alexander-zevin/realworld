import React, {useEffect} from 'react'
import TabFeeds from "./TabArticles/TabArticles";
import {ArticlesRoot} from "./ArticlesStyles";
import ArticleList from "./ArticleList/ArticleList";
import {getArticlesThunkCreator} from "../../../store/actions/appActions";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../store/store";
import {IArticlesState} from "../../../store/types/articlesType";

const Articles = () => {

    const dispatch = useDispatch()

    const articlesState: IArticlesState = useSelector((state: RootStateType) => state.articles);

    useEffect(() => {
        dispatch(getArticlesThunkCreator())
    }, [])

    return (
        <ArticlesRoot>
            <TabFeeds />
            <ArticleList articlesState={articlesState}/>
        </ArticlesRoot>
    )
}

export default Articles
