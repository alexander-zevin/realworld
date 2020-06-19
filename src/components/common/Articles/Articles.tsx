import React from 'react'
import TabArticles from "./TabArticles/TabArticles";
import {ArticlesRoot} from "./ArticlesStyles";
import ArticleList from "./ArticleList/ArticleList";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import Progress from "../Progress";
import {ArticlesState} from "../../../store/types/articlesType";

const Articles = () => {

    const articlesState: ArticlesState = useSelector((state: RootState) => state.articles);

    return (
        <ArticlesRoot>
            <TabArticles/>
            { articlesState.isProgress ? <Progress/> : <ArticleList articlesState={articlesState} /> }
        </ArticlesRoot>
    )
}

export default Articles
