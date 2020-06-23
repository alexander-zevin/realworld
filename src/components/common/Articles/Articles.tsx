import React from 'react'
import TabsHome from "./TabsHome/TabsHome";
import {ArticlesRoot} from "./ArticlesStyles";
import ArticleList from "./ArticleList/ArticleList";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {ArticlesState} from "../../../store/types/articlesType";
import {Switch, Route} from "react-router-dom";
import TabsProfile from "./TabsProfile/TabsProfile";
import PaginationHome from "./Pagination/Pagination";
import PaginationProfile from "./Pagination/PaginationProfile";
import Pagination from "./Pagination/Pagination";

const Articles = () => {

    const articlesState: ArticlesState = useSelector((state: RootState) => state.articles);

    return (
        <ArticlesRoot>
            <Switch>
                <Route path="/profiles" component={TabsProfile}/>
                <Route path="/" component={TabsHome}/>
            </Switch>
            <ArticleList articlesState={articlesState} />
            <Pagination articlesCount={articlesState.articlesCount}/>
        </ArticlesRoot>
    )
}

export default Articles
