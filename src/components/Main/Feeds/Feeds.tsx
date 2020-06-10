import React from 'react'
import TabFeeds from "./TabFeeds/TabFeeds";
import {FeedsRoot} from "./FeedsStyles";
import Feed from "./Feed/Feed";
import {IGetArticles} from "./FeedsTypes";
import {articlesAPI} from "../../../api/api";

const Feeds = () => {

    const getArticles: IGetArticles = async () => {
        const response = await articlesAPI.getArticles();
        console.log(response.data)
    }
    getArticles()

    return (
        <FeedsRoot>
            <TabFeeds/>
            <Feed/>
        </FeedsRoot>
    )
}

export default Feeds
