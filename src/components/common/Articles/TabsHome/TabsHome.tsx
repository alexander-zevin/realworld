import React, {FC} from 'react'
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {useDispatch} from "react-redux";
import {
    getGlobalArticles,
    getGlobalArticlesByTag,
    getFeedArticles,
    setActiveTab
} from "../../../../store/actions/articlesActions";
import {useHistory} from "react-router-dom";
import {TabsHomeProps} from "./TabsHomeTypes";

const TabsHome: FC<TabsHomeProps> = ({articlesState, isAuth}) => {

    const dispatch = useDispatch()

    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => dispatch(setActiveTab(newValue))

    const getGlobalFeed = () => dispatch(getGlobalArticles(articlesState.offset, articlesState.limit))

    const getYourFeed = () => {
        if (isAuth) {
            dispatch(getFeedArticles(articlesState.offset, articlesState.limit))
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
                        onClick={() => dispatch(getGlobalArticlesByTag(articlesState.tagName, articlesState.offset, articlesState.limit))}
                    />
                }
            </Tabs>
            <Divider/>
        </>
    )
}

export default TabsHome
