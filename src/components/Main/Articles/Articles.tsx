import React from 'react'
import TabArticles from "./TabArticles/TabArticles";
import {ArticlesRoot} from "./ArticlesStyles";
import ArticleList from "./ArticleList/ArticleList";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../store/store";
import Progress from "../../common/Progress";
import {IArticlesState} from "../../../store/types/articlesType";

const Articles = () => {

    const articlesState: IArticlesState = useSelector((state: RootStateType) => state.articles);

    return (
        <ArticlesRoot>
            <TabArticles/>
            { articlesState.isProgress ? <Progress/> : <ArticleList articlesState={articlesState} /> }
        </ArticlesRoot>
    )
}

export default Articles
