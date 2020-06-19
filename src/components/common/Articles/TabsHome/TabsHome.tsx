import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {useDispatch, useSelector} from "react-redux";
import {
    getGlobalArticles,
    getGlobalArticlesByTag,
    getFeedArticles,
    setActiveTab
} from "../../../../store/actions/articlesActions";
import {RootState} from "../../../../store/store";
import {useHistory, Route} from "react-router-dom";
import {ArticlesState} from "../../../../store/types/articlesType";

const TabsHome = () => {

    const dispatch = useDispatch()

    const history = useHistory();

    const articlesState: ArticlesState = useSelector((state: RootState) => state.articles);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => dispatch(setActiveTab(newValue))

    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    const getGlobalFeed = () => dispatch(getGlobalArticles())

    const getYourFeed = () => {
        if (isAuth) {
            dispatch(getFeedArticles())
        } else {
            history.push('/signin')
        }
    }

    return (
        <>
            <Tabs
                value={articlesState.activeTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="Your Feed" onClick={getYourFeed}/>
                <Tab label="Global Feed" onClick={getGlobalFeed}/>

                {articlesState.tabTags &&
                <Tab
                    label={`#${articlesState.tagName}`}
                    onClick={() => dispatch(getGlobalArticlesByTag(articlesState.tagName))}
                />
                }
            </Tabs>
            <Divider/>
        </>
    )
}

export default TabsHome
