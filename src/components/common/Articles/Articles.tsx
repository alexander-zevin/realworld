import React, {FC} from 'react'
import TabsHome from "./TabsHome/TabsHome";
import {ArticlesRoot} from "./ArticlesStyles";
import ArticleList from "./ArticleList/ArticleList";
import {Switch, Route} from "react-router-dom";
import TabsProfile from "./TabsProfile/TabsProfile";
import Pagination from "./Pagination/Pagination";
import {ArticlesProps} from "./ArticlesTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const Articles: FC<ArticlesProps> = ({articlesState, profileState}) => {

    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    return (
        <ArticlesRoot>
            <Switch>
                <Route path="/profiles" component={() => <TabsProfile articlesState={articlesState} isAuth={isAuth}/>}/>
                <Route path="/" component={() => <TabsHome articlesState={articlesState} isAuth={isAuth}/>} />
            </Switch>
            <ArticleList articlesState={articlesState} />
            <Pagination
                articlesCount={articlesState.articlesCount}
                activeTab={articlesState.activeTab}
                profileState={profileState}
                tagName={articlesState.tagName}
                limit={articlesState.limit}
                offset={articlesState.offset}
            />
        </ArticlesRoot>
    )
}

export default Articles
