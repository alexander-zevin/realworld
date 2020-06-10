import React from 'react'
import TabFeeds from "./TabArticles/TabArticles";
import {ArticlesRoot} from "./ArticlesStyles";
import Article from "./Article/Article";
import {IGetArticles} from "./ArticlesTypes";
import {articlesAPI} from "../../../api/api";

const Articles = () => {

    const getArticles: IGetArticles = async () => {
        const response = await articlesAPI.getArticles();
        console.log(response.data)
    }
    getArticles()

    return (
        <ArticlesRoot>
            <TabFeeds/>
            <Article/>
        </ArticlesRoot>
    )
}

export default Articles
