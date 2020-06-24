import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {useDispatch, useSelector} from "react-redux";
import {
    setActiveTab,
    getMyArticles,
    getFavoritedArticles,
    getGlobalArticlesByTag
} from "../../../../store/actions/articlesActions";
import {RootState} from "../../../../store/store";
import {useHistory} from "react-router-dom";
import {ArticlesState} from "../../../../store/types/articlesType";

const TabsProfile = () => {

    const dispatch = useDispatch()

    const history = useHistory();

    const articlesState: ArticlesState = useSelector((state: RootState) => state.articles);
    const username: string = useSelector((state: RootState) => state.profile.user.username);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => dispatch(setActiveTab(newValue))

    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    const getMyPosts = () => {
        if (isAuth) {
            dispatch(getMyArticles(username, articlesState.offset, articlesState.limit))
        } else {
            history.push('/signin')
        }
    }

    const getFavoritedPosts = () => {
        dispatch(getFavoritedArticles(username, articlesState.offset, articlesState.limit))
    }

    return (
        <>
            <Tabs
                value={articlesState.activeTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="My posts" onClick={getMyPosts}/>
                <Tab label="Favorited posts" onClick={getFavoritedPosts}/>
            </Tabs>
            <Divider/>
        </>
    )
}

export default TabsProfile
